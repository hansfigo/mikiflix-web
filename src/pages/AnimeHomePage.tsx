import { Box, Stack, Container, Flex, Heading, Skeleton, HStack, VStack, SkeletonCircle, SkeletonText, Card, SimpleGrid, Text, IconButton } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import AnimeCard from "../components/AnimeHomePage/AnimeCard"
import apiService from "../services/ApiServices"
import api from '../pages/test'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { relative } from "path";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import AnimeSection from "../components/AnimeHomePage/AnimeSections";


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
    const [popularAnime, setPopularAnime] = useState<Anime[]>([]);
    const [isLoading, setIsloading] = useState<boolean>();

    useEffect(() => {
        const fetchData = async (req: any, tes: string) => {
            setIsloading(true);
            const data = await req;
            tes == 'recent' ? setRecentAnime(data) : setPopularAnime(data);
            setIsloading(false);
        };

        fetchData(getRecentAnime(), 'recent');
        fetchData(getPopularAnime(), 'popular');
    }, []);




    return (
        <>
            <Flex direction={'column'} gap={12}>
                <AnimeSection title='Recent Relase' isLoading={isLoading} section={recentAnime} cardType="episode"/>
                <AnimeSection title='Popular Anime' isLoading={isLoading} section={popularAnime} cardType="detail" />
            </Flex>

        </>
    );



}
export default AnimeHomePage

