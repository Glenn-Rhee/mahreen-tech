"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import Image from "next/image";

export default function HeroPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.4, once: true });

  // Judul & deskripsi: kiri → kanan
  const fromLeft: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Buttons: bawah → atas + pulse setelah muncul
  const fromBottom: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.3 },
    },
  };

  const pulseButtons: Variants = {
    hidden: { scale: 1 },
    visible: {
      scale: [1, 1.04, 1, 1.04, 1],
      transition: { delay: 0.9, duration: 0.8, ease: "easeInOut" },
    },
  };

  // Gambar: atas → bawah sedikit + pulse
  const fromTop: Variants = {
    hidden: { opacity: 0, y: -24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const pulseImage: Variants = {
    hidden: { scale: 1 },
    visible: {
      scale: [1],
      transition: { delay: 0.75, duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <main
      id="home"
      ref={ref}
      className="w-full flex flex-col scroll-mt-1200 lg:flex-row gap-y-8 lg:gap-y-0 items-center justify-between my-6 lg:my-16 h-[85dvh] lg:h-[75dvh]"
    >
      {/* Text side */}
      <div className="flex flex-col gap-y-2 md:gap-y-4 lg:gap-y-8 order-last lg:order-first">
        {/* Judul: kiri → kanan */}
        <motion.h1
          variants={fromLeft}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="font-bold text-3xl md:text-5xl max-w-2xl"
        >
          Wujudkan <span className="text-primary">Ide Kreatifmu </span> dengan{" "}
          <span className="text-secondary">Teknologi</span>
        </motion.h1>

        {/* Deskripsi: kiri → kanan, sedikit delay */}
        <motion.p
          variants={{
            ...fromLeft,
            visible: {
              ...fromLeft.visible,
              transition: { duration: 0.6, ease: "easeOut", delay: 0.15 },
            },
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-sm md:text-lg"
        >
          Mahreen Indonesia hadir untuk mendukung generasi muda Indonesia dalam
          menciptakan karya inovatif melalui kreativitas, teknologi, dan
          kolaborasi.
        </motion.p>

        {/* Buttons: bawah → atas + pulse */}
        <motion.div
          variants={fromBottom}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex items-center gap-x-2 md:gap-x-4"
        >
          <motion.button
            variants={pulseButtons}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-primary px-5 py-2 lg:px-5 lg:py-4 font-medium rounded-xl cursor-pointer active:scale-95 hover:bg-[#FFD52E] transition-all duration-200"
          >
            Mulai Berkarya
          </motion.button>
          <motion.button
            variants={{
              ...pulseButtons,
              visible: {
                ...pulseButtons.visible,
                transition: { delay: 1.05, duration: 0.8, ease: "easeInOut" },
              },
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="border-primary border px-5 py-2 lg:px-5 lg:py-4 font-medium rounded-xl cursor-pointer active:scale-95 hover:bg-primary transition-all duration-200"
          >
            Pelajari Program
          </motion.button>
        </motion.div>
      </div>

      {/* Gambar: atas → bawah + pulse */}
      <motion.div
        variants={fromTop}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative w-full h-full"
      >
        <motion.div
          variants={pulseImage}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative w-full h-full"
        >
          <Image
            fill
            src={"/hero-image.jpg"}
            alt="Hero Image"
            className="object-cover object-center w-full rounded-xs shadow-lg"
          />
        </motion.div>
      </motion.div>
    </main>
  );
}
