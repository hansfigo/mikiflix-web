import './App.css';
import React, { useState, useEffect } from 'react';
import AnimeCard from './card';

function App() {
  const [data, setData] = useState([]);
  const recentRelase = [];

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://gogoanime.consumet.stream/recent-release");
      const json = await response.json();
      setData(json);
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
          <div className='py-6 overflow-x-scroll justify-start max-h-max bg-slate-200 flex'>
            {data.map(anime => (
              anime.animeTitle.includes('(Dub)') ? <p></p> : <AnimeCard key={anime.id}
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



