import SingleReview from "@/app/components/SingleReview.js";
import Link from "next/link";
const ReviewBoard = async ({ recipeId, reader}) => {
  const data = await getReviews({ recipeId });
  const reviews = data?.reviews;
  return (
    <div className="w-full">
      <p className="text-base md:text-2xl font-black py-3">Reviews</p>
      {reviews?.length ? (
        <div>
          {reviews.map((review, i) => (
            <SingleReview key={review?.id} review={review} reader={reader} />
          ))}
        </div>
      ) : (
        <div className="text-center">
          <hr className="opacity-50 border-secondary py-3" />
          🥺
          <Link
            href={"#newReview"}
            className="underline hover:text-secondary uppercase"
          >
            No Reviews Yet
          </Link>
        </div>
      )}
    </div>
  );
};
export default ReviewBoard;
const getReviews = async ({ recipeId }) => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}api/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        recipeId: recipeId,
      }),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
