"use client";

import Image from "next/image";
import { Workout } from "../../types/workout";
import WorkoutActions from "./WorkoutActions";

interface WorkoutDetailsProps {
  workout: Workout;
}

const WorkoutDetails = ({ workout }: WorkoutDetailsProps) => {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 pb-10">
      {/* Left Image Section */}
      <div className="relative h-[280px] sm:h-[400px] lg:h-[540px] w-full overflow-hidden rounded-3xl border border-white/10 lg:col-span-6">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Right Content Section */}
      <div className="flex flex-col justify-between lg:col-span-6">
        <div>
          <h1 className="text-2xl font-black uppercase tracking-tight text-white sm:text-4xl lg:text-5xl">
            {workout.name}
          </h1>

          <p className="mt-3 text-xs sm:text-sm text-zinc-400">
            {workout.description ||
              "A compound press that builds chest thickness, triceps, and pressing power from a stable bench."}
          </p>

          {/* Badges */}
          <div className="mt-4 flex flex-wrap gap-2">
            {workout.muscleGroups?.map((muscle) => (
              <span
                key={muscle}
                className="rounded-md bg-[#ccff00] px-3 py-1 text-xs font-black uppercase text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Specs Table */}
          <div className="mt-6 rounded-2xl border border-white/5 bg-[#12141a] p-4 sm:p-5">
            <div className="grid grid-cols-2 gap-y-3 text-xs">
              <div className="font-bold uppercase text-zinc-500">Equipment</div>
              <div className="text-right font-medium text-white">
                {workout.equipment}
              </div>

              <div className="border-t border-white/5 pt-2.5 font-bold uppercase text-zinc-500">
                Difficulty
              </div>
              <div className="border-t border-white/5 pt-2.5 text-right font-medium text-white">
                {workout.difficulty || "Intermediate"}
              </div>

              <div className="border-t border-white/5 pt-2.5 font-bold uppercase text-zinc-500">
                Sets
              </div>
              <div className="border-t border-white/5 pt-2.5 text-right font-medium text-white">
                {workout.sets || 4}
              </div>

              <div className="border-t border-white/5 pt-2.5 font-bold uppercase text-zinc-500">
                Reps
              </div>
              <div className="border-t border-white/5 pt-2.5 text-right font-medium text-white">
                {workout.reps || "8-11"}
              </div>

              <div className="border-t border-white/5 pt-2.5 font-bold uppercase text-zinc-500">
                Duration
              </div>
              <div className="border-t border-white/5 pt-2.5 text-right font-medium text-white">
                {workout.duration} min
              </div>

              <div className="border-t border-white/5 pt-2.5 font-bold uppercase text-zinc-500">
                Calories
              </div>
              <div className="border-t border-white/5 pt-2.5 text-right font-medium text-white">
                {workout.caloriesBurned} kcal
              </div>

              <div className="border-t border-white/5 pt-2.5 font-bold uppercase text-zinc-500">
                Rating
              </div>
              <div className="border-t border-white/5 pt-2.5 text-right font-medium text-white">
                {workout.rating}
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-6 sm:mt-8">
            <h3 className="text-xs font-black uppercase tracking-wider text-white">
              INSTRUCTIONS
            </h3>
            <ol className="mt-3 list-decimal space-y-2 pl-4 text-xs text-zinc-400">
              {workout.instructions && workout.instructions.length > 0 ? (
                workout.instructions.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))
              ) : (
                <>
                  <li>
                    Lie on the bench with eyes under the bar and feet planted.
                  </li>
                  <li>
                    Unrack with locked elbows and lower the bar to mid-chest.
                  </li>
                  <li>
                    Press up in a slight arc until elbows lock without bouncing.
                  </li>
                  <li>
                    Keep shoulder blades pinched and a natural arch in the back.
                  </li>
                </>
              )}
            </ol>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 pt-4">
          <WorkoutActions workout={workout} />
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetails;
