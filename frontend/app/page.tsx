'use client';
import Image from "next/image";

export default function Home() {
    return (
        <main className="p-8 flex flex-col min-h-screen">
            <div className="flex justify-center items-center border ">
                <Image src="/homePage.png" alt="Goats of the game" width="1180" height="225" ></Image>
            </div>
        </main>
    );
}

