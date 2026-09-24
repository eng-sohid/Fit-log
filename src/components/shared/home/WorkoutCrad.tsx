import { Workout } from "../../types/workout";
import Image from "next/image";

interface WorkoutCardProps {
  workout: Workout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <div>
      <img src={workout.image} alt={workout.name} />

      <div>
        {workout.muscleGroups.map((muscle) => (
          <span key={muscle}>{muscle}</span>
        ))}
      </div>

      <h2>{workout.name}</h2>

      <p>{workout.equipment}</p>

      <div>
        <span>{workout.duration} min</span>
        <span>{workout.caloriesBurned} kcal</span>
        <span>⭐ {workout.rating}</span>
      </div>
    </div>
  );
};

export default WorkoutCard;
