"use client";

import { createContext, ReactNode, useState } from "react";
import { Workout } from "../types/workout";

interface FitLogContextType {
  plan: Workout[];
  saved: Workout[];
  addToPlan: (workout: Workout) => void;
  saveWorkout: (workout: Workout) => void;
  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;
  markAsDone: (id: number) => void;
}

export const FitLogContext = createContext<FitLogContextType>({
  plan: [],
  saved: [],
  addToPlan: () => {},
  saveWorkout: () => {},
  removeFromPlan: () => {},
  removeFromSaved: () => {},
  markAsDone: () => {},
});

interface FitLogProviderProps {
  children: ReactNode;
}

const FitLogProvider = ({ children }: FitLogProviderProps) => {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);

  const addToPlan = (workout: Workout) => {
    setPlan((prev) => {
      const alreadyExists = prev.some((item) => item.id === workout.id);

      if (alreadyExists) {
        return prev;
      }

      return [...prev, workout];
    });
  };

  const saveWorkout = (workout: Workout) => {
    setSaved((prev) => {
      const alreadyExists = prev.some((item) => item.id === workout.id);

      if (alreadyExists) {
        return prev;
      }

      return [...prev, workout];
    });
  };

  const removeFromPlan = (id: number) => {
    setPlan((prev) => prev.filter((workout) => workout.id !== id));
  };

  const removeFromSaved = (id: number) => {
    setSaved((prev) => prev.filter((workout) => workout.id !== id));
  };

  const markAsDone = (id: number) => {
    setPlan((prev) => prev.filter((workout) => workout.id !== id));
  };

  return (
    <FitLogContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        saveWorkout,
        removeFromPlan,
        removeFromSaved,
        markAsDone,
      }}
    >
      {children}
    </FitLogContext.Provider>
  );
};

export default FitLogProvider;
