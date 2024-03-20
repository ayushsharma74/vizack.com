import Link from "next/link";
const HoverButton = () => {
    return (
      <Link href= 'https://forms.gle/yLADgf8vtnQEx4Ac8'>  
      <button className="ml-4 group relative h-12 w-48 overflow-hidden rounded bg-white text-lg shadow-xl">
        <div className="absolute inset-0 w-3 bg-default transition-all duration-[250ms] ease-out group-hover:w-full"></div>
        <span className="relative text-black group-hover:text-white">Contact us!</span>
      </button>
      </Link>
    );
  };
  
  export default HoverButton;
  