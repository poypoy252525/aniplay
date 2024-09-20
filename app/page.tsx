import anilist from "@/components/anilist-api";
import "swiper/css";
import HeroSwiper from "./components/HeroSwiper";

const Home = async () => {
  const { results: trendings } = await anilist.fetchTrendingAnime();

  return (
    <div>
      <HeroSwiper trendings={trendings} />
    </div>
  );
};

export default Home;
