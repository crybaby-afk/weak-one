import React from 'react';

const Dropdowns = ({ languages, selectedLanguage, setSelectedLanguage, label }) => {
  return (
    <div>
      <label>{label}</label>
      <select
        value={selectedLanguage}
        onChange={(e) => setSelectedLanguage(e.target.value)}
      >
        {Object.entries(languages).map(([key, value]) => (
          <option key={key} value={key}>
            {value.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdowns;
