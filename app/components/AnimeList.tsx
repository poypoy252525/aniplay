"use client";

import { IAnimeResult, ITitle } from "@consumet/extensions";
import React from "react";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import AnimeCard from "./AnimeCard";
import "swiper/css";

interface Props {
  animeList: IAnimeResult[];
  title: string;
}

const AnimeList = ({ animeList, title }: Props) => {
  return (
    <div>
      <div className="flex items-center ms-2 mb-2">
        <div className="h-[1.55rem] w-[6px] bg-white rounded-xl mr-2" />
        <span className="text-xl font-semibold">{title}</span>
      </div>
      <Swiper
        slidesPerView="auto"
        spaceBetween={12}
        freeMode
        modules={[FreeMode]}
        style={{ paddingLeft: "0.5rem" }}
      >
        {animeList.map((anime) => (
          <SwiperSlide key={anime.id} style={{ width: "auto" }}>
            <AnimeCard anime={anime} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AnimeList;
