import { anilist } from "@/server/api";
import { ApiResponse } from "@/types/Episode";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  request: NextRequest,
  { params }: { params: { anilistId: string } }
) => {
  const { data: results } = await axios.get<ApiResponse>(
    `https://api.ani.zip/mappings?anilist_id=${params.anilistId}`
  );

  let episodeList = await anilist.fetchEpisodesListById(params.anilistId);

  const { episodes } = results;

  episodeList = episodeList.map((episode) => ({
    id: episode.id,
    number: episode.number,
    description: episodes[episode.number].overview || episode.description,
    image: episodes[episode.number].image || episode.image,
    imageHash: episode.imageHash,
    isFiller: episode.isFiller,
    releaseDate: episode.releaseDate,
    title: episodes[episode.number].title.en || episode.title,
    url: episode.url,
  }));

  return NextResponse.json(episodeList, { status: 200 });
};
