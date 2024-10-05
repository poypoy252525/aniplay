"use client";
import { IAnimeResult } from "@consumet/extensions";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CarouselItem from "./CarouselItem";

interface Props {
  trendings: IAnimeResult[];
}

const Carousel = ({ trendings }: Props) => {
  return (
    <Swiper
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      loop
      modules={[Autoplay]}
    >
      {trendings.map((trending, index) => (
        <SwiperSlide key={trending.id}>
          <CarouselItem trending={trending} index={index + 1} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
