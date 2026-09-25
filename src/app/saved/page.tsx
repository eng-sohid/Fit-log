"use client";

import Link from "next/link";
import { useContext, useState } from "react";
import { FitLogContext } from "@/src/components/context/FitLogContext";
import PlanTabs from "@/src/components/shared/my-plan/PlanTabs";
import PlanCard from "@/src/components/shared/my-plan/PlanCard";

const SavedPage = () => {
  const { saved = [] } = useContext(FitLogContext);

  const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">(
    "duration",
  );

  const currentList = [...saved].sort((a, b) => {
    if (sortBy === "duration") {
      return (b.duration || 0) - (a.duration || 0);
    }

    if (sortBy === "calories") {
      return (b.caloriesBurned || 0) - (a.caloriesBurned || 0);
    }

    if (sortBy === "rating") {
      return (b.rating || 0) - (a.rating || 0);
    }

    return 0;
  });

  return (
    <main className="min-h-screen bg-[#08080a] py-10 text-white sm:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase">
            YOUR WORKOUTS
          </p>

          <h1 className="mt-1 text-3xl font-black tracking-tight text-white uppercase sm:text-4xl">
            SAVED
          </h1>

          <p className="mt-1 text-sm text-zinc-400">
            Your saved workouts are here.
          </p>
        </div>

        {/* Tabs */}
        <PlanTabs activeTab="saved" sortBy={sortBy} setSortBy={setSortBy} />

        {/* Saved Workouts */}
        {currentList.length === 0 ? (
          <div className="mt-8 flex flex-col items-center justify-center rounded-3xl border border-dashed border-white/10 bg-[#12141a]/50 px-6 py-20 text-center">
            <h2 className="text-xl font-black tracking-wider text-white uppercase">
              NOTHING HERE YET
            </h2>

            <p className="mt-2 max-w-sm text-xs text-zinc-400">
              You haven&apos;t saved any workouts yet.
            </p>

            <Link
              href="/"
              className="mt-6 rounded-xl bg-[#ccff00] px-6 py-3 text-xs font-black tracking-wider text-black uppercase transition-all hover:scale-105 hover:bg-white"
            >
              Go to workouts
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {currentList.map((workout) => (
              <PlanCard key={workout.id} workout={workout} isSaved={true} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default SavedPage;
