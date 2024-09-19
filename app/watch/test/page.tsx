import { ITitle, META } from "@consumet/extensions";
import React from "react";

const Page = async () => {
  const anilist = new META.Anilist();
  const { results: trending } = await anilist.fetchTrendingAnime(1, 11);
  return (
    <div>
      {trending.map((trend) => (
        <div key={trend.id}>{(trend.title as ITitle).english}</div>
      ))}
    </div>
  );
};

export default Page;
