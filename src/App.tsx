import { useState } from "react";

import goalsimg from "./assets/goals.jpg"

import Header from "./components/Header";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

export type Tgoals = {
  title: string;
  description: string;
  id: number;
}

export default function App() {

  const [goal, setGoal] = useState<Tgoals[]>([])

  function handleAddGoal(goal: string, summary: string) {
    setGoal(prevGoals => {
      
      const newGoal:Tgoals = {
        id: Math.random(),
        title: goal,
        description: summary 
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

      <NewGoal onAddGoal={handleAddGoal}/>

      <CourseGoalList goal={goal} onDeleteGoal={handleDeleteGoal}/>
    
    </main>
  )
}
