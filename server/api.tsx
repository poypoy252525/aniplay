// import { IDs } from "@/types/IDs";
// import { KitsuEpisode } from "@/types/KitsuEpisodes";
// import { TMDBAnimeInfo } from "@/types/TMDBAnimeInfo";
// import { formatDate } from "@/utils";
// import {
//   ANIME,
//   IAnimeEpisode,
//   IAnimeInfo,
//   IAnimeResult,
//   ISearch,
//   ITitle,
//   META,
// } from "@consumet/extensions";
// import axios from "axios";

import { ANIME, META } from "@consumet/extensions";

// export const anilist = new META.Anilist();
// export const gogoanime = new ANIME.Gogoanime();
// export const zoro = new ANIME.Zoro();

// const baseURL = "https://consumet-api-kappa-six.vercel.app";
// const tmdbBaseURL = "https://api.themoviedb.org/3";
// const tmdbKey = "5770a2d9bd946e5ed0ed9d6925e025c7";
// const kitsuBaseURL = "https://kitsu.io/api/edge";

// export const fetchAnimeInfo = async (id: string): Promise<IAnimeInfo> => {
//   try {
//     const result = await axios.get<IAnimeInfo>(
//       `${baseURL}/meta/anilist/info/${id}`
//     );
//     return result.data;
//   } catch (error: any) {
//     console.log(error);
//     throw new Error(error);
//   }
// };

// export const fetchTrendingAnime = async (
//   page?: number,
//   perPage?: number
// ): Promise<ISearch<IAnimeResult>> => {
//   const result = await axios.get<ISearch<IAnimeResult>>(
//     `${baseURL}/meta/anilist/trending`,
//     {
//       params: {
//         page,
//         perPage,
//       },
//     }
//   );

//   return result.data;
// };

// export const fetchPopularAnime = async (
//   page?: number,
//   perPage?: number
// ): Promise<ISearch<IAnimeResult>> => {
//   const result = await axios.get<Promise<ISearch<IAnimeResult>>>(
//     `${baseURL}/meta/anilist/popular`,
//     {
//       params: { page, perPage },
//     }
//   );

//   return result.data;
// };

// export const fetchAiringSchedule = async (
//   page?: number,
//   perPage?: number,
//   weekStart?: string,
//   weekEnd?: string,
//   notYetAired?: boolean
// ): Promise<ISearch<IAnimeResult>> => {
//   const result = await axios.get<Promise<ISearch<IAnimeResult>>>(
//     `${baseURL}/meta/anilist/airing-schedule`,
//     {
//       params: { page, perPage, weekStart, weekEnd, notYetAired },
//     }
//   );

//   return result.data;
// };

// export const advancedSearch = async (
//   query?: string,
//   type?: string,
//   page?: number,
//   perPage?: number,
//   season?: string,
//   sort?: string[],
//   format?: string,
//   genres?: string[],
//   id?: string,
//   year?: number,
//   status?: string
// ): Promise<ISearch<IAnimeResult>> => {
//   try {
//     const result = await axios.get(`${baseURL}/meta/anilist/advanced-search`, {
//       params: {
//         query,
//         ...(type && { type }),
//         ...(page && { page }),
//         ...(perPage && { perPage }),
//         ...(season && { season }),
//         ...(format && { format }),
//         ...(sort && { sort }),
//         ...(genres && { genres }),
//         ...(id && { id }),
//         ...(year && { year: year.toString() }),
//         ...(status && { status }),
//       },
//     });

//     return result.data;
//   } catch (error: any) {
//     console.log(error);
//     throw new Error(error);
//   }
// };

// export const fetchEpisodes = async (
//   anilistId: number,
//   provider: string = "gogoanime",
//   dub: string = "false"
// ): Promise<IAnimeEpisode[]> => {
//   try {
//     const result = await axios.get<IAnimeEpisode[]>(
//       `${baseURL}/meta/anilist/episodes/${anilistId}`,
//       {
//         params: {
//           provider,
//           dub,
//         },
//       }
//     );

