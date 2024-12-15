import React from 'react';

const TextInput = ({ text, setText, label }) => {
  return (
    <div>
      <label>{label}</label>
      <textarea
        rows="5"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type text here..."
      />
    </div>
  );
};

export default TextInput;
