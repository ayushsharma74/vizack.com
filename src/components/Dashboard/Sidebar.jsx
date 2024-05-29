"use client"
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Sidebar() {

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

        <section className="w-[20%] h-screen justify-between p-10 bg-black flex flex-col">
            <div className="flex gap-4 flex-col">
            <Link href={"/dashboard"} className='px-6 text-white font-bold hover:bg-[#3837378a]  flex items-center justify-center py-2' >Home</Link>
            <Link href={"/dashboard/all-posts"} className='px-6 font-bold text-white hover:bg-[#3837378a]    flex items-center justify-center py-2' >Posts</Link>
            <Link href={"/dashboard/add-new-post"} className='px-6 font-bold text-white hover:bg-[#3837378a]   flex items-center justify-center py-2' >Post New</Link>
            </div>
            <div className=" hover:bg-[#3837378a] cursor-pointer flex flex-row items-center justify-center gap-3">
                <button className="text-white  py-2 font-bold" onClick={handleClick}>Logout </button>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" x2="9" y1="12" y2="12" /></svg>
            </div>
        </section>
    )
}