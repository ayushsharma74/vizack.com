"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const imgloader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 95}`;
};

export default function Blog(){
    const turn = (e)=>{
    const pages = document.querySelectorAll("main .page")
    pages[e].classList.toggle("page-turn")
    if(pages[e].classList.contains("page-turn") == false){
        pages[e].classList.toggle("page-turn-back")
        setTimeout(()=>{
            pages[e].classList.toggle("page-turn-back")
        }, 1000)
    }
   }
    return (
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


                    <div onClick={() => turn(0)} className="page absolute h-full w-1/2 z-[20]">
                        <div className="front w-full absolute z-[1] border-2 px-4 py-2 bg-white border-default h-dvh right-0 rounded-tr-xl overflow-hidden  rounded-br-xl">
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
                        <div className="back absolute w-full border-2 px-2 bg-white border-default h-dvh right-0 rounded-tl-xl overflow-hidden rounded-bl-xl flex items-center">
                        <Image 
                            loader={imgloader}
                            src={"/assets/blogs/graphic design/img1.jpg"}
                            width={500}
                            height={500}
                            loading='lazy'
                            quality={100}
                            className='min-w-full'
                        />
                        </div>
                    </div>

                    <div onClick={() => turn(1)} className="page absolute h-full w-1/2 flex justify-end z-[19]">
                        <div className="front w-full absolute z-[1] border-2 bg-white overflow-hidden border-default h-dvh px-2 right-0 rounded-tr-xl  rounded-br-xl">
                            <h1 className='font-bold font-mono text-3xl tracking-wide my-10 text-center'>What is Graphic Design?</h1>
                            <p className='font-serif tracking-wide text-lg mb-4'>Graphic design is the art of creating visual content to communicate messages and ideas. It encompasses a wide range of mediums, including print, digital, and multimedia. Graphic designers use elements like typography, images, and colours to convey information and evoke emotions. Whether it's designing a logo for a brand or creating a poster for an event, graphic designers are skilled storytellers who bring ideas to life through visuals.</p>
                            <h1 className='font-bold font-mono text-3xl tracking-wide my-10 text-center'>Understanding Digital Art</h1>
                            <p className='font-serif tracking-wide text-lg mb-4'>Digital art is a form of artistic expression that uses digital technology as a medium. Unlike traditional art forms like painting or sculpture, which are created using physical materials, digital art is made using computers, tablets, and other digital devices. Digital artists use software programs like Adobe Photoshop, Illustrator, and Procreate to create stunning visuals, from illustrations and paintings to animations and 3D models. Digital art offers endless possibilities for creativity and experimentation, allowing artists to explore new techniques and styles.</p>
                            
                        </div>
                        <div className="back absolute w-full border-2 bg-white overflow-hidden px-2 border-default h-dvh right-0 rounded-tl-xl flex items-center rounded-bl-xl">
                            <Image 
                                loader={imgloader}
                                src={"/assets/blogs/graphic design/img2.avif"}
                                width={300}
                                height={300}
                                loading='lazy'
                                quality={100}
                                className='min-w-full'
                            />
                        </div>
                    </div>

                    <div onClick={() => turn(2)} className="page absolute h-full w-1/2 flex justify-end z-[18]">
                        <div className="front w-full absolute z-[1] border-2 bg-white overflow-hidden px-2 border-default h-dvh right-0 rounded-tr-xl  rounded-br-xl">
                        <h1 className='font-bold font-mono text-3xl tracking-wide my-10 text-center'>The Intersection of Graphic Design and Digital Art</h1>
                        <p className='font-serif tracking-wide text-lg mb-4'>While graphic design and digital art are distinct disciplines, they often intersect and complement each other. Many graphic designers incorporate digital art techniques into their work, using digital tools to create illustrations, manipulate images, and add visual effects. Likewise, digital artists may use graphic design principles to create compositions that effectively communicate their artistic vision. By bridging the gap between these two worlds, designers and artists can create captivating visuals that resonate with audiences across various platforms.</p>
                        
                        <h1 className='font-bold font-mono text-3xl tracking-wide my-10 text-center'>Tools and Techniques</h1>
                        <p className='font-serif tracking-wide text-lg mb-4'>In both graphic design and digital art, having the right tools and mastering key techniques is essential for success. Graphic designers rely on software programs like Adobe Creative Cloud, Canva, and Sketch to create layouts, edit images, and design graphics. Digital artists, on the other hand, use digital painting software like Procreate and Clip Studio Paint to create digital illustrations and paintings. Learning how to use these tools effectively and mastering techniques like composition, colour theory, and typography is crucial for aspiring designers and artists.</p>
                        
                        </div>
                        <div className="back absolute w-full border-2 bg-white overflow-hidden px-2 border-default h-dvh right-0 rounded-tl-xl rounded-bl-xl">
                            <h1 className='font-bold font-mono text-3xl tracking-wide my-10 text-center'>Applications and Career Opportunities</h1>
                            <p className='font-serif tracking-wide text-lg mb-4'>The skills and knowledge gained from studying graphic design and digital art open up a world of career opportunities. Graduates can pursue careers as graphic designers, digital artists, illustrators, UI/UX designers, motion graphics artists, and more. They may work in industries like advertising, publishing, film and television, gaming, and web design. Additionally, freelance opportunities abound for those who prefer to work independently or start their own design studios.</p>
                            <br />
                            <Image 
                                loader={imgloader}
                                src={"/assets/blogs/graphic design/img3.gif"}
                                width={100}
                                height={100}
                                loading='lazy'
                                quality={100}
                                className='w-1/2 mx-auto'
                            />
                        </div>
                    </div>

                    <div onClick={() => turn(3)} className="page absolute h-full w-1/2 flex justify-end z-[17]">
                        <div className="front w-full absolute z-[1] border-2 bg-white overflow-hidden px-2 border-default h-dvh right-0 rounded-tr-xl  rounded-br-xl">
                            <h3 className="font-bold font-mono text-3xl tracking-wide my-10 text-center">Conclusion</h3>
                            <h1 className='font-bold font-mono text-3xl tracking-wide my-10 text-center'>Embracing Creativity in the Digital Age</h1>
                            <p className='font-serif tracking-wide text-lg mb-4'>In conclusion, graphic design and digital art are dynamic and exciting fields that offer endless opportunities for creativity and expression. Whether you're passionate about visual storytelling, digital illustration, or user interface design, there's a place for you in the world of graphic design and digital art. By embracing creativity, honing your skills, and staying curious, you can embark on a rewarding journey filled with artistic discovery and professional growth in the digital age.</p>
                            <div className="share mx-auto w-fit my-10">
                                <div className="tags flex gap-2 items-center">
                                    <h1 className="text-dark text-xl font-semibold">Share: </h1>
                                    <div className="flex flex-wrap gap-5 px-4 flex-auto py-6">
                                        <Link rel="noopener noreferrer" href={"https://www.facebook.com/sharer/sharer.php?u=https://vizackcom.vercel.app/blogs/new-blog/"} target="_blank" className="hover:text-[#ff6900] transition-colors duration-300" >Facebook</Link>
                                        <Link rel="noopener noreferrer" href={"https://twitter.com/intent/tweet?url=https://vizackcom.vercel.app/blogs/new-blog/&text=Exploring Graphic Design and Digital Art"} target="_blank" className="hover:text-[#ff6900] transition-colors duration-300" ><i className="icofont-x text-xl"></i></Link>
                                        <Link rel="noopener noreferrer" href={"https://www.linkedin.com/shareArticle?url=https://vizackcom.vercel.app/blogs/new-blog/&title=Exploring Graphic Design and Digital Art"} target="_blank" className="hover:text-[#ff6900] transition-colors duration-300" >Linkedin</Link>
                                        <Link rel="noopener noreferrer" href={"whatsapp://send?text=https://vizackenterprises.com/blogs/new-blog/"} data-action="share/whatsapp/share" target="_blank" className="hover:text-[#ff6900] transition-colors duration-300" >Whatsapp</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="back absolute w-full border-2 bg-white overflow-scroll px-2 border-default h-dvh right-0 rounded-tl-xl rounded-bl-xl">
    <div className="bg-gray-100 p-6">
                                <h2 className="text-lg font-bold mb-4">Comments</h2>
                                <div className="flex flex-col space-y-4">
                                    <div className="bg-white p-4 rounded-lg shadow-md">
                                        <h3 className="text-lg font-bold">John Doe</h3>
                                        <p className="text-gray-700 text-sm mb-2">Posted on April 17, 2023</p>
                                        <p className="text-gray-700">This is a sample comment. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-md">
                                        <h3 className="text-lg font-bold">Jane Smith</h3>
                                        <p className="text-gray-700 text-sm mb-2">Posted on April 16, 2023</p>
                                        <p className="text-gray-700">I agree with John. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-md">
                                        <h3 className="text-lg font-bold">Bob Johnson</h3>
                                        <p className="text-gray-700 text-sm mb-2">Posted on April 15, 2023</p>
                                        <p className="text-gray-700">I have a different opinion. Lorem ipsum dolor sit amet, consectetur adipiscing
                                            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="page absolute h-full w-1/2 flex justify-end z-[16]">
                        <div className="front w-full absolute z-[1] border-2 p-6 bg-white overflow-hidden px-2 border-default h-dvh right-0 rounded-tr-xl  rounded-br-xl">
                        <form className="bg-white rounded-lg shadow-md w-full p-2">
                            <h3 className="text-lg font-bold mb-2">Add a comment</h3>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" for="name">
                                    Name
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="name" type="text" placeholder="Enter your name" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" for="comment">
                                    Comment
                                </label>
                                <textarea
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="comment" rows="3" placeholder="Enter your comment"></textarea>
                            </div>
                            <button
                                className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit">
                                Submit
                            </button>
                        </form>
                        </div>
                        
                    </div>
                    
                </div>
                
            </main>
        </>
    )
}