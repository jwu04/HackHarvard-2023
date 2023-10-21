import React from 'react';
import Emoji from "./Emoji";

const QuizSelection = ({ emoji, caption, onClick }) => {
    return (
        <button className="border border-gray-700 rounded-xl px-6 py-1 transition duration-200 ease-in-out transform hover:scale-105" onClick={onClick}>
            <Emoji emoji={emoji} modifiers='w-6 inline-flex'/>
            <p className="">{caption}</p>
        </button>
    );
};

export default QuizSelection;
