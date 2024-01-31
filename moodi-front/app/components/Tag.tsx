"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  name: string;
  title: string;
  path: string;
};

export default function Tag({ name, title, path }: Props) {
  const currentPath = usePathname();
  return (
    <li className="flex">
      <Link
        href={path}
        className={`flex items-center border border-solid border-black-200 rounded-2xl py-[0.3rem] px-[1.9rem] 
      transition ease-linear duration-150 ${
        currentPath === path ? "bg-[#dee021]" : ""
      }`}
      >
        <span className="text-sm lg:text-base px-2">{name}</span>
      </Link>
    </li>
  );
}
