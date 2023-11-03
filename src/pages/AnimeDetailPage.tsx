import { AspectRatio, Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getDetailAnime } from "../services/ApiServices"
import { type AnimeInfo } from "../types/interface"


const AnimeDetailPage = () => {
    const { animeId } = useParams();
    const [animeDetail, setAnimeDetail] = useState<AnimeInfo>();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(
        () => {
            console.log("ID", animeId);
            const fetchData = async () => {
                console.log("Start");
                setIsLoading(true);
                try {
                    let detail = await getDetailAnime(animeId)
                    console.log("DETAIL", detail);
                    setAnimeDetail(detail);
                    setIsLoading(false);
                } catch (error) {
                    console.log("ERROR:", error);
                }
               
            }

            fetchData()
        }, [animeId]

    )

    return (
        animeDetail ? <Flex p={4} flexDir={{ base: 'column', md: 'row' }} gap={12}>
            {isLoading ? <Text>Loading</Text> : <>
                <Image rounded={'lg'} boxSize={{ base: 'sm', md: 'lg' }} objectFit='cover' src={animeDetail!.image} />
                <Flex flexDir={{ base: 'column', md: 'column' }} gap={5}>
                    <Heading>
                        {animeDetail!.title?.romaji}
                    </Heading>
                    <Text>
                        {animeDetail!.description}
                    </Text>
                    <Heading fontSize={'xl'}>Genres : </Heading>
                    <Flex gap={4} flexWrap={'wrap'}>
                        {animeDetail!.genres?.map((e) => {
                            return (
                                <Button>{e}</Button>
                            )
                        })}
                    </Flex>
                    <Heading fontSize={'xl'}>Episodes : </Heading>
                    <Flex flexWrap={'wrap'} gap={'4'}>
                        {animeDetail!.episodes?.map((e) => {
                            return (
                                <Link to={`/anime/${animeId}/${e.id}`}>
                                    <Button>{'Episode ' + e.number}</Button>

                                </Link>
                            )
                        }).reverse()}
                    </Flex>


                </Flex></>}

        </Flex> : <p></p> )

}
export default AnimeDetailPage;