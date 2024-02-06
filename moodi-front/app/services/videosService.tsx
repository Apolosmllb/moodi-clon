import videos from "../mock/videos.json";

export async function getVideos() {
  await new Promise((resolve) => setTimeout(resolve, 80));
  return videos.res;
}

export async function getVideo(title: string) {
  await new Promise((resolve) => setTimeout(resolve, 80));
  return videos.res.find((video) => video.metaData.title === title);
}
