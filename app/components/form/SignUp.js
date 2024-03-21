"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import Link from "next/link";
const SignUp = () => {
  const router = useRouter();
  const formSchema = z
    .object({
      username: z.string().min(1, "Add your chef name"),
      email: z.string().min(1, "Email required").email("Invalid email"),
      password: z
        .string()
        .min(5, "Password must be more than 5 chars")
        .max(20, "Password must at most 20 chars"),
      confirmPassword: z.string().min(5).max(20),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data) => {
    const res = await fetch("api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: data.username,
        email: data.email,
        password: data.password,
      }),
    });
    if (res.ok) {
      router.push("/sign-in");
    } else {
      console.error("Registration Failed");
    }
  };
  return (
    <div className="w-full h-full flex-col flex place-content-center items-center">
      <form
        id="signUpForm"
        className="form-control"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label className="label">
            <span className="label-text">Username</span>
          </label>
          <input
            type="text"
            placeholder="Chef123"
            className="input input-bordered input-primary w-full max-w-xs"
            {...register("username", { required: true })}
          />
          {errors.username && (
            <p className="text-error-content bg-error rounded-md p-3 mt-2">
              {errors.username.message}
            </p>
          )}
        </div>
        <div>
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="tony@thyme.com"
            className="input input-bordered input-primary w-full max-w-xs"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <p className="text-error-content bg-error rounded-md p-3 mt-2">
              {errors.email.message}
            </p>
          )}
        </div>
        <div>
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered input-primary w-full max-w-xs"
            autoComplete="current-password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <p className="text-error-content bg-error rounded-md p-3 mt-2">
              {errors.password.message}
            </p>
          )}
        </div>
        <div>
          <label className="label">
            <span className="label-text">Re-Enter Password</span>
          </label>
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered input-primary w-full max-w-xs"
            autoComplete="current-password"
            {...register("confirmPassword", { required: true })}
          />
          {errors.confirmPassword && (
            <p className="text-error-content bg-error rounded-md p-3 mt-2">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
        <button className="btn btn-outline btn-accent mt-4" type="submit">
          Sign Up
        </button>
      </form>
      <p className="pt-3">Have an account? <Link href="/sign-in" className="underline">Sign-In</Link> </p>
    </div>
  );
};

export default SignUp;
