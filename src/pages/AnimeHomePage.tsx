import { Box, Stack, Container, Flex, Heading, Skeleton, HStack, VStack, SkeletonCircle, SkeletonText, Card, SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import AnimeCard from "../components/AnimeHomePage/AnimeCard"
import apiService from "../services/ApiServices"
import api from '../pages/test'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


const AnimeHomePage = () => {

    interface Anime {
        animeTitle: string;
        animeImg: string;
        episodeNum: number
        episodeId: string
        animeId: string

    }
    const { getRecentAnime, getPopularAnime } = apiService;
    const [recentAnime, setRecentAnime] = useState<Anime[]>([]);
    const [isLoading, setIsloading] = useState<boolean>();

    useEffect(() => {
        const fetchData = async () => {
            setIsloading(true);
            const data = await getRecentAnime();
            setRecentAnime(data);
            setIsloading(false);
        };

        fetchData();
    }, []);

    const CardSkeleton: React.FC = () => {
        return (
            <Card shadow={'none'} rounded={'2xl'} maxW={'240px'} minWidth={'240px'} mx='auto'>
                <Skeleton rounded={'3xl'} height='300px'></Skeleton>
                <SkeletonText mt='4' rounded={'2xl'} noOfLines={2} spacing='4' skeletonHeight='8' />
            </Card>
        );
    };

    return (
        <Box >
            <Heading mb={4}>Recent Anime</Heading>
            {isLoading ? (
                <SimpleGrid gap={'24'} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                    {[...Array(20)].map((_, i) => (
                        <CardSkeleton />
                    ))}
                </SimpleGrid>
            ) : (
                <Flex gap={2}>
                    <Flex justifyContent={'space-between'} wrap='wrap' gap={4}>
                    {recentAnime.map((anime, id) => (
                        <AnimeCard
                            key={id}
                            title={anime.animeTitle}
                            imageUrl={anime.animeImg}
                            episodeNum={anime.episodeNum}
                            episodeId={anime.episodeId}
                            animeId={anime.animeId}
                        />
                    ))}
                    </Flex>
               
                </Flex>
            )}
        </Box>
    );



}
export default AnimeHomePage

