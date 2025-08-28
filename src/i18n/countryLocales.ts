export const countryLocales = {
  'base': "en",
  'us': "en",
  'cn': 'zh',
  'jp': 'ja',
  'kr': 'ko',
  'th': "th",
  'uk': "en",
  'de': "de",
  'de-en': "en",
  'fr': "fr",
  'fr-en': "en",
  'it': "it",
  'it-en': "en",
  'cz-en':'en',
  'nl-en':'en',
  'es-en':"en",
} as const;

export type CountryCode = keyof typeof countryLocales;