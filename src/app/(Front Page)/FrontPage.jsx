'use client'
import { Anton } from 'next/font/google';
import { Typewriter } from "react-simple-typewriter";
import Image from 'next/image';
const anton = Anton({ subsets: ['latin'], weight: "400" });

export default function Mainpage() {
  return (
    <>
      <div className="min-h-screen flex justify-between max-lg:w-fit max-lg:px-6 max-lg:mx-auto mx-12 py-16">
        <div className="my-2 mt-16 ">
            <div className="flex flex-col">
            <h1 data-aos="fade-up" data-aos-delay="0" data-aos-duration="1500" className="text-2xl max-min-end:text-xl max-min-end:text-wrap">Welcome to <span className='text-default text-3xl tracking-wide'>V</span><span className='text-default-gray tracking-wide'>i</span><span className='text-default text-3xl tracking-wide'>Z</span><span className='text-default-gray tracking-wide'>ack Enterprises!!</span></h1>
            <h1 data-aos="fade-up" data-aos-delay="50" data-aos-duration="1500" className='text-sm max-min-end:text-xs text-default-gray tracking-wider'>Where Philosophy Meets Digital Innovation</h1>
          </div>
          <div className="w-auto min-w-[35rem] lg:hidden min-h-80 h-auto max-xl:min-w-[20rem] my-16 max-min-end:hidden">
            <Image
              src={"/assets/images/digital marketing.png"}
              width={500}
              height={500}
              alt='Digital Marketing'
              className='w-auto h-auto object-cover'
            />
          </div>
          <div className="my-6">
            <h1 data-aos="fade-up" data-aos-delay="100" data-aos-duration="1500" className='text-6xl text-wrap tracking-wider w-[40rem] text-default max-xl:text-4xl max-xl:w-[25rem] max-min-sm:w-80 max-min-end:text-3xl max-min-end:w-64'>Empowering Sustainability with Stoicism and Digital Innovation</h1>
            <h3 data-aos="fade-up" data-aos-delay="150" data-aos-duration="1500" className='text-md text-default-gray tracking-wide text-wrap w-[30rem] max-xl:text-sm my-4 max-min-sm:w-[25rem] max-min-end:text-xs max-min-end:w-60'>Find ways to enrich your life and amplify your impact. ViZack, combines Stoic wisdom with technological innovation to empower social entrepreneurs and individuals. We&apos;re about transforming lives, enhancing productivity, and fostering sustainable practices for a better world.</h3>
          </div>
          <div className="search my-6 mt-8 hover:text-default cursor-pointer" data-aos="fade-up" data-aos-delay="600" data-aos-duration="900">
            <span className="bg-default rounded-md py-4 px-4 cursor-pointer font-semibold tracking-wider text-white hover:text-default hover:bg-white hover:border hover:border-default transition-colors"><i className="icofont-touch text-2xl"></i><span>Get In Touch</span></span>
          </div>
        </div>
          <div className="w-auto min-w-[35rem] max-lg:hidden min-h-80 h-auto max-xl:min-w-[25rem] my-16">
            <Image
              src={"/assets/images/digital marketing.png"}
              width={500}
              height={500}
            alt='Digital Marketing'
            className='w-auto h-auto object-cover'
            />
          </div>
      </div>

      {/* <div className="h-screen w-full flex-col flex justify-center items-center">

        <div className="h-[9.375rem] w-[42rem] bg-transparent mr-[21.5rem] mb-[11rem]">
          <main className={anton.className}>
            <h1 className='text-5xl mb-2'>Hi,we&apos;re <font className="text-default-gray"><span className="text-default">V</span><span className='text-4xl mx-1'>i</span><span className="text-default">Z</span><span className="text-4xl tracking-wider">ack Enterprises</span></font></h1>
          </main>
          <h1 className='text-4xl mt-3 w-full'>We&apos;re The <em className='normal font-serif'> Experts </em> of <span className='text-default'><Typewriter words={['Web development.', 'Data analytics.', 'Strategic sales.', 'Brand building.']} typeSpeed={50} deleteSpeed={50} delaySpeed={3000} loop cursorBlinking={0} cursorColor='#F2932F' /></span></h1>
          <font className={anton.className}>
          </font>

        </div>

        <button className="bg-transparent hover:bg-default text-default font-semibold hover:text-white py-2 px-5 border border-default hover:border-transparent rounded mr-[49.5rem] absolute bottom-[13.75rem] transition ease-in-out duration-300">
          Get in touch
        </button>
      </div > */}

    </>
  );
}