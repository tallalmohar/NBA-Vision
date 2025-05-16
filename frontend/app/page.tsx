'use client';
import Image from "next/image";
import SidewayDiv from "@/app/components/SidewayDiv";
import { Container } from 'react-bootstrap'
import Link from "next/link";
export default function Home() {



    return (
        <main className="p-8 flex flex-col min-h-screen">
            <div className="flex justify-center items-center">
                <Image src="/homePage.png" alt="Goats of the game" width="1180" height="225" ></Image>
            </div>
            <div className={"flex flex-row justify-center items-center mt-10"}>
                <SidewayDiv title="BUILD YOUR ROSTER" paragraph="Pick your 10 player NBA roster using your $100m budget." noleftBorder={true}/>
                <SidewayDiv title="CREATE LEAGUES" paragraph="Create leagues and invite your friends to compete throughout the season." noleftBorder={false}/>
                <SidewayDiv title="SET YOUR LINE-UPS" paragraph="Choose your line-up for the next gameday and watch your starting 5." noleftBorder={false}/>
                <SidewayDiv title="SIGN AND DROP PLAYERS" paragraph="Sign and waive players through the season to improve your team. " noleftBorder={false}/>
            </div>

            <div className={" flex flex-col justify-center items-center mt-20"}>
                <h1 className="text-4xl font-bold">HOW TO PLAY</h1>
                <Container>
                <div className="mt-10">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/z3ZBZ_43oIE?si=pl6weGD66BDhnnRc" title="YouTube video"
                            allowFullScreen></iframe>
                </div>
                </Container>
            </div>
            <div className={"flex justify-center mt-6"}>
                <p className="text-[10px]">*No purchase necessary for the entire duration of the competition. You must be 18 years or older. Participation is only available to legal residents of Austria, Belgium, Czechia, Denmark, Finland, Germany, Greece, Hungary, Ireland, Italy, Netherlands, Norway, Portugal,<br/> Serbia, Spain, Switzerland, and the United Kingdom.<Link className="text-blue-700 underline" href="/about">Click here for full official rules</Link>.</p>
            </div>
        </main>
    );
}

