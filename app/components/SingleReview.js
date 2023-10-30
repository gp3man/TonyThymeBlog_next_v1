const SingleReview = ({ review }) => {
  const {
    score,
    title,
    review: content,
    recommend,
    author,
    createdAt,
  } = review;
  console.log(author);
  return (
    <div className="flex-col pb-2">
      <div className="flex justify-between">
        <div className="grid grid-cols-2">
          {author.image ? (
            <img
            className="rounded-full"
            src={author.image}
            height={40}
            width={40}
          />
          ):(
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
        </div>
        <div>
          <p>{createdAt}</p>
        </div>
      </div>
      <div className="pb-2">
        <p>
          Recommend:
          <span> {recommend}</span>
        </p>
      </div>
      <div className="pb-2">
        <p className="font-bold">{title}</p>
        <p className="truncate">{content}</p>
      </div>
      <div className="flex pb-2 end-0">
        <div className="end-0">
          Was this Review helpful? <span>Toggle</span>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
