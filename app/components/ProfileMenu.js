import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "../api/auth/[...nextauth]/options";
const ProfileMenu = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  return (
    <>
      {user ? (
        <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
          <label
            tabIndex={0}
            className="btn bg-base-300 border-base-300 hover:border-accent-focus m-1"
          >
            <div className="w-6 md:w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              {user?.image ? (
                <img className="rounded-full" src={user?.image} />
              ) : (
                <img className="rounded-full" src="emptyProfile.jpg" />
              )}
            </div>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-300 rounded-box w-52"
          >
            <li>
              <a>Signed In As: {user?.username || user?.name}</a>
            </li>
            <li>
              <Link href={"/api/auth/signout"}>Log Out</Link>
            </li>
          </ul>
        </div>
      ) : (
        <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
          <label
            tabIndex={0}
            className="btn bg-base-300 border-base-300 hover:border-accent-focus  m-1"
          >
            <div className="w-6 md:w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img className="rounded-full" src="emptyProfile.jpg" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-300 rounded-box w-52"
          >
            <li>
              <Link href={"/sign-in"}>Sign In</Link>
            </li>
            <li>
              <Link href={"/sign-up"}>Sign Up</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default ProfileMenu;
