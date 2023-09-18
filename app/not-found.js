import Link from "next/link";
const NotFound = () => {
  return (
    <div className="flex flex-col h-screen justify-around p-12 items-center bg-black">
      <iframe
          allow="fullscreen"
          height="270"
          src="https://giphy.com/embed/H8oJsiC2isDdEPZhtJ/video"
          width="480"
        ></iframe>
      <h1 className="text-3xl">Oooops...</h1>
      <h2 className="text-2xl">You Shouldn't be here.</h2>
      <p className="text-md">
        Let's get you{" "}
        <Link href="/" className="text-red-500 hover:text-green-500">
          back to safety...
        </Link>
      </p>
    </div>
  );
};
export default NotFound;
