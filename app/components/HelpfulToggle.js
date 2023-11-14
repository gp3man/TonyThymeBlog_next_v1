import HelpfulButton from "./HelpfulButton";
import NotHelpfulButton from "./NotHelpfulButton";
const HelpfulToggle = async ({ reviewId, reader }) => {
  const getCount = async ( reviewId ) => {
    try {
      const res = await fetch(`${process.env.NEXTAUTH_URL}api/helpfulCount`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          reviewId: reviewId,
        }),
      });
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Post Failed");
    }
  };
  const data = await getCount(reviewId);
  const yess =  data?.counts?.yess;
  const nos =  data?.counts?.nos;
  return (
    <div className="flex items-center mt-3 space-x-5">
      <HelpfulButton reviewId={reviewId} reader={reader} count={yess} />
      <NotHelpfulButton reviewId={reviewId} reader={reader} count={nos} />
    </div>
  );
};

export default HelpfulToggle;
