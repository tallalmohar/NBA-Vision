"use client";
import { useState } from "react";


export default function DropDown() {
    const [open, setOpen] = useState(false);

    return (
        <div className="w-[970px] ">
            <div
                onClick={() => setOpen(!open)}
                className={`cursor-pointer p-4  border-1 border-yellow-500 rounded-t shadow transition ${open ? 'bg-yellow-500' : 'bg-white'}`}
            >
                <h3 className="">Select your Initial Roaster</h3>
            </div>
            {/* Collapsed content below */}
            {open && (
                <div className="p-4 bg-white border-1 border-yellow-500 rounded-b">

                    <h5 className={"text-md font-bold"}>Roaster Size</h5>
                    <p className="mt-5px">
                        To join the game select a fantasy basketball roster of 10 players, consisting of:
                    </p>
                    <ul className="list-disc pl-6">
                        <li>5 Back Court players</li>
                        <li>5 Front Court players</li>
                    </ul>
                    <h5 className={"text-md font-bold"}>Players Per Team</h5>
                    <p>
                        You can select up to 2 players from a single NBA team.
                    </p>

                </div>
            )}
        </div>
    );
}