import VideoModal from "@/app/components/VideoModal";

export default function Page({ params }: { params: { title: string } }) {
  const { title } = params;

  return <VideoModal title={title} />;
}
