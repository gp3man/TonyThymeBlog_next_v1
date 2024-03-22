"use client";

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import PlanCard from "../components/PlanCard";
import { fetchMealPlans } from "./actions";

const InfiniteScrollPlans = ({ initialPlans }) => {
  const [plans, setPlans] = useState(initialPlans);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();
  async function loadMorePlans() {
    const next = page + 1;
    const data = await fetchMealPlans(next);
    if (data?.mealPlanCollection?.items?.length) {
      setPage(next);
      setPlans((prev) => [
        ...(prev?.length ? prev : []),
        ...data?.mealPlanCollection?.items,
      ]);
    }
  }
  useEffect(() => {
    if (inView) {
      loadMorePlans();
    }
  }, [inView]);
  return (
    <>
      {plans.length ? (
        <li className="flex flex-wrap py-4 justify-center w-screen overflow-y-visible">
          {plans?.map((plan, i) => (
            <PlanCard key={plan?.slug || i} plan={plan} />
          ))}
        </li>
      ) : (
        <li className="text-center text-4xl py-6 font-bold content-center h-1/2">
          Hmm... No Meal Plans Here.
          <br />
          <span className="font-normal text-lg text-gray-400">Try Again!</span>
        </li>
      )}
      <li
        ref={ref}
        className="flex flex-col justify-center self-center mt-6 "
      ></li>
    </>
  );
};

export default InfiniteScrollPlans;
