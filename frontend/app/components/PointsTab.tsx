"use client";

export default function PointsTab({value1,value2}:{value1: string,value2: string}) {
    return (
        <div className={"grid justify-center"}>
            <div className={"flex justify-between w-150 border-t-0 border-l-0 border-r-0 border-2 border-gray-400  pl-3 pr-3"}>

                <p>{value1}</p>
                <p>{value2}</p>
            </div>
        </div>
    )
}