import Login from "../components/Fragments/Login"

const HomePage = () => {
    localStorage.removeItem('answers')
    localStorage.removeItem('correctAnswers')

    return (
        <main className="w-full min-h-screen flex items-center">
            <Login />
        </main>
    )
}

export default HomePage