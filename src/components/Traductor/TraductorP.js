import React, { useState } from 'react';

function ChatTranslator() {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [sourceLanguage, setSourceLanguage] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('');


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
    console.log(sourceLanguage);
    console.log(targetLanguage);
    translateText();
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className='h-full mb-20 xl:mb-0 w-screen'>
      <h2 className='font-PassionOne text-center text-6xl mt-5 border-b-4 h-14'>Traductor</h2>
      <div className='flex flex-col justify-center md:w-5/6 w-11/12 mt-16 m-auto'>
        <div className='md:h-20 m-auto w-full bg-[#2D2727] flex justify-between text-white rounded-tl-lg rounded-tr-lg'>
          <select
            className='h-12 xl:ml-32 md:ml-1 my-auto md:text-2xl text-xs font-semibold bg-transparent outline-none text-center'
            onChange={(e) => setSourceLanguage(e.target.value)}
          >
            <option value="" className='traductorColor text-white'  disabled hidden>Seleccionar idioma</option>
            <option className='traductorColor text-white' value="af">Afrikáans</option>
            <option className='traductorColor text-white' value="sq">Albanés</option>
            <option className='traductorColor text-white' value="de">Alemán</option>
            <option className='traductorColor text-white' value="am">Amárico</option>
            <option className='traductorColor text-white' value="ar">Árabe</option>
            <option className='traductorColor text-white' value="hy">Armenio</option>
            <option className='traductorColor text-white' value="az">Azerbaiyano</option>
            <option className='traductorColor text-white' value="be">Bielorruso</option>
            <option className='traductorColor text-white' value="bn">Bengalí</option>
            <option className='traductorColor text-white' value="bs">Bosnio</option>
            <option className='traductorColor text-white' value="bg">Búlgaro</option>
            <option className='traductorColor text-white' value="my">Birmano (Myanmar)</option>
            <option className='traductorColor text-white' value="ca">Catalán</option>
            <option className='traductorColor text-white' value="ceb">Cebuano</option>
            <option className='traductorColor text-white' value="ny">Chichewa</option>
            <option className='traductorColor text-white' value="zh-CN">Chino (Simplificado)</option>
            <option className='traductorColor text-white' value="zh-TW">Chino (Tradicional)</option>
            <option className='traductorColor text-white' value="si">Cingalés</option>
            <option className='traductorColor text-white' value="ko">Coreano</option>
            <option className='traductorColor text-white' value="co">Corso</option>
            <option className='traductorColor text-white' value="ht">Criollo Haitiano</option>
            <option className='traductorColor text-white' value="hr">Croata</option>
            <option className='traductorColor text-white' value="cs">Checo</option>
            <option className='traductorColor text-white' value="da">Danés</option>
            <option className='traductorColor text-white' value="eo">Esperanto</option>
            <option className='traductorColor text-white' value="et">Estonio</option>
            <option className='traductorColor text-white' value="sk">Eslovaco</option>
            <option className='traductorColor text-white' value="sl">Esloveno</option>
            <option className='traductorColor text-white' value="es" selected>Español</option>
            <option className='traductorColor text-white' value="tl">Filipino</option>
            <option className='traductorColor text-white' value="fi">Finlandés</option>
            <option className='traductorColor text-white' value="fr">Francés</option>
            <option className='traductorColor text-white' value="fy">Frisón</option>
            <option className='traductorColor text-white' value="gd">Gaélico Escocés</option>
            <option className='traductorColor text-white' value="cy">Galés</option>
            <option className='traductorColor text-white' value="gl">Gallego</option>
            <option className='traductorColor text-white' value="ka">Georgiano</option>
            <option className='traductorColor text-white' value="el">Griego</option>
            <option className='traductorColor text-white' value="gu">Gujarati</option>
            <option className='traductorColor text-white' value="ha">Hausa</option>
            <option className='traductorColor text-white'  value="haw">Hawaiano</option>
            <option className='traductorColor text-white' value="iw">Hebreo</option>
            <option className='traductorColor text-white' value="hi">Hindi</option>
            <option className='traductorColor text-white' value="hmn">Hmong</option>
            <option className='traductorColor text-white' value="hu">Húngaro</option>
            <option className='traductorColor text-white' value="is">Islandés</option>
            <option className='traductorColor text-white' value="ig">Igbo</option>
            <option className='traductorColor text-white' value="id">Indonesio</option>
            <option className='traductorColor text-white' value="en">Inglés</option>
            <option className='traductorColor text-white' value="ga">Irlandés</option>
            <option className='traductorColor text-white' value="it">Italiano</option>
            <option className='traductorColor text-white' value="ja">Japonés</option>
            <option className='traductorColor text-white' value="jw">Javanés</option>
            <option className='traductorColor text-white' value="km">Jemer</option>
            <option className='traductorColor text-white' value="kn">Kannada</option>
            <option className='traductorColor text-white' value="kk">Kazajo</option>
            <option className='traductorColor text-white' value="rw">Kinyarwanda</option>
            <option className='traductorColor text-white' value="ku">Kurdo (Kurmanji)</option>
            <option className='traductorColor text-white' value="ky">Kirguís</option>
            <option className='traductorColor text-white' value="lo">Lao</option>
            <option className='traductorColor text-white' value="la">Latín</option>
            <option className='traductorColor text-white' value="lv">Letón</option>
            <option className='traductorColor text-white' value="lt">Lituano</option>
            <option className='traductorColor text-white' value="lb">Luxemburgués</option>
            <option className='traductorColor text-white' value="mk">Macedonio</option>
            <option className='traductorColor text-white' value="mg">Malgache</option>
            <option className='traductorColor text-white' value="ms">Malayo</option>
            <option className='traductorColor text-white' value="ml">Malayalam</option>
            <option className='traductorColor text-white' value="mt">Maltés</option>
            <option className='traductorColor text-white' value="mi">Maorí</option>
            <option className='traductorColor text-white' value="mr">Marathi</option>
            <option className='traductorColor text-white' value="mn">Mongol</option>
            <option className='traductorColor text-white' value="nl">Neerlandés</option>
            <option className='traductorColor text-white' value="ne">Nepalí</option>
            <option className='traductorColor text-white' value="no">Noruego</option>
            <option className='traductorColor text-white' value="or">Odia (Oriya)</option>
            <option className='traductorColor text-white' value="ps">Pastún</option>
            <option className='traductorColor text-white' value="fa">Persa</option>
            <option className='traductorColor text-white' value="pl">Polaco</option>
            <option className='traductorColor text-white' value="pt">Portugués</option>
            <option className='traductorColor text-white' value="pa">Punyabí</option>
            <option className='traductorColor text-white' value="ro">Rumano</option>
            <option className='traductorColor text-white' value="ru">Ruso</option>
            <option className='traductorColor text-white' value="sm">Samoano</option>
            <option className='traductorColor text-white' value="sr">Serbio</option>
            <option className='traductorColor text-white' value="st">Sesotho</option>
            <option className='traductorColor text-white' value="sn">Shona</option>
            <option className='traductorColor text-white' value="sd">Sindhi</option>
            <option className='traductorColor text-white' value="so">Somalí</option>
            <option className='traductorColor text-white' value="su">Sundanés</option>
            <option className='traductorColor text-white' value="sw">Suajili</option>
            <option className='traductorColor text-white' value="sv">Sueco</option>
            <option className='traductorColor text-white' value="tg">Tayiko</option>
            <option className='traductorColor text-white' value="ta">Tamil</option>
            <option className='traductorColor text-white' value="tt">Tártaro</option>
            <option className='traductorColor text-white' value="te">Telugu</option>
            <option className='traductorColor text-white' value="th">Tailandés</option>
            <option className='traductorColor text-white' value="tr">Turco</option>
            <option className='traductorColor text-white' value="tk">Turcomano</option>
            <option className='traductorColor text-white' value="uk">Ucraniano</option>
            <option className='traductorColor text-white' value="ur">Urdu</option>
            <option className='traductorColor text-white' value="ug">Uigur</option>
            <option className='traductorColor text-white' value="uz">Uzbeko</option>
            <option className='traductorColor text-white' value="eu">Vasco</option>
            <option className='traductorColor text-white' value="vi">Vietnamita</option>
            <option className='traductorColor text-white' value="xh">Xhosa</option>
            <option className='traductorColor text-white' value="yi">Yidis</option>
            <option className='traductorColor text-white' value="yo">Yoruba</option>
            <option className='traductorColor text-white' value="zu">Zulú</option>
          </select>
          <button
            className='md:h-12 m-auto text-center md:text-2xl text-sm font-semibold bg-[#86A3B8] xl:p-3 p-2 rounded-xl my-3' onClick={handleTranslateClick}>
            Traducir
          </button>
          <select
            className='h-12 xl:mr-32 md:mr-2 my-auto md:text-2xl text-xs font-semibold bg-transparent outline-none text-center'
            onChange={(e) => setTargetLanguage(e.target.value)}
          >
            <option className='traductorColor text-white' value="" disabled hidden>Seleccionar idioma</option>
            <option className='traductorColor text-white' value="af">Afrikáans</option>
            <option className='traductorColor text-white' value="sq">Albanés</option>
            <option className='traductorColor text-white' value="de">Alemán</option>
            <option className='traductorColor text-white' value="am">Amárico</option>
            <option className='traductorColor text-white' value="ar">Árabe</option>
            <option className='traductorColor text-white' value="hy">Armenio</option>
            <option className='traductorColor text-white' value="az">Azerbaiyano</option>
            <option className='traductorColor text-white' value="be">Bielorruso</option>
            <option className='traductorColor text-white' value="bn">Bengalí</option>
            <option className='traductorColor text-white' value="bs">Bosnio</option>
            <option className='traductorColor text-white' value="bg">Búlgaro</option>
            <option className='traductorColor text-white' value="my">Birmano (Myanmar)</option>
            <option className='traductorColor text-white' value="ca">Catalán</option>
            <option className='traductorColor text-white' value="ceb">Cebuano</option>
            <option className='traductorColor text-white' value="ny">Chichewa</option>
            <option className='traductorColor text-white' value="zh-CN">Chino (Simplificado)</option>
            <option className='traductorColor text-white' value="zh-TW">Chino (Tradicional)</option>
            <option className='traductorColor text-white' value="si">Cingalés</option>
            <option className='traductorColor text-white' value="ko">Coreano</option>
            <option className='traductorColor text-white' value="co">Corso</option>
            <option className='traductorColor text-white' value="ht">Criollo Haitiano</option>
            <option className='traductorColor text-white' value="hr">Croata</option>
            <option className='traductorColor text-white' value="cs">Checo</option>
            <option className='traductorColor text-white' value="da">Danés</option>
            <option className='traductorColor text-white' value="eo">Esperanto</option>
            <option className='traductorColor text-white' value="et">Estonio</option>
            <option className='traductorColor text-white' value="sk">Eslovaco</option>
            <option className='traductorColor text-white' value="sl">Esloveno</option>
            <option className='traductorColor text-white' value="es">Español</option>
            <option className='traductorColor text-white' value="tl">Filipino</option>
            <option className='traductorColor text-white' value="fi">Finlandés</option>
            <option className='traductorColor text-white' value="fr">Francés</option>
            <option className='traductorColor text-white' value="fy">Frisón</option>
            <option className='traductorColor text-white' value="gd">Gaélico Escocés</option>
            <option className='traductorColor text-white' value="cy">Galés</option>
            <option className='traductorColor text-white' value="gl">Gallego</option>
            <option className='traductorColor text-white' value="ka">Georgiano</option>
            <option className='traductorColor text-white' value="el">Griego</option>
            <option className='traductorColor text-white' value="gu">Gujarati</option>
            <option className='traductorColor text-white' value="ha">Hausa</option>
            <option className='traductorColor text-white'  value="haw">Hawaiano</option>
            <option className='traductorColor text-white' value="iw">Hebreo</option>
            <option className='traductorColor text-white' value="hi">Hindi</option>
            <option className='traductorColor text-white' value="hmn">Hmong</option>
            <option className='traductorColor text-white' value="hu">Húngaro</option>
            <option className='traductorColor text-white' value="is">Islandés</option>
            <option className='traductorColor text-white' value="ig">Igbo</option>
            <option className='traductorColor text-white' value="id">Indonesio</option>
            <option className='traductorColor text-white' value="en" selected>Inglés</option>
            <option className='traductorColor text-white' value="ga">Irlandés</option>
            <option className='traductorColor text-white' value="it">Italiano</option>
            <option className='traductorColor text-white' value="ja">Japonés</option>
            <option className='traductorColor text-white' value="jw">Javanés</option>
            <option className='traductorColor text-white' value="km">Jemer</option>
            <option className='traductorColor text-white' value="kn">Kannada</option>
            <option className='traductorColor text-white' value="kk">Kazajo</option>
            <option className='traductorColor text-white' value="rw">Kinyarwanda</option>
            <option className='traductorColor text-white' value="ku">Kurdo (Kurmanji)</option>
            <option className='traductorColor text-white' value="ky">Kirguís</option>
            <option className='traductorColor text-white' value="lo">Lao</option>
            <option className='traductorColor text-white' value="la">Latín</option>
            <option className='traductorColor text-white' value="lv">Letón</option>
            <option className='traductorColor text-white' value="lt">Lituano</option>
            <option className='traductorColor text-white' value="lb">Luxemburgués</option>
            <option className='traductorColor text-white' value="mk">Macedonio</option>
            <option className='traductorColor text-white' value="mg">Malgache</option>
            <option className='traductorColor text-white' value="ms">Malayo</option>
            <option className='traductorColor text-white' value="ml">Malayalam</option>
            <option className='traductorColor text-white' value="mt">Maltés</option>
            <option className='traductorColor text-white' value="mi">Maorí</option>
            <option className='traductorColor text-white' value="mr">Marathi</option>
            <option className='traductorColor text-white' value="mn">Mongol</option>
            <option className='traductorColor text-white' value="nl">Neerlandés</option>
            <option className='traductorColor text-white' value="ne">Nepalí</option>
            <option className='traductorColor text-white' value="no">Noruego</option>
            <option className='traductorColor text-white' value="or">Odia (Oriya)</option>
            <option className='traductorColor text-white' value="ps">Pastún</option>
            <option className='traductorColor text-white' value="fa">Persa</option>
            <option className='traductorColor text-white' value="pl">Polaco</option>
            <option className='traductorColor text-white' value="pt">Portugués</option>
            <option className='traductorColor text-white' value="pa">Punyabí</option>
            <option className='traductorColor text-white' value="ro">Rumano</option>
            <option className='traductorColor text-white' value="ru">Ruso</option>
            <option className='traductorColor text-white' value="sm">Samoano</option>
            <option className='traductorColor text-white' value="sr">Serbio</option>
            <option className='traductorColor text-white' value="st">Sesotho</option>
            <option className='traductorColor text-white' value="sn">Shona</option>
            <option className='traductorColor text-white' value="sd">Sindhi</option>
            <option className='traductorColor text-white' value="so">Somalí</option>
            <option className='traductorColor text-white' value="su">Sundanés</option>
            <option className='traductorColor text-white' value="sw">Suajili</option>
            <option className='traductorColor text-white' value="sv">Sueco</option>
            <option className='traductorColor text-white' value="tg">Tayiko</option>
            <option className='traductorColor text-white' value="ta">Tamil</option>
            <option className='traductorColor text-white' value="tt">Tártaro</option>
            <option className='traductorColor text-white' value="te">Telugu</option>
            <option className='traductorColor text-white' value="th">Tailandés</option>
            <option className='traductorColor text-white' value="tr">Turco</option>
            <option className='traductorColor text-white' value="tk">Turcomano</option>
            <option className='traductorColor text-white' value="uk">Ucraniano</option>
            <option className='traductorColor text-white' value="ur">Urdu</option>
            <option className='traductorColor text-white' value="ug">Uigur</option>
            <option className='traductorColor text-white' value="uz">Uzbeko</option>
            <option className='traductorColor text-white' value="eu">Vasco</option>
            <option className='traductorColor text-white' value="vi">Vietnamita</option>
            <option className='traductorColor text-white' value="xh">Xhosa</option>
            <option className='traductorColor text-white' value="yi">Yidis</option>
            <option className='traductorColor text-white' value="yo">Yoruba</option>
            <option className='traductorColor text-white' value="zu">Zulú</option>
          </select>
        </div>
        <div className=' grid xl:grid-cols-2 w-full'>
          <div className='mb-5'>
            <textarea
              className='border-2 font-mono border-gray-400 w-full h-96 outline-none resize-none placeholder:text-left p-2'
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
