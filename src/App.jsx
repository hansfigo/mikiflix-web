import './App.css';
import React, { useState, useEffect } from 'react';
import AnimeCard from './card';

function App() {
  const [data, setData] = useState([]);
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://gogoanime.consumet.stream/recent-release");
      const json = await response.json();
      setData(json);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://gogoanime.consumet.stream/popular");
      const json = await response.json();
      setPopular(json);
    }
    fetchData();
  }, []);

  return (
    <div className="App ">
      <div className='container'>
        <header className="min-h-screen flex flex-col my-12 ">
          <div className=' flex justify-start min-w-full'>
            <h1 className='font-medium text-2xl'>Recent Relase</h1>
          </div>
          <div className='my-6 overflow-x-scroll rounded-md justify-start max-h-max bg-slate-200 flex'>
            {data.map((anime, index)=> (
              anime.animeTitle.includes('(Dub)') ? <p></p> : <AnimeCard key={index}
                index={index}
                animeId={anime.animeId}
                image={anime.animeImg}
                title={anime.animeTitle} />
            ))}
          </div>
          <div className=' flex justify-start min-w-full'>
            <h1 className='font-medium text-2xl'>Popular Anime</h1>
          </div>
          <div className='my-6 overflow-x-scroll rounded-md justify-start max-h-max bg-slate-200 flex'>
            {popular.map((anime, index)=> (
              anime.animeTitle.includes('(Dub)') ? <p></p> : <AnimeCard key={index}
                index={index}
                animeId={anime.animeId}
                image={anime.animeImg}
                title={anime.animeTitle} />
            ))}
          </div>
        </header>
      </div>
    </div>

  );
}

export default App;



