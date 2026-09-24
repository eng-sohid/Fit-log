"use client";

import Link from "next/link";
import { useContext } from "react";
import { Workout } from "../../types/workout";
import FitLogProvider, { FitLogContext } from "../../context/FitLogContext";

interface WorkoutCardProps {
  workout: Workout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  const { addToPlan } = useContext(FitLogContext);

  return (
    <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
      <img
        src={workout.image}
        alt={workout.name}
        className="h-48 w-full object-cover"
      />

      <div className="p-5">
        <div className="flex flex-wrap gap-2">
          {workout.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium"
            >
              {muscle}
            </span>
          ))}
        </div>

        <Link href={`/workouts/${workout.id}`}>
          <h2 className="mt-4 text-xl font-bold hover:underline">
            {workout.name}
          </h2>
        </Link>

        <p className="mt-1 text-sm text-gray-500">{workout.equipment}</p>

        <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
          <span>{workout.duration} min</span>
          <span>{workout.caloriesBurned} kcal</span>
          <span>⭐ {workout.rating}</span>
        </div>

        <button
          onClick={() => addToPlan(workout)}
          className="mt-5 w-full rounded-lg bg-black px-4 py-3 text-sm font-semibold text-white hover:bg-gray-800"
        >
          Add to Plan
        </button>
      </div>
    </div>
  );
};

export default WorkoutCard;
