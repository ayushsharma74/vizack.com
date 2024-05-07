'use client'
import '@/styles/blogs.css'
import BlogTitle from '@/components/blogComponents/BlogTitle'
import Image from 'next/image'
import Link from 'next/link'

const imgloader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 95}`;
};

export default function BlogPage() {
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
                <Link href={`/blogs/navigating-inflation`} >&nbsp; Navigating the Inflation of Skills in the IT Sector: A New Era of Job Challenges</Link>
            </h1>
        </div>
            <div className='cont my-10'>
                <BlogTitle title={"Navigating the Inflation of Skills in the IT Sector: A New Era of Job Challenges"} writer={"Jatin Jain"} date={"21.04.2024"} category={"Discussion"}/>
                <p className='font-serif text-lg mb-4'></p>
                <h1 className='font-bold text-2xl'></h1>
                <p className='font-serif text-lg mb-4'>In recent years, the IT industry has witnessed a surge in demand for skilled professionals, yet paradoxically, a growing number of qualified engineers find themselves grappling with joblessness and stress. This inflation of skills, as it's come to be known, presents a complex challenge that requires a deeper understanding and innovative solutions.</p>
                <Image 
                loader={imgloader}
                src={"/assets/blogs/navigating inflation/img1.png"}
                width={500}
                height={500}
                loading='lazy'
                quality={100}
                className='min-w-full'
                alt='vector art'
                />
                <br />
                <p className='font-serif text-lg mb-4'>The digital revolution has spurred an insatiable appetite for technological solutions across industries. Consequently, companies are clamoring for top-tier talent to fuel their innovation engines. However, this demand has led to a proliferation of specialized skill sets, often leaving many qualified engineers sidelined despite their proficiency.</p>
                <br />
                <p className='font-serif text-lg mb-4'>One of the primary drivers of this phenomenon is the rapid pace of technological advancement. New languages, frameworks, and methodologies emerge at a breakneck speed, rendering yesterday's expertise obsolete in the blink of an eye. This constant evolution creates a daunting landscape for professionals striving to stay relevant in their careers.</p>
                <br />
                <p className='font-serif text-lg mb-4'>Moreover, the democratization of knowledge through online resources and educational platforms has lowered the barriers to entry into the IT field. While this accessibility is a boon for aspiring technologists, it also means that the pool of talent is ever-expanding, intensifying competition for coveted positions.</p>
                <br />
                <p className='font-serif text-lg mb-4'>The traditional career trajectory, once characterized by linear progression within a single specialization, is now giving way to a more dynamic and multidisciplinary approach. Engineers are increasingly required to adapt, upskill, and diversify their expertise to remain competitive in the job market.</p>
                <br />
                <Image 
                loader={imgloader}
                src={"https://www.sdmmag.com/ext/resources/Issues/2022/april/MAIN-GettyImages-1319576138.png?1651670807"}
                width={100}
                height={100}
                loading='lazy'
                quality={100}
                className='min-w-[70%] mx-auto'
                alt='phone-gif'
                />
                <br />
                <p className='font-serif text-lg mb-4'>Amidst this turbulence, it's crucial for both employers and employees to rethink their strategies. Companies must adopt more inclusive hiring practices that prioritize potential and adaptability over narrow skill criteria. By fostering a culture of continuous learning and development, organizations can cultivate a workforce that thrives in an era of constant flux.</p>
                <br />
                <p className='font-serif text-lg mb-4'>On the individual level, engineers must embrace a growth mindset, viewing each new challenge as an opportunity for growth rather than a setback. Building a robust portfolio of skills, coupled with a willingness to explore emerging technologies, can empower professionals to navigate the choppy waters of the IT job market with confidence.</p>
                <br />
                <p className='font-serif text-lg mb-4'>Furthermore, the IT community itself plays a pivotal role in mitigating the adverse effects of skill inflation. Peer-to-peer mentorship, knowledge-sharing forums, and collaborative learning initiatives can serve as invaluable resources for both seasoned professionals and newcomers alike.</p>
                <br />
                <p className='font-serif text-lg mb-4'>In essence, while the inflation of skills in the IT sector presents formidable obstacles, it also heralds a new era of possibilities. By fostering a culture of adaptability, resilience, and collaboration, we can harness the transformative potential of technology to drive meaningful innovation and create a more inclusive future for all.</p>
                <br />

            </div>
        </>
    )
}