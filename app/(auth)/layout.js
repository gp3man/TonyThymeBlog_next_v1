import getProviders from "next-auth/react"
const AuthLayout = async({children}) => {
  const providers = await getProviders()

  return ( <section className="my-14 py-3 flex flex-col align-center w-full h-screen">
    {children, providers}
  </section> );
}

export default AuthLayout;
