import { AspectRatio } from "@/components/ui/aspect-ratio";
import { IAnimeResult, ITitle } from "@consumet/extensions";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  anime: IAnimeResult;
}

const AnimeCard = ({ anime }: Props) => {
  const router = useRouter();
  return (
    <div
      className="flex flex-col items-center w-28 relative rounded-xl overflow-hidden"
      onClick={() => router.push(`/anime/${anime.id}`)}
    >
      <AspectRatio ratio={9 / 12.5}>
        <Image
          src={anime.image || ""}
          alt="thumbnail"
          width={100}
          height={100}
          className="w-full h-full rounded-xl mb-1 object-cover"
        />
      </AspectRatio>
      <span className="text-center text-muted-foreground font-semibold line-clamp-2 text-xs w-[90%]">
        {(anime.title as ITitle).english ||
          (anime.title as ITitle).userPreferred}
      </span>
      {anime.relationType && (
        <div className="absolute top-0 right-0 bg-black/50 rounded-md px-1">
          <span className="text-xs">{anime.relationType}</span>
        </div>
      )}
    </div>
  );
};

export default AnimeCard;
