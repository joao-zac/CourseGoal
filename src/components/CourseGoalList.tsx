import CourseGoal from "./CourseGoal"
import { type Tgoals as TypeGoal} from "../App"

type Tgoal = {
  goal: TypeGoal[]
}

const CourseGoalList = ({ goal }: Tgoal) => {
  return (

    <ul>
        {goal.map((goal) => (

          <li key={goal.id}>

            <CourseGoal title={goal.title} >
              <p>{goal.description}</p>
            </CourseGoal >    

          </li>

        ))}
      </ul>
  )
}

export default CourseGoalList