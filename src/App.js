import './App.css';
import React, { useState, useEffect } from 'react';
import AnimeCard from './card';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://gogoanime.consumet.stream/search?keyw=madoka");
      const json = await response.json();
      setData(json);
    }
    fetchData();
  }, []);


  console.log(data); // Add a console.log statement to check if data has been updated

  return (
    <div className="App">
      <header className="bg-gray-800 min-h-screen text-white flex flex-col justify-center items-center">
        <h1 className='font-semibold text-4xl'>Popular Anime</h1>
          <div className='flex justify-between flex-nowrap overflow-x-scroll mt-8'>
            {data.map(anime => (
             anime.animeTitle.includes('(Dub)') ? <p></p> : <AnimeCard key={anime.id}
             image={anime.animeImg}
             title={anime.animeTitle} />
            ))}
        </div>
      </header>
    </div>
  );

}

export default App;



