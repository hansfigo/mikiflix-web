import './App.css';
import React, { useState, useEffect } from 'react';




const AnimeCard = (props) => {
    const { image, title, animeId, index } = props;
    const [detail, setDetail] = useState([]);
    const [genre, setGenre] = useState([]);

    useEffect(() => {
        async function fetchData(animeId) {
            const response = await fetch(`https://gogoanime.consumet.stream/anime-details/${animeId}`);
            const json = await response.json();
            setDetail(json);
          }
          fetchData(animeId);
     


    }, [])

    return (
        <div class="min-h-[8rem] max-h-[460px] pb-4 overflow-hidden mr-8 max-w-[180px] min-w-[180px] w-80 rounded-lg bg-white text-gray-700 shadow-lg">
            <img class='' src={image} alt='ANIME' />
            <div class="max-h-16 overflow-hidden text-ellipsis px-4 pt-3 text-slate-800">{title}</div>
            {/* <!-- <div class="h-20 w-40 overflow-hidden overflow-y-scroll text-ellipsis break-words px-4 pt-2 text-[10px] text-slate-400">
          <p class="">// If you want to start measuring performance in your app, pass a function // to log results (for example: reportWebVitals(console.log)) // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals</p>
        </div> --> */}
            <div class="flex w-full max-h-[140px] flex-wrap px-4 pt-3 pb-6">
                {
                    detail["genres"].map((detail, index) =>(
                        index >= 3 ?
                         <p></p> : <div class="rounded-full m-1 bg-slate-100 px-2 py-1 text-xs shadow-sm duration-300 ease-out hover:bg-red-400 hover:text-white">
                         <p>{detail}</p>
                     </div> 
                    ))
                }
                {/* <div class="rounded-full bg-slate-100 px-2 py-1 text-xs shadow-sm duration-300 ease-out hover:bg-red-400 hover:text-white">
                    <p>Fantasy</p>
                </div>
                <div class="mx-1 rounded-full bg-slate-100 p-1 text-xs shadow-sm duration-300 ease-out hover:bg-red-400 hover:text-white">
                    <p>Action</p>
                </div>
                <div class="mt-2 rounded-full bg-slate-100 p-1 text-xs shadow-sm duration-300 ease-out hover:bg-red-400 hover:text-white">
                    <p>Advanture</p>
                </div> */}
            </div>
        </div>

        // <div className=' rounded w-56 flex flex-col items-center mx-2 h-96 overflow-hidden shadow-lg max-w-xs box-border'>
        //     <div className='flex box-border '>
        //         <img src={image} className='h-72' />
        //     </div>
        //     <div className=' px-2 w-40 items-center'>
        //         <p className=' text-base text-ellipsis py-4 whitespace-nowrap overflow-hidden '>{title}</p>

        //     </div>
        // </div>
    )
}

export default AnimeCard;


