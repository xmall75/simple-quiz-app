import Form from "../Elements/Login/Form"
import bcrypt from 'bcryptjs'
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [message, setMessage] = useState('')
    const [token, setToken] = useState('')

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        if(e.target.username.value === 'user' && e.target.password.value === 'user') {
            await bcrypt.hash('user', 10)
            .then((res) => {
                setToken(res)
                localStorage.setItem('token', res)
                setMessage('Login success, you will be redirected.')

                navigate('/main')
            })
        }
        else {
            setMessage('Invalid username or password')
        }
    }

    return (
        <div className="mx-auto bg-gray-800 w-full md:w-3/5 outline text-white p-5">
            {message ? (<p className="text-center mb-5">{message}
            </p>) : '' }
            
            <Form onSubmit={(e) => handleSubmit(e)} />
        </div>
    )
}

export default Login