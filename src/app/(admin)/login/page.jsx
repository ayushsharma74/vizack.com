"use client"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"


export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const handleCLick = async () => {
        const res = await axios.post('/api/login',{
            username,password
        })
        console.log(res);
        router.push('/dashboard')
    }
    return (
        <div className="h-screen w-full flex justify-center items-center ">
        <div className=" flex flex-col border border-black border-solid bg-gray-400 px-8 py-16 gap-6"> 
        <h1 className="text-4xl font-bold text-center mb-4">Admin</h1>
            <input type="text" name="" id="" placeholder="Username" className="px-4 py-2 text-l" onChange={e => setUsername(e.target.value)}/>
            <input type="text" name="" id="" placeholder="Password" className="px-4 py-2 text-l" onChange={e => setUsername(e.target.value)}/>
            <button onClick={handleCLick} className="py-2 px-4 rounded bg-indigo-500 hover:bg-indigo-400 font-bold">Login</button>
        </div>
        </div>
    )
}