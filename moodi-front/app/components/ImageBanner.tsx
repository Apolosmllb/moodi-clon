import Image from "next/image";

type ImageBannerProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  style: string;
};

export default function ImageBanner(props: ImageBannerProps) {
  return (
    <Image
      src={props.src}
      alt={props.alt}
      width={props.width}
      height={props.height}
      className="w-full h-auto object-contain object-center rounded-lg my-[24px] mx-0"
    />
  );
}
