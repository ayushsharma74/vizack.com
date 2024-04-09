import React from 'react'
import CountUp from 'react-countup';

function Funfactssection() {
  return (
    <div  className="bg-white py-6 sm:py-8 lg:py-12">
        <div  className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div  className="mb-8 md:mb-12">
            <h2  className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Our Team by the numbers</h2>

            <p  className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg"></p>
          </div>


          <div  className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-8">

            <div  className="flex flex-col items-center justify-center rounded-lg bg-gray-100 p-4 lg:p-8">
              <div  className="text-xl font-bold text-default sm:text-2xl md:text-3xl"><CountUp end={2} enableScrollSpy/>+</div>
              <div  className="text-sm font-semibold sm:text-base">Branches</div>
            </div>

            <div  className="flex flex-col items-center justify-center rounded-lg bg-gray-100 p-4 md:p-8">
              <div  className="text-xl font-bold text-default sm:text-2xl md:text-3xl"><CountUp end={50} enableScrollSpy/>+</div>
              <div  className="text-sm font-semibold sm:text-base">Employees</div>
            </div>


            <div  className="flex flex-col items-center justify-center rounded-lg bg-gray-100 p-4 md:p-8">
              <div  className="text-xl font-bold text-default sm:text-2xl md:text-3xl"><CountUp end={500} enableScrollSpy/>+</div>
              <div  className="text-sm font-semibold sm:text-base">Happy clients</div>
            </div>



            <div  className="flex flex-col items-center justify-center rounded-lg bg-gray-100 p-4 md:p-8">
              <div  className="text-xl font-bold text-default sm:text-2xl md:text-3xl"><CountUp end={45} enableScrollSpy/>+</div>
              <div  className="text-sm font-semibold sm:text-base">Projects</div>
            </div>

          </div>
        </div>
      </div>
  )
}

export default Funfactssection
