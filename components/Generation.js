import React, { useState } from 'react';
import axios from 'axios';

const GenerateImage = () => {
  const [prompt, setPrompt] = useState('');
  const [imageData, setImageData] = useState(null);

  const callGenerateImageAPI = async () => {
    try {
      const response = await axios.post('/api/getImg', { prompt });

      if (response.status === 200) {
        setImageData(response.data);
      } else {
        console.error('API request failed with status:', response.status);
      }
    } catch (error) {
      console.error('Error during API request:', error);
    }
  };

  return (
    <div>
      {imageData && (
        <div>
          <img src={imageData} alt="Generated Image" />
        </div>
      )}
    </div>
  );
};

export default GenerateImage;