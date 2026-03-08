import React from "react";
import Image from "next/image";
import Square from "@/public/hero-image-square.png";

export default function About() {
  return (
    <main>
      <section className="container max-w-4xl px-4 py-8 mx-auto">
        <h1>About PrintForge</h1>
        <div className="grid items-center gap-8 mb-12 m">
          <div>
            <Image src={Square} alt="Square Image" className="w-100" />
          </div>
          <div className="">
            <p className="">About PrintForge</p>
            <h2>Empowering Makers Worldwide</h2>
            <p className="mb-4 text-gray-700">
              Founded in 2023, PrintForge has quickly become the go-to platform
              for 3D printing enthusiasts, makers, and professional designers to
              share and discover amazing STL files for 3D printing.
            </p>
            <p className="">
              Our mission is to foster a vibrant community where creativity
              meets technology, enabling anyone to bring their ideas to life
              through 3D printing.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
