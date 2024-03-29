"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const NewsletterModal = ({ content }) => {
  const formSchema = z.object({
    email: z.string().email(),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const sub = async (data) => {
    const res = await fetch("/api/addSubscription", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
      }),
    });
    const Data = await res.json();
    if (res.ok) {
      reset();
    } else {
      console.error("Post Failed: ", Data.error);
    }
  };
  return (
    <>
      {content ? (
        <section className="w-full h-full flex-col flex place-content-center items-center m-0">
          <div className="bg-primary">
            <div className="py-4 px-4 mx-auto text-center z-10 relative">
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-slate-800 md:text-5xl lg:text-6xl">
                {content?.hook}
              </h1>
              <p className="mb-2 text-lg font-normal text-slate-700 lg:text-xl sm:px-16">
                {content?.message}
              </p>
              <form
                id="signInForm"
                onSubmit={handleSubmit(sub)}
                className="w-full max-w-md mx-auto"
              >
                <label
                  htmlFor="email"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only"
                >
                  Email sign-up
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 rtl:inset-x-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 16"
                    >
                      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    id="email"
                    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your email here..."
                    autoComplete="email"
                    {...register("email", { required: true })}
                    required
                  />
                  <button
                    type="submit"
                    disabled={!isDirty || !isValid}
                    className="text-accent-content absolute end-2.5 bottom-2.5 bg-slate-900 hover:bg-accent focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2"
                  >
                    Sign up
                  </button>
                </div>
                {errors.email && (
                  <p className="text-error-content bg-error rounded-md p-3 mt-2 font-bold text-lg">
                    {errors.email.message}
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>
      ) : (
        <section className="w-full h-full flex-col flex place-content-center items-center m-0">
          <div className="bg-primary">
            <div className="py-4 px-4 mx-auto text-center z-10 relative">
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-slate-800 md:text-5xl lg:text-6xl">
                Sign Up For My Newsletter!
              </h1>
              <p className="mb-2 text-lg font-normal text-slate-700 lg:text-xl sm:px-16">
                Stay in the loop for exclusive details coming soon.
              </p>
              <form
                id="signInForm"
                onSubmit={handleSubmit(sub)}
                className="w-full max-w-md mx-auto"
              >
                <label
                  htmlFor="email"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only"
                >
                  Email sign-up
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 rtl:inset-x-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 16"
                    >
                      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    id="email"
                    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your email here..."
                    autoComplete="email"
                    {...register("email", { required: true })}
                    required
                  />
                  <button
                    type="submit"
                    disabled={!isDirty || !isValid}
                    className="text-accent-content absolute end-2.5 bottom-2.5 bg-slate-900 hover:bg-accent focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2"
                  >
                    Sign up
                  </button>
                </div>
                {errors.email && (
                  <p className="text-error-content bg-error rounded-md p-3 mt-2 font-bold text-lg">
                    {errors.email.message}
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default NewsletterModal;
