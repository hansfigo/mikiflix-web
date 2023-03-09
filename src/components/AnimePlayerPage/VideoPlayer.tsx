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
                    url={'https://cors.delusionz.xyz/https://c-an-ca4.betterstream.cc:2223/hls-playback/ad6c8c5a1545e84de2970bf862297f33ded39416473cf49c6642fac6628e3fd6d7792fa8edc551e621fced895ac9214669e14cc822eaba67edf9f7b4af6b71a99aac2c1cbdeaf295054c5c95b3e9c003abc53e29adffdea332d26077fecfa843c9899f55f34168e207c2c9d84d7a80c3b49027fd68bd326d6029d49b00a29f48f1d1ace81b156bd2e6dab1c57558963a/index-f3-v1-a1.m3u8'}
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
