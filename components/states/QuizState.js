import React, {useEffect, useState} from 'react';
import axios from "axios";
import Fade from "../Fade";
import CustomMemoryButton from "../QuizSelection";
import QuizInput from "../QuizInput";

const QuizState = () => {
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

    const [showAnimation, setShowAnimation] = useState(false);
    const [submittedAIAnalysis, setSubmittedAIAnalysis] = useState(false);

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
                {type: 'CONTINUE', emoji: '💬', value: 'Let\'s continue to chat.'},
                {type: 'END', emoji: '🤫', value: 'I\'ve said enough.'},
            ],
        },
    ];

    const [selectedAnswers, setSelectedAnswers] = useState({});

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const handleNextQuestion = (question, choice) => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            const updatedAnswers = [...selectedAnswers, {Q: question, A: choice.value}];
            setSelectedAnswers(updatedAnswers);
        } else {
            // handling end of multiple choice questionnaire
            if (choice.type === 'CONTINUE') {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
            }
            // does not want to talk, end of memory interrogation
            if (choice.type === 'END') {

            }
        }
    };

    const currentQuestion = questions[currentQuestionIndex];

    const [savedAIValue, setSavedAIValue] = useState(''); // Initialize state for the saved value

    const handleSave = (value) => {
        setSavedAIValue(value); // Update the state in the parent component with the input value
        setSubmittedAIAnalysis(true);
        // now send selectedAnswers and savedValue to /api route that will perform an analysis with ChatGPT
    };

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
                                        {!submittedAIAnalysis && currentQuestionIndex >= questions.length ? <QuizInput placeholder="Please, tell me more about this character" onSave={handleSave} />
                                            :
                                            submittedAIAnalysis ? <span>You are done. Memory added</span> :
                                            <>
                                            {currentQuestion.question}
                                                <div className="flex justify-center gap-4">
                                                    {
                                                        currentQuestion.answerChoices.map((choice, index) => (
                                                        <CustomMemoryButton
                                                            key={index}
                                                            emoji={choice.emoji}
                                                            caption={choice.value}
                                                            onClick={() => handleNextQuestion(currentQuestion.question, choice)}/>
                                                    ))}
                                                </div>
                                            </>
                                        }
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

export default QuizState
