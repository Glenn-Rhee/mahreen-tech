"use client";
import Link from "next/link";
import Container from "./Container";
import { menuNavbar } from "./Navbar";
import InstagramIcon from "./icon/InstagramIcon";
import FacebookIcon from "./icon/FacebookIcon";
import YoutubeIcon from "./icon/YoutubeIcon";

const helps = [
  {
    title: "Kontak Kami",
    href: "#",
  },
  {
    title: "Laporan",
    href: "#",
  },
  {
    title: "Kebijakan",
    href: "#",
  },
];

const sosmeds = [
  {
    icon: InstagramIcon,
    href: "#",
  },
  {
    icon: FacebookIcon,
    href: "#",
  },
  {
    icon: YoutubeIcon,
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-text-primary py-4 text-white">
      <Container className="flex justify-between">
        <div className="flex flex-col gap-y-2 max-w-xl">
          <h4 className="font-bold text-3xl">Mahreen Indonesia</h4>
          <p className="">
            Mendorong generasi muda Indonesia untuk berkarya melalui kreativitas
            dan teknologi.
          </p>
        </div>

        <div className="flex flex-col gap-y-4">
          <h6 className="font-medium text-xl">Telusuri</h6>
          <ul className="flex flex-col gap-y-2">
            {helps.map((menu) => (
              <li key={menu.title} className="">
                <Link href={menu.href} className="text-sm hover:underline">
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-y-4">
          <h6 className="font-medium text-xl">Bantuan</h6>
          <ul className="flex flex-col gap-y-2">
            {menuNavbar.map((menu) => (
              <li key={menu.title} className="">
                <Link href={menu.href} className="text-sm hover:underline">
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-y-4">
          <h6 className="font-medium text-xl">Ikuti Kami</h6>
          <ul className="flex gap-x-6 items-center">
            {sosmeds.map((menu, i) => (
              <li key={menu.href + i} className="">
                <Link href={menu.href} className="text-sm hover:underline">
                  <menu.icon />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <h6 className="mt-10 text-center text-sm font-light">
        &copy; 2026 Mahreen Indonesia. All rights reserved.
      </h6>
    </footer>
  );
}
