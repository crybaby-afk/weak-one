import React from 'react';

const TranslateButton = ({ handleTranslate }) => {
  return (
    <button onClick={handleTranslate}>
      Translate
    </button>
  );
};

export default TranslateButton;
