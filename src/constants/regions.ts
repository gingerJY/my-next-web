// 切换国家语言 UI 用
export const regionsData = {
  Europe: [
    {
      region: 'uk',
      regionText: 'United Kingdom',
      lang: 'en',
      langText: 'English'
    },
    {
      region: 'de',
      regionText: 'Deutschland',
      lang: 'de',
      langText: 'Deutsch'
    },
    { region: 'de-en', regionText: 'Germany', lang: 'en', langText: 'English' },
    { region: 'fr', regionText: 'France', lang: 'fr', langText: 'Français' },
    { region: 'fr-en', regionText: 'France', lang: 'en', langText: 'English' },
    { region: 'it', regionText: 'Italia', lang: 'it', langText: 'Italiano' },
    { region: 'it-en', regionText: 'Italy', lang: 'en', langText: 'English' },
    { region: 'cz-en', regionText: 'Czechia', lang: 'cz', langText: 'English' },
    {
      region: 'nl-en',
      regionText: 'Netherlands',
      lang: 'nl',
      langText: 'English'
    },
    { region: 'es-en', regionText: 'Spain', lang: 'es', langText: 'English' }
  ],
  Asia: [
    { region: 'cn', regionText: '中国', lang: 'zh', langText: '简体中文' },
    { region: 'jp', regionText: '日本', lang: 'ja', langText: '日本語' },
    { region: 'kr', regionText: '대한민국', lang: 'ko', langText: '한국어' },
    { region: 'th', regionText: 'ประเทศไทย', lang: 'th', langText: 'ภาษาไทย' }
  ],
  'North America': [
    {
      region: 'us',
      regionText: 'United States',
      lang: 'en',
      langText: 'English'
    }
  ],
  Global: [
    { region: 'global', regionText: 'Global', lang: 'en', langText: 'English' }
  ]
};

// 国际化逻辑用
export const countryLocales = {
  en: 'en',
  us: 'en',
  cn: 'zh',
  jp: 'ja',
  kr: 'ko',
  th: 'th',
  uk: 'en',
  de: 'de',
  'de-en': 'en',
  fr: 'fr',
  'fr-en': 'en',
  it: 'it',
  'it-en': 'en',
  'cz-en': 'en',
  'nl-en': 'en',
  'es-en': 'en'
} as const;

export type CountryCode = keyof typeof countryLocales;
export type LocaleCode = (typeof countryLocales)[CountryCode];
