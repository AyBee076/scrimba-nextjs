import { NavLinkProps } from "../types";
import Link from "next/link";

export default function NavLink({ href, children, isActive }: NavLinkProps) {
  return (
    <li>
      <Link
        href={href}
        className={`px-4 py-2 transition-colors rounded-md cursor-pointer hover:text-orange-accent ${isActive ? "text-orange-accent": "text-gray-700" }`}
      >
        {children}
      </Link>
    </li>
  );
}
