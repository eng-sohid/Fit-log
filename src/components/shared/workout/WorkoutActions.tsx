"use client";

import { useContext } from "react";
import { FitLogContext } from "@/src/components/context/FitLogContext";
import { Workout } from "../../types/workout";

interface WorkoutActionsProps {
  workout: Workout;
}

export default function WorkoutActions({ workout }: WorkoutActionsProps) {
  const {
    plan = [],
    saved = [],
    addToPlan,
    saveWorkout,
  } = useContext(FitLogContext);

  const isPlanned = plan.some((item) => item.id === workout.id);
  const isSaved = saved.some((item) => item.id === workout.id);

  const handleAddToPlan = () => {
    if (isPlanned) {
      alert("Already added to today's plan!");
      return;
    }
    if (plan.length >= 5) {
      alert("You can only add up to 5 lifts for today!");
      return;
    }
    addToPlan(workout);
    alert("Added to today's plan!");
  };

  const handleSaveWorkout = () => {
    if (isSaved) {
      alert("Already saved for later!");
      return;
    }
    saveWorkout(workout);
    alert("Saved for later!");
  };

  return (
    <div className="flex flex-col gap-3 sm:flex-row w-full pb-6">
      <button
        onClick={handleAddToPlan}
        disabled={isPlanned}
        className={`flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-xs font-black uppercase tracking-wider transition-all ${
          isPlanned
            ? "bg-zinc-800 text-zinc-500 cursor-not-allowed"
            : "bg-[#ccff00] text-black hover:bg-white active:scale-95"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
        {isPlanned ? "Added to Plan" : "Add to today's plan"}
      </button>

      <button
        onClick={handleSaveWorkout}
        disabled={isSaved}
        className={`flex w-full items-center justify-center gap-2 rounded-xl border px-5 py-3.5 text-xs font-black uppercase tracking-wider transition-all ${
          isSaved
            ? "border-zinc-800 bg-zinc-900/50 text-zinc-500 cursor-not-allowed"
            : "border-white/10 bg-zinc-900 text-white hover:border-white/20 active:scale-95"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
          />
        </svg>
        {isSaved ? "Saved for Later" : "Save for later"}
      </button>
    </div>
  );
}
