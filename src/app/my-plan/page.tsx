"use client";

import Link from "next/link";
import { useContext, useState } from "react";
import { FitLogContext } from "../../components/context/FitLogContext";
import PlanStats from "../../components/shared/my-plan/PlanStats";
import PlanTabs from "../../components/shared/my-plan/PlanTabs";
import PlanCard from "../../components/shared/my-plan/PlanCard";

const MyPlanPage = () => {
  const { plan, saved } = useContext(FitLogContext);

  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

  const totalMinutes = plan.reduce(
    (total, workout) => total + workout.duration,
    0,
  );

  const totalCalories = plan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0,
  );

  const currentList = activeTab === "plan" ? plan : saved;

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10">
      {/* Header */}
      <div>
        <p className="text-sm font-bold tracking-[0.2em] text-gray-500">
          YOUR WORKOUTS
        </p>

        <h1 className="mt-2 text-4xl font-black tracking-tight">MY PLAN</h1>

        <p className="mt-3 max-w-xl text-gray-500">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {/* Stats */}
      <PlanStats
        exercises={plan.length}
        minutes={totalMinutes}
        calories={totalCalories}
      />

      {/* Tabs */}
      <PlanTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Workout List */}
      {currentList.length === 0 ? (
        <div className="mt-12 rounded-3xl border border-dashed border-gray-300 bg-gray-50 px-6 py-16 text-center">
          <p className="text-sm font-bold tracking-[0.2em] text-gray-400">
            EMPTY
          </p>

          <h2 className="mt-3 text-2xl font-black">NOTHING HERE YET</h2>

          <p className="mx-auto mt-3 max-w-md text-gray-500">
            Browse the library and add a lift to get today moving.
          </p>

          <Link
            href="/"
            className="mt-6 inline-flex rounded-xl bg-black px-6 py-3 text-sm font-bold text-white transition hover:bg-gray-800"
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
    </main>
  );
};

export default MyPlanPage;
