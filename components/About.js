import React, {useEffect, useState} from 'react';
import axios from "axios";
import Fade from "./Fade";
import CustomMemoryButton from "./Button";

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

    const [showAnimation, setShowAnimation] = useState(false);

    const toggleAnimation = () => {
        setShowAnimation(!showAnimation);
    };

        const questions = [
            {
                question: 'What are you thinking of?',
                answerChoices: [
                    {emoji: '❤️', value: 'A lover'},
                    {emoji: '💑', value: 'A loved one'},
                    {emoji: '💡', value: 'A specific object'},
                ],
            },
            {
                question: 'Tell me more about it.',
                answerChoices: [
                    {emoji: '❓', value: 'I feel happy about it'},
                    {emoji: '❓', value: 'I\'m uncertain'},
                    {emoji: '❓', value: 'I still have to think about it'},
                ],
            },
            {
                question: 'Any specific details you want to share?',
                answerChoices: [
                    {emoji: '💬', value: 'Let\'s continue to chat.'},
                    {emoji: '🤫', value: 'I\'ve said enough.'},
                ],
            },
        ];


    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            // Handle the end of the question series, e.g., submit or reset
        }
    };

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div>
            <div className="mt-12 text-center">
                {showAnimation ? (
                    <div>
                        <Fade type="late" duration="2s">
                                <p className="font-bold text-xl">Let's get started...</p>
                            <Fade type="late" duration="3s">
                                <p>Think of a fondful memory... Think about it for a long time.</p>
                                <Fade type="late" duration="9s">
                                    <div className="mt-8">
                                        <p>{currentQuestion.question}</p>
                                        <div className="flex justify-center gap-4">
                                            {currentQuestion.answerChoices.map((choice, index) => (
                                                <CustomMemoryButton
                                                    key={index}
                                                    emoji={choice.emoji}
                                                    caption={choice.value}
                                                    onClick={() => handleNextQuestion(choice)}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </Fade>
                            </Fade>
                        </Fade>
                    </div>
                ) : (
                    <div>
                        <p className="inter font-extrabold">CareYaya, where your &nbsp;<span
                            className="underline">memory</span>&nbsp; comes first.</p>
                        <button onClick={toggleAnimation}
                                className="border border-green-800 rounded-xl px-4 transition duration-200 ease-in-out transform hover:scale-105">
                            <p className="text-sm font-medium">Let's go.</p></button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default About
