import NextAuth from "next-auth";
import GoogleProvider, {GoogleProfile} from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
      GoogleProvider({
        profile(profile){
          console.log(profile)
        },
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      }),
      Credentials({
        name: "Credentials",
        credentials: {
          username: {
            label: "Username: ",
            type: "text",
            placeholder: "your-chef-name"
          },
          password: {
            label: "Password: ",
            type: "password",
            placeholder: "########"
          },
        },
        async authorize(credentials){
          //Where you need to retrieve user data to verify with credentials Docs: https://next-auth.js.org/configuration/providers/credentials
          const user = {id: "42", name: "Greg", password: "nextauth"}

          if (credentials?.username === user.name && credentials?.password === user.password){
            return user
          }else{
            return null
          }
        }
      })
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
