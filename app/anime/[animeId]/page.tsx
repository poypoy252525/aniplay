import { anilist, fetchAnimeInfo, gogoanime, zoro } from "@/api/api";
import AnimeInfoTab from "@/app/components/AnimeInfoTab/AnimeInfoTab";
import AnimeList from "@/app/components/AnimeList";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ANIME, ITitle, MediaStatus } from "@consumet/extensions";
import { Play, Star } from "lucide-react";
import Image from "next/image";

interface Props {
  params: { animeId: string };
}

const statusStyle = (mediaStatus: MediaStatus | undefined): string => {
  let status = "";
  switch (mediaStatus) {
    case MediaStatus.ONGOING:
      status = "text-green-600";
      break;
    case MediaStatus.COMPLETED:
      status = "text-muted-foreground";
      break;
  }
  return status;
};

const AnimeInfoPage = async ({ params }: Props) => {
  const anime = await fetchAnimeInfo(params.animeId);
  const title = anime.title as ITitle;

  return (
    <div>
      <div className="relative flex">
        <Image
          alt="cover"
          src={anime.cover || ""}
          width={600}
          height={300}
          className="w-full h-[320px] object-cover"
        />
        <div className="absolute bottom-0 left-0 h-full w-full bg-gradient-to-t dark:from-black from-white" />
        <Image
          alt="thumbnail"
          src={anime.image || ""}
          width={100}
          height={200}
          className="absolute inset-0 mx-auto mt-auto rounded-2xl h-[220px] w-[150px] object-cover"
        />
      </div>
      <div className="space-y-8">
        <div className="flex flex-col items-center py-4">
          <span className="text-lg font-bold w-[90%] text-center">
            {title.english ||
              title.userPreferred ||
              title.romaji ||
              title.native}
          </span>
          <div className="flex h-4 space-x-2 items-center">
            <span className="flex items-center text-sm text-muted-foreground">
              <Star className="w-3 h-3" />
              {anime.rating}
            </span>
            <Separator orientation="vertical" />
            <span className={`text-sm ${statusStyle(anime.status)}`}>
              {anime.status}
            </span>
          </div>
          <div className="flex space-x-2 mt-4">
            <Button>
              <Play className="w-4 h-4 mr-2" />
              Play now
            </Button>
            <Button>Add to list</Button>
          </div>
        </div>
        <div className="px-2">
          <AnimeInfoTab anime={anime} />
        </div>
        {anime.recommendations?.length !== 0 && (
          <div>
            <AnimeList
              animeList={anime.recommendations || []}
              title="Recommendations"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AnimeInfoPage;
