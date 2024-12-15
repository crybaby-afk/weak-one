import React, { useState } from 'react';
import './App.css';
import Dropdowns from './Dropdowns';
import TextInput from './TextInput';
import TranslateButton from './TranslateButton';
import OutputBox from './OutputBox';

const languages = {
  en: { name: 'English' },
  es: { name: 'Spanish' },
  fr: { name: 'French' },
  de: { name: 'German' },
};

function App() {
  const [sourceLanguage, setSourceLanguage] = useState('en');
  const [targetLanguage, setTargetLanguage] = useState('es');
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const handleTranslate = () => {
    if (!text.trim()) {
      setTranslatedText('Please enter text to translate.');
      return;
    }

    // API Request
    fetch('https://libretranslate.com/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        q: text,
        source: sourceLanguage,
        target: targetLanguage,
        format: 'text',
        api_key: '', // Add your API key here if you have one
      }),
    })
      .then((response) => {
        // Check if the response is OK (status code 200-299)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data.translatedText) {
          setTranslatedText(data.translatedText);
        } else {
          setTranslatedText('Translation failed. No result returned.');
        }
      })
      .catch((error) => {
        // More detailed error logging
        console.error('Error during translation request:', error);
        setTranslatedText('An error occurred while translating. Please try again later.');
      });
  };

  return (
    <div className="App">
      <h1>Language Translator</h1>
      <Dropdowns
        languages={languages}
        selectedLanguage={sourceLanguage}
        setSelectedLanguage={setSourceLanguage}
        label="Select Source Language"
      />
      <Dropdowns
        languages={languages}
        selectedLanguage={targetLanguage}
        setSelectedLanguage={setTargetLanguage}
        label="Select Target Language"
      />
      <TextInput text={text} setText={setText} label="Enter Text to Translate" />
      <TranslateButton handleTranslate={handleTranslate} />
      <OutputBox translatedText={translatedText} />
    </div>
  );
}

export default App;
