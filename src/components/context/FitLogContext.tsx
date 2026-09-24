"use client";

import { createContext, ReactNode, useEffect, useState } from "react";
import { Workout } from "../types/workout";

interface FitLogContextType {
  plan: Workout[];
  saved: Workout[];
  activeTab: "plan" | "saved";
  setActiveTab: (tab: "plan" | "saved") => void;
  addToPlan: (workout: Workout) => void;
  saveWorkout: (workout: Workout) => void;
  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;
  markAsDone: (id: number) => void;
}

export const FitLogContext = createContext<FitLogContextType>({
  plan: [],
  saved: [],
  activeTab: "plan",
  setActiveTab: () => {},
  addToPlan: () => {},
  saveWorkout: () => {},
  removeFromPlan: () => {},
  removeFromSaved: () => {},
  markAsDone: () => {},
});

export default function FitLogProvider({ children }: { children: ReactNode }) {
  // useState-এর ভেতরেই সরাসরি LocalStorage থেকে ডাটা লোড করা হচ্ছে (No Sync Issue)
  const [plan, setPlan] = useState<Workout[]>(() => {
    if (typeof window !== "undefined") {
      try {
        const savedPlan = localStorage.getItem("fitlog_plan");
        return savedPlan ? JSON.parse(savedPlan) : [];
      } catch {
        return [];
      }
    }
    return [];
  });

  const [saved, setSaved] = useState<Workout[]>(() => {
    if (typeof window !== "undefined") {
      try {
        const savedSaved = localStorage.getItem("fitlog_saved");
        return savedSaved ? JSON.parse(savedSaved) : [];
      } catch {
        return [];
      }
    }
    return [];
  });

  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

  // ডাটা পরিবর্তন হলে LocalStorage-এ সেভ হবে
  useEffect(() => {
    localStorage.setItem("fitlog_plan", JSON.stringify(plan));
  }, [plan]);

  useEffect(() => {
    localStorage.setItem("fitlog_saved", JSON.stringify(saved));
  }, [saved]);

  const addToPlan = (workout: Workout) => {
    setPlan((prev) => {
      if (prev.some((item) => item.id === workout.id)) return prev;
      return [...prev, workout];
    });
  };

  const saveWorkout = (workout: Workout) => {
    setSaved((prev) => {
      if (prev.some((item) => item.id === workout.id)) return prev;
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
        activeTab,
        setActiveTab,
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
}
