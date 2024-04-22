import { useRef, type FormEvent } from 'react'

type NewGoalProps = {
        onAddGoal: (goal: string, summary: string) => void;
}

const NewGoal = ({ onAddGoal }: NewGoalProps) => {

    

    const goal = useRef<HTMLInputElement>(null)
    const summary = useRef<HTMLInputElement>(null)

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault;

        const enteredGoal = goal.current!.value;
        const enterdeSummary = summary.current!.value

        e.currentTarget.reset();
        onAddGoal(enteredGoal, enterdeSummary);
    }

  return (
    <form onSubmit={handleSubmit}>
        <p>
            <label htmlFor="goal">Your goal</label>
            <input id="goal" type="text" ref={goal}/>
        </p>

        <p>
            <label htmlFor="summary"></label>
            <input id="summary" type="text" ref={summary} />
        </p>

        <p>
            <button>Add Goal</button>
        </p>
    </form>
  )
}

export default NewGoal