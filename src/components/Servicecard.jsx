

export default function Servicecard({image_src,service,content}) {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div className="p-8 rounded shadow-xl sm:p-16">
      <div className="flex flex-col lg:flex-row">
        <div className="mb-6 lg:mb-0 lg:w-1/4 lg:pr-5">
          {/* <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            The quick, brown fox
            <br className="hidden md:block" />
            jumps over{' '}
            <span className="inline-block text-deep-purple-accent-400">
              a lazy dog
            </span>
          </h2> */}
          <img src={image_src} alt="" />
        </div>
        <div className="lg:w-3/4 flex flex-col justify-center">
            <h1 className="text-4xl mb-3">{service}</h1>
          <p className="mb-4 text-base text-gray-700">
            {content}
          </p>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            <div class="relative inline-block overflow-hidden bg-hsl-222-100-95 text-hsl-243-80-62">
            <button type="submit" class="inline-flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded text-white bg-default hover:bg-orange-500 transition-colors">Learn more</button>
            </div>

          </a>
        </div>
      </div>
    </div>
  </div>

  );
}
