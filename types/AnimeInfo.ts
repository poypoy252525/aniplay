import { IAnimeInfo } from "@consumet/extensions";
import { Character } from "./Character";

export interface AnimeInfo extends IAnimeInfo {
  characters: Character[];
}
