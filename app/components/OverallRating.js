import PBar from "./PBar";
import Link from "next/link";
const OverallRating = async ({ recipeId }) => {
  const getOverall = async ({ recipeId, userEmail }) => {
    try {
      const res = await fetch(`${process.env.NEXTAUTH_URL}api/overall-rating`, {
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
      // return error
      console.log(error);
    }
  };
  const { data } = await getOverall({ recipeId });
  const { avg, count, all_1, all_2, all_3, all_4, all_5 } = data;
  const bar = [all_5, all_4, all_3, all_2, all_1]
  return (
    <div className="flex w-full p-3 justify-center">
        {count > 0 ? (<div className="flex-col pr-4 py-16 top-1/2">
        <p>{avg}</p>
        <p>
          {count}
          <span> Reviews</span>
        </p>
      </div>) :(<div className="flex-col pr-4 py-16 top-1/2">Be the first to <Link href="#newReview" className="underline">review!</Link> </div>)}

      <div className="flex-col">
        <div className="grid col-span-1">
        {bar.map((b)=>(
          <PBar key={b.key} value={b.value } count={count} mark={b.key} />
        ))}
        </div>
      </div>
    </div>
  );
};

export default OverallRating;
