import ImageBanner from "../components/ImageBanner";

export default function Products() {
  return (
    <main className="container max-w-[1320px] mx-auto min-h-[30vh] sm:min-h-[45vh] md:min-h-[50vh] lg:min-h-[60vh] xl:min-h-[70vh] overflow-x-hidden px-3">
      <section className="mb-auto mt-auto">
        <div className="text-center">
          <ImageBanner
            src="/assets/675638ce2f6ecb843b4f7cdbf609dcbc.webp"
            alt="hero image"
            width={1260}
            height={200}
            style="w-full h-auto"
          />
        </div>
        <div className="flex flex-col py-1 gap-6 sm:px-8">
          <div className="flex flex-col mx-1 gap-6 sm:px-4">
            <div className="px-2 flex flex-col">
              <h2 className="py-2 section-heading text-base md:text-lg">
                Browse products by state
              </h2>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
