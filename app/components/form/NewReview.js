"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

const NewReview = ({userId}) => {
  const router = useRouter();
  const formSchema = z
    .object({
      score: z.int().min(1).max(5),
      title: z.string().min(1, "Title required").max(25),
      review: z
        .string()
        .min(1, "Must write review")
        .max(200, "Review too long"),
      recommend: z.string(),
    })
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
    const res = await fetch("api/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userid: userId,
        score: data.score,
        title: data.title,
        review: data.review,
        recommend: toLowercase(data.recommend),
      }),
    });
    if (res.ok) {
      router.refresh();
    } else {
      console.error("Post Failed");
    }
  };
  return (
    <div className="w-full h-full flex-col flex place-content-center items-center">
      <form
        id="reviewForm"
        className="form-control"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
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
          <input
            type="textArea"
            className="input input-bordered input-primary w-full max-w-xs"
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
            <span className="label-text">Would you Recommend?</span>
          </label>
          <input
            type="radio"
            className="input input-bordered input-primary w-full max-w-xs"
            value={'Yes'}
            {...register("recommend", { required: true })}
          />
          <input
            type="radio"
            className="input input-bordered input-primary w-full max-w-xs"
            value={'No'}
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
    </div>
  );
};

export default NewReview;
