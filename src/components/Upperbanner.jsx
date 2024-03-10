import Link from "next/link";
export default function Upperbanner({content , route,routeName}){

    return(
        <>
                <div className="bg-default w-full h-10 flex items-center px-5" >
                    <h1 className="text-white hover:text-default-gray font-bold">
                        <Link href={"/"}>Home &nbsp;</Link>
                    </h1>
                    <h1 className="text-white font-bold"> &gt;</h1>
                    <h1 className="text-white hover:text-default-gray font-bold">
                        <Link href={`/${route}`} >&nbsp; {routeName}</Link>
                    </h1>
                </div>
        </>
    );
}
