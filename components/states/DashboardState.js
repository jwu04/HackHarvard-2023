import React, {useEffect, useState} from 'react';
import Fade from "../Fade";
import CustomMemoryButton from "../QuizSelection";

const DashboardState = () => {
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

export default DashboardState
