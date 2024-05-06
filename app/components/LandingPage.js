// "use client";
import Hero from "./Hero";
import Link from "next/link";
import SingleEvent from "./SingleEvent";

const LandingPage = ({ data }) => {
  const { recipeCollection, landingPageContentCollection } = data;
  const recipes = recipeCollection?.items;
  const content = landingPageContentCollection?.items[0];
  return (
    <div className="w-screen m-0 pt-10 ">
      <Hero content={content} />
      <div
        id="dates"
        className="flex flex-col text-center justify-center bg-gradient-to-b from-secondary to-accent"
      >
        <h1>Events</h1>
        <ul>
          <li>
            <SingleEvent/>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LandingPage;
