import lang_cn from './lang_cn';
import lang_en from './lang_en';
import lang_fr from './lang_fr';
import lang_jp from './lang_jp';
import lang_ru from './lang_ru';

export default {
    cn: lang_cn,
    en: lang_en,
    fr: lang_fr,
    jp: lang_jp,
    ru: lang_ru,
    getText: function(language, textID) {
        let langObj = {};
        if (language === 'cn')
            langObj = lang_cn;
        else if (language === 'fr')
            langObj = lang_fr;
        else if (language === 'jp')
            langObj = lang_jp;
        else if (language === 'ru')
            langObj = lang_ru;
        else
            langObj = lang_en;

        if (textID in langObj)
            return langObj[textID];

        return textID;
    }
}