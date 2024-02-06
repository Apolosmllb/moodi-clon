"use client";
import { useEffect } from "react";
import { useSearch } from "../hooks/useSearch";
import VideoCard from "./VideoCard";
import { useBreakpoint } from "../hooks/useBreakpoint";

export default function SearchSection({ param }: { param: string }) {
  const res = useSearch(decodeURI(param));

  console.log("🚀 ~ SearchSection ~ res:", res);

  return (
    <section className="mb-auto mt-auto">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Search Results</h1>
        <p className="main-subtitle">{`${
          res.length ?? 0
        } results found for ${decodeURI(param)}`}</p>
      </div>
      <div className="flex flex-col py-2 gap-6">
        <div className="px-4">
          <h2 className="py-2 section-heading text-base md:text-lg">Videos</h2>
          <div className="pt-2">
            <div className="flex gap-3">
              {res.map((video) => {
                return <VideoCard key={crypto.randomUUID()} video={video} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
}
