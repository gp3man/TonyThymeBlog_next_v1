import SignUp from "../../components/form/SignUp";
import {getProviders} from "next-auth/react"
const page = async() => {
  const providers = await getProviders()

  return (
    <div className="w-full h-full">
      <SignUp providers={providers} />
    </div>
  );
};

export default page;
