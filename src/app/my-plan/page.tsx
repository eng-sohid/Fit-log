"use client";

import Link from "next/link";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { FitLogContext } from "../../components/context/FitLogContext";

const MyPlanPage = () => {
  const { plan, saved, removeFromPlan, markAsDone } = useContext(FitLogContext);

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

  const handleRemove = (id: number) => {
    removeFromPlan(id);
    toast.success("Workout removed from plan");
  };

  const handleDone = (id: number) => {
    markAsDone(id);
    toast.success("Workout marked as done");
  };

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold uppercase">MY PLAN</h1>

        <p className="mt-2 text-gray-500">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {/* Metrics */}
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border bg-white p-5">
          <p className="text-sm text-gray-500">Exercises</p>
          <p className="mt-2 text-3xl font-bold">{plan.length}</p>
        </div>

        <div className="rounded-2xl border bg-white p-5">
          <p className="text-sm text-gray-500">Minutes</p>
          <p className="mt-2 text-3xl font-bold">{totalMinutes}</p>
        </div>

        <div className="rounded-2xl border bg-white p-5">
          <p className="text-sm text-gray-500">Calories</p>
          <p className="mt-2 text-3xl font-bold">{totalCalories}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-8 flex gap-2 border-b">
        <button
          onClick={() => setActiveTab("plan")}
          className={`px-4 py-3 text-sm font-semibold ${
            activeTab === "plan" ? "border-b-2 border-black" : "text-gray-500"
          }`}
        >
          Today&apos;s Plan
        </button>

        <button
          onClick={() => setActiveTab("saved")}
          className={`px-4 py-3 text-sm font-semibold ${
            activeTab === "saved" ? "border-b-2 border-black" : "text-gray-500"
          }`}
        >
          Saved
        </button>
      </div>

      {/* Workout List */}
      {currentList.length === 0 ? (
        <div className="mt-10 text-center">
          <h2 className="text-2xl font-bold">NOTHING HERE YET</h2>

          <p className="mt-2 text-gray-500">
            Browse the library and add a lift to get today moving.
          </p>

          <Link
            href="/"
            className="mt-5 inline-block rounded-lg bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-gray-800"
          >
            Go to workouts
          </Link>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {currentList.map((workout) => (
            <div
              key={workout.id}
              className="relative overflow-hidden rounded-2xl border bg-white shadow-sm"
            >
              {/* Remove Button */}
              {activeTab === "plan" && (
                <button
                  onClick={() => handleRemove(workout.id)}
                  className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg font-bold shadow-md hover:bg-gray-100"
                  aria-label="Remove workout"
                >
                  ×
                </button>
              )}

              <img
                src={workout.image}
                alt={workout.name}
                className="h-48 w-full object-cover"
              />

              <div className="p-5">
                <h2 className="text-xl font-bold">{workout.name}</h2>

                <p className="mt-2 text-sm text-gray-500">
                  {workout.equipment}
                </p>

                <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
                  <span>{workout.duration} min</span>
                  <span>{workout.caloriesBurned} kcal</span>
                  <span>⭐ {workout.rating}</span>
                </div>

                {/* View Details */}
                <Link
                  href={`/workouts/${workout.id}`}
                  className="mt-4 block w-full rounded-lg bg-black px-4 py-3 text-center text-sm font-semibold text-white hover:bg-gray-800"
                >
                  View Details
                </Link>

                {/* Mark as Done */}
                {activeTab === "plan" && (
                  <button
                    onClick={() => handleDone(workout.id)}
                    className="mt-3 w-full rounded-lg border border-black px-4 py-3 text-sm font-semibold hover:bg-black hover:text-white"
                  >
                    Mark as Done
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default MyPlanPage;
