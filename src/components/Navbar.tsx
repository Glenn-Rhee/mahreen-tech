"use client";
import Link from "next/link";
import Container from "./Container";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export const menuNavbar = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Tentang Program",
    href: "#",
  },
  {
    title: "Bergabung",
    href: "#",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  return (
    <>
      <nav className="shadow-md bg-white sticky top-0 right-0 left-0 py-3 z-30">
        <Container className="flex items-center justify-between">
          <Link href={"/"} className="font-bold text-xl lg:text-3xl">
            <h1>Mahreen Indonesia.</h1>
          </Link>
          <ul className="lg:flex hidden justify-around items-center md:gap-x-8 lg:gap-x-16">
            {menuNavbar.map((menu) => (
              <li
                key={menu.href + menu.title}
                className="font-medium md:text-lg lg:text-xl hover:underline text-center"
              >
                <Link href={menu.href}>{menu.title}</Link>
              </li>
            ))}
            <li className="font-medium text-xl hover:underline">
              <button className="bg-primary px-5 py-2 lg:px-5 lg:py-2 rounded-xl cursor-pointer active:scale-95 hover:bg-[#FFD52E] transition-all duration-200">
                Daftar Sekarang
              </button>
            </li>
          </ul>
          <button
            onClick={() => setIsOpen(true)}
            className="p-2 rounded-lg block lg:hidden hover:bg-gray-100 transition-colors"
            aria-label="Buka menu"
          >
            <Menu size={26} />
          </button>
        </Container>
      </nav>

      <div
        onClick={() => setIsOpen(false)}
        className={`
          lg:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      />

      <div
        className={`
          lg:hidden fixed top-0 right-0 h-full w-[85vdw] max-w-sm bg-white z-50
          shadow-2xl flex flex-col
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <span className="font-bold text-xl">Mahreen Indonesia.</span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Tutup menu"
          >
            <X size={22} />
          </button>
        </div>

        <ul className="flex flex-col px-6 py-6 gap-y-1 flex-1">
          {menuNavbar.map((menu) => (
            <li key={menu.href + menu.title}>
              <Link
                href={menu.href}
                onClick={() => setIsOpen(false)}
                className="block font-medium text-lg py-3 px-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                {menu.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="px-6 py-6 border-t border-gray-100">
          <button className="w-full bg-primary py-3 rounded-xl font-semibold text-lg cursor-pointer active:scale-95 hover:bg-[#FFD52E] transition-all duration-200">
            Daftar Sekarang
          </button>
        </div>
      </div>
    </>
  );
}
