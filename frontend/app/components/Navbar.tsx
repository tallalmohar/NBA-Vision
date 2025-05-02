'using client';
import { useState } from 'react';
import Link from 'next/link'; //replaces <a> tags for faster webpages



import Image from 'next/image';
export default function Navbar() {
    // @ts-ignore
    return (
        <>
            <nav className="bg-gradient-to-b from-red-700 via-red-700 to-pink-500 w-full h-10 px-6 py-4 shadow"></nav>
            <nav className="bg-white w-full h-[200px] px-6 py-4 pd-0 shadow flex justify-center content-end">
                <div className="flex ">
                    <Image src="/nba-6.svg" alt={"logo"} width={"90"} height={"90"}/>
                </div>
                <div className="flex-box mt-5 mr-100 h-25 self-start items-center">
                    <h1 className={"text-8xl font-bold font-title text-blue-900"}>Fantasy</h1>
                    <p className={"font-bold"}>NBA VISION</p>
                </div>
                <div className="pb-0  items-end z-10">
                <Image className={"overflow-visible"}  src="/goats.png" alt={"logo"} width={"400"} height={"400"}/>
                </div>
            </nav>
            <nav className={"bg-blue-900  w-full h-10 px-6 py-4 pb-0 shadow flex items-end relative z-0 "}>

                <div  className={"ml-[17.55%] h-[35px] w-[70px]  bg-white hover:bg-gray-200 cursor-pointer flex items-center justify-center content-center rounded-t-sm" }>
                    <p>Home</p>
                </div>

                <div className={"ml-[.5%] h-[35px] w-[70px]  bg-white hover:bg-gray-200 cursor-pointer flex items-center justify-center content-center rounded-t-sm" }>
                    <p>About</p>
                </div>
                <div className={"ml-[.5%] h-[35px] w-[70px]  bg-white  hover:bg-gray-200 cursor-pointer flex items-center justify-center content-center rounded-t-sm" }>
                    <p>Players</p>
                </div>
            </nav>
        </>
    );
}
