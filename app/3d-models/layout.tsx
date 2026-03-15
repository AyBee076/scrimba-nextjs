import Link from "next/link";
import { getAllCategories } from "../lib/categories";
import type { ReactNode } from "react";

export default function ModelsLayout({ children }: { children: ReactNode }) {
  const categories = getAllCategories();
  return (
    <div className=" ">
      <Link href="/3d-models">All</Link>
      <ul className="flex">
        {categories.map((category) => (
          <Link
            href={`/3d-models/categories/${category.slug}`}
            key={category.slug}
          >
            {category.displayName}
          </Link>
        ))}
      </ul>
      {children}
    </div>
  );
}
