"use client";

import Link from "next/link";
import { useContext } from "react";
import { toast } from "react-toastify";
import { Workout } from "../../types/workout";
import { FitLogContext } from "../../context/FitLogContext";

interface PlanCardProps {
  workout: Workout;
  isSaved?: boolean;
}

const PlanCard = ({ workout, isSaved = false }: PlanCardProps) => {
  const { removeFromPlan, removeFromSaved, markAsDone } =
    useContext(FitLogContext);

  const handleRemove = () => {
    if (isSaved) {
      removeFromSaved(workout.id);
      toast.success("Removed from saved");
      return;
    }

    removeFromPlan(workout.id);
    toast.success("Workout removed from plan");
  };

  const handleDone = () => {
    markAsDone(workout.id);
    toast.success("Workout marked as done");
  };

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Remove Button */}
      <button
        onClick={handleRemove}
        className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg font-bold text-gray-700 shadow-md transition hover:bg-black hover:text-white"
        aria-label="Remove workout"
      >
        ×
      </button>

      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={workout.image}
          alt={workout.name}
          className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h2 className="text-xl font-bold tracking-tight">{workout.name}</h2>

        <p className="mt-2 text-sm text-gray-500">{workout.equipment}</p>

        {/* Stats */}
        <div className="mt-5 grid grid-cols-3 gap-2">
          <div className="rounded-xl bg-gray-50 p-3 text-center">
            <p className="text-xs text-gray-500">Duration</p>
            <p className="mt-1 text-sm font-bold">{workout.duration} min</p>
          </div>

          <div className="rounded-xl bg-gray-50 p-3 text-center">
            <p className="text-xs text-gray-500">Calories</p>
            <p className="mt-1 text-sm font-bold">{workout.caloriesBurned}</p>
          </div>

          <div className="rounded-xl bg-gray-50 p-3 text-center">
            <p className="text-xs text-gray-500">Rating</p>
            <p className="mt-1 text-sm font-bold">⭐ {workout.rating}</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-5 flex gap-2">
          <Link
            href={`/workouts/${workout.id}`}
            className="flex-1 rounded-xl border border-black px-3 py-3 text-center text-sm font-semibold transition hover:bg-black hover:text-white"
          >
            View Details
          </Link>

          {!isSaved && (
            <button
              onClick={handleDone}
              className="flex-1 rounded-xl bg-[#ccff00] px-3 py-3 text-sm font-bold text-black transition hover:bg-black hover:text-white"
            >
              Mark as Done
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
