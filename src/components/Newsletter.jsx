import React from 'react';

const Newsletter = () => {
  return (
    <div className="relative flex min-h-10 flex-col items-center justify-center overflow-hidden bg-white p-8 sm:p-12">
      <div className="w-full max-w-4xl rounded-md border-2 border-gray-100 bg-white p-14 shadow-2xl">
        <div className="flex flex-col items-center">
          <span className="-rotate-1 rounded-lg bg-yellow-100 py-px px-2 text-sm text-yellow-800">117+ people joined this week</span>
          <h3 className="mt-2 max-w-2xl text-center text-2xl font-bold leading-tight sm:text-3xl md:text-4xl md:leading-tight text-black">Subscribe to our Official Newsletter.</h3>
          <form action="" className="mx-auto mt-4 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:gap-0">
            <input type="email" name="email" id="email" className="grow rounded border-2 mr-2 border-black py-3 px-3 focus:border-emerald-500 focus:outline-none sm:rounded-l-md  " placeholder="Email Address" />
            <button type="submit" className="rounded bg-orange-600 px-5 py-4 font-bold text-white hover:bg-white hover:text-orange-600  transition-colors ease-in-out delay-75" >Get First Email</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
