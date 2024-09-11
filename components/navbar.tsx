import { Button } from "@nextui-org/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import React from "react";

const navLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About Us",
    link: "/about",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Portfolio",
    link: "/portfolio",
  },
  {
    name: "Contact Us",
    link: "/contact",
  },
];

const Navbar = () => {
  return (
    <>
      <motion.div
        transition={{ type: "spring", stiffness: 300 }}
        className="flex items-center justify-between w-full py-4 hover:bg-white px-7 text-white hover:text-primary"
      >
        <Image
          src="/logo.svg"
          width={72}
          height={72}
          className="object-cover"
          alt="logo"
        />
        <aside className="flex items-center gap-7 max-md:hidden">
          {navLinks?.map((link) => (
            <motion.div
              key={link.name}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href={link.link}
                className="font-secondary text-[16px] hover:underline underline-offset-[10px] font-[500]"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
          <motion.div
            whileHover={{ scale: 1.05 }} // Scale up the button on hover
            whileTap={{ scale: 0.95 }} // Add a tap effect for click
          >
            <Button className="py-4 px-6 rounded-[7px] bg-primary text-white">
              Let's Chat
            </Button>
          </motion.div>
        </aside>
      </motion.div>
    </>
  );
};

export default Navbar;
