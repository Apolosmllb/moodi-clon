import { useEffect, useState } from "react";
import { getVideos } from "../services/videosService";
import { Video } from "../models/video";
export const useSearch = (searchParam: string) => {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const videosResult = await getVideos();

      if (searchParam) {
        const filteredVideos = videosResult.filter((video) => {
          return video.searchTitle
            .toLowerCase()
            .includes(searchParam.toLowerCase());
        });
        setVideos(filteredVideos);
      } else {
        setVideos(videosResult);
      }
    };

    fetchVideos();
  }, [searchParam]);

  return videos;
};
