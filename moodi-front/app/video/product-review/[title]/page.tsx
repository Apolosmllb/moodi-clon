import ImageBanner from "@/app/components/ImageBanner";
import VideoModal from "@/app/components/VideoModal";

export default function Page({ params }: { params: { title: string } }) {
  const { title } = params;
  return (
    <>
      <ImageBanner
        src="/assets/Moodi-Day-HB.svg"
        alt="hero image"
        width={1260}
        height={200}
        style="w-full h-auto"
      />
      <VideoModal title={title} />;
    </>
  );
}
