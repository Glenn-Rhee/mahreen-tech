import Image from "next/image";

export default function HeroPage() {
  return (
    <main className="w-full flex flex-col lg:flex-row gap-y-8 lg:gap-y-0 items-center justify-between md:my-6 lg:my-16 my-8 h-[80dvh] md:h-[85dvh] lg:h-[75dvh]">
      <div className="flex flex-col gap-y-2 md:gap-y-4 lg:gap-y-8 order-last lg:order-first">
        <h1 className="font-bold text-3xl md:text-5xl max-w-2xl">
          Wujudkan <span className="text-primary">Ide Kreatifmu </span> dengan{" "}
          <span className="text-secondary">Teknologi</span>
        </h1>
        <p className="text-sm md:text-lg">
          Mahreen Indonesia hadir untuk mendukung generasi muda Indonesia dalam
          menciptakan karya inovatif melalui kreativitas, teknologi, dan
          kolaborasi.
        </p>
        <div className="flex items-center gap-x-2 md:gap-x-4">
          <button className="bg-primary px-5 py-2 lg:px-5 lg:py-4 font-medium rounded-xl cursor-pointer active:scale-95 hover:bg-[#FFD52E] transition-all duration-200">
            Mulai Berkarya
          </button>
          <button className="border-primary border px-5 py-2 lg:px-5 lg:py-4 font-medium rounded-xl cursor-pointer active:scale-95 hover:bg-primary transition-all duration-200">
            Pelajari Program
          </button>
        </div>
      </div>
      <div className="relative w-full h-full">
        <Image
          fill
          src={"/hero-image.jpg"}
          alt="Hero Image"
          className="object-cover object-center w-full rounded-xs shadow-lg"
        />
      </div>
    </main>
  );
}
