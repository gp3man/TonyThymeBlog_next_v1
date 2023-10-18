const SingleReview = () => {
  return (
    <div className="flex-col pb-2">
      <div className="flex justify-between">
        <div className="grid grid-cols-2">
          <img className="rounded-full" src="emptyProfile.jpg" />
          <div className="flex-col">
            <p>Name</p>
            <p>Rating</p>
          </div>
        </div>
        <div>
          <p>Date</p>
        </div>
      </div>
      <div className="pb-2">
        <p>
          Recommend:
          <span> yes</span>
        </p>
      </div>
      <div className="pb-2">
        <p>Title</p>
        <p className="truncate">
          Review:vsko sfdkovs dfj sp j gsgji fgdskfgdksjg sk gjs efgdskj gksd
          fkj gskdf gjskg sjd k gkdjf gsj fkjd sjgskj gs fdjsklj g sj gs dj sk
          gdskl gsj g dsj gdsj jkjg gsdkjf g g dg sgf jdfs jfg gkdfs g dskgjf s
        </p>
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
