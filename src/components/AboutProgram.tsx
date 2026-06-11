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
      "Mengembangkan kemampuan berpikir kreatif untuk menghadapi tantangan masa depan.",
    icon: Palette,
  },
];
export default function AboutProgram() {
  return (
    <main className="w-full flex flex-col gap-y-8 lg:gap-y-0 items-center justify-between md:my-10 lg:my-16 my-8">
      <div className="flex flex-col w-full items-center text-center gap-y-4">
        <h2 className="font-bold text-3xl md:text-5xl">Tentang Program</h2>
        <p className="max-w-3xl">
          Mahreen Indonesia hadir untuk mendukung generasi muda dalam berkarya,
          berinovasi, dan berkembang melalui teknologi.
        </p>
      </div>
      <div className="w-full grid grid-cols-1 gap-6 md:grid-cols-3 items-center justify-center mt-8">
        {dataCards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.title}
              className="flex flex-col items-center w-full gap-y-8 rounded-md bg-[#FFFAE6] shadow-md h-full justify-center px-10 py-6"
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
    </main>
  );
}
