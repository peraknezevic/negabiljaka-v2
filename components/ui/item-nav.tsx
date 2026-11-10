"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItem = ({ href, title }: { href: string; title: string }) => {
  const pathname = usePathname();
  const isCurrent =
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <li>
      <Link
        href={href}
        aria-current={isCurrent ? "page" : undefined}
        className={`tracking-wide decoration-2 underline-offset-8 transition-all hover:underline ${
          isCurrent ? "font-normal underline" : ""
        }`}
      >
        {title}
      </Link>
    </li>
  );
};

export default NavItem;
