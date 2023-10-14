"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const formSchema = z
    .object({
      email: z.string().email(),
      password: z.string().min(5).max(20),
      confirmPassword: z.string().min(5).max(20),
    })
    .refine((data) => data.password === data.confirmPassword, {
      Message: "Passwords do not match",
      path: ["confirmPassword"],
    });
  console.log(watch());

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="w-full h-full flex-col flex place-content-center items-center">
      <form
        id="signInForm"
        className="form-control"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label className="label">
            <span className="l label-text-alt">Email</span>
          </label>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered input-primary w-full max-w-xs"
            {...register("email", { required: true })}
            required
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered input-primary w-full max-w-xs"
            {...register("password", { required: true })}
            required
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input
            type="password"
            placeholder="Confirm Password"
            className="input input-bordered input-primary w-full max-w-xs"
            {...register("confirmPassword", { required: true })}
            required
          />
        </div>
        <div className="pt-3">
          <button className="btn btn-outline btn-accent center" type="submit">
            Sign Up
          </button>
        </div>
        <div className="divider">OR</div>
      </form>
    </div>
  );
};

export default SignUp;
