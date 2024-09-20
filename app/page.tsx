import { anilist, gogoanime } from "@/api/api";
import "swiper/css";
import HeroSwiper from "./components/HeroSwiper";
import AnimeList from "./components/AnimeList";

const Home = async () => {
  const { results: trendings } = await anilist.fetchTrendingAnime();
  const { results: popular } = await anilist.fetchPopularAnime();
  const { results: airing } = await gogoanime.fetchTopAiring();
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
