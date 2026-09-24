import { notFound } from "next/navigation";
import { Workout } from "@/src/components/types/workout";
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
      <div className="overflow-hidden rounded-3xl border bg-white shadow-sm">
        <div className="grid lg:grid-cols-2">
          {/* Left Side - Image */}
          <div className="min-h-[400px]">
            <img
              src={workout.image}
              alt={workout.name}
              className="h-full min-h-[400px] w-full object-cover"
            />
          </div>

          {/* Right Side - Details */}
          <div className="p-6 sm:p-8 lg:p-10">
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium"
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="mt-5 text-3xl font-bold sm:text-4xl">
              {workout.name}
            </h1>

            {/* Description */}
            <p className="mt-4 leading-7 text-gray-600">
              {workout.description}
            </p>

            {/* Specs */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-xl border p-4">
                <p className="text-sm text-gray-500">Equipment</p>
                <p className="mt-1 font-semibold">{workout.equipment}</p>
              </div>

              <div className="rounded-xl border p-4">
                <p className="text-sm text-gray-500">Difficulty</p>
                <p className="mt-1 font-semibold">{workout.difficulty}</p>
              </div>

              <div className="rounded-xl border p-4">
                <p className="text-sm text-gray-500">Duration</p>
                <p className="mt-1 font-semibold">{workout.duration} min</p>
              </div>

              <div className="rounded-xl border p-4">
                <p className="text-sm text-gray-500">Calories</p>
                <p className="mt-1 font-semibold">
                  {workout.caloriesBurned} kcal
                </p>
              </div>
            </div>

            {/* Sets & Reps + Rating */}
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="rounded-xl border p-4">
                <p className="text-sm text-gray-500">Sets & Reps</p>
                <p className="mt-1 font-semibold">
                  {workout.sets} sets × {workout.reps}
                </p>
              </div>

              <div className="rounded-xl border p-4">
                <p className="text-sm text-gray-500">Rating</p>
                <p className="mt-1 font-semibold">⭐ {workout.rating}</p>
              </div>
            </div>

            {/* Instructions */}
            <div className="mt-8">
              <h2 className="text-xl font-bold">Instructions</h2>

              <ol className="mt-4 list-decimal space-y-3 pl-5 text-gray-600">
                {workout.instructions.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ol>
            </div>

            {/* Actions */}
            <WorkoutActions workout={workout} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default WorkoutDetailsPage;
