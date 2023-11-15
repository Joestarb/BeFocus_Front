import React, { useState, useEffect } from 'react';

function Motivacion() {
  const [frase, setFrase] = useState({});

  useEffect(() => {
    fetch('https://api.api-ninjas.com/v1/quotes?category=happiness', {
      headers: {
        // 'X-Api-Key': '8KQmKfL4EiOZLUWfsodhMA==yHpQScyE6AXBXYXw',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setFrase(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-zinc-800 text-white p-8 rounded-md shadow-md">
      <div className="text-3xl mb-4">
        <h1 className='italic font-medium'>La frase del día:</h1>
        <h2 className='my-3 italic font-light'>{frase.length > 0 ? frase[0].quote : 'Loading...'}</h2>
        <p className="my-3 italic">{frase.length > 0 ? `Autor: ${frase[0].author}` : 'Loading....'}</p>
      </div>
    </div>
  );
}

export default Motivacion;
