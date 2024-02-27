import { getBio } from "@/lib/getRecipes";
import Image from "next/image";

const AboutMe = async () => {
  const {aboutMePageCollection}  = await getBio();
const {bio, missionStatement, bioPicture} = aboutMePageCollection.items[0]
  return (
    <div className="min-h-screen pt-16 pb-10 px-10 lg:px-40 overflow-y-scroll scrollbar-hide justify-center">
      <header className="flex flex-col p-3 m-3 justify-center">
        <p className="font-bold text-3xl text-center">Meet The Chef</p>
      </header>
      <blockquote className="text-xl italic font-semibold text-base-content py-6">
          <svg
            className="w-8 h-8 text-secondary-400 mb-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          {missionStatement}
        </blockquote>
      <Image src={bioPicture?.url} alt={bioPicture?.title} width={bioPicture?.width} height={bioPicture?.height} className=" "/>
      <p>{bio}</p>
    </div>
  );
};

export default AboutMe;
