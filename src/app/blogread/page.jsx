"use client"
import Image from "next/image";
import Link from "next/link";
// import Blog from "@/components/blogCard";
import Upperbanner from "@/components/Upperbanner";

const img = {
    img1: ["/assets/background/blogs/stock.png", "How can I grow my stocks?", "/assets/background/profile/p4.jpeg", " Gajender", "Feb 12, 2023"],
    img2: ["/assets/background/blogs/apps.jpg", "Applications that must be in every android mobile", "/assets/background/profile/p1.jpeg", "Jatin Jain", "Jun 2, 2023"],
    img3: ["/assets/background/blogs/hacking.jpg", "Hacking tips and tricks", "/assets/background/profile/p3.jpeg", "Farhan", "Jul 26, 2023"],
    img4: ["/assets/background/blogs/ml.jpeg", "Best sites to learn Machine Learning", "/assets/background/profile/p2.jpeg", "Ayush Sharma", "Sep 19, 2023"],
    img5: ["/assets/background/blogs/ai.jpg", "What is an Artificial Intelligence?", "/assets/background/profile/p4.jpeg", "Gajender", "Dec 29, 2023"],
    img6: ["/assets/background/blogs/strong foundation.jpg", "Startup needs strong foundation", "/assets/background/profile/p1.jpeg", "Jatin Jain", "Feb 21, 2024"],
}
export default function Breader() {
    return (
        <>
            <Upperbanner route={"blogread"} routeName={"Blog Reader"}/>
            <main className="flex w-full h-fit max-lg:flex-col py-16 px-4 gap-2">
                <div className="left w-[60%] max-lg:w-full ">
                    {/* Blogs Container */}
                    <div className="card-holder flex flex-col gap-6 pl-32 max-lg:pl-6">
                        <div className="card h-fit w-full pb-2">
                            <div className="top min-h-fit">
                                <div className="image w-full">
                                    <Image
                                        src={img.img1[0]}
                                        width={500}
                                        height={500}
                                        className="h-auto w-full rounded-2xl object-cover"
                                        priority
                                        alt={img.img1[1]}
                                    />
                                </div>
                                <div className="publisher flex max-min-end:flex-col justify-between px-4">
                                    <div className="left flex h-16 gap-2 w-full items-center ">
                                        <div className="image">
                                            <Image
                                                src={img.img1[2]}
                                                width={50}
                                                height={50}
                                                className="rounded-full h-11 w-11 min-h-8 min-w-8 max-h-11 max-w-11 border-2 border-default object-cover"
                                                loading="eager"
                                                alt={img.img1[4]}
                                            />
                                        </div>
                                        <div className="name">
                                            <h3 className="text-xl font-bold tracking-wide uppercase max-sm:text-sm">{img.img1[3]}</h3>
                                        </div>
                                    </div>
                                    <div className="right flex gap-3 items-center justify-between">
                                        <div className="comment flex gap-2 border-r pr-3">
                                            <i class="icofont-duotone icofont-messaging text-2xl max-sm:text-xl text-default"></i>
                                            <h3 className="uppercase text-default-gray max-sm:text-sm cursor-pointer hover:text-dark transition-colors duration-300">comments</h3>
                                        </div>
                                        <div className="time flex gap-2 w-32 items-center">
                                            <i className="icofont-duotone icofont-calendar text-2xl max-sm:text-xl text-default"></i>
                                            <h3 className="uppercase min-w-fit text-default-gray max-sm:text-sm">{img.img1[4]}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bottom px-4 py-6">
                                <div className="title mb-4">
                                    <h1 className="text-4xl text-dark font-bold">{img.img1[1]}</h1>
                                </div>
                                <div className="parg mb-4">
                                    <p className="text-blog mb-4 text-lg tracking-wide">
                                        Lorem ipsum dolor sit amet consectetur. Lacinia ut volutpat amet netus morbi metus pellentes que in. Vulputate gravida felis gravida gravida nunc accumsan suspendisse. Ac erat ac blandit at cursus ultricies. Adipiscing morbi aliquet in urna porttitor dignissim suspendisse sagittis. Nunc orci cras in sit. Erat maecenas in faucibus nullam cras. Integer fermentum ipsum habitasse sit nunc sed ultrices velit. Nunc massa nec egestas eget tempor etiam. Blandit bibendum ut elit dis pellentesque. Amet et semper auctor dolor aliquet eu. Vestibulum aliquam faucibus senectus condimentum et. Nulla in dolor nec eleifend adipiscing gravida.
                                    </p>
                                    <p className="text-blog mb-4 text-lg tracking-wide">
                                        Consectetur feugiat lectus a malesuada nibh rhoncus. Nisl ac ac elementum hac suspendisse. Eu dui cursus posuere volutpat. Nunc in morbi id at commodo massa aenean. Eu in egestas elementum neque vitae ipsum erat facilisis et. Viverra faucibus odio scelerisque mi pharetra. Pharetra diam et donec vel vel tellus in morbi. Enim ultrices morbi dictum sagittis ac. Vel urna viverra amet tristique pharetra. Interdum eget et ut sed tortor. Proin nisl etiam ac at lectus eget tincidunt pellentesque. Nisi amet adipiscing quam sit mattis ornare lectus malesuada.
                                    </p>
                                    <div className="w-full h-fit my-8 overflow-hidden bg-default rounded-lg">
                                        <div className="w-full ml-2 h-fit bg-note-bg rounded-md py-6">
                                            <p className="w-full pr-4 px-2 pl-6 text-lg font-semibold  text-note leading-8">
                                                <span className="text-[#525AFE] text-2xl">&rdquo;</span>
                                                Vivamus ac dolor dapibus, pharetra lorem ac, tristique metus. Quisque leo ante, tempo in quam in, vestibulum vulputate enim. Nullam porta nulla ut ex aliquet molestie. Praese enim dui, lobort is id placerat bibendum, placerat et justo.
                                                <span className="text-[#E35FB8] text-2xl">&ldquo;</span>
                                            </p>
                                            <h3 className="w-full pr-4 px-2 pl-6 text-default text-2xl font-semibold  my-6 uppercase">&mdash;&mdash; kathryn murphy</h3>
                                        </div>
                                    </div>
                                    <p className="text-blog mb-4 text-lg tracking-wide">
                                        Iaculis porttitor non amet eros phasellus consectetur scelerisque turpis cursus. Elementum pellentesque id risus sagittis at auctor aliquet. Amet a sodales habitasse egestas diam tortor elementum.
                                    </p>
                                    {/* Syntax Images */}
                                    <div className="syntaxImage w-full flex flex-col justify-center max-lg:flex-wrap gap-8 my-8">
                                        <Image
                                            src={img.img2[0]}
                                            width={350}
                                            height={300}
                                            className="w-full rounded-2xl object-cover"
                                            priority
                                            alt={img.img2[1]}
                                        />
                                        <Image
                                            src={img.img3[0]}
                                            width={350}
                                            height={300}
                                            className="w-full rounded-2xl object-cover"
                                            priority
                                            alt={img.img3[1]}
                                        />
                                    </div>

                                    {/* Sub Title */}
                                    <div className="title mb-4">
                                        <h1 className="text-[1.7rem]  text-dark font-bold">Creative approach to every project</h1>
                                    </div>

                                    <p className="text-blog mb-4 text-lg tracking-wide">
                                        Gravida venenatis cursus egestas quam enim suspendisse nunc ut suscipit. Amet lectus massa etiam sit sit tellus eget. Proin purus a id placerat ultrices. Bibendum vitae venenatis dolor lorem dignissim habitasse adipiscing viverra luctus. Vestibulum imperdiet ac id eleifend id. Quis neque at dictumst vestibulum. Varius sed condimentum tortor facilisi vestibulum pharetra sit in adipis. Leo eget risus quis at urna placerat eget interdum.
                                    </p>

                                    <div className="tags flex flex-wrap justify-between my-8 border-t-[1px] border-b-[1px] border-[#E2E2E2]">
                                        <div className="tags flex gap-2 items-center">
                                            <h1 className="text-dark text-xl font-semibold">Tags: </h1>
                                            <div className="flex flex-wrap gap-6 px-4 flex-auto py-6">
                                                <h2 className=" bg-gray-200 capitalize font-semibold text-default-gray rounded-lg transition-colors duration-300 text-sm tracking-wide px-3 hover:text-white cursor-pointer py-1 hover:bg-default">
                                                    Innovation
                                                </h2>
                                                <h2 className=" bg-gray-200 capitalize font-semibold text-default-gray rounded-lg transition-colors duration-300 text-sm tracking-wide px-3 hover:text-white cursor-pointer py-1 hover:bg-default">
                                                    on sale
                                                </h2>
                                            </div>

                                        </div>
                                        <div className="share">
                                            <div className="tags flex gap-2 items-center">
                                                <h1 className="text-dark text-xl font-semibold">Share: </h1>
                                                <div className="flex flex-wrap gap-2 px-4 flex-auto py-6">
                                                    <Link rel="noopener noreferrer" href={"https://www.facebook.com/sharer/sharer.php?u=https://vizackcom.vercel.app/blogread"} target="_blank" className="hover:text-[#ff6900] transition-colors duration-300" >Facebook</Link>
                                                    <Link rel="noopener noreferrer" href={"https://twitter.com/intent/tweet?url=https://vizackcom.vercel.app/blogread&text=Check%20out%20my%20blog%20post"} target="_blank" className="hover:text-[#ff6900] transition-colors duration-300" >X</Link>
                                                    <Link rel="noopener noreferrer" href={"https://www.linkedin.com/shareArticle?url=https://vizackcom.vercel.app/blogread&title="} target="_blank" className="hover:text-[#ff6900] transition-colors duration-300" >Linkedin</Link>
                                                    <Link rel="noopener noreferrer" href={"whatsapp://send?text=https://vizackcom.vercel.app/blogread"} data-action="share/whatsapp/share" target="_blank" className="hover:text-[#ff6900] transition-colors duration-300" >Whatsapp</Link>
                                                
                                                 {/* <Link rel="noopener noreferrer" href={"/"} target="_blank" className="hover:text-[#ff6900] transition-colors duration-300" >Facebook</Link>
                                                    <Link rel="noopener noreferrer" href={"/"} target="_blank" className="hover:text-[#ff6900] transition-colors duration-300" >X</Link>
                                                    <Link rel="noopener noreferrer" href={"/"} target="_blank" className="hover:text-[#ff6900] transition-colors duration-300" >Linkedin</Link>
                                                    <Link rel="noopener noreferrer" href={"/"} data-action="share/whatsapp/share" target="_blank" className="hover:text-[#ff6900] transition-colors duration-300" >Whatsapp</Link>
                                                 */}
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="about-publisher flex max-lg:flex-wrap items-center gap-4 px-6 py-8 rounded-2xl bg-[#F2F7FF]">
                                        <div className="profile">
                                            <Image
                                                src={img.img1[2]}
                                                width={100}
                                                height={100}
                                                className="rounded-full h-32 w-32 min-h-32 min-w-32 max-h-32 max-w-32 object-cover"
                                                loading="eager"
                                                alt={img.img1[4]}
                                            />
                                        </div>
                                        <div className="about flex flex-col gap-2">
                                            <h1 className="font-bold text-2xl text-dark uppercase">{img.img1[3]}</h1>
                                            <p className="text-blog mb-4 text-lg tracking-wide">
                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam no eirmod tempor invidunt ut labore et magna aliquyam erat.
                                            </p>
                                            <div className="social flex gap-4">
                                                <Link href={"https://facebook.com"}><i className="text-[#005EF9] hover:text-default text-xl transition-colors duration-300 icofont-facebook"></i></Link>
                                                <Link href={"https://twitter.com"}><i className="text-[#005EF9] hover:text-default text-xl transition-colors duration-300 icofont-twitter"></i></Link>
                                                <Link href={"https://linkedin.com"}><i className="text-[#005EF9] hover:text-default text-xl transition-colors duration-300 icofont-linkedin"></i></Link>
                                                <Link href={"https://instagram.com"}><i className="text-[#005EF9] hover:text-default text-xl transition-colors duration-300 icofont-instagram"></i></Link>
                                            </div>
                                        </div>
                                    </div>

                                    <hr className="w-full h-1 my-8" />
                                    
                                    <div className="comment flex shadow-default-shadow rounded-md flex-col gap-8 px-6 py-10 ">
                                        <h1 className="text-3xl text-dark font-bold">Leave A Comment</h1>
                                        <form className="flex flex-wrap flex-col gap-4 ">
                                            <input type="text" name="name" placeholder="Your Name" className="bg-[#F2F7FF] p-4 rounded-full placeholder:text-blog w-full" />
                                            <input type="text" name="email" placeholder="Email Address" className="bg-[#F2F7FF] p-4 rounded-full placeholder:text-blog w-full" />
                                            <input type="text" name="mobile" placeholder="Phone Number" className="bg-[#F2F7FF] p-4 rounded-full placeholder:text-blog w-full" />
                                            <input type="text" name="website" placeholder="Website" className="bg-[#F2F7FF] p-4 rounded-full placeholder:text-blog w-full" />
                                            <textarea name="comment" placeholder="Your Comment..." className="bg-[#F2F7FF] p-4 rounded-xl min-h-40 w-full placeholder:text-blog" ></textarea>
                                            <div className="checkbox flex gap-2">
                                                <input type="checkbox" name="saveData" className="cursor-pointer" id="saveData" />
                                                <label htmlFor="saveData" className="text-xs cursor-pointer">Save my name, email, and website in this browser for the next time I comment.</label>
                                            </div>
                                            <button type="submit" className="bg-default max-w-64 px-6 py-4 rounded-full text-xl font-bold text-white cursor-pointer hover:scale-110 transition-all duration-200">Post Comment</button>
                                        </form>

                                        

                                    </div>
                                </div>
                                
                            </div>
                        </div>
                       
                    </div>
                </div>
                <div className="right py-6 pr-16  max-lg:pr-6 pl-6 max-lg:w-full rounded-xl w-[40%]">
                    <div className="container flex flex-col gap-y-8">
                        {/* Search Bar */}
                        {/* <div className="search">
                            <h1 className="text-default text-2xl font-bold">Search</h1>
                            <div className="sear flex w-full">
                                <input type="text" className="text-xl w-full h-16 mt-4 relative rounded-full px-4 pr-16" name="search" placeholder="Search Here..." />
                                <i className="icofont-search p-6 bg-default text-white absolute right-0 hover:text-default-gray cursor-pointer rounded-full"></i>
                            </div>
                        </div>  */}

                        {/* Categories */}
                        <div className="category flex flex-col">
                            <h1 className="text-2xl text-default tracking-wide font-semibold">Category</h1>
                            <div className="flex flex-col border px-4 my-4 bg-dark py-6 rounded-3xl">
                                <ul className="flex flex-col gap-4">
                                    <li className="cursor-pointer bg-white transition-colors duration-200 hover:bg-gradient-to-r hover:from-default-gray hover:to-white py-5 rounded-full px-6 flex justify-between text-xl max-min-end:text-lg tracking-normal font-semibold">
                                        <span>Business Growth</span><span>(1)</span>
                                    </li>
                                    <li className="cursor-pointer bg-white transition-colors duration-200 hover:bg-gradient-to-r hover:from-default-gray hover:to-white py-5 rounded-full px-6 flex justify-between text-xl max-min-end:text-lg tracking-normal font-semibold">
                                        <span>Business Strategy</span><span>(5)</span>
                                    </li>
                                    <li className="cursor-pointer bg-white transition-colors duration-200 hover:bg-gradient-to-r hover:from-default-gray hover:to-white py-5 rounded-full px-6 flex justify-between text-xl max-min-end:text-lg tracking-normal font-semibold">
                                        <span>Insurance Consulting</span><span>(1)</span>
                                    </li>
                                    <li className="cursor-pointer bg-white transition-colors duration-200 hover:bg-gradient-to-r hover:from-default-gray hover:to-white py-5 rounded-full px-6 flex justify-between text-xl max-min-end:text-lg tracking-normal font-semibold">
                                        <span>Law Consulting</span><span>(3)</span>
                                    </li>
                                    <li className="cursor-pointer bg-white transition-colors duration-200 hover:bg-gradient-to-r hover:from-default-gray hover:to-white py-5 rounded-full px-6 flex justify-between text-xl max-min-end:text-lg tracking-normal font-semibold">
                                        <span>Media</span><span>(4)</span>
                                    </li>
                                    <li className="cursor-pointer bg-white transition-colors duration-200 hover:bg-gradient-to-r hover:from-default-gray hover:to-white py-5 rounded-full px-6 flex justify-between text-xl max-min-end:text-lg tracking-normal font-semibold">
                                        <span>Web Design</span><span>(11)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Recent Posts */}
                        <div className="recent flex flex-col">
                            <h1 className="text-2xl text-default tracking-wide font-semibold">Recent Posts</h1>
                            <div className="flex flex-col border px-4 my-4 bg-dark py-6 rounded-3xl">
                                <ul className="flex flex-col py-4 rounded-2xl gap-4 gap-y-8 max-min-end:text-lg bg-white">
                                    <li className="cursor-pointer px-6 flex flex-col">

                                        <div className="relative">
                                            <Image
                                                src={img.img1[0]}
                                                width={500}
                                                height={500}
                                                alt={img.img1[1]}

                                                className="rounded-xl relative"
                                            />
                                            <h3 className="absolute bottom-5 z-10 bg-dark px-2 py-1 text-xs left-3 text-default">{img.img1[4]}</h3>
                                        </div>
                                        <h1 className="text-default-gray hover:text-default transition-colors duration-300 text-2xl truncate">{img.img1[1]}</h1>
                                    </li>

                                    <li className="cursor-pointer px-6 flex flex-col">

                                        <div className="relative">
                                            <Image
                                                src={img.img2[0]}
                                                width={500}
                                                height={500}
                                                alt={img.img2[1]}

                                                className="rounded-xl relative"
                                            />
                                            <h3 className="absolute bottom-5 z-10 bg-dark px-2 py-1 text-xs left-3 text-default">{img.img2[4]}</h3>
                                        </div>
                                        <h1 className="text-default-gray hover:text-default transition-colors duration-300 text-2xl truncate">{img.img2[1]}</h1>
                                    </li>
                                    <li className="cursor-pointer px-6 flex flex-col">

                                        <div className="relative">
                                            <Image
                                                src={img.img3[0]}
                                                width={500}
                                                height={500}
                                                alt={img.img3[1]}

                                                className="rounded-xl relative"
                                            />
                                            <h3 className="absolute bottom-5 z-10 bg-dark px-2 py-1 text-xs left-3 text-default">{img.img3[4]}</h3>
                                        </div>
                                        <h1 className="text-default-gray hover:text-default transition-colors duration-300 text-2xl truncate">{img.img3[1]}</h1>
                                    </li>
                                    <li className="cursor-pointer px-6 flex flex-col">

                                        <div className="relative">
                                            <Image
                                                src={img.img4[0]}
                                                width={500}
                                                height={500}
                                                alt={img.img4[1]}

                                                className="rounded-xl relative"
                                            />
                                            <h3 className="absolute bottom-5 z-10 bg-dark px-2 py-1 text-xs left-3 text-default">{img.img4[4]}</h3>
                                        </div>
                                        <h1 className="text-default-gray hover:text-default transition-colors duration-300 text-2xl truncate">{img.img4[1]}</h1>
                                    </li>
                                    <li className="cursor-pointer px-6 flex flex-col">

                                        <div className="relative">
                                            <Image
                                                src={img.img5[0]}
                                                width={500}
                                                height={500}
                                                alt={img.img5[1]}

                                                className="rounded-xl relative"
                                            />
                                            <h3 className="absolute bottom-5 z-10 bg-dark px-2 py-1 text-xs left-3 text-default">{img.img5[4]}</h3>
                                        </div>
                                        <h1 className="text-default-gray hover:text-default transition-colors duration-300 text-2xl truncate">{img.img5[1]}</h1>
                                    </li>

                                </ul>
                            </div>
                        </div>

                        {/* Tags */}
                        <div className="category flex flex-col">
                            <h1 className="text-2xl text-default tracking-wide font-semibold">Category</h1>
                            <div className="flex border flex-wrap gap-6 px-4 my-4 flex-auto bg-dark py-6 rounded-3xl">
                                <h2 className=" bg-gray-200 capitalize font-semibold text-default-gray rounded-lg transition-colors duration-300 text-md tracking-wide px-3 hover:text-white cursor-pointer py-1 hover:bg-default">
                                    Best
                                </h2>
                                <h2 className=" bg-gray-200 capitalize font-semibold text-default-gray rounded-lg transition-colors duration-300 text-md tracking-wide px-3 hover:text-white cursor-pointer py-1 hover:bg-default">
                                    digital
                                </h2>
                                <h2 className=" bg-gray-200 capitalize font-semibold text-default-gray rounded-lg transition-colors duration-300 text-md tracking-wide px-3 hover:text-white cursor-pointer py-1 hover:bg-default">
                                    digital agency
                                </h2>
                                <h2 className=" bg-gray-200 capitalize font-semibold text-default-gray rounded-lg transition-colors duration-300 text-md tracking-wide px-3 hover:text-white cursor-pointer py-1 hover:bg-default">
                                    featured
                                </h2>
                                <h2 className=" bg-gray-200 capitalize font-semibold text-default-gray rounded-lg transition-colors duration-300 text-md tracking-wide px-3 hover:text-white cursor-pointer py-1 hover:bg-default">
                                    innovation
                                </h2>
                                <h2 className=" bg-gray-200 capitalize font-semibold text-default-gray rounded-lg transition-colors duration-300 text-md tracking-wide px-3 hover:text-white cursor-pointer py-1 hover:bg-default">
                                    marketing
                                </h2>
                                <h2 className=" bg-gray-200 capitalize font-semibold text-default-gray rounded-lg transition-colors duration-300 text-md tracking-wide px-3 hover:text-white cursor-pointer py-1 hover:bg-default">
                                    on sale
                                </h2>
                                <h2 className=" bg-gray-200 capitalize font-semibold text-default-gray rounded-lg transition-colors duration-300 text-md tracking-wide px-3 hover:text-white cursor-pointer py-1 hover:bg-default">
                                    product
                                </h2>
                                <h2 className=" bg-gray-200 capitalize font-semibold text-default-gray rounded-lg transition-colors duration-300 text-md tracking-wide px-3 hover:text-white cursor-pointer py-1 hover:bg-default">
                                    startup
                                </h2>
                                <h2 className=" bg-gray-200 capitalize font-semibold text-default-gray rounded-lg transition-colors duration-300 text-md tracking-wide px-3 hover:text-white cursor-pointer py-1 hover:bg-default">
                                    technology
                                </h2>
                                <h2 className=" bg-gray-200 capitalize font-semibold text-default-gray rounded-lg transition-colors duration-300 text-md tracking-wide px-3 hover:text-white cursor-pointer py-1 hover:bg-default">
                                    trendy
                                </h2>


                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}