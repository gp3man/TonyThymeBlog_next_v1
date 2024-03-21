import { signIn } from "next-auth/react";
const ProviderBtn = ({ provider }) => {
  return (
    <button
      onClick={() =>
        signIn(provider.id, { callbackUrl: (process.env.NEXTAUTH_URL)})
      }
      className="btn btn-outline btn-accent center px-4"
    >
      {"Sign In With " + provider.name}
    </button>
  );
};

export default ProviderBtn;
