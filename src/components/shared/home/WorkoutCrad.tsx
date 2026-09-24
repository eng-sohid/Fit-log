"use client";

import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { toast } from "react-toastify";
import { Workout } from "../../types/workout";
import { FitLogContext } from "../../context/FitLogContext";
import { Clock, Flame, Star } from "lucide-react";

interface WorkoutCardProps {
  workout: Workout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  const { plan = [], addToPlan } = useContext(FitLogContext);

  const isAdded = plan.some((item) => item.id === workout.id);

  const handleAddToPlan = () => {
    if (isAdded) {
      toast.info("Already added to today's plan");
      return;
    }

    addToPlan(workout);
    toast.success("Added to today's plan");
  };

  return (
    <article className="group overflow-hidden rounded-2xl border border-white/5 bg-[#12141a] transition duration-300 hover:border-white/20">
      {/* Image Section with Overlay Pills */}
      <Link
        href={`/workouts/${workout.id}`}
        className="relative block h-48 w-full overflow-hidden"
      >
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#12141a] via-transparent to-transparent opacity-80" />

        {/* Muscle Groups - Floating Neon Pills */}
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          {workout.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-md bg-[#ccff00] px-2 py-0.5 text-[10px] font-black uppercase text-black"
            >
              {muscle}
            </span>
          ))}
        </div>
      </Link>

      {/* Card Body Content */}
      <div className="p-4 pt-1">
        {/* Title */}
        <Link href={`/workouts/${workout.id}`}>
          <h2 className="text-base font-black tracking-tight text-white uppercase transition hover:text-[#ccff00]">
            {workout.name}
          </h2>
        </Link>

        {/* Equipment */}
        <p className="mt-0.5 text-xs text-zinc-500">{workout.equipment}</p>

        {/* Inline Metrics Info */}
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
            <Star className="h-3.5 w-3.5 text-[#ccff00] fill-[#ccff00]" />
            <span className="font-bold text-white">{workout.rating}</span>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={handleAddToPlan}
          className={`mt-4 w-full rounded-xl py-2.5 text-xs font-black uppercase tracking-wide transition-all ${
            isAdded
              ? "cursor-default bg-zinc-800 text-zinc-500"
              : "bg-[#ccff00] text-black hover:bg-white hover:scale-[1.02]"
          }`}
        >
          {isAdded ? "✓ Added to Plan" : "Add to Today's Plan"}
        </button>
      </div>
    </article>
  );
};

export default WorkoutCard;
