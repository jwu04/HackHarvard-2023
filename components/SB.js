import React, {useEffect, useState} from 'react';
import axios from 'axios';

const SB = () => {

    const [memories, setMem] = useState('UNKNOWN');
    const [user, setUser] = useState('UNKNOWN');


    useEffect(() => {
        const fetchMem = async () => {
                await axios.get('/api/getMem').then(res => {
                    setMem(JSON.stringify(res.data));
                }).catch(err => {
                    console.error(err)
                });
        };

        fetchMem();

        const postMem = async () => {
            await axios.post('/api/saveMem', { 
                description: "", 
                img: "" 
            }).then(res => {
                setMem(JSON.stringify(res.data));
            }).catch(err => {
                console.error(err)
            });
        };

        postMem();
        
        const fetchUsers = async () => {
                await axios.get('/api/getUser').then(res => {
                    setUser(JSON.stringify(res.data));
                }).catch(err => {
                    console.error(err)
                });
        };

        fetchUsers();

        const postUser = async () => {
            await axios.post('/api/saveUser', { 
                name: 'Jon'
            }).then(res => {
                setUser(JSON.stringify(res.data));
            }).catch(err => {
                console.error(err)
            });
        };

        postUser();

    }, []);

    return (
        <div>
            <span className="inter">Hello,{user} this is a test message.</span>
            <span className="inter">Your memories are {memories}.</span>
        </div>
    )

}

export default SB
