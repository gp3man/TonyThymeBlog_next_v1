import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/options";
import SignIn from "../components/form/McSignin";
import { getProviders } from "next-auth/react";

const preps = async () => {
  const session = await getServerSession(authOptions);
  const providers = await getProviders();
  const { credentials, mailchimp, ...otherProviders } = providers;
  return (
    <>
      {/* {!session ?? redirect("/signin")} */}
      <div>
        Welcome!
        <SignIn providers={providers} />
      </div>
    </>
  );
};

export default preps;
