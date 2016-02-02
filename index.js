/**
 * Object to hold translations and perform translations
 */
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
