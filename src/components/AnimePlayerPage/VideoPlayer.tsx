import React, { useState, useEffect } from 'react';
import { Box, Button, Center, Stack, Text, VStack } from '@chakra-ui/react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';

interface videoPlayerProps {
  refresh: boolean;
}

const VideoPlayer = ({ refresh }: videoPlayerProps) => {
  const [videoUrl, setVideoUrl] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isReady, setIsReady] = useState<boolean>(false);
  const { episodeId } = useParams<{ episodeId: string }>();

  useEffect(() => {
    async function fetchVideoData() {
      try {
        setIsLoading(true);
        const url = `https://api.consumet.org/anime/gogoanime/watch/${episodeId}`;
        const response = await fetch(url);
        const data = await response.json();
        setVideoUrl(data.sources[4].url);
        setIsLoading(false);
        setIsReady(true);
      } catch (error) {
        console.error('error');
      }
    }

    fetchVideoData();
  }, [episodeId, refresh]);

  if (isLoading) {
    return <Text>Loading</Text>;
  }

  if (!isReady) {
    return null;
  }

  try {
    return (
      <ReactPlayer
        url={`https://cors.haikei.xyz/${videoUrl}`}
        controls
        width="100%"
        height="auto"
        onError={(e) => console.log(e)}
      />
    );
  } catch (error) {
    return <Text>Error: {'err'}</Text>;
  }
};

export default VideoPlayer;
