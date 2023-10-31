"use server";
import dayjs from "dayjs";
import HelpfulToggle from "./HelpfulToggle";
import ScoreCount from "./ScoreCount";

const SingleReview = ({ review }) => {
  const {
    score,
    title,
    review: content,
    recommend,
    author,
    createdAt,
  } = review;
  const name= author?.name.split(" ")
  const firstName =name[0]
  let lastInitial = ""
  if(name[1]){
    lastInitial = name[1][0]
  }
  return (
    <div className="flex-col pb-2">
      <hr className="opacity-50 border-secondary py-3" />
      <div className="flex justify-between">
        <span className=" flex">
          <div className="p-1">
            {author.image ? (
              <img
                className="rounded-full"
                src={author.image}
                height={40}
                width={40}
              />
            ) : (
              <img
                className="rounded-full"
                src="/emptyProfile.jpg"
                height={40}
                width={40}
              />
            )}
          </div>
          <div className="flex-col ml-4">
            <p className="font-bold">{ author.username || (firstName + (lastInitial.length ? `, ${lastInitial}`: "")) }</p>
            <ScoreCount avg={score} />
          </div>
        </span>
        <div>
          <p>{dayjs(createdAt).format("MM/DD/YYYY")}</p>
        </div>
      </div>
      <div className="ml-16">
        <div className="pb-2">
          <p className="font-semibold">
            Recommend:
            <span className="font-normal"> {recommend}</span>
          </p>
        </div>
        <div className="pb-2">
          <p className="font-bold">{title}</p>
          <p className="truncate">{content}</p>
        </div>
        <div className="flex pb-2">
          <div className="right-0">
            <span>
              Was this Review helpful? <HelpfulToggle />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
