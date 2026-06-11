"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import {
  ChevronRight,
  FolderKanban,
  Monitor,
  Network,
  Palette,
} from "lucide-react";
import Image from "next/image";

const programs = [
  { title: "Digital Skills", icon: Monitor },
  { title: "Creative Thinking", icon: Palette },
  { title: "Project Based Learning", icon: FolderKanban },
  { title: "Community Networking", icon: Network },
];

const fadeFromTop: (v: number) => Variants = (delay = 0) => ({
  hidden: { opacity: 0, y: -28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  },
});

const fadeFromLeft: (v: number) => Variants = (delay = 0) => ({
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: "easeOut", delay },
  },
});

const fadeFromBottom: (v: number) => Variants = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  },
});

export default function WhyJoinUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.15, once: true });

  return (
    <section
      ref={ref}
      className="w-full flex flex-col gap-y-8 lg:gap-y-16 items-center justify-between my-40 lg:my-32 h-[85dvh] lg:h-[75dvh]"
    >
      {/* Judul & paragraf */}
      <div className="flex flex-col w-full items-center text-center gap-y-2 lg:gap-y-4">
        <motion.h2
          variants={fadeFromTop(0)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="font-bold text-3xl md:text-5xl"
        >
          Mengapa Bergabung?
        </motion.h2>
        <motion.p
          variants={fadeFromTop(0.2)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-3xl"
        >
          Mengembangkan kreativitas dan keterampilan digital untuk menciptakan
          karya yang berdampak.
        </motion.p>
      </div>

      <div className="flex flex-col lg:flex-row w-full gap-y-6 lg:gap-x-16 items-center justify-between h-full">
        {/* Gambar: atas → bawah + fade */}
        <motion.div
          variants={fadeFromTop(0.3)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative w-full lg:w-[60%] h-full"
        >
          <Image
            fill
            src={"/why-us.jpg"}
            alt="Hero Image"
            className="object-cover object-center w-full rounded-xs shadow-lg"
          />
        </motion.div>

        {/* Konten kanan */}
        <div className="flex flex-col justify-between gap-y-10 w-full lg:w-[40%] h-full">
          <div className="flex flex-col gap-y-8 lg:gap-y-10">
            {/* Judul keunggulan: atas → bawah + fade */}
            <motion.h4
              variants={fadeFromTop(0.4)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="font-bold text-xl md:text-3xl"
            >
              Keunggulan Program
            </motion.h4>

            {/* List: kiri → kanan dengan stagger */}
            <ul className="flex flex-col gap-y-4 lg:gap-y-8">
              {programs.map((program, index) => {
                const Icon = program.icon;
                return (
                  <motion.li
                    key={program.title}
                    variants={fadeFromLeft(0.55 + index * 0.12)}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="flex items-center gap-x-2"
                  >
                    <Icon size={30} />
                    <span>{program.title}</span>
                  </motion.li>
                );
              })}
            </ul>
          </div>

          {/* Banner gabung: bawah → atas + fade */}
          <motion.div
            variants={fadeFromBottom(0.85)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="w-full px-4 py-2 gap-y-2 bg-[#FFD52E] rounded-md flex flex-col md:flex-row items-center justify-between"
          >
            <div className="flex flex-col gap-y-1">
              <h4 className="font-medium text-lg md:text-xl">
                Siap Menjadi Bagian dari Generasi Inovatif Indonesia?
              </h4>
              <p className="text-sm">
                Mulailah perjalanan Anda bersama Mahreen.
              </p>
            </div>
            <button className="flex items-center font-medium transition-all w-full md:w-auto active:scale-95 cursor-pointer justify-center gap-x-4 bg-secondary hover:bg-[#002975] text-white rounded-lg px-6 py-2.5">
              Gabung <ChevronRight />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
