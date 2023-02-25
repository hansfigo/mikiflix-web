import React, { useState, useEffect } from 'react';
import { Box, Button, Center, Stack, Text, VStack } from '@chakra-ui/react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';

interface videoPlayerProps{
    episodeId : string
}

const VideoPlayer  : React.FC = ()=> {
    const [videoUrl, setVideoUrl] = useState('');

    const { episodeId } = useParams<{ episodeId: string }>();

    console.log(episodeId)

    useEffect(() => {
        async function fetchVideoData() {
            try {
                const url = `https://gogoanime.consumet.stream/vidcdn/watch/${episodeId}`
                const response = await fetch(url);
                const data = await response.json();
                setVideoUrl(data.sources[0].file);
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
