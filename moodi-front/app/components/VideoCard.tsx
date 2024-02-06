import Image from "next/image";
import React from "react";
import Badge from "./Badge";
import VideoAttributes from "./VideoAttributes";
import { Video } from "../models/video";
import PlayButton from "./PlayButton";

type VideoCardProps = {
  video: Video;
  breakPoint?: string; // Añade esta línea
};

export default function VideoCard({
  video: { metaData, playbackId },
}: VideoCardProps) {
  return (
    <div className="h-full relative  overflow-hidden  inline-block">
      <div className="relative max-h-[305px]">
        <div className="relative h-full  rounded-3xl">
          <div className="h-full rounded-2xl">
            <Image
              src={`https://image.mux.com/${playbackId}/thumbnail.jpg?time=0`}
              alt={metaData.title}
              fetchPriority="high"
              width={230}
              height={305}
              className="block h-[305px] text-transparent object-cover rounded-2xl"
            />
          </div>
          <Badge tag={metaData.tagVideo} />
          <PlayButton time={metaData?.time ?? ""} title={metaData.title} />
        </div>
      </div>
      <VideoAttributes title={metaData.title} />
    </div>
  );
}
