var i18n = require("i18n");
module.exports = {
    i18nConfig: {
        locales: ['en', 'ar', 'hi'],
        defaultLocale: 'en',
        queryParameter: 'lang',
        directory: LANG_PATH,
        cookie: 'lang',
        register: global,
        updateFiles: false,
        syncFiles: true
    },
    i18nInit: (req, res, next) => {
        let lng = req.headers['accept-language'] || 'en';
        setLocale(req, lng)
        res.__ = i18n.__;
        return next();
    }
}