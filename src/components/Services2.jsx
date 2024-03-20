// WorkingProcess.js

import Image from 'next/image';
import Link from 'next/link';

const Services2 = () => {
  return (
    <section>
      <div className="bg-black text-white py-2">
        <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
          <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
            <p className="ml-2 text-default uppercase tracking-loose">Our Services</p>
            <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">Where Quality meets Quantity</p>
            <p className="text-sm md:text-base text-gray-50 mb-4">
              At ViZack Enterprises, We are commited to providing you our best in a huge variety of services.
            </p>
            <Link href="/services"
              className="bg-transparent mr-auto hover:bg-default text-default hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-default hover:border-transparent">
              Learn More
            </Link>
          </div>
          <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden p-10 h-full">
                <div className="border-2-2 border-yellow-555 absolute h-48 border"
                  style={{ right: '50%', border: '4px solid #FFC100', borderSpacing: "2px", borderRadius: '1%' }}></div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-default">Explore new Horizons.</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">Digital Discovery Drive</h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      Embark on a digital voyage of discovery with our expert guided sessions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative wrap overflow-hidden p-10 h-full">
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1  w-5/12 px-1 py-4 text-left">
                    <p className="mb-3 text-base text-default">Elevate your brand.</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">Website Design and Development</h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      Transform your online presence into a digital masterpiece with our website design and development services.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative wrap overflow-hidden p-10 h-full">
                <div className="border-2-2 border-yellow-555 absolute h-48 border"
                  style={{ right: '50%', border: '4px solid #FFC100', borderSpacing: "2px", borderRadius: '1%' }}></div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-default">Amplify your voice.</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">Public Relations.</h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      Ignite conversations, shape perceptions and buuild long lasting relationships with our strategic public  relations solutions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative wrap overflow-hidden p-10 h-full">
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1  w-5/12 px-1 py-4">
                    <p className="mb-3 text-base text-default">Uncover hidden patterns.</p>
                    <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">Data Analytics Services</h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      Unlock the power of data with our comprehensive analytics services. Turn data into your advantage with our advanced analytics solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative wrap overflow-hidden p-10 h-full">
              <div className="border-2-2 border-yellow-555 absolute h-48 border"
                style={{ right: '50%', border: '4px solid #FFC100', borderSpacing: "2px", borderRadius: '1%' }}></div>
              <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="order-1 w-5/12 px-1 py-4 text-right">
                  <p className="mb-3 text-base text-default">Unlock new markets.</p>
                  <h4 className="mb-3 font-bold text-lg md:text-2xl">Strategic Sales Solutions</h4>
                  <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                    Revolutionise your sales approach with our strategic sales solutions, we craft tailored strategies for you that drive results.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative wrap overflow-hidden p-10 h-full">
              <div className="mb-8 flex justify-between items-center w-full right-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="order-1  w-5/12 px-1 py-4">
                  <p className="mb-3 text-base text-default">Unleash your brand's full potential.</p>
                  <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">Innovative Brand Building</h4>
                  <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                    Build a brand that stands otu in a crowded marketplace with our innovative brand building services
                  </p>
                </div>
              </div>
            </div>
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden p-10 h-full">
                <div className="border-2-2 border-yellow-555 absolute h-48 border"
                  style={{ right: '50%', border: '4px solid #FFC100', borderSpacing: "2px", borderRadius: '1%' }}></div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-default">Shape the future of politics together.</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">Strategic Politics</h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      Empowering political leaders, candidates and organizations with strategic guidance and innovative solutions is our mission.
                    </p>
                  </div>
                </div>
              </div>
            </div>


            <div className="mx-auto -mt-36 md:-mt-36">

            </div>
          </div>
        </div>
      </div>
      <div className="bg-black py-8 border-black border-lg">
        <div className='bg-black max-w-md mx-auto space-y-6'>


          <h2 className="bg-black flex flex-row flex-nowrap items-center my-8">
            <span className="bg-black flex-grow block border-t border-black" aria-hidden="true" role="presentation"></span>
            <span className="bg-black flex-none block mx-4   px-4 py-2.5 text-xs leading-none font-medium uppercase bg-black text-white">
            </span>
            <span className="bg-black flex-grow block border-t border-black" aria-hidden="true" role="presentation"></span>
          </h2>


        </div>


      </div>
    </section>
  );
};

export default Services2;
