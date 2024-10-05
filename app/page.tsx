import {
  anilist,
  fetchAiringSchedule,
  fetchPopularAnime,
  fetchTrendingAnime,
} from "@/api/api";
import "swiper/css";
import AnimeList from "./components/AnimeList";
import Carousel from "./components/Carousel";

function getCurrentAnimeSeason() {
  const month = new Date().getMonth() + 1; // getMonth() returns 0-based month
  const year = new Date().getFullYear();

  let season;

  if (month >= 1 && month <= 3) {
    season = "WINTER";
  } else if (month >= 4 && month <= 6) {
    season = "SPRING";
  } else if (month >= 7 && month <= 9) {
    season = "SUMMER";
  } else {
    season = "FALL";
  }

  return { season, year };
}

const Home = async () => {
  const { season, year: currentYear } = getCurrentAnimeSeason();
  const { results: trendings } = await fetchTrendingAnime();
  const { results: popular } = await fetchPopularAnime();
  const { results: airing } = await anilist.advancedSearch(
    undefined,
    undefined,
    1,
    10,
    undefined,
    ["POPULARITY_DESC", "SCORE_DESC"],
    undefined,
    undefined,
    currentYear,
    "RELEASING",
    season
  );

  return (
    <div className="flex flex-col space-y-8">
      <div>
        <Carousel trendings={trendings} />
      </div>
      <div>
        <AnimeList animeList={airing} title="Top airing" />
      </div>
      <div>
        <AnimeList animeList={popular} title="Popular" />
      </div>
    </div>
  );
};

export const dynamic = "force-dynamic";

export default Home;
