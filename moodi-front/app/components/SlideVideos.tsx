"use client";
import Link from "next/link";
import videos from "../mock/videos.json";
import VideoCard from "./VideoCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow } from "./NextArrow";
import { PrevArrow } from "./prevArrow";
import { SLIDES_TO_SHOW } from "../constants/slidesToShow";
import { useBreakpoint } from "../hooks/useBreakpoint";

type SlideVideosProps = {
  sectionTitle: string;
  buttonTitle: string;
};

export default function SlideVideos({
  sectionTitle,
  buttonTitle,
}: SlideVideosProps) {
  const breakPoint = useBreakpoint();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    vertical: false,
    slidesToShow: SLIDES_TO_SHOW[breakPoint as "xs" | "sm" | "md" | "lg"] ?? 1,
    slidesToScroll:
      SLIDES_TO_SHOW[breakPoint as "xs" | "sm" | "md" | "lg"] ?? 5,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="px-2 flex flex-col">
      <div className="flex items-center justify-between">
        <h2 className="py-2 section-heading text-base md:text-lg w-[60%]">
          {sectionTitle}
        </h2>
        <div className="flex justify-end sm:pb-2">
          <Link href="/#">
            <button className="rounded-2xl bg-[#dee021] px-5 py-1">
              <span className="text-sm lg:text-base">{buttonTitle}</span>
            </button>
          </Link>
        </div>
      </div>
      <div className="pt-2">
        <Slider {...settings}>
          {videos.res.map((videoItem) => {
            return <VideoCard video={videoItem} key={crypto.randomUUID()} />;
          })}
        </Slider>
      </div>
    </div>
  );
}
