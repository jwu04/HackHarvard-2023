import React, { useState } from 'react';

const QuizInput = ({ placeholder, onSave }) => {
    const [inputValue, setInputValue] = useState('');

    const handleButtonClick = () => {
        onSave(inputValue); // Pass the input value to the onSave callback
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div className="flex justify-center">
            <input
                placeholder={placeholder}
                className="border border-gray-700 rounded-xl px-6 py-1 transition duration-200 ease-in-out transform hover:scale-105 w-96"
                value={inputValue}
                onChange={handleInputChange}
            />
            <button
                className="bg-blue-500 text-white rounded-xl px-4 py-1 ml-2"
                onClick={handleButtonClick}
            >
                Save
            </button>
        </div>
    );
};

export default QuizInput;
