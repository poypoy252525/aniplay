"use client";
import { IAnimeInfo } from "@consumet/extensions";
import Image from "next/image";
import React, { useState } from "react";

interface Props {
  anime: IAnimeInfo;
}

const Characters = ({ anime }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  console.log(anime.characters[0]);
  return (
    <div className="w-full">
      <span className="text-xl font-bold">Characters</span>
      <div className="flex w-full overflow-auto space-x-3 no-scrollbar">
        {anime.characters.map((character: any, index: number) => (
          <div
            className="relative flex-shrink-0 rounded-xl overflow-hidden"
            key={index}
            onMouseEnter={() => setSelectedIndex(index)}
            onMouseLeave={() => setSelectedIndex(-1)}
          >
            <Image
              alt="character info"
              src={
                selectedIndex === index
                  ? character.voiceActors[0].image || ""
                  : character.image
              }
              width={200}
              height={200}
              className={`w-[110px] h-[170px] transition-all duration-200 opacity-100`}
            />

            <div className="absolute bottom-0 left-0 w-full h-[80%] bg-gradient-to-t dark:from-black/90" />
            <div className="absolute bottom-0 left-0 flex flex-col ps-2 pb-2">
              <span className="text-sm font-semibold">
                {selectedIndex === index
                  ? character.voiceActors[0].name.full
                  : character.name.full}
              </span>
              <span className="text-xs font-semibold text-muted-foreground">
                {character.role}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;
