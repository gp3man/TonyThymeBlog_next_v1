const SingleReview = () => {
  return (
    <div className="flex-col">
      <div className="flex justify-between">
        <div className="grid-cols-2">
          <image />
          <div className="flex-col">
            <p>Name</p>
            <p>Rating</p>
          </div>
        </div>
        <div>
          <p>Date</p>
        </div>
      </div>
      <div>
        <p>
          Recommend:
        <span>yes </span>
        </p>
      </div>
      <div>
        <p>Title</p>
        <p className="truncate">Review:vsko sfdkovs dfj sp j gsgji fgdskfgdksjg sk gjs efgdskj gksd fkj gskdf gjskg sjd k gkdjf gsj fkjd sjgskj gs fdjsklj g sj gs dj sk gdskl gsj g dsj gdsj jkjg  gsdkjf g g dg sgf jdfs jfg gkdfs g dskgjf s</p>
      </div>
      <div className="flex">
        <div className="end-0">Was this Review helpful? <span>Toggle</span></div>
      </div>
    </div>
  );
};

export default SingleReview;
