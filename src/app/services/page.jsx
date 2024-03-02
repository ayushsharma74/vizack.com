"use client"
import Servicecard from "@/components/Servicecard";
import Link from "next/link";
import Upperbanner from "@/components/Upperbanner";
import about from "../about/page";
export default function services(){
    return(
        <>
       
        <Upperbanner content={'SERVICES'} route={'services'} routeName={'Services'}/>
        <div className="mb-10">
            <Servicecard 
            service={'Web development'}/>
        </div>
        <div className="mb-10">
            <Servicecard 
            service={'Data Analytics'}/>
        </div>
        <div className="mb-10">
            <Servicecard 
            service={'Strategic sales'}/>
        </div>
        <div className="mb-10">
            <Servicecard 
            service={'Innovative brand building'}/>
        </div>
        <div className="mb-10">
            <Servicecard 
            service={'Public relations'}/>
        </div>
            
        </>
    );
}