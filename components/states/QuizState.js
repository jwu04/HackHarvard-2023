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
            question: 'What kind of memory is this?',
            answerChoices: [
                {emoji: '❓', value: 'Happy'},
                {emoji: '❓', value: 'Sad'},
                {emoji: '❓', value: 'Uncertain'},
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

    const [selectedAnswers, setSelectedAnswers] = useState([]);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const handleNextQuestion = (question, choice) => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            const updatedAnswers = [...selectedAnswers, {q: question, a: choice.value}];
            setSelectedAnswers(updatedAnswers);
            console.log(selectedAnswers)
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

    const [nextQuestion, setNextQuestion] = useState([]); // Initialize state for the next questions

    const handleSave = async (value) => {
        setSubmittedAIAnalysis(true);
        submit([...selectedAnswers, {q: "Tell me more about this.", a: value}])
        console.log(selectedAnswers)
    };

    /*
    const handleSaveQ = async (value) => {
        if (selectedAnswers.length >= 3) {
            setSubmittedAIAnalysis(false);
        }
        else 
        {
            setSelectedAnswers([...selectedAnswers, {q: nextQuestion, a: value}])
            submit([...selectedAnswers, {q: nextQuestion, a: value}])
            setSubmittedAIAnalysis(true);
            console.log(selectedAnswers)
        }
    };*/

    // now send selectedAnswers to /api route that will perform an analysis with ChatGPT
    const submit = (answersAI) => {
        axios.post('/api/getQuestions', {answers: JSON.parse(JSON.stringify(answersAI))}).then(res => {
            let prompt = res.data.message.choices[0].message.content
            setNextQuestion(prompt);
            fetchImg(prompt)
        }).catch(err => {
            console.error(err)
        });
    };

    const fetchImg = async (desc) => {
        await axios.post('/api/getImg', { 
            prompt: desc
        }).then(res => {
            console.log(res.data)
            postMem(desc, res.data)
        }).catch(err => {
            console.error(err)
        });
    };

    const postMem = async (desc, img) => {
        await axios.post('/api/saveMem', { 
            description: desc, 
            img: img
        }).then(res => {
            
        }).catch(err => {
            console.error(err)
        });
    };

    return (
        <div>
            <div className="mt-12 text-center sec-body">
                {showAnimation ? (
                    <div>
                        <Fade type="late" duration="0.6s">
                            <p className="font-bold text-xl">Let's get started...</p>
                            <Fade type="late" duration="2s">
                                <p>Think about a fondful memory, one that you would like to savor forever.</p>
                                <Fade type="late" duration="6s">
                                <div className="mt-8">
                                        {!submittedAIAnalysis && currentQuestionIndex >= questions.length ? <QuizInput placeholder="Please, tell me more." onSave={handleSave} />
                                            :
                                            submittedAIAnalysis ? <span>{nextQuestion}</span> :
                                            <>
                                            {currentQuestion.question}
                                                <p className="font-bold text-2xl mb-2.5">{currentQuestion.question}</p>
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
                        <p className="inter font-medium sec-body">The brain tends to forget all kinds of information as we age, and to our aid, we have the ability to electronically note memories. When you are ready, click the corresponding button below to embark on a process to create a memory, <i>that will be yours</i>, forever.</p>
                        <button onClick={toggleAnimation}
                                className="border border-green-800 rounded-xl px-4 transition duration-200 ease-in-out transform hover:scale-105 mt-3 shadow-xl">
                            <p className="px-6 py-0.5 text-xl font-bold">Ready</p></button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default QuizState
