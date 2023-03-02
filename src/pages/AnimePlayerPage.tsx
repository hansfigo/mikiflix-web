import { Box, Text, Heading, Flex, Button, Image } from "@chakra-ui/react";
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
                <Button>Next</Button>
            </Link>
            <Link to={`/anime/${animeId}`}>
                <Flex>
                    <Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/50' />
                    <Text>{animeTitle}</Text>

                </Flex>
            </Link>
        </Box>

    )
}



export default AnimePlayer