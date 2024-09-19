import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { META } from "@consumet/extensions";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AnimeCard from "./components/AnimeCard";

const Home = async () => {
  const anilist = new META.Anilist();
  const { results } = await anilist.fetchPopularAnime();
  return (
    <div>
      <div className="grid grid-cols-12 gap-4 p-4">
        <div className="col-span-8">
          <div className="active:scale-[0.98] transition duration-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="h-[32px] w-[6px] mr-2 dark:bg-white bg-black rounded-full" />
                <h3 className="text-2xl mr-2">Popular</h3>
                <ChevronRight className="mt-1" />
              </div>
              <div className="text-sm tracking-tight">view all</div>
            </div>
          </div>
          <div className="grid grid-cols-6 gap-4">
            {results.map((anime) => (
              <Link key={anime.id} href={`/watch?id=${anime.id}`}>
                <AnimeCard anime={anime} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
