import React, {useEffect, useState} from 'react';
import Fade from "../Fade";
import CustomMemoryButton from "../QuizSelection";
import Link from "next/link";
import axios from 'axios';

const DashboardState = () => {
    const [memories, setMem] = useState([]);

    const fetchMem = async () => {
        await axios.get('/api/getMem').then(res => {
            setMem(JSON.stringify(res.data));
        }).catch(err => {
            console.error(err)
        });
    };
    fetchMem();
    // const memories = [
    //     { date: "Oct 21", description: "Acidic", img: "memory1.jpg" },
    //     { date: "Oct 21", description: "Shrooms", img: "memory2.jpg" },
    //     { date: "Oct 21", description: "Bathed", img: "memory3.jpg" },
    //     { date: "Oct 21", description: "In", img: "memory4.jpg" },
    //     { date: "Oct 21", description: "Chocolate", img: "memory5.jpg" },
    //     { date: "Oct 21", description: "Milk", img: "memory6.jpg" }
    // ];

    return (
        <>
            <div className="sec-body">
                <div className="flex flex-wrap gap-8">
                    {memories.map((memory, index) => (
                        <div key={index} className="border-2 shadow-2xl border-gray-800 rounded-md py-2 px-8">
                            <p className="font-black text-2xl">{memory.date}</p> <p className="text-xl">{memory.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default DashboardState
