import { Button } from "@/components/ui/button";
import { IAnimeResult, ITitle, MediaStatus } from "@consumet/extensions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Play, Star } from "lucide-react";
import Image from "next/image";
import React from "react";

interface Props {
  trending: IAnimeResult;
  index: number;
}

const Hero = ({ trending, index }: Props) => {
  let color;
  switch (trending.status) {
    case MediaStatus.ONGOING:
      color = "text-green-500";
      break;
    case MediaStatus.NOT_YET_AIRED:
      color = "text-red";
      break;
    default:
      color = "text-white";
      break;
  }

  console.log(color);

  return (
    <div className="relative w-full h-[300px] ">
      <Image
        src={trending.cover || ""}
        alt="cover thumbnail"
        width={500}
        height={300}
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black" />
      <div className="absolute bottom-6 left-0 px-6 flex flex-col space-y-2">
        <p className="font-medium text-cyan-600">{`#${index} Trending`}</p>
        <p className="font-bold text-xl line-clamp-2">
          {(trending.title as ITitle).english ||
            (trending.title as ITitle).romaji}
        </p>
        <div className="flex items-center space-x-4 tracking-tight text-xs">
          {trending.rating && (
            <span className="flex items-center justify-center text-green-500">
              <Star className="w-3 h-3 mr-1" />
              {trending.rating}
            </span>
          )}
          <span>{trending.type}</span>
          <span className={`${color}`}>{trending.status?.toUpperCase()}</span>
          <span>{trending.releaseDate}</span>
        </div>
        <div>
          <Button className="rounded-full bg-cyan-600 text-white" size="sm">
            <Play className="w-4 h-4 mr-1" />
            Watch now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
