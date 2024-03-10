import Link from "next/link";
export default function Upperbanner({content , route,routeName}){

    return(
        <>
            <div className="w-full h-72 bg-default flex justify-between max-md-lg:h-64 transition-all max-md:h-52 max-sm:h-36">
      <div className="w-fit h-fit">
                    <div className="h-fit w-fit">
                        <h1 data-aos="fade-up" data-aos-delay="100" data-aos-duration="1500" className="max-lg:text-8xl text-9xl text-default-gray headings text-shadow-sm shadow-white tracking-long font-extrabold mx-6 py-12 max-md-lg:text-7xl max-md:text-5xl max-min-sm:text-4xl max-min-sm:py-16">
                            {content}
                        </h1>

                    </div>

                    <div className="h-full w-full" data-aos="fade-left" data-aos-delay="150" data-aos-duration="500">
                        <ul className="text-white tracking-wider mx-8 max-sm:text-default-gray">
                            <Link href={"/"}  className="text-white hover:text-default-gray tracking-wide font-bold max-sm:text-default">Home</Link>
                            &nbsp;&gt;&nbsp;
                            <Link href={`/${route}`} className="text-white hover:text-default-gray tracking-wide font-bold max-sm:text-default">{routeName}</Link>
                        </ul>
                    </div>
                </div>
                </div>
        </>
    );
}