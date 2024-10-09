import { anilist } from "@/server/api";
import { ApiResponse } from "@/types/Episode";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  request: NextRequest,
  { params }: { params: { anilistId: string } }
) => {
  try {
    console.log(`Fetching episodes for anilistId: ${params.anilistId}`);

    const { data: results } = await axios.get<ApiResponse>(
      `https://api.ani.zip/mappings?anilist_id=${params.anilistId}`
    );

    console.log("API response received:", results);

    let episodeList = await anilist.fetchEpisodesListById(params.anilistId);
    console.log("Fetched episode list:", episodeList);

    if (!episodeList.length) {
      episodeList = await anilist.fetchEpisodesListById(params.anilistId);
      console.error("Failed to fetch episode list:", episodeList);
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
        results.episodes[episode.number]?.overview || episode.description,
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
