import React from 'react'

const Suggestions = () => {
  return (
    <div>
        <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div class="flex flex-col overflow-hidden rounded-lg bg-gray-900 sm:flex-row md:h-80">
      <div class="order-first h-32 w-32 bg-default sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
        <img src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29udGFjdHxlbnwwfHwwfHx8MA%3D%3D" loading="lazy" alt="Photo by Andras Vas" class="h-full w-full object-cover object-center" />
      </div>
  
      <div class="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
        <h2 class="mb-4 text-xl font-bold text-white md:text-2xl lg:text-4xl">Get in touch</h2>

        <p class="mb-8 max-w-md text-white">Do you have any suggestions for us? Reach out to us in just one click!</p>

        <div class="mt-auto">
          <a href="#" class="inline-block rounded-lg bg-default px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-orange-600 focus-visible:ring active:bg-gray-200 md:text-base">Contact Us</a>
        </div>
      </div>
    </div>
  </div>
</div>
      
    </div>
  )
}

export default Suggestions
