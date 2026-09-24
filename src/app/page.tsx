import Hero from "@/src/components/shared/home/Hero";
import WorkoutLibrary from "@/src/components/shared/home/WorkoutLibrary";
import { Workout } from "../components/types/workout";

const getWorkouts = async (): Promise<Workout[]> => {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog", {
    cache: "no-store", // Ensure dynamic fetch if data updates frequently
  });

  if (!response.ok) {
    throw new Error("Failed to fetch workouts");
  }

  const data = await response.json();
  return data;
};

const HomePage = async () => {
  const workouts = await getWorkouts();

  return (
    <main className="min-h-screen bg-[#08080a] text-white">
      <Hero />
      <WorkoutLibrary workouts={workouts} />
    </main>
  );
};

export default HomePage;
