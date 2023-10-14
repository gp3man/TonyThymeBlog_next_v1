// "use client"

import SignIn from "../../components/form/SignIn";
import {getProviders} from "next-auth/react"
const page = async() => {
  const providers = await getProviders()

  return (
    <div className="w-full h-full">
      <SignIn providers={providers}/>
    </div>
  );
};

export default page;
