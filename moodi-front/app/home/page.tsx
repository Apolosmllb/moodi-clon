import Image from "next/image";
import ImageBanner from "../components/ImageBanner";

export default function Home() {
  return (
    <main className="container max-w-[1320px] mx-auto min-h-[30vh] sm:min-h-[45vh] md:min-h-[50vh] lg:min-h-[60vh] xl:min-h-[70vh] overflow-x-hidden px-3">
      <section className="mb-auto mt-auto">
        <div className="text-center">
          <h1 className="text-black mt-0 mb-[.5rem] font-extrabold leading-tight text-[1.5rem] sm:text-[2rem] lg-[3rem]  ">
            Try More Plants
          </h1>
          <p className="mt-0 mb-[1rem] text-sm sm:text-[1.75rem]">
            Share honest reviews about cannabis brands, earn rewards
          </p>
          <ImageBanner
            src="/assets/Moodi-Day-HB.svg"
            alt="hero image"
            width={1260}
            height={200}
            style="w-full h-auto"
          />
        </div>
      </section>
    </main>
  );
}
