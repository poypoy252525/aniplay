export interface TMDBAnimeInfo {
  id: number;
  name: string;
  seasons: Season;
}

interface Season {
  air_date: string;
  episode_count: string;
  name: string;
  overview: string;
  season_number: number;
  episodes: TMDBEpisode;
}

interface TMDBEpisode {
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  still_path: string;
}
