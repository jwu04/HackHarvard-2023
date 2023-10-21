import React, {useEffect, useState} from 'react';
import axios from 'axios';

const SB = () => {

    const [memories, setMem] = useState('UNKNOWN');

    useEffect(() => {
        // const fetchMem = async () => {
        //         await axios.get('/api/getMem').then(res => {
        //             setMem(JSON.stringify(res.data));
        //         }).catch(err => {
        //             console.error(err)
        //         });
        // };

        // fetchMem();

        const postMem = async () => {
            await axios.post('/api/saveMem', { 
                caption: 'here\'s a caption!! ', 
                img: "" 
            }).then(res => {
                setMem(JSON.stringify(res.data));
            }).catch(err => {
                console.error(err)
            });
        };

        postMem();
    }, []);

    return (
        <div>
            <span className="inter">Hello, this is a test message.</span>
            <span className="inter">Your memories are {memories}</span>
        </div>
    )

}

export default SB
