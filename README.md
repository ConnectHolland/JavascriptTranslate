# Translate

Translate is a package that makes looking up translations easy.

```javascript
Translate.addLanguage('nl_NL', {
    OK: 'Akkoord'
});
Translate.setLanguage('nl_NL');
console.log(Translate.lookup('OK') ); // Akkoord
```