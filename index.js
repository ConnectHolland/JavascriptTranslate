/**
 * Object to hold translations and perform translations
 */
if(typeof(Translate)=="undefined"){
    var Translate = {
        /**
         * The loaded translations
         *
         * @type Object
         */
        _translations: {
        },

        /**
         * Fallback when language is unavailable
         *
         * @type String
         */
        _defaultLanguage: 'en_US',

        /**
         * The language selected
         *
         * @type String
         */
        _currentLanguage: 'en_US',

        /**
         * Select a language
         *
         * @param string language
         * @returns void
         */
        setLanguage: function(language) {
            Translate._currentLanguage = language;
        },

        /**
         * Select a language using the document element
         *
         * @returns void
         */
        setLanguageFromDocument: function() {
            var lang = document.documentElement.lang;
            switch (lang) {
                case 'en':
                    lang = 'en_US';
                    break;
                case 'nl':
                    lang = 'nl_NL';
                    break;
                case 'fr':
                    lang = 'fr_FR';
                    break;
            }

            return Translate.setLanguage(lang);
        },

        /**
         * Add a language specification
         *
         * @param string language
         * @param Object translations
         * @param string domain
         * @returns void
         */
        addLanguage: function(language, translations, domain) {
            var domain = domain || '__messages';

            if (typeof Translate._translations[language] === 'undefined') {
                Translate._translations[language] = {};
            }
            if (typeof Translate._translations[language][domain] === 'undefined') {
                Translate._translations[language][domain] = {};
            }

            Translate._translations[language][domain] = translations;
        },

        /**
         * Add multiple translations at once
         *
         * @param Object translations
         * @param string domain
         * @returns void
         */
        addLanguages: function(translations, domain) {
            var translationsPerLanguage = {};

            for (var lookupKey in translations) {
                for (var language in translations[lookupKey]) {
                    if (typeof translationsPerLanguage[language] == 'undefined') {
                        translationsPerLanguage[language] = {};
                    }
                    translationsPerLanguage[language][lookupKey] = translations[lookupKey][language];
                }
            }

            for (var language in translationsPerLanguage) {
                Translate.addLanguage(language, translationsPerLanguage[language], domain);
            }
        },

        /**
         * Lookup a translation
         *
         * @param string key
         * @param string domain
         * @returns String
         */
        lookup: function(key, domain) {
            var domain = domain || '__messages';

            var translations = Translate._translations[Translate._currentLanguage] || Translate._translations[Translate._defaultLanguage];

            if (typeof translations == 'undefined') {
                return domain + '_' + key;
            }
            else if (domain in translations === false) {
                return domain + '_' + key;
            }

            return translations[domain][key];
        }
    };
}

Translate.setLanguageFromDocument();