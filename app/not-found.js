import Link from "next/link";
import Image from "next/image";
import protein from "../public/noFoundPage.png";
const NotFound = () => {
  return (
    <div className="flex flex-col h-screen justify-around p-12 items-center">
      <Image
        height="270"
        width="480"
        alt="meatAndPotatoes"
        src={protein}
        className="rounded-lg"
      ></Image>
      <h1 className="text-2xl">Hmmm... There's no protein down this road. </h1>
      <p className="text-lg">
        <Link href="/" className="text-blue-200 hover:text-green-600">
          Turn Back And Go Home!
        </Link>
      </p>
    </div>
  );
};
export default NotFound;
