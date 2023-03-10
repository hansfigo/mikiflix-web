import React, { useState, useEffect } from 'react';
import { Box, Button, Center, Stack, Text, VStack } from '@chakra-ui/react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import { log } from 'console';

interface videoPlayerProps {
    episodeId: string
}

const VideoPlayer = () => {
    const [videoUrl, setVideoUrl] = useState('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { episodeId } = useParams<{ episodeId: string }>();




    useEffect(() => {
        async function fetchVideoData() {
            try {
                setIsLoading(true);
                const url = `https://api.consumet.org/anime/gogoanime/watch/${episodeId}`
                const response = await fetch(url);
                const data = await response.json();
                setVideoUrl(data.sources[4].url);
                console.log(videoUrl)
                setIsLoading(false)
            } catch (error) {
                console.error(error);
            }
        }

        fetchVideoData();
    }, []);
    return (
        <Box>
            {
                !isLoading ? <ReactPlayer
                    url={`https://cors.haikei.xyz/${videoUrl}`}
                    controls
                    width="100%"
                    height="auto"
                    onError={(e) => console.log(e)}
                /> :
                    <Text>Loading</Text>

            }
        </Box>
    )

}

export default VideoPlayer;
