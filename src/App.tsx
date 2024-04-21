import Header from "./components/Header";
import CourseGoalList from "./components/CourseGoalList";
import goalsimg from "./assets/goals.jpg"
import { useState } from "react";

export type Tgoals = {
  title: string;
  description: string;
  id: number;
}

export default function App() {

  const [goal, setGoal] = useState<Tgoals[]>([])

  function handleAddGoal() {
    setGoal(prevGoals => {
      
      const newGoal:Tgoals = {
        id: Math.random(),
        title: 'Learn React + TS',
        description: 'Learn it in depth!' 
      };

      return [...prevGoals, newGoal]
    })
  }

  function handleDeleteGoal(id: number) {
    setGoal(prevGoals => prevGoals.filter((goal) => goal.id !== id))
  }

  return (
  
    <main>

      <Header image={{ src: goalsimg, alt:'A list of goals' }}> 
        <h1>Your Course Goals</h1>
      </Header>

      <button onClick={handleAddGoal}>Add goal</button>

      <CourseGoalList goal={goal} onDeleteGoal={handleDeleteGoal}/>
    
    </main>
  )
}
