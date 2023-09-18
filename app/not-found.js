import Link from "next/link";
import Image from 'next/image'
import protein from "../public/joanna-kosinska-unsplash.jpg"
const NotFound = () => {
  return (
    <div className="flex flex-col h-screen justify-around p-12 items-center">
      <Image
          height="270"
          width="480"
          src={protein}
        ></Image>
      <h1 className="text-3xl">Hmm... There's no protein down this road. </h1>
      <p className="text-md">
        <Link href="/" className="text-blue-500 hover:text-green-500">
          Turn Back
        </Link>
      </p>
    </div>
  );
};
export default NotFound;
