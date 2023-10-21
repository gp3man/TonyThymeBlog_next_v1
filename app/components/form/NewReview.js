"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

const NewReview = () => {
  const session = useSession()
  const router = useRouter();
  console.log(session)
  const formSchema = z.object({
    score: z.string().min(1).max(5),
    title: z.string().min(1, "Title required").max(25),
    review: z.string().min(1, "Must write review").max(200, "Review too long"),
    recommend: z.string(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      score: 5,
      title: "",
      review: "",
      recommend: "",
    },
  });

  const onSubmit = async (data) => {
    // const res = await fetch("api/review", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     userId: userId,
    //     score: data.score,
    //     title: data.title,
    //     review: data.review,
    //     recommend: toLowercase(data.recommend),
    //   }),
    // });
    // if (res.ok) {
    //   router.refresh();
    // } else {
    //   console.error("Post Failed");
    // }
    console.log(data)
  };
  return (
    <div className="w-full h-full flex-col flex place-content-center items-center">
      {session.status === "authenticated" ? (
        <form
          id="reviewForm"
          className="form-control"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-full">
            <label className="label">
              <span className="label-text">Score</span>
            </label>
            <input
              type="text"
              className="input input-bordered input-primary w-full max-w-xs"
              {...register("score", { required: true })}
            />
            {errors.score && (
              <p className="text-error-content bg-error rounded-md p-3 mt-2">
                {errors.score.message}
              </p>
            )}
          </div>
          <div>
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              className="input input-bordered input-primary w-full max-w-xs"
              {...register("title", { required: true })}
            />
            {errors.title && (
              <p className="text-error-content bg-error rounded-md p-3 mt-2">
                {errors.title.message}
              </p>
            )}
          </div>
          <div>
            <label className="label">
              <span className="label-text">Review</span>
            </label>
            <textarea
              className="textarea textarea-bordered textarea-primary w-full max-w-xs"
              {...register("review", { required: true })}
            />
            {errors.review && (
              <p className="text-error-content bg-error rounded-md p-3 mt-2">
                {errors.review.message}
              </p>
            )}
          </div>
          <div>
            <label className="label">
              <span className="label-text"><span className="text-error">*</span>Would you Recommend?</span>
            </label>
            <label className="label">
              <span className="label-text-alt">Yes</span>
            </label>
            <input
              type="radio"
              className="input-lg input-bordered input-primary w-full max-w-xs"
              value={"Yes"}
              {...register("recommend", { required: true })}
            />
            <label className="label">
              <span className="label-text-alt">No</span>
            </label>
            <input
              type="radio"
              className="input input-bordered input-primary w-full max-w-xs"
              value={"No"}
              {...register("recommend", { required: true })}
            />
            {errors.recommend && (
              <p className="text-error-content bg-error rounded-md p-3 mt-2">
                {errors.recommend.message}
              </p>
            )}
          </div>
          <button className="btn btn-outline btn-accent mt-4" type="submit">
            Post
          </button>
        </form>
      ) : (
        <div className="w-full h-full flex-col flex place-content-center items-center ">
          <Link href="/sign-in" className="btn btn-secondary">
            Sign-in to write a review{" "}
          </Link>
        </div>
      )}
    </div>
  );
};

export default NewReview;
