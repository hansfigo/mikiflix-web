import { useState, useEffect } from 'react';
import { Skeleton } from '@chakra-ui/react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';

interface videoPlayerProps {
    refresh: boolean;
    setHasError : React.Dispatch<React.SetStateAction<boolean>>
}

const VideoPlayer = ({ refresh, setHasError }: videoPlayerProps) => {
    const [videoUrl, setVideoUrl] = useState('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isReady, setIsReady] = useState<boolean>(false);
    const { episodeId } = useParams<{ episodeId: string }>();

    console.log(episodeId);
    
    const corsProxy =  ['https://cors.haikei.xyz/', 'https://m3u8proxy.hambasahaya0303.workers.dev/?url='];


    useEffect(() => {
        console.log(videoUrl);
        async function fetchVideoData() {
            try {
                setIsLoading(true);
                const url = `https://mikiflix-api.vercel.app/meta/anilist/watch/${episodeId}`;
                const response = await fetch(url);
                const data = await response.json();
                setVideoUrl(data.sources[0].url);
                setIsLoading(false);
                setIsReady(true);
            } catch (error) {
                throw error;
                console.error('error');
            }
        }

        fetchVideoData();
    }, [episodeId, refresh]);

    if (isLoading) {
        return <Skeleton height={{ base: '180px', md: '440px' }} />;
    }

    if (!isReady) {
        return null;
    }

    return (

        <ReactPlayer
            // url={`${corsProxy[1]}${videoUrl}`}
            url={`${videoUrl}`}
            controls
            width="100%"
            height="auto"
            onError={(e) => setHasError(true)}
        />
    );

};

export default VideoPlayer;
