import React from 'react'

function Testimonialssection() {
  return (
    <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-xl px-4 md:px-8">
          <h2 class="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">What others say about us</h2>

          <div class="grid gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-3 lg:divide-x">

            <div class="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
              <div class="text-center text-gray-600">"Choosing ViZack Enterprises was the best decision we made for our business. Their expertise and personalized solutions significantly boosted our sales."</div>

              <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                <div class="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
                  <img src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NnwxNzI5MjU4fHxlbnwwfHx8fHw%3D" loading="lazy" alt="Photo by Radu Florin" class="h-full w-full object-cover object-center" />
                </div>

                <div>
                  <div class="text-center text-sm font-bold text-indigo-500 sm:text-left md:text-base">Sarah Miller</div>
                  <p class="text-center text-sm text-gray-500 sm:text-left md:text-sm">CEO / Datadrift</p>
                </div>
              </div>
            </div>



            <div class="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
              <div class="text-center text-gray-600">"I couldn't be happier with the results achieved by ViZack Enterprises. Their professionalism and dedication exceeded my expectations."</div>

              <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                <div class="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
                  <img src="https://media.istockphoto.com/id/1406447835/photo/portrait-on-a-man-in-his-40s.webp?b=1&s=170667a&w=0&k=20&c=QH848C0aNTVI3UnsCWXCNsfsqCH_QypQUYX-oatnUdg=" loading="lazy" alt="Photo by christian ferrer" class="h-full w-full object-cover object-center" />
                </div>

                <div>
                  <div class="text-center text-sm font-bold text-indigo-500 sm:text-left md:text-base">Michael Thompson</div>
                  <p class="text-center text-sm text-gray-500 sm:text-left md:text-sm">CFO / Dashdash</p>
                </div>
              </div>
            </div>



            <div class="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
              <div class="text-center text-gray-600">“ViZack Enterprises transformed our marketing strategy completely! Their innovative approach skyrocketed our brand visibility.”</div>

              <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                <div class="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
                  <img src="https://images.unsplash.com/photo-1496361264444-f0d580d778ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OXwxNzI5MjU4fHxlbnwwfHx8fHw%3D" loading="lazy" alt="Photo by Ayo Ogunseinde" class="h-full w-full object-cover object-center" />
                </div>

                <div>
                  <div class="text-center text-sm font-bold text-indigo-500 sm:text-left md:text-base">Emily Johnson</div>
                  <p class="text-center text-sm text-gray-500 sm:text-left md:text-sm">CTO / Uptime</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

  )
}

export default Testimonialssection