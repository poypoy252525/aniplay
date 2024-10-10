import { anilist } from "@/server/api";
import { ApiResponse } from "@/types/Episode";
import { IAnimeEpisode } from "@consumet/extensions";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (
  request: NextRequest,
  { params }: { params: { anilistId: string } }
) => {
  let episodeList: IAnimeEpisode[] = await request.json();
  try {
    const { data: results } = await axios.get<ApiResponse>(
      `https://api.ani.zip/mappings?anilist_id=${params.anilistId}`
    );

    console.log("API response received:", results);

    if (!episodeList || !episodeList.length) {
      return NextResponse.json(
        { error: "No episode list found." },
        { status: 404 }
      );
    }

    let episodes: IAnimeEpisode[];

    try {
      episodes = await anilist.fetchEpisodesListById(params.anilistId);
      console.log("episode list from consumet: ", episodes);
    } catch (error) {
      console.log(error);
    }

    if (!results || !results.episodes) {
      console.error(`No episodes found for anilistId: ${params.anilistId}`);
      return NextResponse.json(
        { message: "No episodes found" },
        { status: 404 }
      );
    }

    episodeList = episodeList.map((episode) => ({
      id: episode.id,
      number: episode.number,
      description:
        results.episodes[episode.number]?.summary ||
        results.episodes[episode.number]?.overview ||
        episode.description,
      image: results.episodes[episode.number]?.image || episode.image,
      imageHash: episode.imageHash,
      isFiller: episode.isFiller,
      releaseDate: episode.releaseDate,
      title: results.episodes[episode.number]?.title?.en || episode.title,
      url: episode.url,
    }));

    console.log("Processed episode list:", episodeList);

    return NextResponse.json(episodeList, { status: 200 });
  } catch (error) {
    console.error("Error fetching episode list:", error);
    return NextResponse.json(
      { error: "Failed to fetch episode list" },
      { status: 500 }
    );
  }
};
