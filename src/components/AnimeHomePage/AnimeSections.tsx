import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"
import { Flex, Box, Heading, IconButton, SimpleGrid, SkeletonText, Card, Skeleton } from "@chakra-ui/react"
import AnimeCard from "./AnimeCard"

interface Anime {
    animeTitle: string;
    animeImg: string;
    episodeNum: number
    episodeId: string
    animeId: string

}

interface AnimeSection {
    title: string,
    isLoading: boolean | undefined,
    section: Anime[],
}




const CardSkeleton: React.FC = () => {
    return (
        <Card shadow={'none'} rounded={'2xl'} maxW={'240px'} minWidth={'240px'} mx='auto'>
            <Skeleton rounded={'3xl'} height='300px'></Skeleton>
            <SkeletonText mt='4' rounded={'2xl'} noOfLines={2} spacing='4' skeletonHeight='8' />
        </Card>
    );
};

const AnimeSection: React.FC<AnimeSection> = ({ title, isLoading, section }: AnimeSection) => {

    return (<Box>
        <Flex mb={4} p={0} justifyContent={'space-between'} alignItems={'baseline'}>
            <Heading mb={4} fontSize={{ base: '2xl' }}>{title}</Heading>
            <Flex gap={3}>
                <IconButton aria-label="Left Scroll">
                    <ChevronLeftIcon h={6} w={6} />
                </IconButton>
                <IconButton aria-label="Right Scroll">
                    <ChevronRightIcon h={6} w={6} />
                </IconButton>
            </Flex>
        </Flex>
        {isLoading ? (
            <SimpleGrid gap={'24'} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                {[...Array(20)].map((_, i) => (
                    <CardSkeleton />
                ))}
            </SimpleGrid>
        ) : (
            <Flex gap={2} overflowX="scroll" sx={{
                scrollBehavior: 'smooth',
                '&::-webkit-scrollbar': { display: 'none' },
                '&::-moz-scrollbar': { display: 'none' },
                '-ms-overflow-style': 'none',  /* IE and Edge */
                'scrollbar-width': 'none',  /* Firefox */
            }}>
                <Flex gap={6} pos={'relative'}>
                    {section.map((anime, id) => (
                        <AnimeCard
                            key={id}
                            title={anime.animeTitle}
                            imageUrl={anime.animeImg}
                            episodeNum={anime.episodeNum}
                            episodeId={anime.episodeId}
                            animeId={anime.animeId} />
                    ))}
                </Flex>
            </Flex>

        )}
    </Box>)
}

export default AnimeSection;