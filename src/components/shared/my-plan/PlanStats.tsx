interface PlanStatsProps {
  exercises: number;
  minutes: number;
  calories: number;
}

const PlanStats = ({ exercises, minutes, calories }: PlanStatsProps) => {
  return (
    <div className="mt-8 rounded-2xl border border-white/5 bg-[#12141a] p-6">
      <div className="grid grid-cols-3 gap-4 text-left">
        <div>
          <p className="text-xs font-bold text-zinc-500">Exercises</p>
          <p className="mt-2 text-3xl font-black text-white sm:text-4xl">
            {exercises}
          </p>
        </div>

        <div>
          <p className="text-xs font-bold text-zinc-500">Minutes</p>
          <p className="mt-2 text-3xl font-black text-white sm:text-4xl">
            {minutes}
          </p>
        </div>

        <div>
          <p className="text-xs font-bold text-zinc-500">Calories</p>
          <p className="mt-2 text-3xl font-black text-white sm:text-4xl">
            {calories}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlanStats;
