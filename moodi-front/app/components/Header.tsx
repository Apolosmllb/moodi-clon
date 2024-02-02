"use client";

import Image from "next/image";
import Tag from "./Tag";
import Link from "next/link";
import useScroll from "../hooks/useScroll";

const tagItems = [
  {
    name: "Products",
    title: "Product Reviews | Reviews of Cannabis Products Near You",
    path: "/products",
  },
  {
    name: "Accessories & Devices",
    title:
      "Device and Accessory Reviews | Reviews of Popular Smoking Devices and Tools",
    path: "/accessories-devices",
  },
  {
    name: "Strains",
    title: "Strain Reviews | Reviews of Popular Cannabis Strains Near You",
    path: "/strains",
  },
  {
    name: "Tips & Tricks",
    title:
      "Cannabis Tips & Tricks | Tutorials and Explainers to Help you Find the Right High",
    path: "/tips-tricks",
  },
];

export default function Header() {
  const scrolled = useScroll();
  let navbarClasses = `sticky top-0 left-0 z-20 flex justify-center items-center bg-white px-4 py-2 z-50${
    scrolled ? " shadow-md" : ""
  }`;

  return (
    <header className={navbarClasses}>
      <div className="relative z-30 max-w-[1320px] mx-auto flex justify-between h-16 px-0 sm:px-6">
        <Link
          href="/home"
          aria-label="Back to homepage moodi day"
          className="flex items-center py-2 mr-2 z-30"
        >
          <div className="ml-2 font-logo">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold whitespace-nowrap text-blue-500 sm:text-green-500 md:text-yellow-500 lg:text-red-500 xl:text-black">
              moodi day
            </h2>
          </div>
        </Link>

        <div className="flex items-center flex-shrink-0 mx-auto navlink-web">
          <ul className="flex items-stretch space-x-3 mx-auto text-center ">
            {tagItems.map((tag) => (
              <Tag {...tag} key={tag.name} />
            ))}
          </ul>
        </div>

        <div className="flex justify-end flex-1 items-center ml-auto min-w-[120px] max-w-[240px]  w-auto lg:ml-[8px] lg:max-w-[300px]">
          <div className="w-full h-min border border-solid border-black-200 rounded-md py-[5px] px-[12px]">
            <div className="flex items-center relative px-[24] py-0">
              <input
                type="search"
                placeholder="Search for a product"
                className="max-w-[300px] w-auto overflow-hidden text-base leading-6 outline-none pl-[30px] pr-[30px]"
                value=""
                readOnly
              />
              <button className="absolute left-0 h-full flex items-center justify-center">
                <Image
                  alt="reset search"
                  width={14}
                  height={14}
                  src="assets/search.svg"
                />
              </button>
              <button className="absolute right-0 h-full flex items-center justify-center">
                <Image
                  alt="reset search"
                  width={15}
                  height={15}
                  src="assets/close.svg"
                />
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center ml-2 ">
          <Link href="/budtender-network">
            <button className="bg-[#ff5400] text-black border rounded-full py-[8px] px-[11px]">
              Join Us
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
