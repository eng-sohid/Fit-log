import WorkoutLibrary from "@/src/components/shared/home/WorkoutLibrary";
import { Workout } from "@/src/components/types/workout";

const getWorkouts = async (): Promise<Workout[]> => {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch workouts");
  }

  const data = await response.json();
  return data;
};

const LibraryPage = async () => {
  const workouts = await getWorkouts();

  return (
    <main className="min-h-screen bg-[#08080a] text-white">
      <WorkoutLibrary workouts={workouts} />
    </main>
  );
};

export default LibraryPage;
