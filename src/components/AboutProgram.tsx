import { Handshake, Lightbulb, Palette } from "lucide-react";

const dataCards = [
  {
    title: "Inovasi",
    description:
      "Belajar mengubah ide menjadi solusi nyata dengan bantuan teknologi.",
    icon: Lightbulb,
  },
  {
    title: "Kolaborasi",
    description:
      "Berkesempatan terhubung dengan komunitas dan individu yang memiliki visi yang sama.",
    icon: Handshake,
  },
  {
    title: "Kreativitas",
    description:
      "Mengembangkan kemampuan berpikir kreatif untuk menghadapi tantangan.",
    icon: Palette,
  },
];
export default function AboutProgram() {
  return (
    <section className="w-full flex flex-col gap-y-8 lg:gap-y-0 items-center justify-between my-40 lg:my-32">
      <div className="flex flex-col w-full items-center text-center gap-y-4">
        <h2 className="font-bold text-3xl md:text-5xl">Tentang Program</h2>
        <p className="max-w-3xl">
          Mahreen Indonesia hadir untuk mendukung generasi muda dalam berkarya,
          berinovasi, dan berkembang melalui teknologi.
        </p>
      </div>
      <div className="w-full grid grid-cols-1 gap-8 md:gap-6 lg:gap-16 md:grid-cols-3 items-center justify-center mt-2 md:mt-4 lg:mt-8">
        {dataCards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.title}
              className="flex flex-col items-center w-full gap-y-4 lg:gap-y-3 rounded-md bg-white border border-primary shadow-md h-full justify-start px-3 py-3 lg:px-10 lg:py-6"
            >
              <div className="flex flex-col gap-y-1 items-center">
                <div className="size-16 bg-primary rounded-full flex items-center justify-center">
                  <Icon size={30} className="text-center text-secondary" />
                </div>
                <span className="font-semibold text-2xl">{card.title}</span>
              </div>
              <p className="text-center">{card.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
