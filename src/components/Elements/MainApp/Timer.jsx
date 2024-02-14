import { useState, useEffect } from "react"

const Timer = ({duration_in_secs = 60, duration_in_mins = 3, duration_in_hours = 0, data, answers}) => {
    
    const seconds = duration_in_secs*1000
    const minutes = duration_in_mins*60*1000
    const hours = duration_in_hours*3600*1000

    const correctAnswer = []

    const getTime = localStorage.getItem('timeout')
    
    const [time, setTime] = useState(getTime ? getTime : (seconds + minutes + hours))
    
    useEffect(() => {
        setTimeout(() => {
            localStorage.setItem('timeout', time-1000)
            setTime(time - 1000)
        }, 1000)
    }, [time, setTime])

    const formattedTime = (time_in_milliseconds) => {
        const total_seconds = parseInt(Math.floor(time_in_milliseconds/1000))
        const total_minutes = parseInt(Math.floor(total_seconds/60))
        const total_hours = parseInt(Math.floor(total_minutes/60))

        const seconds = parseInt(total_seconds%60)
        const minutes = parseInt(total_minutes%60)
        const hours = parseInt(total_hours%24)

        if(seconds < 1) {
            for (const i in data) {
                correctAnswer.push(data[i]?.correct_answer)
            }

            localStorage.setItem('answers', JSON.stringify(answers))
            localStorage.setItem('correctAnswers', JSON.stringify(correctAnswer))

            localStorage.removeItem('timeout')

            window.location.href = '/finish'
        }

        return `${hours} : ${minutes} : ${seconds}`
    }

    return (
        <div>
            {formattedTime(time)}
        </div>
    )
}

export default Timer