import Link from "next/link";
const ProfileMenu = ({ session }) => {
  const  user  = session?.user;
  return (
    <>
      {user ? (
        <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
          <label tabIndex={0} className="btn m-1">
            <div className="w-6 md:w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img className="rounded-full" src={user?.image} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>{"Signed In As: " + user?.name}</a>
            </li>
            <li>
              <Link href={"/api/auth/signout"}>Log Out</Link>
            </li>
          </ul>
        </div>
      ) : (
        <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
          <label tabIndex={0} className="btn m-1">
            <div className="w-6 md:w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img className="rounded-full" src="emptyProfile.jpg" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href={"/api/auth/signin"}>Sign In</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default ProfileMenu;
