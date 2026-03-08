import Image from "next/image";
import Hero from "@/public/hero-image.png";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col-reverse items-center justify-between gap-8 px-6 py-12 mx-auto md:flex-row max-w-7xl">
        <div className="flex-1 space-y-6">
          <p className="hidden text-sm text-gray-600 uppercase md:block">
            Your go-to platform for 3D printing files
          </p>
          <h1 className="text-4xl font-bold md:text-5xl">
            {" "}
            Discover what's possible with 3D Printing
          </h1>
          <p className="hidden text-sm text-gray-600 uppercase md:block">
            Join our community of creators and explore a vast library of
            user-submitted models.
          </p>

          <div className="flex gap-4">
            <button
              href="/3d-models"
              className="px-6 text-black transition duration-120 bg-white border-2 border-black hover:bg-black hover:text-white"
            >
              Browse Models
            </button>
          </div>
        </div>

        <Image src={Hero} alt="Hero Image" className="w-80 md:w-120" />
      </section>
    </main>
  );
}
