import { Box, Text, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import VideoPlayer from "../components/AnimePlayerPage/VideoPlayer"

const AnimePlayer = () => {

    const { animeId, episodeId } = useParams();

    const episodeName = episodeId?.replace(/-/g, ' ').toLowerCase().replace(/\b\w/g, c => c.toUpperCase())
    return (
        <Box>
            <Box maxW={'4xl'}>
                <VideoPlayer />
            </Box>
            <Heading maxW={'4xl'} pt='8'>{episodeName}</Heading>

        </Box>
    )
}



export default AnimePlayer