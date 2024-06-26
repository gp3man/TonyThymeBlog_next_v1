import Link from "next/link";
import logo from "@/public/logo.png";
import LogoImage from "./LogoImage";
import { TfiInstagram } from "react-icons/tfi";
const Footer = () => {
  return (
    <>
      <footer className="footer items-center p-4 bg-base-300 text-base-content">
        <aside className="items-center grid-flow-col">
          <Link href="/recipes" className="flex items-center mb-4 sm:mb-0">
            <LogoImage
              src={logo}
              sizes="(min-width: 400px) 128px, calc(47.5vw - 53px)"
              className="w-32 self-center text-2xl font-semibold whitespace-nowrap"
              alt="Tony Thyme"
            />
          </Link>
          <p>
            <span>
              © 2024{" "}
              <Link href="/" className="hover:underline">
                TonyThyme
              </Link>
              . All Rights Reserved.
            </span>
          </p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-start">
        <ul className="menu menu-horizontal px-1  left-0">
          <li>
            <Link
              href={"/about"}
              className="px-3 cursor-pointer active:font-bold"
            >
              <p>About</p>
            </Link>
          </li>
          <li>
            <Link
              href={"https://www.instagram.com/tony_thyme/"}
              target="new"
              className="cursor-pointer active:font-bold "
            >
              <p>{<TfiInstagram size={20} />}</p>
            </Link>
          </li>
        </ul>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
