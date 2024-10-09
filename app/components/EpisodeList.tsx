"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { IAnimeEpisode, IAnimeInfo } from "@consumet/extensions";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Props {
  anime: IAnimeInfo;
}

const EpisodeList = ({ anime }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [episodes, setEpisodes] = useState<IAnimeEpisode[]>();

  useEffect(() => {
    const fetchEpisodeList = async () => {
      setLoading(true);
      try {
        const { data: episodes } = await axios.get<IAnimeEpisode[]>(
          `/api/anime/${anime.id}/episodes`
        );
        if (!episodes) {
          console.log(episodes);
          setEpisodes([]);
          return;
        }
        setEpisodes(episodes);
      } catch (error) {
        throw error;
      } finally {
        setLoading(false);
      }
    };
    fetchEpisodeList();
  }, [anime.id]);

  return (
    <div style={{ userSelect: "none" }}>
      <div className="flex items-center mx-2 mb-2">
        <div className="h-[1.55rem] w-[6px] bg-white rounded-xl mr-2" />
        <span className="text-xl font-semibold">Episodes</span>
      </div>
      <div className="space-y-3 px-1 max-h-[500px] overflow-auto no-scrollbar">
        {isLoading ? (
          <div className="space-y-3">
            <Skeleton className="h-[80px] w-full rounded-lg" />
            <Skeleton className="h-[80px] w-full rounded-lg" />
          </div>
        ) : episodes?.length ? (
          episodes?.map(
            (episode, index: number) =>
              episode.url && (
                <div
                  key={index}
                  className={`flex h-[80px] gap-2 overflow-hidden rounded-lg bg-accent transition-all duration-200 ${
                    selectedIndex === index && "scale-[0.97]"
                  }`}
                  onMouseEnter={() => setSelectedIndex(index)}
                  onMouseLeave={() => setSelectedIndex(-1)}
                >
                  <div className="w-[125px] rounded-lg overflow-hidden relative">
                    <Image
                      alt={episode.title || episode.id}
                      src={episode.image || anime?.cover || ""}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-1 left-1 text-xs font-medium bg-background/60 p-1 rounded-md">{`Ep ${episode.number}`}</span>
                  </div>
                  <div className="flex-1 flex flex-col justify-center space-y-1 h-full px-2">
                    <span className="text-sm tracking-tight leading-none font-medium line-clamp-1">
                      {`${episode.number}. ${
                        episode.title || "Episode " + episode.number
                      }`}
                    </span>
                    {episode.description && (
                      <span className="text-xs tracking-tight text-muted-foreground line-clamp-2">
                        {`${episode.description}`}
                      </span>
                    )}
                  </div>
                </div>
              )
          )
        ) : (
          <div className="flex justify-center items-center w-full h-[80px]">
            No episodes found.
          </div>
        )}
      </div>
    </div>
  );
};

export default EpisodeList;
