"use client";
import { useRouter } from "next/navigation";
const NotHelpfulButton = ({ reviewId, reader, count }) => {
  const router = useRouter();
  const handleFalse = async () => {
    const res = await fetch("/api/helpful", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        reviewId: reviewId,
        reader: reader,
        grade: false,
      }),
    });
    if (res.ok) {
      router.refresh();
    }
  };
  return (
    <>
      <button
        className="inline-flex items-center text-sm font-medium text-accent hover:underline cursor-pointer"
        onClick={handleFalse}
      >
        <svg
          className="w-3.5 h-3.5 mr-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 18"
        >
          <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z" />
        </svg>
        Not Helpful
      </button>
      {count ? (
        <span className="text-xs font-extralight">{"(" + count + ")"}</span>
      ) : (
        <span>{"   "}</span>
      )}
    </>
  );
};

export default NotHelpfulButton;
