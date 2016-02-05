# Translate

Translate is a package that makes looking up translations easy.

```javascript
Translate.addLanguage('nl_NL', {
    OK: 'Akkoord'
});
Translate.addLanguages({
    OK: {
        'en_US': 'Ok',
        'nl_NL': 'Akkoord ermee',
    }
}, 'mydomain');

console.log(Translate.lookup('OK', 'mydomain') ); // Ok

Translate.setLanguage('nl_NL');
console.log(Translate.lookup('OK') ); // Akkoord
console.log(Translate.lookup('OK', 'mydomain') ); // Akkoord ermee
```