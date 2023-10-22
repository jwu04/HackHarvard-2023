import React, {useEffect, useState} from 'react';
import Fade from "../Fade";
import CustomMemoryButton from "../QuizSelection";
import Link from "next/link";
import axios from 'axios';

const DashboardState = () => {
    const [memories, setMemories] = useState([]);

    useEffect(() => {
        const fetchMemories = async () => {
            try {
                const response = await axios.get('/api/getMem');
                setMemories(response.data); // Update the state with the fetched data
            } catch (error) {
                console.error(error);
            }
        };

        fetchMemories(); // Call the async function
    }, []); // Empty dependency array means this effect runs once after the initial render

    return (
        <>
            <div className="sec-body">
                <div className="flex flex-wrap gap-8">
                    {memories.map((memory, index) => (
                        <div key={index} className="border-2 shadow-2xl border-gray-800 rounded-md py-2 px-8 ">
                            <p className="font-black text-2xl">{memory.date}</p> <p className="text-xl">{memory.description}</p>
                            <img src={memory.img}></img>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default DashboardState
