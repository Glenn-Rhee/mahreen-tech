import Image from "next/image";

export default function HeroPage() {
  return (
    <main className="w-full flex items-center justify-between my-16 h-[55dvh]">
      <div className="flex flex-col gap-y-8">
        <h1 className="font-bold text-5xl max-w-2xl">
          Wujudkan <span className="text-primary">Ide Kreatifmu </span> dengan{" "}
          <span className="text-secondary">Teknologi</span>
        </h1>
        <p className="text-lg">
          Mahreen Indonesia hadir untuk mendukung generasi muda Indonesia dalam
          menciptakan karya inovatif melalui kreativitas, teknologi, dan
          kolaborasi.
        </p>
        <div className="flex items-center gap-x-4">
          <button className="bg-primary px-5 py-2 lg:px-5 lg:py-4 font-medium rounded-xl cursor-pointer active:scale-95 hover:bg-[#FFD52E] transition-all duration-200">
            Mulai Berkarya
          </button>
          <button className="border-primary border px-5 py-2 lg:px-5 lg:py-4 font-medium rounded-xl cursor-pointer active:scale-95 hover:bg-primary transition-all duration-200">
            Mulai Berkarya
          </button>
        </div>
      </div>
      <div className="relative w-full h-full">
        <Image
          fill
          src={"/hero-image.jpg"}
          alt="Hero Image"
          className="object-cover w-full rounded-xs shadow-lg"
        />
      </div>
    </main>
  );
}
