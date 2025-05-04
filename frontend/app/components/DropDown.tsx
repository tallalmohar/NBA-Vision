"use client";
import {ReactNode, useState} from "react";
import Image from 'next/image';

type DropDownSection = {
    heading: string;
    content: ReactNode;
};

type DropDownProps = {
    title: string;
    sections: DropDownSection[];
};

export default function DropDown({ title, sections }: DropDownProps) {
    const [open, setOpen] = useState(false);

    // @ts-ignore
    return (
        <div className="w-[970px] ">
            <div
                onClick={() => setOpen(!open)}
                className={` flex cursor-pointer p-4  border-1 border-yellow-500 rounded-t shadow transition ${open ? 'bg-yellow-500' : 'bg-white'}`}
            >
                <Image width={"25"} height={"20"} src={open ? "/arrow-up.png" : "/arrow-down.png"} className={'mr-2'} alt={""}/>
                <h3 className="font-bold">{title}</h3>
            </div>
            {/* Collapsed content below */}
            {open && (
                <div className="p-4 bg-white border-1 border-yellow-500 rounded-b">
                    {sections.map((section, i) => (
                        <div key={i} className="mb-4">
                            <h5 className="text-md font-bold">{section.heading}</h5>
                            <div className="mt-1 text-gray-700">{section.content}</div>
                        </div>
                    ))}

                </div>
            )}
        </div>
    );
}