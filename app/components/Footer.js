import Link from "next/link";
import { RiTwitterXLine, RiInstagramLine, RiTiktokLine } from "react-icons/ri";
import logo from "@/public/logo.png"
import ContentfulImage from "./ContentfulImage";
const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-stone-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/recipes" className="flex items-center mb-4 sm:mb-0">
            <ContentfulImage
              src={logo}
              className="w-32 self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
              alt="Logo"
            />
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-stone-500 sm:mb-0 dark:text-stone-400">
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
        <hr className="my-6 border-stone-200 sm:mx-auto dark:border-stone-700 lg:my-8" />
        <span className="block text-sm text-stone-500 sm:text-center dark:text-stone-400">
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
