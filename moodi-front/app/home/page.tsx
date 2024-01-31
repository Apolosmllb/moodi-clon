import ImageBanner from "../components/ImageBanner";
import SlideCities from "../components/SildeCities";
import SlideVideos from "../components/SlideVideos";

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
        <div className="flex flex-col py-1 gap-6 sm:px-8">
          <div className="flex flex-col mx-1 gap-6 sm:px-4">
            <SlideVideos
              buttonTitle="view All"
              sectionTitle="Trending Reviews"
            />
            <SlideVideos
              buttonTitle="view All"
              sectionTitle="Concentrates 101"
            />
            <SlideVideos
              buttonTitle="view All"
              sectionTitle="Popular smoking tools & devices"
            />
            <SlideCities sectionTitle="Browse products by state" />

            <SlideVideos
              buttonTitle="view All"
              sectionTitle="Popular strains"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
