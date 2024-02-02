"use client";

import { useRouter } from "next/navigation";
import { useVideo } from "../hooks/useVideos";
import MuxPlayer from "@mux/mux-player-react/lazy";
import Badge from "./Badge";
import { useEffect } from "react";
import * as rudderanalytics from "rudder-sdk-js";
export default function VideoModal({ title }: { title: string }) {
  const router = useRouter();
  const titleDecoded = decodeURIComponent(title);
  const { video } = useVideo(titleDecoded);

  //rudder stack
  useEffect(() => {
    rudderanalytics.track(
      "video_modal_opened",
      {
        user_actual_id: crypto.randomUUID(),
      },
      () => {
        console.log("in track call");
      }
    );
  }, []);

  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);
  return (
    <>
      <div className="fixed z-50 inset-0 min-h-screen overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen relative">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-background-overflow opacity-75"></div>
          </div>
          <div
            className="flex justify-center items-center transform transition-all width: 800px;
      w-[800px] max-w-[800px] h-[600px] overflow-y-hidden bg-white relative rounded-lg shadow-md z-10"
          >
            <article className="w-full h-full flex justify-center items-center p-0">
              <section className="h-full max-h-full relative">
                <MuxPlayer
                  playbackId={video?.playbackId}
                  startTime={0}
                  theme="Classic"
                  style={{ height: "605px", width: "337px" }}
                  autoPlay={true}
                />
              </section>
              <section className="self-baseline flex-auto w-80 flex flex-col gap-4 p-8 h-full min-h-full overflow-auto">
                <div className="flex justify-between">
                  <Badge
                    tag={video?.metaData?.tagVideo ?? ""}
                    style="z-10 static cursor-pointer bg-green-500 p-[4PX] text-sm font-medium rounded-md text-center text-gray-900 xs:text-xs"
                  />
                  <button
                    onClick={() => {
                      router.back();
                    }}
                  >
                    <span className="material-symbols-rounded">X</span>
                  </button>
                </div>
                <p>
                  <strong className="font-semibold">Product name: </strong>
                  {video?.metaData.title}
                </p>
                <p>
                  <strong className="font-semibold">Product brand: </strong>
                  {video?.brand}
                </p>
                <p>
                  <strong className="font-semibold">Category: </strong>
                  {video?.category}
                </p>
                <p>
                  <strong className="font-semibold">
                    Moodi Day Creator Credits:
                  </strong>
                  {video?.creator}
                </p>
                <p className="italic">{video?.description}</p>
              </section>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
