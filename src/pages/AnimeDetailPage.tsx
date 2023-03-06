import { AspectRatio, Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {getDetailAnime} from "../services/ApiServices"


interface AnimeDetail {
    title: string,
    type: string,
    image : string,
    relasedDate: string,
    status: string,
    genres: string[],
    description: string,
    totalEpisodes: string,
    episodes: EpsList[]
}

interface EpsList {
    id: string,
    number: string
}


const AnimeDetailPage = () => {
    const { animeId } = useParams();

    const [animeDetail, getAnimeDetail] = useState<AnimeDetail>();

    

    useEffect(
        () => {
            const fetchData = async () => {
                getAnimeDetail(await getDetailAnime(animeId));
            }
            fetchData()
            console.log(animeDetail);
        }, [animeId]
    )

    return (

        <Flex p={4} flexDir={{ base: 'column', md: 'row' }} gap={12}>
            {animeDetail && (<>
                <Image rounded={'lg'} boxSize={{base : 'sm', md: 'lg'}} objectFit='cover' src={animeDetail?.image} />
                <Flex flexDir={{ base: 'column', md: 'column' }} gap={5}>
                    <Heading>
                        {animeDetail?.title}
                    </Heading>
                    <Text>
                        {animeDetail?.description}
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
                        {animeDetail?.episodes.map((e) => {
                            return (
                                <Link to={`/anime/${animeId}/${e.id}`}>
                                    <Button>{'Episode ' + e.number}</Button>

                                </Link>
                            )
                        }).reverse()}
                    </Flex>


                </Flex></>)}

        </Flex>
    )
}
export default AnimeDetailPage;