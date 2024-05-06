import dayjs from "dayjs";

const SingleEvent = () => {
  return (
    <div className="flex-col pb-2">
      <hr className="opacity-50 border-secondary py-3" />
      <div className="flex justify-between">
        <span className=" flex">
          <div className="p-1">
            {/* {author.image && (
              <img
                className="rounded-full"
                src={author.image}
                srcSet=""
                alt="GoogleProfilePic"
                sizes="128px"
                height={40}
                width={40}
              />
            )} */}
          </div>
          <div className="flex-col ml-4">
            <p className="font-bold">United center</p>
            <p>Chicago, IL</p>
          </div>
        </span>
        <div>
          <p>{"06/20/2024"}</p>
        </div>
      </div>
      <div className="md:ml-16">
        <div className="pb-2">
          <p className="font-bold">{"title"}</p>
          <p className="truncate">{"content"}</p>
        </div>
        <div className="flex pb-2">
          <div className="right-0">
            <span>Was this Review helpful? </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleEvent;
