"use client";

import Link from "next/link";
import { useContext, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { FitLogContext } from "@/src/components/context/FitLogContext";
import PlanStats from "@/src/components/shared/my-plan/PlanStats";
import PlanTabs from "@/src/components/shared/my-plan/PlanTabs";
import PlanCard from "@/src/components/shared/my-plan/PlanCard";

function MyPlanContent() {
  const { plan = [], saved = [] } = useContext(FitLogContext);
  const searchParams = useSearchParams();
  const router = useRouter();

  const tabParam = searchParams.get("tab");

  const activeTab: "plan" | "saved" = tabParam === "saved" ? "saved" : "plan";

  const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">(
    "duration",
  );

  const handleTabChange = (tab: "plan" | "saved") => {
    router.push(`/my-plan?tab=${tab}`, { scroll: false });
  };

  const totalMinutes = plan.reduce(
    (total, workout) => total + (workout.duration || 0),
    0,
  );

  const totalCalories = plan.reduce(
    (total, workout) => total + (workout.caloriesBurned || 0),
    0,
  );

  const rawList = activeTab === "plan" ? plan : saved;

  // Sorting Logic
  const currentList = [...rawList].sort((a, b) => {
    if (sortBy === "duration") return (b.duration || 0) - (a.duration || 0);
    if (sortBy === "calories")
      return (b.caloriesBurned || 0) - (a.caloriesBurned || 0);
    if (sortBy === "rating") return (b.rating || 0) - (a.rating || 0);
    return 0;
  });

  return (
    <main className="min-h-screen bg-[#08080a] text-white py-10 sm:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase">
            YOUR WORKOUTS
          </p>
          <h1 className="mt-1 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
            MY PLAN
          </h1>
          <p className="mt-1 text-sm text-zinc-400">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Stats Component */}
        <PlanStats
          exercises={plan.length}
          minutes={totalMinutes}
          calories={totalCalories}
        />

        {/* Tabs & Sort Filter */}
        <PlanTabs
          activeTab={activeTab}
          setActiveTab={handleTabChange}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        {/* Workout List or Empty State */}
        {currentList.length === 0 ? (
          <div className="mt-8 flex flex-col items-center justify-center rounded-3xl border border-dashed border-white/10 bg-[#12141a]/50 px-6 py-20 text-center">
            <h2 className="text-xl font-black uppercase tracking-wider text-white">
              NOTHING HERE YET
            </h2>

            <p className="mt-2 max-w-sm text-xs text-zinc-400">
              {activeTab === "saved"
                ? "You haven't saved any workouts yet."
                : "Browse the library and add a lift to get today moving."}
            </p>

            <Link
              href="/"
              className="mt-6 rounded-xl bg-[#ccff00] px-6 py-3 text-xs font-black uppercase tracking-wider text-black transition-all hover:bg-white hover:scale-105"
            >
              Go to workouts
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {currentList.map((workout) => (
              <PlanCard
                key={workout.id}
                workout={workout}
                isSaved={activeTab === "saved"}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default function MyPlanPage() {
  return (
    <Suspense
      fallback={<div className="p-10 text-center text-white">Loading...</div>}
    >
      <MyPlanContent />
    </Suspense>
  );
}
