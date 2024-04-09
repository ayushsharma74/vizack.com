import React from 'react';
import { toast } from 'react-toastify'
const Newsletter = () => {
  const handleClick = () => {
    toast.success('Subscribed Successfully',{
      position:"bottom-right",
      pauseOnHover: true,
      theme:"dark"
    })
  }
  return (
    <div className="relative flex min-h-10 flex-col items-center justify-center overflow-hidden bg-white p-8 sm:p-12">
      <div className="w-full max-w-4xl rounded-md border-2 border-gray-100 bg-white p-14 shadow-2xl">
        <div className="flex flex-col items-center">
          <span className="-rotate-1 rounded-lg bg-yellow-100 py-px px-2 text-sm text-yellow-800">117+ people joined this week</span>
          <h3 className="mt-2 max-w-2xl text-center text-2xl font-bold leading-tight sm:text-3xl md:text-4xl md:leading-tight text-black">Subscribe to our Official Newsletter.</h3>
          <form id="sib-form" method="POST" action="https://a9812ab7.sibforms.com/serve/MUIFAP3bgyQYoAO9-Ufhi8eT0h33LxFYJaqxzKjE3BTfDQZ--tPAd1IU2TFVCbcLiv6RJVfLWX9uBsSOfmaLvJ3h8PN81Do5Nq51Ftu2QtuC-JhGpKXXvDWt-rqIY3hLVLNUiQ46TEtOGvA_CSNHeWQnLkWhXUik0QM0_Vr2hnS2iL8LnT_lyVNaEz0niMUAfPq49Ovwx1GaNdKp" className="mx-auto mt-4 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:gap-0">
            <input type="email" id="EMAIL" name="EMAIL" autocomplete="off" data-required="true" required className="grow rounded border-2 mr-2 border-black py-3 px-3 focus:border-emerald-500 focus:outline-none sm:rounded-l-md  " placeholder="Email Address" />
            <button onClick={handleClick} type="submit" form='sib-form' className="rounded bg-orange-600 px-5 py-4 font-bold text-white hover:bg-white hover:text-orange-600  transition-colors ease-in-out delay-75" >Get First Email</button>
            <input type="hidden" name="email_address_check" value=""  className="input-hidden" />
            <input type="hidden" name="locale" value="en"/>
            <input type="hidden" name="html_type" value="simple"/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
