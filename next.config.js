const nextTranslate = require("next-translate");
// const { nextI18NextRewrites } = require("next-i18next/rewrites");
const { i18n } = require("./next-i18next.config");

const localeSubpaths = { en: "en", es: "es" };
module.exports = {
  //? next translate
  // ...nextTranslate(),
  //?next-i18next
  i18n,
  publicRuntimeConfig: {
    localeSubpaths,
  },
  localeSubpaths: {
    es: "es",
    en: "en",
  },

  // async rewrites() {
  //   return [...nextI18NextRewrites(localeSubpaths)];
  // },
};
