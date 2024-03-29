"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ProviderBtn from "./ProviderBtn";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
const SignIn = ({providers}) => {
  const {credentials, mailchimp, ...otherProviders} = providers
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
    router.back()
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
            <span className="label-text-alt">Email</span>
          </label>
          <input
            type="text"
            placeholder="tony@thyme.com"
            className="input input-bordered input-primary w-full max-w-xs"
            autoComplete="email"
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
            autoComplete="current-password"
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
      </form>
        {Object.values(otherProviders).map((provider) => (
          <ProviderBtn key={provider.name} method="sign in" provider={provider}></ProviderBtn>
      ))}
      <p className="pt-3">Don't have a account? <Link href="/sign-up" className="underline">Sign-Up</Link> </p>
    </div>
  );
};

export default SignIn;
