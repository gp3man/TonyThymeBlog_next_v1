import SingleReview from "@/app/components/SingleReview.js";
import Link from "next/link";
const ReviewBoard = ({ reviews }) => {
  return (
    <div className="w-full">
      <p className="text-base md:text-2xl font-black py-3">Reviews</p>
      <hr className="opacity-50 border-accent py-3" />
      {reviews?.length ? (
        <div>
          {reviews.map((review) => (
            <SingleReview review={review} />
          ))}
        </div>
      ) : (
        <div className="text-center">
          Be the first to <Link href={"#newReview"} className="underline hover:text-secondary">review.</Link>
        </div>
      )}
    </div>
  );
};

export default ReviewBoard;
