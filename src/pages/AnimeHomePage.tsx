import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getRecentAnime, getPopularAnime } from "../services/ApiServices"
import AnimeSection from "../components/AnimeHomePage/AnimeSections";
import { RecentAnime, Anime } from "../types/interface";



const AnimeHomePage = () => {

  
    const [recentAnime, setRecentAnime] = useState<RecentAnime[]>([]);
    const [popularAnime, setPopularAnime] = useState<Anime[]>([]);
    const [isLoading, setIsloading] = useState<boolean>();
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        const fetchData = async (req: any, tes: string) => {
            setIsloading(true);
            try {
                const data = await req;
                tes == 'recent' ? setRecentAnime(data) : setPopularAnime(data);
            } catch (error) {
                console.log('Error')
                setError((error as Error).message);
            }
            setIsloading(false);

        };
        fetchData(getRecentAnime(), 'recent');
        fetchData(getPopularAnime(), 'popular');


        console.log(popularAnime);
        
    }, []);




    return (
        <>
            {!error ? <Flex direction={'column'} gap={12} >
                <AnimeSection title='Recent Relase' isLoading={isLoading} section={recentAnime} cardType="episode" />
                <AnimeSection title='Popular Anime' isLoading={isLoading} section={popularAnime} cardType="detail" />
            </Flex> : <p>{error}</p>}
        </>
    );

}
export default AnimeHomePage

