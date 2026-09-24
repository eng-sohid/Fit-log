import { notFound } from "next/navigation";
import { Workout } from "@/src/components/types/workout";
import WorkoutDetails from "@/src/components/shared/workout/WorkoutDetails";

const WorkoutDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const response = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${id}`,
    {
      cache: "no-store",
    },
  );

  if (!response.ok) {
    notFound();
  }

  const workout: Workout = await response.json();

  return (
    <main className="min-h-screen bg-[#08080a] text-white py-10 sm:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <WorkoutDetails workout={workout} />
      </div>
    </main>
  );
};

export default WorkoutDetailsPage;
