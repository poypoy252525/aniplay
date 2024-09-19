import { META } from "@consumet/extensions";
import Hero from "./components/Hero";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import HeroSwiper from "./components/HeroSwiper";

const Home = async () => {
  const anilist = new META.Anilist();
  const { results: trendings } = await anilist.fetchTrendingAnime();

  return (
    <div>
      <HeroSwiper trendings={trendings} />
    </div>
  );
};

export default Home;
