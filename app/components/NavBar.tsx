import React from "react";
import Image from "next/image";
import PFLogo from "@/public/printforge-logo.png";
import PFLogoIcon from "@/public/printforge-icon.png";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <header className=" w-full bg-white">
        <nav className="flex justify-between px-6 py-4 items-center">
          <div className="relative">
            <Link href="/">
            <Image
              src={PFLogo}
              alt="Desktop Logo"
              className="w-[200px] h-auto hidden md:block"
            />
            <Image
              src={PFLogoIcon}
              alt="Mobile Logo"
              className="md:hidden h-auto w-[40px] block"
            />
            </Link>
          </div>
          <div>
            <ul className="flex gap-2.5 items-center">
              <li><Link href="/3d-models">3D Models</Link></li>
              <li><Link href="/about">About</Link></li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
