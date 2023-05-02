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
import { Link } from "react-router-dom";
import { Anime } from "../../types/interface";

const AnimeCard = ({
    title,
    image,
    id,
}: Anime) => {

    return (
        <Link to={`/anime/${id}`}><Card
            transition={"ease-in-out 0.4s"}
            _hover={{
                bgGradient: "linear(to-l, #7928CA, #FF0080)",
                bgClip: "text",
            }}
            shadow={"none"}
            rounded={"2xl"}
            p={0}
            minW={{ base: "140px", lg: "220px" }}
            _dark={{ bg: "gray-700" }}
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
    )

};

export default AnimeCard;
