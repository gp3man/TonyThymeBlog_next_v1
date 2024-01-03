import Link from "next/link";
import { TfiHome, TfiInstagram } from "react-icons/tfi";
import LogoImage from "./LogoImage";
import logo from "@/public/logo.png";
import ProfileMenu from "./ProfileMenu";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";

const NavBar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <nav className="fixed top-0 z-20 navbar bg-base-300 text-base-content rounded-b-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-300 rounded-box w-52"
          >
            <li>
              <Link
                href={"/recipes"}
                className="px-3 cursor-pointer active:font-bold"
              >
                <p>Recipes</p>
              </Link>
            </li>
            <li>
              <Link
                href={"/categories"}
                className="px-3 cursor-pointer active:font-bold "
              >
                <p>Categories</p>
              </Link>
            </li>
            <li>
              <Link
                href={"https://www.instagram.com/tony_thyme/"}
                target="new"
                className="px-3 cursor-pointer sm:text-base active:font-bold "
              >
                <p>{<TfiInstagram size={20} />}</p>
              </Link>
            </li>
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl" href={"/"}>
          <LogoImage src={logo} className="w-32 mx-3" alt="Tony Thyme" />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link
              href={"/recipes"}
              className="px-3 cursor-pointer active:font-bold"
            >
              <p>Recipes</p>
            </Link>
          </li>
          <li>
            <Link
              href={"/categories"}
              className="cursor-pointer active:font-bold "
            >
              <p>Categories</p>
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
      </div>
      <div className="navbar-end mr-7 space-x-3">
        <Link href={"/"} className="cursor-pointer sm:text-base">
          <p>{<TfiHome size={20} />}</p>
        </Link>
        <ProfileMenu session={session} />
      </div>
    </nav>
  );
};

export default NavBar;
