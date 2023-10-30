"use server"
import dayjs from "dayjs";

const SingleReview = ({ review }) => {
  const {
    score,
    title,
    review: content,
    recommend,
    author,
    createdAt,
  } = review;
  return (
    <div className="flex-col pb-2">
      <hr className="opacity-50 border-secondary py-3" />
      <div className="flex justify-between">
        <span className="grid grid-cols-2">
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
          <div className="flex-col">
            <p className="font-bold">{author.name || author.username}</p>
            <p>Score: {score}</p>
          </div>
        </span>
        <div >
          <p>{ dayjs(createdAt).format('MM/DD/YYYY')}</p>
        </div>
      </div>
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
          Was this Review helpful? <span>Toggle</span>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
