// "use client";
import Hero from "./Hero";
import SingleEvent from "./SingleEvent";
import { v4 as uuidv4 } from "uuid";

const LandingPage = ({ data }) => {
  const { tourCollection } = data;
  const tour = tourCollection?.items[0];
  const events = tour?.eventsCollection?.items;

  return (
    <div className="w-screen m-0 pt-10 ">
      <Hero content={tour} />
      {events && (
        <div
          id="dates"
          className="flex flex-col text-center justify-center bg-gradient-to-b from-secondary to-accent px-2 lg:px-10"
        >
          <h1 className="text-xl font-semibold p-7">Upcoming Events</h1>
          <ul>
            {events.map((event) => (
              <li key={uuidv4()} className="p-x mx-3">
                <SingleEvent event={event} thumbnail={tour?.thumbnail} />
                <hr className="border-primary border-opacity-40 my-4" />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
