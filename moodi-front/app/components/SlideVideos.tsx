"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { videos } from "../mock/videos";
import { useCarousel } from "../hooks/useCarousel";

type Video = {
  id: string;
  title: string;
  description: string;
  url: string;
  thumbnail: string;
};

type SlideVideosProps = {
  sectionTitle: string;
  buttonTitle: string;
  video?: Video;
};

export default function SlideVideos({
  sectionTitle,
  buttonTitle,
  video,
}: SlideVideosProps) {
  const { currentIndex, carousel, movePrev, moveNext, isDisabled } =
    useCarousel();

  return (
    <div className="px-2 flex flex-col">
      <div className="flex items-center justify-between">
        <h2 className="py-2 section-heading text-base md:text-lg w-[60%]">
          {sectionTitle}
        </h2>
        <div className="flex justify-end sm:pb-2">
          <Link href="/#" className="flex justify-end sm:pb-2">
            <button className="rounded-2xl bg-[#dee021] px-5 py-1">
              <span className="text-sm lg:text-base">{buttonTitle}</span>
            </button>
          </Link>
        </div>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex justify-between absolute top left w-full h-full">
          <button
            onClick={movePrev}
            className=" text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled("prev")}
          >
            <div className="h-12 w-20 -ml-5 animate-pulse bg-black rounded"></div>
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={moveNext}
            className="text-black w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled("next")}
          >
            <div className="h-12 w-20 -ml-5 animate-pulse  bg-black rounded"></div>
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div
          ref={carousel}
          className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
        >
          {videos.map((video) => {
            return (
              <div
                key={video.title}
                className="carousel-item text-center relative w-64 h-64 snap-start animate-pulse"
              >
                <div className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0 bg-gray-400 rounded">
                  <div className="w-full aspect-square hidden" />
                </div>
                <div className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-blue-800/75 z-10 bg-gray-400 rounded">
                  <div className="text-white py-6 px-3 mx-auto text-xl bg-gray-400 rounded">
                    &nbsp;
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
