import { IAnimeInfo } from "@consumet/extensions";
import React from "react";
import AnimeList from "../AnimeList";

const Relations = ({ anime }: { anime: IAnimeInfo }) => {
  return <AnimeList animeList={anime.relations!} title="Chronology" />;
};

export default Relations;
