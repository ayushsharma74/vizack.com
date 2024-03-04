'use client'
import { Anton } from 'next/font/google';
import { Typewriter } from "react-simple-typewriter"
const anton = Anton({ subsets: ['latin'],weight: "400" });

export default function Mainpage(){
    return (
         <>
            <div className="h-screen w-full flex-col flex justify-center items-center">
          <div className="h-[9.375rem] w-[36.625rem] bg-transparent mr-[21.5rem] mb-[11rem]">
            <main className={anton.className}>
              <h1 className='text-5xl mb-2'>Hi,we&apos;re <font><span class name="text-default">V</span>i<span class name="text-default">Z</span>ack Enterprises</font></h1>
            </main>
            <font className={anton.className}>
             <h1 className='text-4xl mt-3'>We&apos;re The <em className='normal font-serif'> Experts </em> of <Typewriter words={['Web development','Data analytics','Strategic sales','Brand building']} cursor='true' loop='false'/></h1>
             </font>
          </div>
           <button className="bg-transparent hover:bg-[#f2932f] text-[#f2932f] font-semibold hover:text-white py-2 px-5 border border-[#f2932f] hover:border-transparent rounded mr-[49.5rem] absolute bottom-[13.75rem] transition ease-in-out duration-300">
            Get in touch
         </button>
         </div > 
         </>   
    );
}