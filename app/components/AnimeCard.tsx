import { Card } from "@/components/ui/card";
import { IAnimeInfo, IAnimeResult, ITitle } from "@consumet/extensions";
import Image from "next/image";

const AnimeCard = ({ anime }: { anime: IAnimeResult | IAnimeInfo }) => {
  return (
    <Card className="relative w-full h-full overflow-hidden border-0 group">
      <Image
        width={100}
        height={100}
        className="w-full h-full object-cover group-hover:scale-105 transition"
        src={anime.image || ""}
        alt="thumbnail"
      />
      <div className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 w-full h-full bg-gradient-to-t from-black/75 transition flex flex-col-reverse">
        <div className="flex text-nowrap text-sm font-semibold">
          <p>{anime.type}</p> | <p>{anime.status}</p> |{" "}
          <p>{`Ep: ${anime.totalEpisodes}`}</p>
        </div>
        <p>{(anime.title as ITitle).english}</p>
      </div>
    </Card>
  );
};

export default AnimeCard;
