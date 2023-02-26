import {
    Image,
    Text,
    Card,
    CardBody,
    Stack,
    Heading,
    Divider,
    CardFooter,
    ButtonGroup,
    Button,
    AspectRatio,
    Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

type AnimeCardProps = {
    title: string;
    imageUrl: string;
    episodeNum: number;
    episodeId: string;
    animeId: string;
};

const AnimeCard = ({
    title,
    imageUrl,
    episodeNum,
    episodeId,
    animeId,
}: AnimeCardProps) => {
    return (
        <Link to={`/anime/${animeId}/${episodeId}`}>
            <Card
                shadow={"none"}
                rounded={"2xl"}
                p={0}
                minW={{base:'140px', lg : '220px'}}
                _dark = {{bg : 'gray-700'}}
            >   
                <CardBody p={0}>
                    <Box>
                        <AspectRatio position={"relative"} ratio={2 / 3}>
                            <Image
                                src={imageUrl}
                                alt={animeId}
                                borderRadius="2xl"
                            />
                        </AspectRatio>
                        <Box
                            position="absolute"
                            top="0"
                            left="0"
                            p={{base : '1.5', md : '4'}}
                            bgGradient="linear(to-l, #BE72ED, #72A9F2)"
                            roundedTopLeft={"xl"}
                            roundedBottomRight={"xl"}
                        >
                            <Text textColor={"white"} fontSize={["10px"]} fontWeight={"bold"}>
                                Episode {episodeNum}
                            </Text>
                        </Box>
                    </Box>

                    <Stack mt="4">
                        <Heading noOfLines={2} fontWeight={"semibold"} size={["10px"]}>
                            {title}
                        </Heading>
                    </Stack>
                </CardBody>
            </Card>
        </Link>
    );
};

export default AnimeCard;
