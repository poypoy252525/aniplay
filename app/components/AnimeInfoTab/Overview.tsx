"use client";
import { IAnimeInfo } from "@consumet/extensions";
import React, { useState } from "react";

const getTimeUntilAiring = (seconds: number): string => {
  let minutes = seconds / 60;
  let hours = minutes / 60;
  let days = hours / 24;

  hours = Math.floor(hours % 24);
  minutes = Math.floor(minutes % 60);
  days = Math.floor(days % 24);

  return `${days}d ${hours}h ${minutes}m`;
};

const formatDate = (day?: number, month?: number, year?: number): Date => {
  return new Date(`${year}-${month}-${day}`);
};

const Overview = ({ anime }: { anime: IAnimeInfo }) => {
  const [isExpand, setExpand] = useState<boolean>(false);

  const animeDetails = [
    { label: "Type", value: anime.type },
    { label: "Episodes", value: anime.totalEpisodes },
    { label: "Genres", value: anime.genres?.join(", ") },
    {
      label: "Aired",
      value: formatDate(
        anime.startDate?.day,
        anime.startDate?.month,
        anime.startDate?.year
      ).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
    },
    { label: "Status", value: anime.status },
    { label: "Season", value: anime.season },
    { label: "Country", value: anime.countryOfOrigin },
    { label: "Studios", value: anime.studios?.join(", ") },
    { label: "Duration", value: `${anime.duration} min` || "24 min" },
  ];

  return (
    <div className="px-4 space-y-4">
      <div>
        <span className="text-xl leading-8 font-bold">Description</span>
        <div
          className={`text-muted-foreground text-sm ${
            !isExpand && "line-clamp-6"
          }`}
          dangerouslySetInnerHTML={{ __html: anime.description || "" }}
        />
        <span
          className="text-sm font-medium"
          onClick={() => setExpand(!isExpand)}
        >
          {isExpand ? "Read less" : "Read more"}
        </span>
      </div>
      <div>
        <span className="text-xl leading-8 font-bold">Details</span>
        <div className="grid grid-cols-12 gap-1">
          {anime.nextAiringEpisode && (
            <React.Fragment>
              <span className="col-span-4 text-sm font-semibold">Airing</span>
              <span className="col-span-8 text-sm font-semibold">
                {`EP ${anime.nextAiringEpisode.episode}:  ${getTimeUntilAiring(
                  anime.nextAiringEpisode.timeUntilAiring
                )}`}
              </span>
            </React.Fragment>
          )}
          {animeDetails.map((detail) => (
            <React.Fragment>
              <span className="col-span-4 text-sm font-semibold">
                {detail.label}
              </span>
              <span className="col-span-8 text-sm text-muted-foreground">
                {detail.value}
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;
