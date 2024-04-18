import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import goalsimg from "./assets/goals.jpg"
import { useState } from "react";

export default function App() {

  type Tgoals = {
    title: string;
    description: string;
    id: number;
  }

  const [goal, setGoal] = useState<Tgoals[]>([])

  function handleAddGoal() {
    setGoal(prevGoals => {
      
      const newGoal:Tgoals  = {
        id: Math.random(),
        title: 'Learn React + TS',
        description: 'Learn it in depth!' 
      };

      return [...prevGoals, newGoal]
    })
  }

  return (
  
    <main>

      <Header image={{ src: goalsimg, alt:'A list of goals' }}> 
        <h1>Your Course Goals</h1>
      </Header>

      <button onClick={handleAddGoal}>Add goal</button>

      <ul>
        {goal.map((goal) => (

          <li key={goal.id}>

            <CourseGoal title={goal.title} >
              <p>{goal.description}</p>
            </CourseGoal >    

          </li>
        ))}
      </ul>
    
    </main>
  )
}