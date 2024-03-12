'use client'
import { Anton } from 'next/font/google';
import { Typewriter } from "react-simple-typewriter";
import Image from 'next/image';
import Link from 'next/link';
const anton = Anton({ subsets: ['latin'], weight: "400" });


export default function Mainpage() {
  return (
    <>
      <div className="bg-white min-h-screen font-sans flex flex-col items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 pt-12 lg:pt-0">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
              <div className="flex flex-col items-center justify-center">
                <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-gray-900 sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                  <p className="sm:block mb-4">Welcome to</p>
                  <span className="text-orange-600 mb-8 md:block">ViZack Enterprises</span>
                  <p className="text-zinc-500 md:block">Masters of {''}</p>
                  <span>
                    <Typewriter
                      words={['Data Analytics', 'Strategic Sales', 'Public Relations', 'Web Design', 'Web Development', 'Digital Marketing']}
                      loop={0}
                      cursor
                      cursorStyle='_'
                      typeSpeed={70}
                      deleteSpeed={50}>
                    </Typewriter>
                  </span>
                </h1>
                <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                  <Link href={"/services"}><button className="inline-flex items-center text-white bg-orange-500 justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full sm:w-auto">
                    Our Services
                  </button>
                  </Link>
                  <Link href={"/contact"}>
                  <button className="inline-flex hover:ring-gray-400 hover:bg-gray-100 items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 mt-3 w-full sm:mt-0 sm:ml-3 sm:w-auto">
                    Contact Us
                  </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-16 ml-6 sm:mt-24 lg:mt-0 lg:col-span-5 flex items-center">
              <div className="mr-6">
                <Image src="/assets/images/asset6.jpg" alt="Image" width={1000} height={1000} />
              </div>
              <p className="text-base text-gray-600 sm:text-xl lg:text-lg xl:text-xl">

              </p>
            </div>
          </div>
        </div>
      </div >
    </>
  );
}