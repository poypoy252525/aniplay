import { IAnimeInfo, META } from "@consumet/extensions";
import { GetServerSidePropsContext } from "next";
import Link from "next/link";
import { Suspense } from "react";

interface Props {
  searchParams: { id: string };
}

const WatchPage = async ({ searchParams: { id } }: Props) => {
  const anilist = new META.Anilist();
  const anime = await anilist.fetchAnimeInfo(id);

  return (
    <div>
      <Link href={`/watch/test`}>{anime?.id}</Link>
    </div>
  );
};

export default WatchPage;
