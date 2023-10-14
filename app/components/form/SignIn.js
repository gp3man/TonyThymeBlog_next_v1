"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "next/navigation";
import ProviderBtn from "./ProviderBtn";
const SignIn = () => {
  const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(5).max(20),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(formSchema) });

  const onSubmit = async (data) => {

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
            type="text"
            placeholder="tony@thyme.com"
            className="input input-bordered input-primary w-full max-w-xs"
            {...register("email", { required: true })}
            required
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
            {...register("password", { required: true })}
            required
          />
          {errors.password && (
            <p className="text-error-content bg-error rounded-md p-3 mt-2">
              {errors.password.message}
            </p>
          )}
        </div>
          <button className="btn btn-outline btn-accent center mt-4" type="submit">
            Sign In
          </button>
        <div className="divider">OR</div>
        <ProviderBtn>Sign In With Google</ProviderBtn>
      </form>
    </div>
  );
};

export default SignIn;
