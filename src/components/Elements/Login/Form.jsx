import InputForm from "./Input"
import { useState } from "react"

const Form = ({onSubmit}) => {

    return (
        <form className="flex flex-col items-center w-full" onSubmit={onSubmit} method="post">
            <InputForm
            type='text'
            placeholder='reprandolvski'
            name='username' />
            <InputForm
            type='password'
            placeholder='••••••••'
            name='password' />

            <button className="w-2/5 bg-blue-500 p-2 text-sm rounded-sm">
                Login
            </button>
        </form>
    )
}

export default Form