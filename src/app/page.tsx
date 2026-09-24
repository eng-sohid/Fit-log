import Hero from "../components/shared/home/Hero";
import WorkoutLibrary from "../components/shared/home/WorkoutLibrary";
import { Workout } from "../components/types/workout";
import Navbar from "../components/shared/Navbar";

const getWorkouts = async (): Promise<Workout[]> => {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog");

  if (!response.ok) {
    throw new Error("Failed to fetch workouts");
  }

  const data = await response.json();

  return data;
};

const HomePage = async () => {
  const workouts = await getWorkouts();

  return (
    <main>
      <Hero />

      <WorkoutLibrary workouts={workouts} />
    </main>
  );
};

export default HomePage;
