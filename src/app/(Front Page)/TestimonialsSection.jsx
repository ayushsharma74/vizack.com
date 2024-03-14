import React from 'react'
import Image from 'next/image'

function Testimonialssection() {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">What others say about us</h2>

          <div className="grid gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-3 lg:divide-x">

            <div className="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
              <div className="text-center text-gray-600">"Choosing ViZack Enterprises was the best decision we made for our business. Their expertise and personalized solutions significantly boosted our sales."</div>

              <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
                  <Image src={"/assets/background/profile/gajender.jpg"} width={150} height={150} loading={"lazy"} alt={"Photo by Gajender"} className={"h-full w-full object-cover object-center"} />
                </div>

                <div>
                  <div className="text-center text-sm font-bold text-indigo-500 sm:text-left md:text-base">Gajender</div>
                  <p className="text-center text-sm text-gray-500 sm:text-left md:text-sm">CEO / Musunoa</p>
                </div>
              </div>
            </div>



            <div className="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
              <div className="text-center text-gray-600">"I couldn't be happier with the results achieved by ViZack Enterprises. Their professionalism and dedication exceeded my expectations."</div>

              <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
                  <Image src={"/assets/background/profile/p1.jpeg"} width={150} height={150} loading={"lazy"} alt={"Photo by Farhan Ahmad Khan"} className={"h-full w-full object-cover object-center"} />
                </div>

                <div>
                  <div className="text-center text-sm font-bold text-indigo-500 sm:text-left md:text-base">Farhan Ahmad Khan</div>
                  <p className="text-center text-sm text-gray-500 sm:text-left md:text-sm">CMO / Musunoa</p>
                </div>
              </div>
            </div>



            <div className="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
              <div className="text-center text-gray-600">“ViZack Enterprises transformed our marketing strategy completely! Their innovative approach skyrocketed our brand visibility.”</div>

              <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
                  <Image src={"/assets/background/profile/p4.jpeg"} width={150} height={150} loading={"lazy"} alt={"Photo by Ayush Sharma"} className={"h-full w-full object-cover object-center"} />
                </div>

                <div>
                  <div className="text-center text-sm font-bold text-indigo-500 sm:text-left md:text-base">Ayush Sharma</div>
                  <p className="text-center text-sm text-gray-500 sm:text-left md:text-sm">CTO / Musunoa</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

  )
}

export default Testimonialssection