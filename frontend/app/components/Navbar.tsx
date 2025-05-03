"use client";

import Link from 'next/link'; //replaces <a> tags for faster webpages
import Image from 'next/image';
import {usePathname} from "next/navigation";

export default function Navbar() {
    const pathName = usePathname();
    // @ts-ignore

    //used to identify which tab is open and change its color
    const isActive = (path: string) =>
        pathName === path ? 'bg-yellow-500' : 'bg-white hover:bg-gray-200';

    return (
        <>
            <nav className="bg-gradient-to-b from-red-700 via-red-700 to-pink-500 w-full h-10 px-6 py-4 shadow"></nav>
            <nav className="bg-white w-full h-[200px] px-6 py-4 pd-0 shadow flex justify-center content-end">
                <div className="flex ">
                    <Image src="/nba-6.svg" alt={"logo"} width={"90"} height={"90"}/>
                </div>
                <div className="flex-box mt-5 mr-100 h-25 self-start items-center">
                    <h1 className={"text-8xl font-bold font-title text-blue-700"}>Fantasy</h1>
                    <p className={"font-bold ml-[5px]"}>NBA VISION</p>
                </div>
                <div className="pb-0  items-end z-10">
                <Image className={"overflow-visible"}  src="/goats.png" alt={"logo"} width={"400"} height={"400"}/>
                </div>
            </nav>
            <nav className={"bg-blue-900  w-full h-10 px-6 py-4 pb-0 shadow flex items-end relative z-0 "}>
               <ul className="flex space-x-4 ml-[17.55%]">
                   <li>
                       <Link className={`h-[35px] w-[70px]  bg-white hover:bg-gray-200 cursor-pointer flex items-center justify-center content-center rounded-t-sm font-bold text-sm ${isActive('/')}`} href="/">Home</Link>
                   </li>
                   <li>
                        <Link className={` h-[35px] w-[70px]  bg-white hover:bg-gray-200 cursor-pointer flex items-center justify-center content-center rounded-t-sm font-bold text-sm ${isActive('/about')}`} href="../about">About</Link>
                   </li>
                   <li>
                       <Link className={` h-[35px] w-[70px]  bg-white hover:bg-gray-200 cursor-pointer flex items-center justify-center content-center rounded-t-sm font-bold text-sm ${isActive('/players')}`} href="../players">Players</Link>
                   </li>
                   </ul>
            </nav>
        </>
    );
}
