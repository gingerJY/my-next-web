import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';
import { countryLocales } from '@/constants/regions';

export default getRequestConfig(async ({ requestLocale }) => {
  // Typically corresponds to the `[locale]` segment
  const requested = await requestLocale;
  const country = hasLocale(Object.keys(countryLocales), requested)
    ? requested
    : routing.defaultLocale;

  const language = countryLocales[country as keyof typeof countryLocales];

  return {
    locale: country,
    messages: (await import(`../../messages/${language}.json`)).default
  };
});
