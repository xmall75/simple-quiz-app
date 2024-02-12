import { useEffect } from "react"
import Container from "../Elements/MainApp/Container"

const Main = () => {

    useEffect(async () => {
        const res = await fetch('https://opentdb.com/api.php?amount=5&category=31&difficulty=hard&type=multiple')
        .then((res) => res.json()
        .then((data) => console.log(data.results)))
    })

    return (
        <main className="w-full bg-slate flex flex-col items-center">
            <Container />
        </main>
    )
}

export default Main