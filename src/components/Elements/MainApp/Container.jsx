import { useEffect, useState } from "react"
import Timer from "./Timer"
import arrayShuffle from 'array-shuffle'

const Container = ({data}) => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [answers, setAnswers] = useState(new Array)
    const correctAnswer = []
    const [score, setScore] = useState(0)
    const [finish, setFinish] = useState(false)

    data[currentQuestion]?.incorrect_answers.push(data[currentQuestion]?.correct_answer)
    console.log(data[currentQuestion]?.incorrect_answers)

    const choices = data[currentQuestion]?.incorrect_answers

    const handleSubmit = () => {
        for (let i = 0; i < answers.length; i++) {
            console.log(data[i]?.correct_answer)
            console.log(answers[i])
            if(answers[i] === data[i]?.correct_answer.replaceAll('&quot;', '').replaceAll('&#039;', `'`).replaceAll('&amp;', '&')) {
                correctAnswer.push(answers[i])
            }
        }

        setFinish(true)
        setScore(correctAnswer.length * 20)
    }

    return (
        <div className="w-full p-5 text-white flex flex-col items-center">
            <Timer />

            <label htmlFor="question">
                {data[currentQuestion]?.question.replaceAll('&quot;', '').replaceAll('&#039;', `'`).replaceAll('&amp;', '&')}
            </label>
            {choices !== undefined && arrayShuffle(choices)
            .map((entry, index) =>
            (
                <button key={index} onClick={() => {
                setAnswers([...answers, entry.replaceAll('&quot;', '').replaceAll('&#039;', `'`).replaceAll('&amp;', '&')])
                setCurrentQuestion(currentQuestion+1)
            }}>
                {entry.replaceAll('&quot;', '').replaceAll('&#039;', `'`).replaceAll('&amp;', '&')}
            </button>
            )
            )}

            {currentQuestion > 4 && <button onClick={() => {handleSubmit()}}>Finish</button> }
            
            Your answers: 
            {answers && answers.map((q, index) => 
                (<div key={index}>{q}</div>)
            )}
            {finish && <>Your score: {score}</>}
        </div>
    )
}

export default Container