import React from 'react'
import Image from 'next/image';

function Aboutussection() {
  return (
    <>
      <div className='relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12'>
        <div className='w-full items-center mx-auto max-w-screen-lg'>
          <div className='group grid w-full grid-cols-2'>
            <div className='pl-16 relative flex items-end flex-col before:block before:absolute before:h-1/6 before:w-4 before:bg-default before:bottom-0 before:left-0 before:rounded-lg  before:transition-all group-hover:before:bg-orange-600 overflow-hidden'>
              <div className='absolute top-0 left-0 bg-default w-4/6 px-12 py-14 flex flex-col justify-center rounded-xl group-hover:bg-orange-600 transition-all '>
                <span className='block mb-10 font-bold group-hover:text-orange-300'>HERE WE ARE</span>
                <h2 className='text-white font-bold text-3xl'>
                At ViZack Enterprises Pvt Ltd, growth isn't just a goal – it's a promise.
                </h2>
              </div>
              <a className='font-bold text-sm flex mt-2 mb-8 items-center gap-2' href=''>
                <span>MORE ABOUT US</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='w-6 h-6'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3' />
                </svg>
              </a>
              <div className='rounded-xl overflow-hidden'>
                <Image src='/assets/images/politics redefined.png' alt='Air Conditioner' width={800} height={800} />
              </div>
            </div>
            <div>
              <div className='pl-12'>
                <p className='peer mb-6 text-black'>
                  Welcome to ViZack Enterprises Pvt Ltd - where your success is our passion,
                  where commitment meets excellence. At ViZack Enterprises, we pride

                  ourselves on being more than just a startup organization – we're a
                  dedicated team of professionals driven by a singular mission: to provide
                  unparalleled customer service and empower small businesses to achieve
                  remarkable growth.              </p>
                <p className='mb-6 text-black'>
                  From the moment you connect with us, you become our top priority.
                  Whether you're a budding entrepreneur or an established business looking
                  to expand, we're here to support you every step of the way. Our
                  unwavering dedication to your success means that when you choose ViZack
                  Enterprises, you're choosing a partner who will stop at nothing to help you
                  realize your business goals.              </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};



export default Aboutussection