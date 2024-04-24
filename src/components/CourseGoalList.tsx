import CourseGoal from "./CourseGoal"
import { type Tgoals as TypeGoal} from "../App"
import InfoBox from "./InfoBox"
import { ReactNode } from "react";

type Tgoal = {
  goal: TypeGoal[];
  onDeleteGoal: (id: number) => void;
}

const CourseGoalList = ({ goal, onDeleteGoal }: Tgoal) => {

  if (goal.length === 0) {
    return (

      <InfoBox mode="hint">
        You have no course goals yet. Start adding some!
      </InfoBox>
    )
  }

  let warningBox: ReactNode;

  if (goal.length >= 3) {

    warningBox = ( 
      <InfoBox mode="warning" severity={goal.length < 5 ? 'low' : goal.length < 7 ? 'medium' : 'high'}>
        You're collecting a lot of goals. Don't put too much on your plate!        
      </InfoBox>
    )
  }

  return (

    <>

      {warningBox}

      <ul>

        {goal.map((goal) => (

          <li key={goal.id}>

            <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
              <p>{goal.description}</p>
            </CourseGoal >    

          </li>

        ))}
      </ul>
    </>
    
  )
}

export default CourseGoalList