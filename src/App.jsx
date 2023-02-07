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
      <header className=" min-h-screen flex flex-col my-12 items-center">
        <div className='px-4 flex justify-start min-w-full'>
          <h1 className='font-medium text-2xl'>Popular Anime</h1>
        </div>
        <div className='anime-card-container px-4 overflow-x-scroll flex min-w-full mt-8'>
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



