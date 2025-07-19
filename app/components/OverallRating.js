import PBar from "./PBar";
import Link from "next/link";
import ScoreCount from "./ScoreCount"
const OverallRating = async ({ recipeId }) => {
  const getOverall = async ({ recipeId }) => {
    try {
      const res = await fetch(`${process.env.AUTH_URL}api/overall-rating`, {
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
  const  {data}  = await getOverall({ recipeId });
  // if (data === undefined){
  //   return <div className="flex w-full p-3 justify-center text-center">Preview: Has no reviews.</div>
  // }
  const { avg, count, all_1, all_2, all_3, all_4, all_5 } = data;
  const bar = [all_5, all_4, all_3, all_2, all_1]
  return (
    <div className="flex w-full p-3 justify-center text-center">
        {count > 0 ? (<div className="flex-col pr-6 py-10">
        <p className="font-bold text-xl">{avg}</p>
        <ScoreCount avg={avg} />
        <p>
          {count}
          <span> Review<span className={count === 1 ?"hidden" : ""}>s</span></span>
        </p>
      </div>) :(<div className="flex-col pr-4 py-16">Be the first to <Link href="#newReview" className="underline">review!</Link> </div>)}

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
