import SingleReview from "@/app/components/SingleReview.js";
const ReviewBoard = () => {
  return (
    <div className="w-full">
      <p className="text-base md:text-2xl font-black py-3">Reviews</p>
      <hr className="opacity-50 border-accent py-3" />
      <SingleReview />
    </div>
  );
};

export default ReviewBoard;
