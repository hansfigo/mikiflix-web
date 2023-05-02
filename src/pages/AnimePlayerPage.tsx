import { Box, Text, Heading, Flex, Button, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import VideoPlayer from "../components/AnimePlayerPage/VideoPlayer"
import { getDetailAnime } from "../services/ApiServices";
import { AnimeInfo } from "../types/interface";

const AnimePlayer = ({EpisodeTitle} : any) => {

    const { animeId, episodeId } = useParams();
    const [refresh, setRefresh] = useState(false)
    const [hasError, setHasError] = useState<boolean>(false);
    const [animeInfo, setAnimeInfo] = useState<AnimeInfo>()

    console.log(hasError);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setAnimeInfo(await getDetailAnime(animeId))
            } catch (e) {
                throw (e)
            }
        }
        fetchData()
    }, [])
    
    return (
        <Flex flexDir={{ base: 'column' }} gap={4}>
            <Box>
                <Box maxW={'4xl'}>
                    <VideoPlayer setHasError={setHasError} refresh={refresh} />
                </Box>
                {hasError && <Flex w={'full'} justifyContent={{ base: 'end', md: 'start' }} alignItems={'baseline'} gap={2} fontSize={'xs'}>
                    <Text>Video Error ? </Text>
                    <Button fontSize={'xs'} pt={2} colorScheme='blue' variant='link' onClick={() => setRefresh(!refresh)}>Refresh</Button>
                </Flex>}

                <Heading maxW={'4xl'} fontSize={{ base: '2xl' }} noOfLines={2} pt='4'>{animeInfo?.currentEpisode}</Heading>
            </Box>
            <Link to={`/anime/${animeId}`}>
                <Flex gap={2}>
                    <Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/50' />
                    <Text>{animeInfo?.title?.romaji}</Text>
                </Flex>
            </Link>
        </Flex>

    )
}



export default AnimePlayer