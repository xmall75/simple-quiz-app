import bcrypt from 'bcryptjs'
import { useNavigate } from 'react-router-dom'
import Main from '../components/Fragments/Main'
import { useEffect } from 'react'

const App = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')

    if(token !== '') {
        bcrypt.compare('user', token)
        .then((res) => {
            if(!res) {
                navigate('/')
            }
        })
    }

    return (
        <main className="w-full min-h-screen flex items-center bg-slate-900 md:bg-white">
            <Main />
        </main>
    )
}

export default App