//     return result.data;
//   } catch (error) {
//     throw error;
//   }
// };

// export const fetchKitsuInfo = async (anilistId: string) => {
//   // try {
//   //   const anilistInfo = await fetchAnimeInfo(anilistId);
//   //   const title = anilistInfo.title as ITitle;
//   //   const { startDate } = anilistInfo;

//   //   const url = `${kitsuBaseURL}/anime?filter[text]=${encodeURIComponent(
//   //     title.native || ""
//   //   )}`;

//   //   const { data: results } = await axios.get(url);

//   //   const mappedData = results.data.map((item: any) => ({
//   //     id: item.id,
//   //     startDate: item.attributes.startDate,
//   //     episodeCount: item.attributes.episodeCount,
//   //     showType: item.attributes.showType,
//   //     ja_jp: item.attributes.titles.ja_jp && item.attributes.titles.ja_jp,
//   //   })) as Array<{
//   //     id: string;
//   //     startDate: string;
//   //     episodeCount: number;
//   //     showType: string;
//   //     ja_jp: string;
//   //   }>;

//   //   const formattedAnimeInfoAiredDate = formatDate(
//   //     startDate?.day,
//   //     startDate?.month,
//   //     startDate?.year
//   //   )
//   //     .toISOString()
//   //     .split("T")[0];

//   //   const info = mappedData.find(
//   //     (data) =>
//   //       (data.showType.toLowerCase() === anilistInfo.type?.toLowerCase() &&
//   //         data.episodeCount === anilistInfo.totalEpisodes) ||
//   //       data.ja_jp.includes(title.native || "")
//   //   );

//   //   console.log(formattedAnimeInfoAiredDate);

//   //   if (info) {
//   //     const { data: result } = await axios.get(
//   //       `${kitsuBaseURL}/anime/${info?.id}`
//   //     );

//   //     return result.data;
//   //   } else {
//   //     return null;
//   //   }
//   // } catch (error) {
//   //   throw error;
//   // }

//   try {
//     const id = await getAnimeIdByAnilistId(anilistId);
//     if (!id || !id.kitsu_id) return null;

//     const { data: result } = await axios.get(
//       `${kitsuBaseURL}/anime/${id.kitsu_id}`
//     );

//     return result.data;
//   } catch (error) {
//     throw error;
//   }
// };

// export const fetchKitsuEpisodes = async (kitsuId: number) => {
//   try {
//     const { data: episodes } = await axios.get<{ data: KitsuEpisode[] }>(
//       `${kitsuBaseURL}/anime/${kitsuId}/episodes?page[limit]=${20}`
//     );

//     console.log(episodes);
//     return episodes;
//   } catch (error) {
//     throw error;
//   }
// };

// export const getAnimeIdByAnilistId = async (
//   anilistId: string
// ): Promise<IDs | undefined> => {
//   try {
//     const ids = await axios.get<IDs[]>(
//       "https://raw.githubusercontent.com/Fribb/anime-lists/refs/heads/master/anime-list-full.json"
//     );
//     const id = ids.data.find((id: any) => id.anilist_id === Number(anilistId));

//     return id;
//   } catch (error) {
//     throw error;
//   }
// };

// export const fetchTMDBInfo = async (
//   tmdbId: number,
//   type: string = "tv"
// ): Promise<TMDBAnimeInfo> => {
//   try {
//     const { data } = await axios.get<TMDBAnimeInfo>(
//       `${tmdbBaseURL}/${type}/${tmdbId}`,
//       {
//         params: {
//           api_key: tmdbKey,
//         },
//       }
//     );

//     return data;
//   } catch (error) {
//     throw error;
//   }
// };

export const anilist = new META.Anilist();
export const gogo = new ANIME.Gogoanime();
