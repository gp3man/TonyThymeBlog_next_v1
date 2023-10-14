import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/lib/db";
import { compare } from "bcrypt";
export const authOptions = {
  adapter: PrismaAdapter(db),
  pages: {
    signIn: "/sign-in",
  },
  providers: [
    GoogleProvider({
      profile(profile) {
        console.log(profile);
      },
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "jondoe@mail.com",
        },
        password: {
          label: "Password: ",
          type: "password",
        },
      },
      async authorize(credentials) {
        //Where you need to retrieve user data to verify with credentials Docs: https://next-auth.js.org/configuration/providers/credentials
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        const existingUser = await db.user.findUnique({
          where: { email: `${credentials?.email}` },
        });
        if (!existingUser) {
          console.log('bug')
          return null;
        }
        const passwordMatch = await compare(
          credentials?.password,
          existingUser.password
        );

        if (!passwordMatch) {
          return null;
        }
        return {
          id: `${existingUser.id}`,
          name: existingUser.username,
          email: existingUser.email,
        };
      },
    }),
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
