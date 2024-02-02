import Image from "next/image";
import Link from "next/link";

type attributesVideo = {
  title: string;
};

export default function VideoAttributes({ title }: attributesVideo) {
  const videoPath = "/video/product-review/" + title;
  return (
    <div className="self-start flex flex-col p-2 space-y-4 box-border">
      <div className="text-black text-xs font-semibold p-0 my-2">
        <Link href={videoPath} className="cursor-default text-inherit">
          {title}
        </Link>
      </div>
    </div>
  );
}
