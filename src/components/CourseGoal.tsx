import { type PropsWithChildren } from "react";
// import { type ReactNode } from "react";

// type Props = {
//     title: string;
//     children: ReactNode
// }

type Props = PropsWithChildren<{title: string}>;

export default function CourseGoal({ title, children }: Props) {

    return (

    <article>
        <div>
            <h2>{title}</h2>
            <p>{children}</p>
        </div>
        <button>Delete</button>
    </article>
    )
   
}