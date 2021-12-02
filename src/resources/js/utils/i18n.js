import Vue from "vue";
import VueI18n from "vue-i18n";
Vue.use(VueI18n);

function loadLocaleMessages() {
    const locales = require.context(
        "../locales",
        true,
        /[A-Za-z0-9-_,\s]+\.json$/i
    );
    const messages = {};
    locales.keys().forEach(key => {
        const matched = key.match(/([A-Za-z0-9-_]+)\./i);
        if (matched && matched.length > 1) {
            const locale = matched[1];
            messages[locale] = locales(key);
        }
    });
    return messages;
}
function checkDefaultLanguage() {
    let matched = null;
    let languages = Object.getOwnPropertyNames(loadLocaleMessages());
    languages.forEach(lang => {
        if (lang === navigator.language) {
            matched = lang;
        }
    });
    if (!matched) {
        languages.forEach(lang => {
            let languagePartials = navigator.language.split("-")[0];
            if (lang === languagePartials) {
                matched = lang;
            }
        });
    }
    return matched;
}
export const selectedLocale = localStorage.getItem('locale')
    || checkDefaultLanguage()
    || "ru";
export const languages = Object.getOwnPropertyNames(loadLocaleMessages());
export default new VueI18n({
    locale: selectedLocale || "ru",
    globalInjection: true,
    fallbackLocale: "ru",
    messages: loadLocaleMessages()
});