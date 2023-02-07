import './App.css';
import React from 'react';

const AnimeCard = (props) => {
    const { image, title } = props;

    return (
        <div className='rounded w-56 flex flex-col items-center mx-2  h-96 overflow-hidden shadow-lg max-w-xs box-border'>
            <div className='flex box-border '>
                <img src={image} className='h-72' />
            </div>
            <div className=' px-2 w-40 items-center'>
                <p className=' text-base text-ellipsis py-4 whitespace-nowrap overflow-hidden '>{title}</p>

            </div>
        </div>
    )
}

export default AnimeCard;


