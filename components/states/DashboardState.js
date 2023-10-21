import React, {useEffect, useState} from 'react';
import Fade from "../Fade";
import CustomMemoryButton from "../QuizSelection";
import Link from "next/link";

const DashboardState = () => {
    const memories = [
        { description: "Acidic", img: "memory1.jpg" },
        { description: "Shrooms", img: "memory2.jpg" },
        { description: "Bathed", img: "memory3.jpg" },
        { description: "In", img: "memory4.jpg" },
        { description: "Chocolate", img: "memory5.jpg" },
        { description: "Milk", img: "memory6.jpg" }
    ];

    return (
        <>
            <Link href="/quiz" className="p-4"><span className="text-xl font-bold">Write Memory</span></Link>
            <div className="flex gap-6">
                {memories.map((memory, index) => (
                    <div key={index} className="border border-red-400 rounded-md font-bold text-lg p-2 px-6 gap-3">
                        Memory #{index + 1} - {memory.description}
                    </div>
                ))}
            </div>
        </>
    )
}

export default DashboardState
