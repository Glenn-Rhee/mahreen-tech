import Link from "next/link";
import Container from "./Container";

const menuNavbar = [
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
  return (
    <nav className="hidden md:block shadow-md sticky top-0 right-0 left-0 py-3">
      <Container className="md:flex items-center justify-between">
        <Link href={"/"} className="font-bold text-3xl">
          Mahreen Indonesia.
        </Link>
        <ul className="flex justify-around items-center gap-x-16">
          {menuNavbar.map((menu) => (
            <li
              key={menu.href + menu.title}
              className="font-medium text-xl hover:underline"
            >
              <Link href={menu.href}>{menu.title}</Link>
            </li>
          ))}
          <li className="font-medium text-xl hover:underline">
            <button className="bg-primary px-5 py-2 rounded-xl cursor-pointer active:scale-95 hover:bg-[#FFD52E] transition-all duration-200">
              Daftar Sekarang
            </button>
          </li>
        </ul>
      </Container>
    </nav>
  );
}
