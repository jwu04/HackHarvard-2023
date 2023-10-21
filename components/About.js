import React, {useEffect, useState} from 'react';
import axios from "axios";

const About = () => {
    const [ip, setIp] = useState('UNKNOWN');

    useEffect(() => {
        const fetchIpAddress = async () => {
            try {
                const response = await axios.get('/api/getIP'); // Update the URL to match your API endpoint.
                setIp(response.data.ipOfUser);
            } catch (error) {
                console.error('Error fetching IP:', error);
            }
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
