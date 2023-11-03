import { Box, Text, Heading, Flex, Button, Image, Avatar, Skeleton, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import VideoPlayer from "../components/AnimePlayerPage/VideoPlayer"
import { getDetailAnime } from "../services/ApiServices";
import { AnimeInfo } from "../types/interface";

const AnimePlayer = ({ EpisodeTitle }: any) => {

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

            </Box>
            {animeInfo ? <Link to={`/anime/${animeId}`}>
                <Heading maxW={'4xl'} fontSize={{ base: '2xl' }} noOfLines={2} mb={4} pt='4'>{`${animeInfo?.title?.romaji} Episode ${animeInfo?.currentEpisode}`}</Heading>
                <Flex gap={2}>
                    <Avatar src={animeInfo?.image} />
                    <Flex flexDir={'column'}>
                        <Text fontWeight={'bold'}>{animeInfo?.title?.romaji}</Text>
                        <Text>{animeInfo?.releaseDate}</Text>
                    </Flex>
                </Flex>
            </Link> :
                <Stack>
                    <Skeleton height='28px' w={"56"}/>
                    <Skeleton height='40px' w={32} />
                </Stack>
             
            }

        </Flex>

    )
}



export default AnimePlayer