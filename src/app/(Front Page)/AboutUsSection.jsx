import React from 'react'

function Aboutussection() {
  return (
    <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-xl px-4 md:px-8">
          <div class="grid gap-8 md:grid-cols-2 lg:gap-12 items-center">
            <div>
              <div class="h-96 w-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto justify-center">
                <img src="https://plus.unsplash.com/premium_photo-1661775434014-9c0e8d71de03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b2ZmaWNlfGVufDB8fDB8fHww" loading="lazy" alt="Photo by Martin Sanchez" class="h-full w-full object-center object-contain" />
              </div>
            </div>

            <div class="md:pt-8">
              <p class="text-center font-bold text-default md:text-left">Our Story</p>

              <h1 class="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">About Us</h1>

              <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                Welcome to ViZack Enterprises Pvt Ltd - where your success is our passion,
                where commitment meets excellence. At ViZack Enterprises, we pride

                ourselves on being more than just a startup organization – we're a
                dedicated team of professionals driven by a singular mission: to provide
                unparalleled customer service and empower small businesses to achieve
                remarkable growth.<br /><br />
              </p>
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">Learn More</button>

            </div>
          </div>
        </div>
      </div>

  )
}

export default Aboutussection