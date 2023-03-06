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
    image: string;
    episodeNum: number;
    episodeId: string;
    id: string;
    cardType: 'episode' | 'detail';
};

const AnimeCard = ({
    title,
    image,
    episodeNum,
    episodeId,
    id,
    cardType,
}: AnimeCardProps) => {
    return (
        <Link to={cardType === 'episode' ? `/anime/${id}/${episodeId}` : `/anime/${id}`}>
            <Card
            transition={'ease-in-out 0.4s'}
                _hover={{ bgGradient: 'linear(to-l, #7928CA, #FF0080)', bgClip : 'text' }}
                shadow={"none"}
                rounded={"2xl"}
                p={0}
                minW={{ base: '140px', lg: '220px' }}
                _dark={{ bg: 'gray-700' }}
            >
                <CardBody p={0}>
                    <Box>
                        <AspectRatio position={"relative"} ratio={2 / 3}>
                            <Image
                                src={image}
                                alt={id}
                                borderRadius="2xl"
                            />
                        </AspectRatio>
                        <Box
                            display={cardType === 'episode' ? 'flex' : 'none'}
                            position="absolute"
                            top="0"
                            left="0"
                            p={{ base: '1.5', md: '3' }}
                            bgGradient="linear(to-l, #BE72ED, #72A9F2)"
                            roundedTopLeft={"xl"}
                            roundedBottomRight={"xl"}
                        >
                            <Text textColor={"white"} fontSize={{ base: '10px', md: '14px' }} fontWeight={"bold"}>
                                Episode {episodeNum}
                            </Text>
                        </Box>
                    </Box>

                    <Stack mt="4">
                        <Heading noOfLines={2} fontWeight={"semibold"} size={{ base: '10px', md: '12px' }}>
                            {title}
                        </Heading>
                    </Stack>
                </CardBody>
            </Card>
        </Link>
    );
};

export default AnimeCard;
