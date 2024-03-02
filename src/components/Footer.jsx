export default function Footer(){
    const logo = "/assets/logo/logo.ico"
    return(
        <section class="relative overflow-hidden py-10">
  <div class="relative z-10 mx-auto max-w-7xl px-4">
    <div class="-m-6 flex flex-wrap">
      <div class="w-full p-6 md:w-1/2 lg:w-5/12">
        <div class="flex h-full flex-col justify-between">
          <div class="mb-4 inline-flex items-center">
            <img 
            src={logo} 
            alt=""
            height={50}
            width={50} 
            />
            <span class="ml-4 text-lg font-bold">ViZack Enterprises</span>
          </div>
          <div>
            <p class="mb-4  text-base font-medium">
              ViZack Enterprises
            </p>
            <p class="text-sm text-gray-600">
              © Copyright 2024. All Rights Reserved by ViZack Enterprises.
            </p>
          </div>
        </div>
      </div>
      <div class="w-full p-6 md:w-1/2 lg:w-2/12">
        <div class="h-full">
          <h3 class="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
            Socials
          </h3>
          <ul>
            <li class="mb-4">
              <a
                class=" text-base font-medium text-gray-900 hover:text-gray-700"
                href="#"
              >
                Linkedin
              </a>
            </li>
            <li class="mb-4">
              <a
                class=" text-base font-medium text-gray-900 hover:text-gray-700"
                href="#"
              >
                Facebook
              </a>
            </li>
            <li class="mb-4">
              <a
                class=" text-base font-medium text-gray-900 hover:text-gray-700"
                href="#"
              >
                Instagram
              </a>
            </li>
            <li className='mb-4'>
              <a
                class=" text-base font-medium text-gray-900 hover:text-gray-700"
                href="#"
              >
                Youtube
              </a>
            </li>
            <li className=''>
              <a
                class=" text-base font-medium text-gray-900 hover:text-gray-700"
                href="#"
              >
                X
              </a>
            </li>
            
          </ul>
        </div>
      </div>
      <div class="w-full p-6 md:w-1/2 lg:w-2/12">
        <div class="h-full">
          <h3 class="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
            Support
          </h3>
          <ul>
            
            <li class="mb-4">
              <a
                class=" text-base font-medium text-gray-900 hover:text-gray-700"
                href="#"
              >
                Help
              </a>
            </li>
            <li class="mb-4">
              <a
                class=" text-base font-medium text-gray-900 hover:text-gray-700"
                href="#"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                class=" text-base font-medium text-gray-900 hover:text-gray-700"
                href="#"
              >
                Customer Support
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="w-full p-6 md:w-1/2 lg:w-3/12">
        <div class="h-full">
          <h3 class="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
            Legals
          </h3>
          <ul>
            <li class="mb-4">
              <a
                class=" text-base font-medium text-gray-900 hover:text-gray-700"
                href="#"
              >
                Terms &amp; Conditions
              </a>
            </li>
            <li class="mb-4">
              <a
                class=" text-base font-medium text-gray-900 hover:text-gray-700"
                href="#"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                class=" text-base font-medium text-gray-900 hover:text-gray-700"
                href="#"
              >
                Licensing
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
    );
}