"use client";

import {
  createContext,
  ReactNode,
  useState,
  useSyncExternalStore,
} from "react";
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

const subscribe = (listener: () => void) => {
  window.addEventListener("storage", listener);
  return () => window.removeEventListener("storage", listener);
};

const getPlanSnapshot = () => localStorage.getItem("fitlog_plan") || "[]";
const getSavedSnapshot = () => localStorage.getItem("fitlog_saved") || "[]";
const getServerSnapshot = () => "[]";

export default function FitLogProvider({ children }: { children: ReactNode }) {
  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

  const rawPlan = useSyncExternalStore(
    subscribe,
    getPlanSnapshot,
    getServerSnapshot,
  );
  const rawSaved = useSyncExternalStore(
    subscribe,
    getSavedSnapshot,
    getServerSnapshot,
  );

  const [planOverride, setPlanOverride] = useState<Workout[] | null>(null);
  const [savedOverride, setSavedOverride] = useState<Workout[] | null>(null);

  const plan: Workout[] = planOverride ?? (JSON.parse(rawPlan) as Workout[]);
  const saved: Workout[] = savedOverride ?? (JSON.parse(rawSaved) as Workout[]);

  const addToPlan = (workout: Workout) => {
    const updated = plan.some((item) => item.id === workout.id)
      ? plan
      : [...plan, workout];
    setPlanOverride(updated);
    localStorage.setItem("fitlog_plan", JSON.stringify(updated));
  };

  const saveWorkout = (workout: Workout) => {
    const updated = saved.some((item) => item.id === workout.id)
      ? saved
      : [...saved, workout];
    setSavedOverride(updated);
    localStorage.setItem("fitlog_saved", JSON.stringify(updated));
  };

  const removeFromPlan = (id: number) => {
    const updated = plan.filter((workout) => workout.id !== id);
    setPlanOverride(updated);
    localStorage.setItem("fitlog_plan", JSON.stringify(updated));
  };

  const removeFromSaved = (id: number) => {
    const updated = saved.filter((workout) => workout.id !== id);
    setSavedOverride(updated);
    localStorage.setItem("fitlog_saved", JSON.stringify(updated));
  };

  const markAsDone = (id: number) => {
    const updated = plan.map((workout) =>
      workout.id === id ? { ...workout, completed: true } : workout,
    );
    setPlanOverride(updated);
    localStorage.setItem("fitlog_plan", JSON.stringify(updated));
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
