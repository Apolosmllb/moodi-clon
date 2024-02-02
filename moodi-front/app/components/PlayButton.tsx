import Image from "next/image";
import Link from "next/link";

type Play = {
  time: string;
  title: string;
};

export default function PlayButton({ time, title }: Play) {
  const productPath = `/video/product-review/${title}`;
  return (
    <div className="rounded-lg bg-black bg-opacity-25 backdrop-blur-md p-2 flex justify-center items-center text-white cursor-pointer text-base absolute bottom-2 right-2 sm:bottom-1 sm:right-1 gap-2 sm:text-xs">
      <Link href={productPath}>
        <Image
          src="assets/play-icon.svg"
          alt="Play button"
          width={24}
          height={24}
          loading="lazy"
          decoding="async"
          className="text-transparent"
        />
      </Link>
      <span>{time}</span>
    </div>
  );
}