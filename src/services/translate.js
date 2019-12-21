const apiKey = process.env.REACT_APP_GOOGLE_TRANSLATE_API_KEY;

export const googleTranslate = require('google-translate')(apiKey);

export const translate = (text, lang) =>
  googleTranslate.translate('Hello', 'de', function(err, translation) {
    return translation;
  });
