import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {getRecentAnime, getPopularAnime} from "../services/ApiServices"
import AnimeSection from "../components/AnimeHomePage/AnimeSections";


const AnimeHomePage = () => {

    interface Anime {
        id: string
        title: string;
        image: string;
        episodeNumber: number
        episodeId: string

    }
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
        console.log(recentAnime);
        fetchData(getPopularAnime(), 'popular');
        console.log(popularAnime);
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

