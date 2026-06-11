"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
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

// Judul & paragraf: atas → bawah + fade
const fromTop: (v: number) => Variants = (delay = 0) => ({
  hidden: { opacity: 0, y: -28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  },
});

// Card: atas → bawah + fade, stagger per card
const cardVariant: (v: number) => Variants = (delay = 0) => ({
  hidden: { opacity: 0, y: -36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay },
  },
});

export default function AboutProgram() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2, once: true });

  return (
    <section
      ref={ref}
      className="w-full flex flex-col gap-y-8 lg:gap-y-0 items-center justify-between my-40 lg:my-32"
    >
      {/* Header */}
      <div className="flex flex-col w-full items-center text-center gap-y-4">
        <motion.h2
          variants={fromTop(0)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="font-bold text-3xl md:text-5xl"
        >
          Tentang Program
        </motion.h2>

        <motion.p
          variants={fromTop(0.2)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-3xl"
        >
          Mahreen Indonesia hadir untuk mendukung generasi muda dalam berkarya,
          berinovasi, dan berkembang melalui teknologi.
        </motion.p>
      </div>

      {/* Cards */}
      <div className="w-full grid grid-cols-1 gap-8 md:gap-6 lg:gap-16 md:grid-cols-3 items-center justify-center mt-2 md:mt-4 lg:mt-8">
        {dataCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.title}
              variants={cardVariant(0.4 + index * 0.15)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex flex-col items-center w-full gap-y-4 lg:gap-y-3 rounded-md bg-white border border-primary shadow-xl h-full justify-start px-3 py-3 lg:px-10 lg:py-6"
            >
              <div className="flex flex-col gap-y-1 items-center">
                <div className="size-16 bg-primary rounded-full flex items-center justify-center">
                  <Icon size={30} className="text-center text-secondary" />
                </div>
                <span className="font-semibold text-2xl">{card.title}</span>
              </div>
              <p className="text-center">{card.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
