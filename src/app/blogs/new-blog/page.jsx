"use client"
import Image from "next/image";
import Link from "next/link";

const imgloader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 95}`;
};

export default function Blog(){
    const turn = (e)=>{
        const page = document.querySelector("main .page").classList.add("page-turn")
    }
    return(
        <>
            <div className="bg-default w-full min-h-10 h-fit flex flex-wrap items-center px-5 py-2" >
                <h1 className="text-white hover:text-default-gray font-bold">
                    <Link href={"/"}>Home &nbsp;</Link>
                </h1>
                <h1 className="text-white font-bold"> &gt;</h1>
                <h1 className="text-white hover:text-default-gray font-bold">
                    <Link href={`/blogs`} >&nbsp; Blogs &nbsp;</Link>
                </h1>
                <h1 className="text-white font-bold"> &gt;</h1>
                <h1 className="text-white hover:text-default-gray font-bold truncate">
                    <Link href={`/blogs/new-blog`} >&nbsp; Exploring Graphic Design and Digital Art</Link>
                </h1>
            </div>
            <main className="w-full border px-6 my-10 min-h-screen">
                <div className="book w-full h-full flex relative justify-end">
                    <div onClick={turn} className="page absolute h-full w-1/2 z-[4]">
                        <div className="front w-full absolute z-[1] border-2 px-4 py-2 bg-white border-default h-dvh right-0 rounded-tr-xl  rounded-br-xl">
                            <h1 className="text-5xl font-mono font-bold my-10 tracking-wide">Exploring Graphic Design and Digital Art</h1>
                            <Image 
                                loader={imgloader}
                                src={"/assets/background/profile/p6.png"}
                                width={200}
                                height={200}
                                loading='lazy'
                                quality={100}
                                className='border-2 border-default rounded-full bg-sky-100 mx-auto'
                            />
                            <h4 className="text-2xl font-mono tracking-wide mx-auto font-bold w-fit my-3">Gajender</h4>
                            <p className="text-xl font-semibold text-blog tracking-wide px-5 my-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto nulla ipsum illum alias atque reiciendis vero obcaecati laborum voluptatum. Quidem illo corporis tempora.</p>
                            <div className="social flex flex-wrap w-full py-2 gap-10 justify-center">
                                <Link href={"/"}><i className="icofont-facebook hover:text-default text-3xl text-default-gray"></i></Link>
                                <Link href={"/"}><i className="icofont-linkedin hover:text-default text-3xl text-default-gray"></i></Link>
                                <Link href={"/"}><i className="icofont-x hover:text-default text-3xl text-default-gray"></i></Link>
                                <Link href={"/"}><i className="icofont-instagram hover:text-default text-3xl text-default-gray"></i></Link>
                            </div>
                            <h3 className="text-md w-fit mx-auto my-4 text-blog">Published: <span className="uppercase text-default">3 April 2024</span></h3>
                        </div>
                        <div className="back absolute w-full border-2 bg-white border-default h-dvh right-0 rounded-tl-xl rounded-bl-xl">
                            GJDGAJHDG JHSGDJ G
                        </div>
                    </div>
                    <div onClick={turn} className="page absolute h-full w-1/2 flex z-[2] justify-end">
                        <div className="front w-full absolute z-[1] border-2 bg-white border-default h-dvh right-0 rounded-tr-xl  rounded-br-xl">
                            HI Hello
                        </div>
                        <div className="back absolute w-full border-2 bg-white border-default h-dvh right-0 rounded-tl-xl rounded-bl-xl">
                            GJDGAJHDG JHSGDJ G
                        </div>
                    </div>

                </div>
                
            </main>
        </>
    )
}