import Link from "next/link";
import logo from "@/public/logo.png";
import LogoImage from "./LogoImage";
const Footer = () => {
  return (
    <>
      <footer className="footer items-center p-4 bg-neutral text-neutral-content">
        <aside className="items-center grid-flow-col">
          <Link href="/recipes" className="flex items-center mb-4 sm:mb-0">
            <LogoImage
              src={logo}
              className="w-32 self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
              alt="Tony Thyme"
            />
          </Link>
          <p>
            <span>
              © 2023{" "}
              <Link href="/" className="hover:underline">
                TonyThyme
              </Link>
              . All Rights Reserved.
            </span>
          </p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end"></nav>
      </footer>
    </>
  );
};

export default Footer;
