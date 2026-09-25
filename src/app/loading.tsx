"use client";

import { usePathname } from "next/navigation";

const Loading = () => {
  const pathname = usePathname();

  let loadingText = "Loading...";

  if (pathname === "/") {
    loadingText = "Loading Workouts...";
  } else if (pathname === "/my-plan") {
    loadingText = "Loading My Plan...";
  } else if (pathname === "/saved") {
    loadingText = "Loading Saved...";
  } else if (pathname.startsWith("/workouts/")) {
    loadingText = "Loading Workout...";
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#08080a]">
      <div className="flex flex-col items-center">
        {/* Spinner */}
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-zinc-800 border-t-[#ccff00]" />

        {/* Loading Text */}
        <p className="mt-4 text-sm font-bold tracking-wider text-zinc-400 uppercase">
          {loadingText}
        </p>
      </div>
    </div>
  );
};

export default Loading;
