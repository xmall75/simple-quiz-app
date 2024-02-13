import { useEffect, useState } from "react"
import Container from "../Elements/MainApp/Container"

const Main = ({data}) => {

    return (
        <main className="w-full md:w-3/5 bg-slate-900 flex flex-col items-center text-white">
            {data && <Container data={data} />}
        </main>
    )
}

export default Main