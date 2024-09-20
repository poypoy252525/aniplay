import { anilist, gogoanime } from "@/api/api";
import "swiper/css";
import HeroSwiper from "./components/HeroSwiper";
import AnimeList from "./components/AnimeList";
import { Genres } from "@consumet/extensions";

const Home = async () => {
  const currentYear = new Date().toLocaleDateString("en-US", {
    year: "numeric",
  });
  const { results: trendings } = await anilist.fetchTrendingAnime();
  const { results: popular } = await anilist.fetchPopularAnime();
  const { results: airing } = await anilist.advancedSearch(
    undefined,
    undefined,
    1,
    10,
    "TV",
    undefined,
    undefined,
    undefined,
    parseInt(currentYear),
    "RELEASING",
    undefined
  );

  return (
    <div className="flex flex-col space-y-6">
      <div>
        <HeroSwiper trendings={trendings} />
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

export default Home;
