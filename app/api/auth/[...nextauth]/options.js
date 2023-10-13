import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import AppleProvider from "next-auth/providers/apple";
import InstagramProvider from "next-auth/providers/instagram";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      }),
      AppleProvider({
        clientId: process.env.APPLE_ID,
        clientSecret: process.env.APPLE_SECRET
      }),
      InstagramProvider({
        clientId: process.env.INSTAGRAM_CLIENT_ID,
        clientSecret: process.env.INSTAGRAM_CLIENT_SECRET
      })
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
