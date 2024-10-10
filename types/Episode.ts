export interface Episode {
  tvdbShowId: number;
  tvdbId: number;
  seasonNumber: number;
  episodeNumber: number;
  absoluteEpisodeNumber: number;
  title: {
    ja?: string;
    en?: string;
    "x-jat"?: string;
  };
  airDate: string;
  airDateUtc: string;
  runtime: number;
  overview: string;
  image: string;
  episode: string;
  anidbEid: number;
  length: number;
  airdate: string;
  summary: string;
}

export interface ApiResponse {
  titles: {
    [key: string]: string;
  };
  episodes: {
    [key: string]: Episode;
  };
  episodeCount: number;
  specialCount: number;
  images: Array<{
    coverType: string;
    url: string;
  }>;
  mappings: {
    [key: string]: string | number;
  };
}
