"use client";

import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { toast } from "react-toastify";
import { Workout } from "../../types/workout";
import { FitLogContext } from "@/src/components/context/FitLogContext";
import { Clock, Flame, Star, X } from "lucide-react";

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
    <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#12141a] transition duration-300 hover:border-white/20">
      {/* Delete/Remove Icon */}
      <button
        onClick={handleRemove}
        className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-zinc-400 backdrop-blur-md transition hover:bg-red-500 hover:text-white"
        aria-label="Remove workout"
      >
        <X className="h-4 w-4" />
      </button>

      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#12141a] via-transparent to-transparent opacity-80" />
      </div>

      {/* Body Content */}
      <div className="p-4 pt-2">
        <h2 className="text-base font-black uppercase tracking-tight text-white">
          {workout.name}
        </h2>
        <p className="mt-0.5 text-xs text-zinc-500">{workout.equipment}</p>

        {/* Stats Inline */}
        <div className="mt-4 flex items-center justify-between text-xs text-zinc-400">
          <div className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5 text-zinc-500" />
            <span>{workout.duration} min</span>
          </div>

          <div className="flex items-center gap-1">
            <Flame className="h-3.5 w-3.5 text-zinc-500" />
            <span>{workout.caloriesBurned} kcal</span>
          </div>

          <div className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-[#ccff00] text-[#ccff00]" />
            <span className="font-bold text-white">{workout.rating}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-5 flex gap-2">
          <Link
            href={`/workouts/${workout.id}`}
            className="flex-1 rounded-xl border border-white/10 bg-transparent py-2.5 text-center text-xs font-bold uppercase tracking-wider text-white transition hover:bg-white/10"
          >
            Details
          </Link>

          {!isSaved && (
            <button
              onClick={handleDone}
              className="flex-1 rounded-xl bg-[#ccff00] py-2.5 text-xs font-black uppercase tracking-wider text-black transition hover:bg-white"
            >
              Done
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
