import { FolderKanban, Monitor, Network, Palette } from "lucide-react";
import Image from "next/image";

const programs = [
  {
    title: "Digital Skills",
    icon: Monitor,
  },
  {
    title: "Creative Thinking",
    icon: Palette,
  },
  {
    title: "Project Based Learning",
    icon: FolderKanban,
  },
  {
    title: "Community Networking",
    icon: Network,
  },
];

export default function WhyJoinUs() {
  return (
    <section className="w-full flex flex-col gap-y-16 items-center justify-between my-40 lg:my-32 h-[85dvh] lg:h-[75dvh]">
      <div className="flex flex-col w-full items-center text-center gap-y-4">
        <h2 className="font-bold text-3xl md:text-5xl">Mengapa Bergabung?</h2>
        <p className="max-w-3xl">
          Mengembangkan kreativitas dan keterampilan digital untuk menciptakan
          karya yang berdampak.
        </p>
      </div>
      <div className="flex w-full gap-x-16 items-center justify-between h-full">
        <div className="relative w-[60%] h-full">
          <Image
            fill
            src={"/why-us.jpg"}
            alt="Hero Image"
            className="object-cover object-center w-full rounded-xs shadow-lg"
          />
        </div>
        <div className="flex flex-col gap-y-10 w-[40%] h-full">
          <h4 className="font-medium text-xl md:text-3xl">
            Keunggulan Program
          </h4>
          <ul className="flex flex-col gap-y-8">
            {programs.map((program) => {
              const Icon = program.icon;
              return (
                <li key={program.title} className="flex items-center gap-x-2">
                  <Icon size={30} /> <span>{program.title}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
