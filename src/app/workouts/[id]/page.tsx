import { notFound } from "next/navigation";
import { Workout } from "@/src/components/types/workout";
import WorkoutDetails from "@/src/components/shared/workout/WorkoutDetails";
import WorkoutActions from "@/src/components/shared/workout/WorkoutActions";

const WorkoutDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const response = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);

  if (!response.ok) {
    notFound();
  }

  const workout: Workout = await response.json();

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10">
      <WorkoutDetails workout={workout} />

      <WorkoutActions workout={workout} />
    </main>
  );
};

export default WorkoutDetailsPage;
