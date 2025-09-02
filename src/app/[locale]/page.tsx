import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { Locale } from 'next-intl';
import BannerCarousel from "@/components/home/BannerCarousel";
import RegionLangSwitcher from '@/components/common/RegionLangSwitcher';
async function getBanners() {
  const res = await fetch(
    "http://localhost:1337/api/index-banners?populate=*",
    { next: { revalidate: 10 } }
  );
  const data = await res.json();
  return data.data.map((item: any) => ({
    id: item.id,
    title: item.title,
    link: item.link,
    image: item.image
  }));
}

export default async function Home({ params }: PageProps<'/[locale]'>) {
  const { locale } = await params;
  // Enable static rendering
  setRequestLocale(locale as Locale);

  const t = await getTranslations('HomePage');
  const banners = await getBanners();
  console.log(banners)
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-5">{t('title')}</h1>
      <BannerCarousel banners={banners} />
      <Link href="/aura">aura</Link>
      <RegionLangSwitcher />
    </main>
  );
}
