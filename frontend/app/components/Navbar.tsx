'using client';
import { Oswald } from "next/font/google";
import Link from 'next/link'; //replaces <a> tags for faster webpages



import Image from 'next/image';
export default function Navbar() {
    return (
        <>
            <nav className="bg-gradient-to-b from-red-700 via-red-700 to-pink-500 w-full h-10 px-6 py-4 shadow"></nav>
            <nav className="bg-white w-full h-[200px] px-6 py-4 pd-0 shadow flex justify-center content-end">
                <div className="flex m-1">
                    <Image src="/nba-6.svg" alt={"logo"} width={"90"} height={"90"}/>
                </div>
                <div className="flex-box mt-5 mr-100 h-25 self-start items-center">
                    <h1 className={"text-6xl font-bold text-blue-700"}>...</h1>
                    <p>...</p>
                </div>
                <div className="pb-0  items-end ">
                <Image className={"overflow-visible"}  src="/goats.png" alt={"logo"} width={"400"} height={"400"}/>
                </div>
            </nav>
            <nav className={"bg-blue-900  w-full h-10 px-6 py-4 pb-0 shadow flex content-end"}>
                <div className={"h-[30px] w-[50px] bg-white flex justify-center" }>
                    <p>Home</p>
                </div>
            </nav>
        </>
    );
}
