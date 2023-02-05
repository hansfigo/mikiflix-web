import './App.css';
import React from 'react';

const AnimeCard = (props) => {
    const { image, title } = props;

    return (
        <div className='anime-card'>
            <img src={image} />
            <h2>{title}</h2>
        </div>
    )
}

export default AnimeCard;


