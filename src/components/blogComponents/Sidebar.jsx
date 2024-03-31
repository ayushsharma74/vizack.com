export default function Sidebar() {
    return (
        /* change later  */
        <div className="ml-[140px]"> 

            <div>
                <h1>Whats Hot</h1>
                <h1 className="text-2xl font-semibold">Most Popular</h1>
            </div>
            <div className="flex flex-col mt-3 mb-5">
                <h1 className=" bg-red-300 rounded-full flex items-center justify-center font-semibold text-xs w-[90px]">DATA SCIENCE</h1>
                <p className="text-sm">Data science unlocks insights everywhere.</p>
                <h1 className="text-xs font-bold">Ayush Sharma - <span className="text-xs text-gray-500 ">18.03.2024</span></h1>
            </div>
            <div className="flex flex-col mb-5">
                <h1 className=" bg-green-300 rounded-full flex items-center justify-center font-semibold text-xs w-[48px]">SEO</h1>
                <p className="text-sm">SEO improves online visibility effectively.</p>
                <h1 className="text-xs font-bold">Farhan Khan - <span className="text-xs text-gray-500 ">20.03.2024</span></h1>
            </div>
            <div className="flex flex-col mb-5">
                <h1 className=" bg-blue-300 rounded-full flex items-center justify-center font-semibold text-xs w-[80px]">DESIGNING</h1>
                <p className="text-sm">Designing shapes ideas into reality</p>
                <h1 className="text-xs font-bold">Gajender - <span className="text-xs text-gray-500 ">25.03.2024</span></h1>
            </div>
        </div>
    )
}