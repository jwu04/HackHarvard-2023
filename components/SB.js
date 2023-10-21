import React, {useEffect, useState} from 'react';
import axios from 'axios';

const SB = () => {

    const [memories, setMem] = useState('UNKNOWN');

    useEffect(() => {
        const fetchSB = async () => {
                await axios.get('/api/getSB').then(res => {
                    setMem(JSON.stringify(res.data));

                }).catch(err => {
                    console.error(err)
                });
        };
[]
        fetchSB();
    }, []);

    return (
        <div>
            <span className="inter">Hello, this is a test message.</span>
            <span className="inter">Your memories are {memories}</span>
        </div>
    )

}

export default SB
