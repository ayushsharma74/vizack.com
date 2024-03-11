export default function Footer(){
    const logo = "/assets/logo/logo.ico"
    return(
      <>
      <svg className="w-full lg:h-24 h-16 " viewBox="10 0 750 30">
        <path d="M0 50 Q 100 30 400 70 T 800 50 " stroke="#111827" fill="none" stroke-width="100" />
      </svg>
        <section class="relative overflow-hidden py-10 bg-gray-900">
  <div class="relative z-10 mx-auto max-w-7xl px-4">
    <div class="-m-6 flex flex-wrap">
      <div class="w-full p-6 md:w-1/2 lg:w-5/12">
        <div class="flex h-full flex-col justify-between">
          <div class="mb-4 inline-flex rounded-lg items-center">
            <img 
            src={logo} 
            alt=""
            height={50}
                    width={50} 
                    className="rounded-full"
            />
            <span class="ml-4 text-lg font-bold text-default">ViZack Enterprises</span>
          </div>
          <div>
            <p class="mb-4  text-base text-default font-medium">
              ViZack Enterprises
            </p>
            <p class="text-sm text-default-gray">
              © Copyright 2024. All Rights Reserved by ViZack Enterprises.
            </p>
          </div>
        </div>
      </div>
      <div class="w-full p-6 md:w-1/2 lg:w-2/12">
        <div class="h-full">
          <h3 class="tracking-px mb-9  text-xs font-semibold uppercase text-default">
            Socials
          </h3>
          <ul>
            <li class="mb-4">
              <a
                      class="transition-colors duration-300 text-base font-medium text-default-gray hover:text-white"
                href="#"
              >
                Linkedin
              </a>
            </li>
            <li class="mb-4">
              <a
                      class="transition-colors duration-300 text-base font-medium text-default-gray hover:text-white"
                href="#"
              >
                Facebook
              </a>
            </li>
            <li class="mb-4">
              <a
                      class="transition-colors duration-300 text-base font-medium text-default-gray hover:text-white"
                href="#"
              >
                Instagram
              </a>
            </li>
            <li className='mb-4'>
              <a
                      class="transition-colors duration-300 text-base font-medium text-default-gray hover:text-white"
                href="#"
              >
                Youtube
              </a>
            </li>
            <li className=''>
              <a
                      class="transition-colors duration-300 text-base font-medium text-default-gray hover:text-white"
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
          <h3 class="tracking-px mb-9  text-xs text-default font-semibold uppercase">
            Support
          </h3>
          <ul>
            
            <li class="mb-4">
              <a
                      class="transition-colors duration-300 text-base font-medium text-default-gray hover:text-white"
                href="#"
              >
                Help
              </a>
            </li>
            <li class="mb-4">
              <a
                      class="transition-colors duration-300 text-base font-medium text-default-gray hover:text-white"
                href="#"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                      class="transition-colors duration-300 text-base font-medium text-default-gray hover:text-white"
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
          <h3 class="tracking-px mb-9  text-xs font-semibold uppercase text-default">
            Legals
          </h3>
          <ul>
            <li class="mb-4">
              <a
                      class="transition-colors duration-300 text-base font-medium text-default-gray hover:text-white"
                href="#"
              >
                Terms &amp; Conditions
              </a>
            </li>
            <li class="mb-4">
              <a
                      class="transition-colors duration-300 text-base font-medium text-default-gray hover:text-white"
                href="#"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                      class="transition-colors duration-300 text-base font-medium text-default-gray hover:text-white"
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
</>
    );
}