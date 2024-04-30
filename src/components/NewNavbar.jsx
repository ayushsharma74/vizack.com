import Image from "next/image";
import Link from "next/link";

export default function NewNavbar(){
    return(
        <main className="fixed left-0 right-0 top-0 bg-white z-50 ">
        <nav className="w-full flex flex-row  px-5 py-3 justify-between items-center shadow-md">
            <section className="flex flex-row gap-2 items-center">
                <Image src={"/assets/logo/logo.png"} width={45} height={45}/>
                <h1 className="font-bold">ViZack Enterprises</h1>
            </section>
            <section className="flex  gap-4">
                <Link href={"/"} className="font-semibold hover:bg-slate-200 px-4 py-2 rounded-3xl">Home</Link>
                <Link href={"/blogs"} className="font-semibold hover:bg-slate-200 px-4 py-2 rounded-3xl">Blogs</Link>
                <Link href={"/services"} className="font-semibold hover:bg-slate-200 px-4 py-2 rounded-3xl">Services</Link>
                <Link href={"/about"} className="font-semibold hover:bg-slate-200 px-4 py-2 rounded-3xl">About Us</Link>
            </section>
            <section>
                <Link href={"/contact"} className="font-bold px-5 py-3 bg-orange-800">Contact</Link>
            </section>
        </nav>
        </main>
    )
}