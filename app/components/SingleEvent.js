import { getEventThumbnail } from "@/lib/getRecipes";
import dayjs from "dayjs";
import Image from "next/image";

const SingleEvent = async({ event, thumbnail }) => {
  const q = event?.sys?.id
  const {events} = await getEventThumbnail({q});
  const specThumb = events.thumbnail
  return (
    <div className="grid min-h-[100px] rounded-lg max-w-screen-xl grid-cols-8 sm:px-4 py-3 gap-1 sm:gap-4 mx-auto lg:gap-8 xl:gap-0  lg:grid-cols-12  hover:bg-accent hover:bg-opacity-20">
      <div className="h-full relative col-span-1 lg:col-span-2">
        {specThumb ? (
          <Image
          src={specThumb?.url}
          // height={thumbnail?.height}
          // width={thumbnail?.width}
          placeholder="blur"
          blurDataURL={specThumb?.url}
          fill={true}
          style={{objectFit:"contain"}}
          className="lg:pr-2"
          alt="spec_thumbnail"
        />
        ):(
        <Image
          src={thumbnail?.url}
          // height={thumbnail?.height}
          // width={thumbnail?.width}
          placeholder="blur"
          blurDataURL={thumbnail?.url}
          fill={true}
          style={{objectFit:"contain"}}
          className="lg:pr-2"
          alt="hero_thumbnail"
        />
        )}
      </div>
      <div className="col-span-6 lg:col-span-5 text-left pl-5">
        <div className="flex-col flex-shrink">
          <div>
            <span className="bg-primary rounded-md text-primary-content p-1 border border-accent text-xs sm:text-base">
              {dayjs(event?.date).format("ddd MMM DD")}
            <span className="lg:hidden">
            {" " + dayjs(event?.date).format("h:mmA")+" - "+ dayjs(event?.ends).format("h:mmA")}  
            </span>
            </span>
          </div>
          <p className="pt-2 text-sm  lg:text-lg font-bold">
            {event?.title}
          </p>
          <p className=" font-normal text-sm lg:font-medium lg:text-lg">
            {event?.address} <span className="">|</span>
            <span className="font-bold"> {event?.cityState}</span>
          </p>
          <p className="lg:pt-2 font-light lg:font-sm text-sm lg:text-md text-accent-content">
            {event?.moreInfo}
          </p>
        </div>
      </div>
      {/* <div className="lg:inline-grid px-4 col-span-5 text-lg font-semibold text-primary bg-secondary bg-opacity-5 rounded-3xl hidden"> */}
        <div className="lg:inline-grid px-4 col-span-2 text-lg font-semibold text-primary  rounded-3xl hidden text-shadow">
          <span>Starting</span> <br />
          {dayjs(event?.date).format("h:mm A")}
        </div>
        <div className="lg:inline-grid px-4 col-span-2 text-lg font-semibold text-primary rounded-3xl hidden text-shadow">
          <span>Ends</span> <br />
          {dayjs(event?.ends).format("h:mm A ")}
        </div>
      {/* </div> */}
    </div>
  );
};

export default SingleEvent;
