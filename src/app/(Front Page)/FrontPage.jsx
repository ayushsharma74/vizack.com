import { Anton } from 'next/font/google';
import { Typewriter } from "react-simple-typewriter";
import Image from 'next/image';
const anton = Anton({ subsets: ['latin'], weight: "400" });
import Link from 'next/link';

export default function Mainpage() {
  return (
    <>
      <div className="bg-white h-60 mt-44 mb-44 font-sans flex flex-col items-center justify-center py-8">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 pt-6 lg:pt-0">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
              <div className="flex flex-col items-center justify-center">
                <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-gray-900 sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                  <p className="sm:block ">Welcome to</p>
                  <span className="text-orange-600 mb-8 md:block">ViZack Enterprises</span>
                  <p className="text-zinc-500 md:block mt-4">Masters of {''}</p>
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
                  <Link href="/services"className="inline-flex items-center text-white bg-orange-500 justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full sm:w-auto mb-3 sm:mb-0 sm:mr-3">
                    Our Services
                  </Link>
                  <Link href ="/contact" className="inline-flex hover:ring-gray-400 hover:bg-gray-100 items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full sm:w-auto">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-8 sm:mt-0 lg:mt-0 lg:col-span-5 flex items-center justify-center">
              <div className="mr-6">
                <Image src="/assets/images/asset6.jpg" alt="Image" width={2000} height={2000} />
              </div>
              <p className="text-base text-gray-600 sm:text-xl lg:text-lg xl:text-xl">
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
