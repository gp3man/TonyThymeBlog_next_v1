"use client";
import { signOut } from "next-auth/react";
const LogOut = () => {
  return <a onClick={signOut}>Log Out</a>;
};

export default LogOut;
