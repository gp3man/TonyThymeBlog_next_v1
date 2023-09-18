"use client";
import { SessionProvider } from "next-auth/react";
const NextAuthSessionProvider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};
export default NextAuthSessionProvider;
