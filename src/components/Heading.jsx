import React from 'react'

const Heading = ({text}) => {
    return (
        <div>
            <div className='max-w-md mx-auto space-y-6'>


                <h2 className="flex flex-row flex-nowrap items-center my-8">
                    <span className="flex-grow block border-t border-black" aria-hidden="true" role="presentation"></span>
                    <span className="flex-none block mx-4   px-4 py-2.5 text-xs leading-none font-medium uppercase bg-black text-white">
                        {text}
                    </span>
                    <span className="flex-grow block border-t border-black" aria-hidden="true" role="presentation"></span>
                </h2>


            </div>


        </div>
    )
}

export default Heading
