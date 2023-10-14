import {signIn} from "next-auth/react"
const ProviderBtn = ({provider}) => {
  return ( <button onClick={() => signIn(provider.id, { callbackUrl: "http://localhost:3000" })} className="btn btn-outline btn-accent center ">
{"Sign In With " + provider.name}
  </button> );
}

export default ProviderBtn;
