import {defineRouting} from 'next-intl/routing';
import {countryLocales} from './countryLocales';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: Object.keys(countryLocales),
 
  // Used when no locale matches
  defaultLocale: 'us',
  // localePrefix: 'as-needed'
});