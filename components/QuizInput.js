import React, { useState } from 'react';

const QuizInput = ({ placeholder, onSave }) => {
    const [inputValue, setInputValue] = useState('');

    const handleButtonClick = () => {
        if (inputValue.length < 1) return

        onSave(inputValue); // Pass the input value to the onSave callback
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div className="flex justify-center">
            <input
                placeholder={placeholder}
                className="border border-gray-700 rounded-xl px-6 py-1 hover:border-blue-600 transition duration-100 ease-in-out transform w-96"
                value={inputValue}
                onChange={handleInputChange}
            />
            <button
                className="bg-blue-500 text-white rounded-xl px-5 py-1 ml-1.5 transition duration-200 ease-in-out transform hover:scale-105"
                onClick={handleButtonClick}
            >
                Continue
            </button>
        </div>
    );
};

export default QuizInput;
