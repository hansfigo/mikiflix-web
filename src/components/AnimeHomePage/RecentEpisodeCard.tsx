import {
    Image,
    Text,
    Card,
    CardBody,
    Stack,
    Heading,
    AspectRatio,
    Box,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDetailAnime } from "../../services/ApiServices";
import { AnimeInfo, Anime } from "../../types/interface";

const RecentEpisodeCard = ({
    title,
    image,
    episodeNumber,
    id,
}: Anime) => {
    const [animeInfo, setAnimeInfo] = useState<AnimeInfo>();
    const [episodeId, setEpisodeId] = useState<string>();
    const [isHaveEpisode, setHaveEpisode] = useState<boolean>(true);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const anime = await getDetailAnime(id);
    
                setAnimeInfo(anime);
    
                if (anime && anime.episode) {
                    setEpisodeId(anime.episode[episodeNumber! - 1]?.id);
                } else {
                    setHaveEpisode(false);
                }
            } catch (error) {
                console.error("Error fetching anime data:", error);
            }
        };
    
        fetchData();
    }, [id, episodeNumber]);
    

    return (

       (
            <Link to={isHaveEpisode ? `/anime/${id}/${episodeId}` : `/anime/${id}/$`}><Card
                transition={"ease-in-out 0.4s"}
                _hover={{
                    bgGradient: "linear(to-l, #7928CA, #FF0080)",
                    bgClip: "text",
                }}
                shadow={"none"}
                rounded={"2xl"}
                p={0}
                minW={{ base: "140px", lg: "240px" }}
                _dark={{ bg: "gray-700" }}
            >
                <CardBody p={0}>
                    <Box>
                        <AspectRatio position={"relative"} ratio={2/ 3}>
                            <Image
                                objectFit={'fill'}
                                src={image}
                                alt={id}
                                borderRadius="2xl"
                            />
                        </AspectRatio>
                        <Box
                            display={"f;ex"}
                            position="absolute"
                            top="0"
                            left="0"
                            p={{ base: "1.5", md: "3" }}
                            bgGradient="linear(to-l, #BE72ED, #72A9F2)"
                            roundedTopLeft={"xl"}
                            roundedBottomRight={"xl"}
                        >
                            <Text
                                textColor={"white"}
                                fontSize={{ base: "10px", md: "14px" }}
                                fontWeight={"bold"}
                            >
                                Episode {episodeNumber}
                            </Text>
                        </Box>
                    </Box>

                    <Stack mt="4">
                        <Heading
                            noOfLines={2}
                            fontWeight={"semibold"}
                            size={{ base: "10px", md: "12px" }}
                        >
                            {title!.romaji}
                        </Heading>
                    </Stack>
                </CardBody>
            </Card></Link>
        ) )

};

export default RecentEpisodeCard;
