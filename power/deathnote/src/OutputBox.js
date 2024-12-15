import React from 'react';

const OutputBox = ({ translatedText }) => {
  return (
    <div>
      <h3>Translation:</h3>
      <div className="output-box">
        {translatedText || 'Your translation will appear here...'}
      </div>
    </div>
  );
};

export default OutputBox;
