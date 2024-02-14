import bcrypt from 'bcryptjs'
import { useNavigate } from 'react-router-dom'
import Main from '../components/Fragments/Main'
import { useEffect, useState } from 'react'

const App = () => {
    const token = localStorage.getItem('token')

    if(token) {
        bcrypt.compare('user', token)
        .then((res) => {
            if(!res) {
                window.location.href = '/'
            }
        })
    }
    else {
        window.location.href = '/'
    }

    const [question, setQuestion] = useState(new Array)

    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=5&category=31&difficulty=hard&type=multiple')
        .then((res) => res.json())
        .then((data) => {
            if(data.response_code === 0) {
                console.log(data)
                setQuestion(data.results)
            }
        })
    }, [])

    return (
        <main className="w-full min-h-screen flex items-center justify-center bg-slate-900 md:bg-white">
            <Main data={question} />
        </main>
    )
}

export default App