import React from 'react'
import Upperbanner from '@/components/Upperbanner'
import Image from 'next/image'

const about = () => {
  return (
    <>
      <Upperbanner content={'ABOUT'} route={'about'} routeName={'About'} />
      <div>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-md px-4 md:px-8">
            <h1 data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" className="mb-4 text-center text-2xl font-extrabold text-default sm:text-3xl md:mb-6 max-sm:mt-16 ">About Us</h1>

            <p data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" className="mb-6 font-semibold text-black sm:text-lg md:mb-8">Welcome to ViZack Enterprises Pvt Ltd - where your success is our passion,
              where commitment meets excellence. At ViZack Enterprises, we pride

              ourselves on being more than just a startup organization we&apos;re a
              dedicated team of professionals driven by a singular mission: to provide
              unparalleled customer service and empower small businesses to achieve
              remarkable growth.</p>

            <h2 data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" className="mb-2 text-xl font-semibold text-default sm:text-2xl md:mb-4">Our Goal</h2>

            <p data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" className="mb-6 text-black font-semibold sm:text-lg md:mb-8">From the moment you connect with us, you become our top priority.
              Whether you&apos;re a budding entrepreneur or an established business looking
              to expand, we&apos;re here to support you every step of the way. Our
              unwavering dedication to your success means that when you choose ViZack
              Enterprises, you&apos;re choosing a partner who will stop at nothing to help you
              realize your business goals.</p>

            <ul className="mb-6 list-inside list-disc text-gray-500 sm:text-lg md:mb-8">
              <li className="font-semibold text-black" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">Quality Services</li>
              <li className="font-semibold text-black" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">Experienced Professionals</li>
              <li className="font-semibold text-black" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000">Customer Priority</li>
            </ul>

            <blockquote data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" className="mb-6 font-semibold text-black border-l-4 pl-4 italic text-gray-500 sm:text-lg md:mb-8 md:pl-6">Join us on this exciting journey, and let&apos;s make great things happen &lsquo;
              together.</blockquote>

            <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" className="relative mb-6 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:mb-8">
              <Image  src={"/assets/images/pic1.jpg"} loading={"lazy"} width={250} height={250} alt={"Photo by Minh Pham"} className={"h-full w-full object-cover object-center"} />
            </div>

            <h2 data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" className="mb-2 text-xl font-semibold text-default sm:text-2xl md:mb-4">Our Approach</h2>

            <p data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" className="mb-6 text-black font-semibold text-black sm:text-lg">Our approach is simple yet powerful: we listen, we understand, and we
              deliver. No request is too big or too small &lsquo; we&apos;re committed to going
              above and beyond to ensure that every client receives the personalized
              attention and tailored solutions they deserve. When you entrust us with
              your business, you can rest assured that we&apos;ll give it everything we&apos;ve got to
              help you thrive and prosper.</p>

            <p data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" className="mb-2 text-black font-semibold text-black sm:text-lg md:mb-8">
              At ViZack Enterprises Pvt Ltd, growth isn&apos;t just a goal &lsquo; it&apos;s a promise. So
              whether you&apos;re dreaming of taking your small business to new heights or
              embarking on a journey of expansion and innovation, let ViZack Enterprises
              be your guide. Together, let&apos;s turn your vision into reality and build a
              brighter future for your business.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default about
