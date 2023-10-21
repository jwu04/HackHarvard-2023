import React, {useEffect, useState} from 'react';
import axios from "axios";

const About = () => {
    const [ip, setIp] = useState('UNKNOWN');

    useEffect(() => {
        const fetchIpAddress = async () => {
                await axios.get('/api/getIP').then(res => {
                    setIp(res.data.ipOfUser);
                }).catch(err => {
                    console.error(err)
                });
        };

        fetchIpAddress();
    }, []);

    return (
        <div>
            <span className="inter">Hello, this is a test message.</span>
            <span className="inter">Your IP is {ip}</span>
        </div>
    )
}

export default About
