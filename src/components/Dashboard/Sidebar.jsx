"use client"
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Sidebar(){

    const router = useRouter()
    const handleClick = async () => {
        try {
            await axios.get("/api/logout")
            router.push("/")
        } catch (error) {
            console.log(error);
        }
    }
    return (

        <section className="w-[20%] h-screen gap-3 p-10 bg-black flex flex-col">

            <Link href={"/dashboard"} className='px-6 text-white font-bold hover:bg-[#3837378a]  flex items-center justify-center py-2' >Home</Link>
            <Link href={"/dashboard/all-posts"} className='px-6 font-bold text-white hover:bg-[#3837378a]    flex items-center justify-center py-2' >Edit Posts</Link>
            <Link href={"/dashboard/add-new-post"} className='px-6 font-bold text-white hover:bg-[#3837378a]   flex items-center justify-center py-2' >Post New</Link>
            <button className="text-white hover:bg-[#3837378a] py-2" onClick={handleClick}>Logout</button>
          </section>
    )
}