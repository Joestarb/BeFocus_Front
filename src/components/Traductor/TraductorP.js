import React, { useState } from 'react';

function ChatTranslator() {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [sourceLanguage, setSourceLanguage] = useState('es');
  const [targetLanguage, setTargetLanguage] = useState('en');
  

  const apiKey = '718632c132mshd8bfaed88e0be3cp14c34djsn12cc5582fccb';

  const translateText = async () => {
    const url = 'https://text-translator2.p.rapidapi.com/translate';

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com',
      },
      body: new URLSearchParams({
        source_language: sourceLanguage,
        target_language: targetLanguage,
        text: inputText,
      }),
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();

      if (result.status === 'success') {
        setTranslatedText(result.data.translatedText);
      } else {
        console.error('Error in translation:', result.error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleTranslateClick = () => {
    translateText();
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className='h-screen w-screen'>
      <h2 className='font-PassionOne text-center text-6xl mt-5 border-b-4 h-14'>Traductor</h2>
      <div className='flex flex-col justify-center traductor mt-16 m-auto'>
        <div className='h-20 w-full traductorColor flex justify-between text-white rounded-tl-lg rounded-tr-lg'>
          <select 
          className='h-12 ml-32 mt-3 text-2xl font-semibold bg-transparent outline-none text-center'
          onChange={(e) => setSourceLanguage(e.target.value)}
          >
            <option value="" className='traductorColor text-white'>{sourceLanguage}</option>
            <option className='traductorColor text-white' value="espanol">Español</option>
            <option className='traductorColor text-white' value="english">English</option>
          </select>
          <button
            className='h-12 m-auto text-center text-2xl font-semibold bg-red-400 p-3 rounded-xl'
            onClick={handleTranslateClick}
          >
            Traducir
          </button>
          <select 
          className='h-12 mr-32 mt-3 text-2xl font-semibold bg-transparent outline-none text-center'
          onChange={(e) =>setTargetLanguage(e.target.value)}
          >
            <option className='traductorColor text-white' value="">{targetLanguage}</option>
            <option className='traductorColor text-white' value="espanol">Español</option>
            <option className='traductorColor text-white' value="english">English</option>
          </select>
        </div>
        <div className=' grid grid-cols-2'>
          <div>
            <textarea
              className='border-2 font-mono border-gray-400 w-full h-96 outline-none resize-none placeholder:text-center p-2'
              placeholder='Escribe o pega el texto que quieres traducir aqui'
              value={inputText}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <textarea
              className='border-2 border-gray-400 w-full h-96 outline-none resize-none p-2'
              readOnly
              value={translatedText}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatTranslator;
