"use client";

import { IAnimeResult } from "@consumet/extensions";
import "swiper/css";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import AnimeCard from "./AnimeCard";

interface Props {
  animeList: IAnimeResult[];
  title: string;
}

const AnimeList = ({ animeList, title }: Props) => {
  return (
    <div>
      <div className="flex items-center mx-2 mb-2">
        <div className="h-[1.55rem] w-[6px] bg-white rounded-xl mr-2" />
        <span className="text-xl font-semibold">{title}</span>
      </div>
      <div className="flex overflow-auto no-scrollbar">
        {animeList.map((anime) => (
          <div key={anime.id}>
            <div className="mx-2">
              <AnimeCard anime={anime} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimeList;
