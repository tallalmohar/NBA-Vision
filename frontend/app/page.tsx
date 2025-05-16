'use client';
import Image from "next/image";
import SidewayDiv from "@/app/components/SidewayDiv";
export default function Home() {



    return (
        <main className="p-8 flex flex-col min-h-screen">
            <div className="flex justify-center items-center">
                <Image src="/homePage.png" alt="Goats of the game" width="1180" height="225" ></Image>
            </div>
            <div className={"flex flex-row justify-center items-center mt-4"}>
                <SidewayDiv title="BUILD YOUR ROSTER" paragraph="Pick your 10 player NBA roster using your $100m budget." noleftBorder={true}/>
                <SidewayDiv title="CREATE LEAGUES" paragraph="Create leagues and invite your friends to compete throughout the season." noleftBorder={false}/>
                <SidewayDiv title="SET YOUR LINE-UPS" paragraph="Choose your line-up for the next gameday and watch your starting 5." noleftBorder={false}/>
                <SidewayDiv title="SIGN AND DROP PLAYERS" paragraph="Sign and waive players through the season to improve your team. " noleftBorder={false}/>
            </div>
        </main>
    );
}

