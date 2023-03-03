import { AspectRatio, Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import apiService from "../services/ApiServices";


interface AnimeDetail {
    animeTitle: string,
    type: string,
    relasedDate: string,
    status: string,
    genres: string[],
    synopsis: string,
    animeImg: string,
    totalEpisodes: string,
    episodesList: EpsList[]
}

interface EpsList {
    episodeId: string,
    episodeNum: string
}


const AnimeDetailPage = () => {
    const { animeId } = useParams();

    const { getRecentAnime, getPopularAnime, getDetailAnime } = apiService;
    const [animeDetail, getAnimeDetail] = useState<AnimeDetail>();

    useEffect(
        () => {
            const fetchData = async () => {
                getAnimeDetail(await getDetailAnime(animeId));
            }
            fetchData()

        }, []
    )

    return (

        <Flex p={4} flexDir={{ base: 'column', md: 'row' }} gap={12}>
            {animeDetail && (<>
                <Image rounded={'lg'} boxSize={{base : 'sm', md: 'lg'}} objectFit='cover' src={animeDetail?.animeImg} />
                <Flex flexDir={{ base: 'column', md: 'column' }} gap={5}>
                    <Heading>
                        {animeDetail?.animeTitle}
                    </Heading>
                    <Text>
                        {animeDetail?.synopsis}
                    </Text>
                    <Heading fontSize={'xl'}>Genres : </Heading>
                    <Flex gap={4} flexWrap={'wrap'}>
                        {animeDetail?.genres.map((e) => {
                            return (
                                <Button>{e}</Button>
                            )
                        })}
                    </Flex>
                    <Heading fontSize={'xl'}>Episodes : </Heading>
                    <Flex flexWrap={'wrap'} gap={'4'}>
                        {animeDetail?.episodesList.map((e) => {
                            return (
                                <Link to={`/anime/${animeId}/${e.episodeId}`}>
                                    <Button>{'Episode ' + e.episodeNum}</Button>

                                </Link>
                            )
                        }).reverse()}
                    </Flex>


                </Flex></>)}

        </Flex>
    )
}
export default AnimeDetailPage;