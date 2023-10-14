"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ProviderBtn from "./ProviderBtn";
import { getProviders, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
const SignIn = ({providers}) => {
  const router = useRouter();
  const formSchema = z.object({
    email: z.string().email(),
    password: z
      .string()
      .min(5, "Password must be more than 5 chars")
      .max(20, "Password must at most 20 chars"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    const signInData = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    if (signInData?.error) {
      console.log(signInData?.error);
    }
    router.refresh()
    router.push("/recipes");
    // console.log(signInData);
    console.log(providers)
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
        <button
          className="btn btn-outline btn-accent center mt-4"
          type="submit"
        >
          Sign In
        </button>
        <div className="divider">OR</div>

        <ProviderBtn>Sign In With Google</ProviderBtn>
      </form>
    </div>
  );
};

export default SignIn;
