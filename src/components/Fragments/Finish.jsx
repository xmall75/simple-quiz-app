import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Finish = () => {
    const [score, setScore] = useState(0)

    const answers = JSON.parse(localStorage.getItem('answers'))
    const correctAnswers = JSON.parse(localStorage.getItem('correctAnswers'))

    localStorage.removeItem('token')

    const initialMark = 100/correctAnswers.length

    useEffect(() => {
        for(const i in answers) {
            if(answers[i] === correctAnswers[i]) {
                setScore((prev) => prev + initialMark)
            }
        }
    }, [])

    console.log(answers, correctAnswers)

    return (
        <main className="p-5 w-full md:w-3/5 bg-slate-900 flex flex-col items-center text-white">
            <h1 className="text-lg font-semibold">Result</h1>
            
            <span>
                Correct: {score/initialMark}
            </span>
            <span>
                Wrong: {(100 - score)/initialMark}
            </span>
            <span>
                Your score: {score}
            </span>
            <Link to="/" className="bg-white text-slate-900 p-1 mt-3 px-2 pb-2">
                Try again
            </Link>
        </main>
    )
}

export default Finish