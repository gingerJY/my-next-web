"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import gsap from "gsap";
import "swiper/css";

type Banner = {
  id: number;
  title: string;
  link: string;
  image?: { url: string };
};

export default function BannerCarousel({ banners }: { banners: Banner[] }) {
  const slidesRef = useRef<HTMLDivElement[]>([]);

  // useEffect(() => {
  //   // 每次 slide 进入视口时做淡入动画
  //   slidesRef.current.forEach((el) => {
  //     if (el) {
  //       gsap.fromTo(
  //         el,
  //         { autoAlpha: 0, y: 50 },
  //         { autoAlpha: 1, y: 0, duration: 0.8, ease: "power2.out" }
  //       );
  //     }
  //   });
  // }, [banners]);

  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop
      className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg"
    >
      {banners.map((b, idx) => {
        const imgUrl = b.image?.url
          ? `http://localhost:1337${b.image.url}`
          : "/placeholder.png"; // 占位图
        return (
          <SwiperSlide key={b.id}>
            <div
              ref={(el) => {
                if (el) slidesRef.current[idx] = el;
              }}
              className="relative w-full h-full"
            >
              <Image
                src={imgUrl}
                alt={b.title}
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL="/placeholder-blur.png" // 占位图（低清）
                priority={idx === 0} // 首屏优先加载
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
                <h2 className="text-3xl font-bold mb-2">{b.title}</h2>
                <a className="px-4 py-2 bg-white text-black rounded-md" href={b.link}>learn more</a>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
