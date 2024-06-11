"use client";

import Link from "next/link";

const error = ({ error, reset }) => {
  return (
    <main className="grid min-h-screen place-items-center px-6 py-24 sm:py-32 lg:py-8">
      <div className="text-center">
        <p className="text-base font-semibold text-error">There was a problem</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-base-content "> {"Something went wrong"}</h1>
        <p className="mt-6 text-base leading-7 text-zinc-600"> Please try again later or contact support if problem persist.</p>
      </div>
      <div className="mt-10 flex items-center justify-center gap-x-6">
      <button className="btn btn-warning" onClick={reset}>Try Again</button>
      <Link href="/" className="btn btn-accent"> Go Home</Link>
      </div>
    </main>
  );
};

export default error;
