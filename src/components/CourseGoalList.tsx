import CourseGoal from "./CourseGoal"
import { type Tgoals as TypeGoal} from "../App"

type Tgoal = {
  goal: TypeGoal[];
  onDeleteGoal: (id: number) => void;
}

const CourseGoalList = ({ goal, onDeleteGoal }: Tgoal) => {
  return (

    <ul>
        {goal.map((goal) => (

          <li key={goal.id}>

            <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
              <p>{goal.description}</p>
            </CourseGoal >    

          </li>

        ))}
      </ul>
  )
}

export default CourseGoalList