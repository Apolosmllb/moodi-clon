"use client";
import { useEffect, useState } from "react";
import { getVideo } from "../services/videosService";
import { Video } from "../models/video";

export const useVideo = (title: string) => {

  const [video, setVideo] = useState<Video | null>(null);

  useEffect(() => {
    const fetchVideo = async () => {
      const res = await getVideo(title);
      setVideo(res ?? null);
    };

    fetchVideo();
  }, []);

  return { video };
};
