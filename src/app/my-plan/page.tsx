"use client";

import Link from "next/link";
import { useContext, useState } from "react";
import { FitLogContext } from "@/src/components/context/FitLogContext";
import PlanStats from "@/src/components/shared/my-plan/PlanStats";
import PlanTabs from "@/src/components/shared/my-plan/PlanTabs";
import PlanCard from "@/src/components/shared/my-plan/PlanCard";

const MyPlanPage = () => {
  const { plan = [], saved = [] } = useContext(FitLogContext);
  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

  const totalMinutes = plan.reduce(
    (total, workout) => total + (workout.duration || 0),
    0,
  );

  const totalCalories = plan.reduce(
    (total, workout) => total + (workout.caloriesBurned || 0),
    0,
  );

  const currentList = activeTab === "plan" ? plan : saved;

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

        {/* Tabs Component */}
        <PlanTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Workout List or Empty State */}
        {currentList.length === 0 ? (
          <div className="mt-8 flex flex-col items-center justify-center rounded-3xl border border-dashed border-white/10 bg-[#12141a]/50 px-6 py-20 text-center">
            <h2 className="text-xl font-black uppercase tracking-wider text-white">
              NOTHING HERE YET
            </h2>

            <p className="mt-2 max-w-sm text-xs text-zinc-400">
              Browse the library and add a lift to get today moving.
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
};

export default MyPlanPage;
