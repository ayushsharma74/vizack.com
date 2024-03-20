import React, { useState } from 'react';
import HoverButton from '@/components/HoverButton';

const Servicecard = ({ image_src, service, content, extraContent}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = (e) => {
    e.preventDefault(); 
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="p-8 rounded shadow-xl sm:p-16">
        <div className="flex flex-col lg:flex-row">
          <div className="mb-6 lg:mb-0 lg:w-1/4 lg:pr-5">
            <img src={image_src} alt="" />
          </div>
          <div className="lg:w-3/4 flex flex-col justify-center">
            <h1 className="text-4xl mb-3 font-bold">{service}</h1>
            <p className="mb-4 text-base text-gray-700">{content}</p>
            {isExpanded && (
              <div>
                <p className='mb-4'>{extraContent}</p>
              </div>
            )}
            <div>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                onClick={toggleExpand}
              >
                <div className="mr-4 mb-4 relative inline-block overflow-hidden bg-hsl-222-100-95 text-hsl-243-80-62 shadow-xl">
                  <button type="button" className="h-12 w-48 font-bold inline justify-center py-3 px-4 border border-transparent text-sm rounded text-white bg-default hover:bg-orange-500 transition-colors">
                    {isExpanded ? 'Show less' : 'Learn more'}
                  </button>
                </div>
              </a>
                  <HoverButton/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicecard;
