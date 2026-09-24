interface PlanStatsProps {
  exercises: number;
  minutes: number;
  calories: number;
}

const PlanStats = ({ exercises, minutes, calories }: PlanStatsProps) => {
  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-3">
      <div className="rounded-2xl border bg-white p-5">
        <p className="text-sm text-gray-500">Exercises</p>
        <p className="mt-2 text-3xl font-bold">{exercises}</p>
      </div>

      <div className="rounded-2xl border bg-white p-5">
        <p className="text-sm text-gray-500">Minutes</p>
        <p className="mt-2 text-3xl font-bold">{minutes}</p>
      </div>

      <div className="rounded-2xl border bg-white p-5">
        <p className="text-sm text-gray-500">Calories</p>
        <p className="mt-2 text-3xl font-bold">{calories}</p>
      </div>
    </div>
  );
};

export default PlanStats;
