"use client";

import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { FitLogContext } from "@/src/components/context/FitLogContext";
import PlanStats from "@/src/components/shared/my-plan/PlanStats";
import PlanTabs from "@/src/components/shared/my-plan/PlanTabs";
import PlanCard from "@/src/components/shared/my-plan/PlanCard";

const MyPlanPage = () => {
  const { plan = [], saved = [] } = useContext(FitLogContext);
  const params = useParams();
  const router = useRouter();

  const rawTab = Array.isArray(params.tab) ? params.tab[0] : params.tab;
  const activeTab: "plan" | "saved" = rawTab === "saved" ? "saved" : "plan";

  const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">(
    "duration",
  );

  // অচেনা কোনো tab value (যেমন /my-plan/xyz) দিলে "plan" এ পাঠিয়ে দেওয়া
  useEffect(() => {
    if (rawTab !== "plan" && rawTab !== "saved") {
      router.replace("/my-plan/plan");
    }
  }, [rawTab, router]);

  const setActiveTab = (tab: "plan" | "saved") => {
    router.push(`/my-plan/${tab}`);
  };

  const sourceList = activeTab === "plan" ? plan : saved;

  const totalMinutes = sourceList.reduce(
    (total, workout) => total + (workout.duration || 0),
    0,
  );

  const totalCalories = sourceList.reduce(
    (total, workout) => total + (workout.caloriesBurned || 0),
    0,
  );

  const currentList = [...sourceList].sort((a, b) => {
    if (sortBy === "duration") return (b.duration || 0) - (a.duration || 0);
    if (sortBy === "calories")
      return (b.caloriesBurned || 0) - (a.caloriesBurned || 0);
    if (sortBy === "rating") return (b.rating || 0) - (a.rating || 0);
    return 0;
  });

  return (
    <main className="min-h-screen bg-[#08080a] py-10 text-white sm:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase">
            YOUR WORKOUTS
          </p>
          <h1 className="mt-1 text-3xl font-black tracking-tight text-white uppercase sm:text-4xl">
            {activeTab === "plan" ? "MY PLAN" : "SAVED"}
          </h1>
          <p className="mt-1 text-sm text-zinc-400">
            {activeTab === "plan"
              ? "Cap of five lifts for today. Finish them, then load more."
              : "Your saved workouts are here."}
          </p>
        </div>

        <PlanStats
          exercises={sourceList.length}
          minutes={totalMinutes}
          calories={totalCalories}
        />

        <PlanTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        {currentList.length === 0 ? (
          <div className="mt-8 flex flex-col items-center justify-center rounded-3xl border border-dashed border-white/10 bg-[#12141a]/50 px-6 py-20 text-center">
            <h2 className="text-xl font-black tracking-wider text-white uppercase">
              NOTHING HERE YET
            </h2>
            <p className="mt-2 max-w-sm text-xs text-zinc-400">
              {activeTab === "plan"
                ? "Browse the library and add a lift to get today moving."
                : "You haven't saved any workouts yet."}
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
};

export default MyPlanPage;
