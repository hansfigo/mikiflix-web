import './App.css';
import React from 'react';

const AnimeCard = (props) => {
    const { image, title } = props;

    return (
        <div className='bg-white mx-4 flex flex-col text-gray-700 w-44 min-h-[8rem]h-6 overflow-hidden shadow-lg rounded-lg'>
            <img className='' src={image} alt='ANIME' />
            <div className='px-4 pt-3 text-slate-800'>
                {title}
            </div>
            <div className='px-4 pt-2 text-[10px] text-slate-400 break-words h-20 text-ellipsis overflow-y-scroll overflow-hidden  w-40 '>
                <p className=''>// If you want to start measuring performance in your app, pass a function
                    // to log results (for example: reportWebVitals(console.log))
                    // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals</p>
            </div>
            <div className='px-4 py-3 flex break-words bg-blue-200 w-[120px]'>
                <div className='bg-slate-100 hover:bg-red-400 hover:text-white shadow-sm ease-out duration-150 px-2 py-1 text-xs rounded-full'>
                    <p>Fantasy</p>
                </div>
                <div className='bg-slate-100 shadow-sm py-1 px-1 text-xs rounded-full'>
                    <p>Action</p>
                </div>
                <div className='bg-slate-100 shadow-sm py-1 px-1 text-xs rounded-full'>
                    <p>Advanture</p>
                </div>
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


