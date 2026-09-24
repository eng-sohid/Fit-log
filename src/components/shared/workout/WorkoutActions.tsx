"use client";

import { useContext } from "react";
import { toast } from "react-toastify";
import { FitLogContext } from "../../context/FitLogContext";

interface WorkoutActionsProps {
  workout: {
    id: number;
    name: string;
    image: string;
    muscleGroups: string[];
    equipment: string;
    difficulty: string;
    duration: number;
    caloriesBurned: number;
    sets: number;
    reps: string;
    rating: number;
    description: string;
    instructions: string[];
  };
}

const WorkoutActions = ({ workout }: WorkoutActionsProps) => {
  const { addToPlan, saveWorkout } = useContext(FitLogContext);

  const handleAddToPlan = () => {
    addToPlan(workout);
    toast.success("Added to today's plan");
  };

  const handleSaveWorkout = () => {
    saveWorkout(workout);
    toast.success("Saved for later");
  };

  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <button
        onClick={handleAddToPlan}
        className="rounded-lg bg-black px-5 py-3 font-semibold text-white hover:bg-gray-800"
      >
        Add to today's plan
      </button>

      <button
        onClick={handleSaveWorkout}
        className="rounded-lg border border-black px-5 py-3 font-semibold hover:bg-gray-100"
      >
        Save for later
      </button>
    </div>
  );
};

export default WorkoutActions;
