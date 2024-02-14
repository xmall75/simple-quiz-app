import { useEffect, useState } from "react"
import Timer from "./Timer"
import arrayShuffle from 'array-shuffle'

const Container = ({data}) => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [answers, setAnswers] = useState(new Array)
    const correctAnswer = []
    const [finish, setFinish] = useState(false)
    
    data[currentQuestion]?.incorrect_answers.push(data[currentQuestion]?.correct_answer)
    console.log(data[currentQuestion]?.incorrect_answers)

    const choices = data[currentQuestion]?.incorrect_answers

    const handleSubmit = () => {
        for (const i in answers) {
            correctAnswer.push(stringReplace(data[i]?.correct_answer))
        }
        
        localStorage.setItem('answers', JSON.stringify(answers))
        localStorage.setItem('correctAnswers', JSON.stringify(correctAnswer))
        localStorage.removeItem('timeout')

        window.location.href = '/finish'
    }

    const stringReplace = (string) => {
        return string?.replaceAll('&quot;', '').replaceAll('&#039;', `'`).replaceAll('&amp;', '&')
    }

    return (
        <div className="w-full p-5 text-white flex flex-col items-center">
            {data && <Timer
            duration_in_secs={30}
            duration_in_mins={0}
            data={data}
            answers={answers}
            />}

            <label htmlFor="question" className="text-lg w-4/5 text-center my-5">
                {stringReplace(data[currentQuestion]?.question)}
            </label>
            {(choices !== undefined) && arrayShuffle(choices)
            .map((entry, index) =>
            (
                <button className="w-2/5 bg-white text-black my-2 pb-2 pt-1 truncate" key={index} onClick={() => {
                setAnswers([...answers, stringReplace(entry)])
                setCurrentQuestion(currentQuestion+1)
            }}>
                {stringReplace(entry)}
            </button>
            )
            )
            
            }

            {(currentQuestion <= data?.length-1) && `${currentQuestion+1} / ${data?.length}`}
            {(currentQuestion > data?.length-1) && <button onClick={() => {handleSubmit()}}>Finish</button> }

        </div>
    )
}

export default Container