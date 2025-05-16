"use client";
export default function SidewayDiv({ title , paragraph, noleftBorder }:{title: string, paragraph: string, noleftBorder: boolean }) {

    return (

        <div className={`flex flex-col justify-center  w-75 border-b-0 border-t-0 ${noleftBorder ?'border-l-0': ''} border-r-0 border-2 border-gray-400`}>
            <h2 className="text-xl font-bold pl-2">{title}</h2>
            <p className="pl-2">{paragraph}</p>
        </div>

    )
}