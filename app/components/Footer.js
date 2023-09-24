import Link from "next/link";
import { RiTwitterXLine, RiInstagramLine, RiTiktokLine } from "react-icons/ri";
import logo from "@/public/logo.png"
import Image from "next/image";
import ContentfulImage from "./ContentfulImage";
const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/recipes" className="flex items-center mb-4 sm:mb-0">
            {/* <ContentfulImage
              src={logo}
              className="h-8 mr-3"
              alt="Logo"
              loading="lazy"
            /> */}
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              TonyThyme
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link href="/About" className="mr-4 hover:underline md:mr-6 ">
                About
              </Link>
            </li>
            <li>
              <Link href="/About" className="hover:underline">
                Contact
              </Link>
            </li>
            {/* <li>
              <RiTiktokLine />
            </li>
            <li>
              <RiInstagramLine />
            </li>
            <li>
              <RiTwitterXLine />
            </li> */}
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <Link href="/" className="hover:underline">
            TonyThyme
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
