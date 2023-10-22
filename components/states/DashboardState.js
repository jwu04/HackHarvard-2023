import React, {useEffect, useState} from 'react';
import Fade from "../Fade";
import CustomMemoryButton from "../QuizSelection";
import Link from "next/link";
import axios from 'axios';
const { DateTime } = require('luxon');

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
                <div className="flex flex-wrap ">
                    {memories.map((memory, index) => (
                        <div key={index} className="w-1/3 ml-20 mr-20 mb-20 border-2 shadow-2xl border-gray-800 rounded-md py-2 px-8">
                            <p className="font-black text-2xl mt-2">{DateTime.fromISO(memory.created_at, { zone: 'utc' }).toLocal().toFormat("LLL. d")   }</p> <p className="text-xl mb-4">{memory.description}</p>
                            <img className="mx-auto w-96 rounded-2xl mb-4" src={memory.img}></img>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default DashboardState
