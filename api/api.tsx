import {
  ANIME,
  IAnimeInfo,
  IAnimeResult,
  ISearch,
  META,
} from "@consumet/extensions";
import axios from "axios";

export const anilist = new META.Anilist();
export const gogoanime = new ANIME.Gogoanime();
export const zoro = new ANIME.Zoro();

const baseURL = "https://consumet-api-kappa-six.vercel.app";

export const fetchAnimeInfo = async (id: string): Promise<IAnimeInfo> => {
  const result = await axios.get<IAnimeInfo>(
    `${baseURL}/meta/anilist/info/${id}`
  );
  return result.data;
};

export const fetchTrendingAnime = async (
  page?: number,
  perPage?: number
): Promise<ISearch<IAnimeResult>> => {
  const result = await axios.get<ISearch<IAnimeResult>>(
    `${baseURL}/meta/anilist/trending`,
    {
      params: {
        page,
        perPage,
      },
    }
  );

  return result.data;
};

export const fetchPopularAnime = async (
  page?: number,
  perPage?: number
): Promise<ISearch<IAnimeResult>> => {
  const result = await axios.get<Promise<ISearch<IAnimeResult>>>(
    `${baseURL}/meta/anilist/popular`,
    {
      params: { page, perPage },
    }
  );

  return result.data;
};

export const fetchAiringSchedule = async (
  page?: number,
  perPage?: number,
  weekStart?: string,
  weekEnd?: string,
  notYetAired?: boolean
): Promise<ISearch<IAnimeResult>> => {
  const result = await axios.get<Promise<ISearch<IAnimeResult>>>(
    `${baseURL}/meta/anilist/airing-schedule`,
    {
      params: { page, perPage, weekStart, weekEnd, notYetAired },
    }
  );

  return result.data;
};
