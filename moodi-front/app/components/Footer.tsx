import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-6 bg-[#f3f1ea] border-t-[2px] border-black border-opacity-10 pb-[90px] pt-[38px] mt-[38px]">
      <div className="container max-w-[1320px] px-6 mx-auto space-y-6  md:space-y-12">
        <div className="pt-4 grid grid-cols-12">
          <div className="col-span-12 md:col-span-5">
            <h1 className="pt-2 pb-1 text-lg font-bold">
              Can't find the review you need? Request it!
            </h1>
            <p>
              Our budtender network will review it and let you know when it's
              ready.
            </p>
            <div className="pt-5">
              <div className="bg-blue-500 w-full h-[240px]"></div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-1"></div>
          <div className="col-span-12 text-center pb-4 sm:pb-0 sm:text-left sm:col-span-4 md:col-span-2">
            <p className="pt-2 pb-1 text-md font-bold">Budtender Network</p>
            <ul className="flex flex-col justify-center items-center sm:items-start">
              <li className="flex text-center md:text-left">
                <Link
                  aria-label="Read more about: Sign Up}"
                  className="flex h-12 sm:h-auto items-center hover:text-black text-gray-dark"
                  href="/budtender-network"
                >
                  Sign Up
                </Link>
              </li>
              <li className="flex text-center md:text-left">
                <Link
                  aria-label="Read more about: Creator Portal}"
                  className="flex h-12 sm:h-auto items-center hover:text-black text-gray-dark"
                  href="/creator-portal"
                >
                  Creator Portal
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-12 text-center pb-4 sm:pb-0 sm:text-left sm:col-span-4 md:col-span-2">
            <p className="pt-2 pb-1 text-md font-bold">Legal</p>
            <ul className="flex flex-col justify-center items-center sm:items-start">
              <li className="flex text-center md:text-left">
                <Link
                  aria-label="Read more about: Privacy Policy}"
                  className="flex h-12 sm:h-auto items-center hover:text-black text-gray-dark"
                  href="/privacy-policy"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="flex text-center md:text-left">
                <Link
                  aria-label="Read more about: Terms of Use}"
                  className="flex h-12 sm:h-auto items-center hover:text-black text-gray-dark"
                  href="/terms-of-use"
                >
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-12 text-center pb-4 sm:pb-0 sm:text-left sm:col-span-4 md:col-span-2">
            <p className="pt-2 pb-1 text-md font-bold">Connect with us</p>
            <ul className="flex flex-col justify-center items-center sm:items-start">
              <li className="flex text-center md:text-left">
                <Link
                  aria-label="Check our social media: Instagram}"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/moodidaysocial"
                  target="_blank"
                  className="flex justify-center items-center gap-2 hover:text-black text-gray-dark"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 1024 1024"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z"></path>
                  </svg>{" "}
                  Instagram
                </Link>
              </li>
              <li className="flex text-center md:text-left">
                <Link
                  aria-label="Check our social media: Twitter}"
                  rel="noopener noreferrer"
                  href="https://twitter.com/moodiday"
                  target="_blank"
                  className="flex justify-center items-center gap-2 hover:text-black text-gray-dark"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 1024 1024"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z"></path>
                  </svg>{" "}
                  Twitter
                </Link>
              </li>
              <li className="flex text-center md:text-left">
                <Link
                  aria-label="Check our social media: LinkedIn}"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/company/moodiday/"
                  target="_self"
                  className="flex justify-center items-center gap-2 hover:text-black text-gray-dark"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 1024 1024"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"></path>
                  </svg>{" "}
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-4">
          <p>
            <strong>Disclaimer:</strong>
          </p>
          <p className="mt-2">
            <i>
              These products are not intended to diagnose, treat, cure or
              prevent any disease. All information presented here is not meant
              as a substitute for or alternative to information from healthcare
              practitioners. Please consult your healthcare professional about
              potential interactions or other possible complications before
              using any product. Effects &amp; Medical Attributes are based on
              anecdotal evidence. Individual experiences can be varied.
            </i>
          </p>
          <div className="grid justify-center pt-6 lg:justify-between">
            <div className="flex">
              <span className="mr-2">©2024 Moodi Day, All rights reserved</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
