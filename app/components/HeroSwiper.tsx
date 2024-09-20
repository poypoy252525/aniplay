"use client";
import { IAnimeResult } from "@consumet/extensions";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Hero from "./Hero";

interface Props {
  trendings: IAnimeResult[];
}

const HeroSwiper = ({ trendings }: Props) => {
  return (
    <Swiper
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
    >
      {trendings.map((trending, index) => (
        <SwiperSlide key={trending.id}>
          <Hero trending={trending} index={index + 1} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSwiper;
