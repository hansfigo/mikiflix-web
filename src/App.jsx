import './App.css';
import React, { useState, useEffect } from 'react';
import AnimeCard from './card';
import MyHeader from './header';
import AnimeCardSkeleton from './anime-card-skeleton';
import { SkeletonTheme } from 'react-loading-skeleton';

function App() {
  const [data, setData] = useState([]);
  const [popular, setPopular] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData(url, type) {
      setIsLoading(true)
      const response = await fetch(url);
      const json = await response.json();

      if (type === "recent") {
        setData(json);
        setIsLoading(false)
      } else if (type === "popular") {
        setPopular(json)
        setIsLoading(false)
      }
    }
    fetchData("https://gogoanime.consumet.stream/recent-release", "recent");
    fetchData("https://gogoanime.consumet.stream/popular", "popular");

  }, []);

  return (
    <div className="App ">
      <SkeletonTheme  baseColor="#E6E6E6" highlightColor="#F0F0F0">

        <div className='container'>
          <MyHeader></MyHeader>
          <header className="min-h-screen flex flex-col my-12 ">
            <div className=' flex justify-start min-w-full'>
              <h1 className='font-medium text-2xl'>Recent Relase</h1>
            </div>
            <div className='anime-card-container my-6 overflow-x-scroll rounded-md justify-start max-h-max bg-slate-200 flex'>
              {
                !isLoading ?
                  data.map((anime, index) => (
                    anime.animeTitle.includes('(Dub)') ? <p></p> : <AnimeCard key={index}
                      index={index}
                      animeId={anime.animeId}
                      image={anime.animeImg}
                      title={anime.animeTitle} />
                  )) : <AnimeCardSkeleton cards={8} />}
            </div>
            <div className=' flex justify-start min-w-full'>
              <h1 className='font-medium text-2xl'>Popular Anime</h1>
            </div>
            <div className='anime-card-container my-6 overflow-x-scroll rounded-md justify-start max-h-max bg-slate-200 flex'>
              {
                !isLoading ?
                  popular.map((anime, index) => (
                    anime.animeTitle.includes('(Dub)') ? <p></p> : <AnimeCard key={index}
                      index={index}
                      animeId={anime.animeId}
                      image={anime.animeImg}
                      title={anime.animeTitle} />
                  )) : <AnimeCardSkeleton cards={8}/>}
            </div>
          </header>
        </div>
      </SkeletonTheme>

    </div>

  );
}

export default App;



