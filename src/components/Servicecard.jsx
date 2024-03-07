// 

const image = "/assets/testing/5484597.jpg"

export default function Servicecard({ service, content, imgURL, css }) {
  return (
    <section>
      <div className="px-2 lg:flex lg:flex-row lg:items-center">
        <div className="w-full lg:w-1/2">
          <div className="my-10 lg:my-0 lg:px-10">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              {service}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600">
              {content}
            </p>
            <form action="#" method="POST" className="mt-8 max-w-xl">
              <div className="flex flex-col sm:flex-row sm:items-center">
                <div className="flex w-full max-w-sm items-center space-x-2">
                  <button
                    type="button"
                    className="rounded-md w-[8.5rem] h-[2.5rem] bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Learn more
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="">
          <img
            // src="https://images.unsplash.com/photo-1603575448878-868a20723f5d?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
            src={imgURL}
            alt={service}
            className={css}
          />
        </div>
      </div>
    </section>

  );
}
