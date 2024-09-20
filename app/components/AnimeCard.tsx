import { AspectRatio } from "@/components/ui/aspect-ratio";
import { IAnimeResult, ITitle } from "@consumet/extensions";
import Image from "next/image";
import React from "react";

interface Props {
  anime: IAnimeResult;
}

const AnimeCard = ({ anime }: Props) => {
  return (
    <div className="w-28">
      <AspectRatio ratio={9 / 12.5}>
        <Image
          src={anime.image || ""}
          alt="thumbnail"
          width={300}
          height={400}
          className="w-full h-full rounded-xl mb-1 object-cover"
        />
      </AspectRatio>
      <span className="text-center line-clamp-2 text-xs w-[90%]">
        {(anime.title as ITitle).english || anime.title.toString()}
      </span>
    </div>
  );
};

export default AnimeCard;
