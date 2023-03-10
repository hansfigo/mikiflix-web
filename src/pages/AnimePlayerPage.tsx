import { Box, Text, Heading, Flex, Button, Image } from "@chakra-ui/react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import VideoPlayer from "../components/AnimePlayerPage/VideoPlayer"

const AnimePlayer = () => {

    const { animeId, episodeId } = useParams();
    const [refresh, setRefresh] = useState(false);

    const episodeName = episodeId?.replace(/-/g, ' ').toLowerCase().replace(/\b\w/g, c => c.toUpperCase())
    const animeTitle = animeId?.replace(/-/g, ' ').toLowerCase().replace(/\b\w/g, c => c.toUpperCase())
    return (
        <Flex flexDir={{ base: 'column' }} gap={4}>
            <Box>
                <Box maxW={'4xl'}>
                    <VideoPlayer refresh =  {refresh} />
                </Box>
                <Button pt={2} onClick={()=>setRefresh(!refresh)}>Refresh ?</Button>
                <Heading maxW={'4xl'} fontSize={{ base: '2xl' }} noOfLines={2} pt='8'>{episodeName}</Heading>
            </Box>
            <Link to={`/anime/${animeId}`}>
                <Flex gap={2}>
                    <Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/50' />
                    <Text>{animeTitle}</Text>
                </Flex>
            </Link>
        </Flex>

    )
}



export default AnimePlayer