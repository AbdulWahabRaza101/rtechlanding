import { Button } from "@nextui-org/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const navLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About Us",
    link: "/",
  },
  {
    name: "Services",
    link: "/",
  },
  {
    name: "Portfolio",
    link: "/",
  },
  {
    name: "Contact Us",
    link: "/",
  },
];
const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between w-full py-4">
        <Image
          src="/logo.svg"
          width={72}
          height={72}
          className="objcet-cover"
          alt="logo"
        />
        <aside className="flex items-center gap-7 max-md:hidden">
          {navLinks?.map((link) => {
            return (
              <>
                <Link
                  href={link.link || "/"}
                  key={link.name}
                  className="text-white font-secondary text-[16px] hover:underline underline-offset-[10px] font-[500]"
                >
                  {link.name}
                </Link>
              </>
            );
          })}
          <Button className="py-4 px-6 rounded-[7px] bg-primary text-white">
            Let's Chat
          </Button>
        </aside>
      </nav>
    </>
  );
};

export default Navbar;
