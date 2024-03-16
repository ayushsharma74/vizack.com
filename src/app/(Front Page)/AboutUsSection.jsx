import React from 'react';
import Image from 'next/image';
import Button from '@/components/button';
import Link from 'next/link';


function Aboutussection() {
  return (
    <>
      <div className='relative flex flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12'>
        <div className='w-full max-w-screen-lg mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='relative'>
              <div className='rounded-lg overflow-hidden px-4 sm:px-0'>
                <Image src='/assets/images/pic1.jpg' alt='Air Conditioner' width={800} height={800} />
              </div>
            </div>
            <div className='flex flex-col justify-center'>
              <div className='px-4 sm:px-0'>
                <h2 className='mb-4 text-2xl font-bold text-gray-800'>At ViZack Enterprises Pvt Ltd</h2>
                <p className='mb-6 text-gray-800'>
                  Welcome to ViZack Enterprises Pvt Ltd - where your success is our passion, where commitment meets excellence. At ViZack Enterprises, we pride ourselves on being more than just a startup organization – we're a dedicated team of professionals driven by a singular mission: to provide unparalleled customer service and empower small businesses to achieve remarkable growth.
                </p>
                <p className='mb-6 text-gray-800'>
                  From the moment you connect with us, you become our top priority. Whether you're a budding entrepreneur or an established business looking to expand, we're here to support you every step of the way. Our unwavering dedication to your success means that when you choose ViZack Enterprises, you're choosing a partner who will stop at nothing to help you realize your business goals.
                </p>
                <Link href={'/about'}><Button content={"About us"}/></Link>
                {/* <Link href='/about' className='inline-block rounded-lg bg-emerald-500 px-8 py-3 text-center text-sm font-semibold text-white transition duration-300 hover:bg-emerald-600 focus-visible:ring ring-emerald-500 focus:outline-none focus:ring-offset-2 focus:ring-offset-gray-50'>MORE ABOUT US</Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutussection;
