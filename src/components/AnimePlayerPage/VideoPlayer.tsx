import React, { useState, useEffect } from 'react';
import { Box, Button, Center, Stack, Text, VStack } from '@chakra-ui/react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import { log } from 'console';

interface videoPlayerProps{
    episodeId : string
}

const VideoPlayer  : React.FC = ()=> {
    const [videoUrl, setVideoUrl] = useState('');

    const { episodeId } = useParams<{ episodeId: string }>();


   

    useEffect(() => {
        async function fetchVideoData() {
            try {
                 console.log(episodeId)
                const url = `https://api.consumet.org/anime/gogoanime/watch/${episodeId}`
                const response = await fetch(url);
                const data = await response.json();
                console.log(data.sources[4].url)
                setVideoUrl(data.sources[4].url);
            } catch (error) {
                console.error(error);
            }
        }

        fetchVideoData();
    }, []);

    return (
            <ReactPlayer
                url={videoUrl}
                controls
                width="100%"
                height="auto"
                onError={(e) => console.log(e)}
            />
       )
}

export default VideoPlayer;
