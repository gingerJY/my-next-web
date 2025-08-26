import BannerCarousel from "@/components/home/BannerCarousel";
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

export default async function Home() {
  const banners = await getBanners();
  console.log(banners)
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-5">首页 Banner{banners[0].title}</h1>
      <BannerCarousel banners={banners} />
    </main>
  );
}
