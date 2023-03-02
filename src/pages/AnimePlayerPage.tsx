import { Box, Text, Heading, Flex } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import VideoPlayer from "../components/AnimePlayerPage/VideoPlayer"

const AnimePlayer = () => {

    const { animeId, episodeId } = useParams();

    const episodeName = episodeId?.replace(/-/g, ' ').toLowerCase().replace(/\b\w/g, c => c.toUpperCase())
    const animeTitle = animeId?.replace(/-/g, ' ').toLowerCase().replace(/\b\w/g, c => c.toUpperCase())
    return (
        <Box>
            <Box maxW={'4xl'}>
                <VideoPlayer />
            </Box>
            <Heading maxW={'4xl'} fontSize={{ base: '2xl' }} noOfLines={2} pt='8'>{episodeName}</Heading>
            <Link to={`/anime/${animeId}`}> 
                <Text>{animeTitle}</Text>
            </Link>
        </Box>

    )
}



export default AnimePlayer