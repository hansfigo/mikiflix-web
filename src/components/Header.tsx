import { Text, Link, IconButton, Input, Image, InputGroup, InputLeftElement, Modal, ModalContent, ModalOverlay, Box, Button, Flex, Heading, Icon, useToast, Divider, CircularProgress } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { ImGithub, ImLinkedin, ImInstagram } from 'react-icons/im'
import { FaTools } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import DarkModeToggle from './ThemeSwitch';
import { Link as RLink } from 'react-router-dom'
import { useEffect } from 'react';
import helpers from './helpers/Header/helpers';
import '../App.css';

const MyHeader = () => {
    const toast = useToast();
    //All the functions I put in helpers, this going to make a little easier to read the code, bc I can just call the function instead of writing the whole function in here
    const {
        search,
        handleHamburger,
        handleClose,
        handleOpen,
        handleClickSearch,
        setsearchResult,
        setQuery,
        handleSearch,
        onOpen,
        onClose,
        loading,
        searchResult,
        isOpen,
        query,
        isClicked,
        height,
    } = helpers();


    // Dont use async function in useEffect its a bad practice, so I use a function inside the useEffect and call the async function inside the function
    useEffect(() => {
        search();
    }, [query])


    // I move this up bc I thinks its more easy to read and change function for arrow function, plus I consider to move all of this functions in another folder, I think this overhead the code

    const SearchBar = () => {
        return (
            <InputGroup onClick={onOpen} size="lg" color="gray.800">
                <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.400" />} />
                <Input type="text" placeholder="Search Anime..." />
            </InputGroup>
        );
    }

    const SearchBarModal = () => {
        return (
            <InputGroup onKeyDown={handleSearch} onClick={onOpen} size="lg" color="gray.800">
                <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.400" />} />
                <Input _dark={{ textColor: 'white' }} type="text" placeholder="Search Anime..." />
            </InputGroup>
        );
    }

    const  MyModal = () => {
        return (
            <Modal isOpen={isOpen} onClose={handleClose}>
                <ModalOverlay
                    bg="blackAlpha.300"
                    backdropInvert="80%"
                    backdropFilter="blur(2px) hue-rotate(90deg)"
                />
                <ModalContent bg="rgba(255, 255, 255, 0.8)" /* semi-transparent background color */
                    backdropFilter="blur(10px)" /* for Chrome */
                    _dark={{ bg: 'rgba(0, 0, 0, 0.8)' }} maxW={{ base: '300px', md: '540px' }} >
                    <SearchBarModal />
                    <Flex maxH="80vh" flexDir={'column'} gap={3} overflowY={'scroll'}>
                        {loading ?
                            <Flex justifyContent={'center'}>
                                <CircularProgress color={'blackAlpha.800'} />
                            </Flex> :
                            searchResult?.map((result) => (
                                <>
                                    <RLink onClick={onClose} to={`/anime/${result.id}`}>
                                        <Flex gap={3} px={4} py={2}>
                                            <Image src={result.image} alt={result.title?.romaji} height={100} width={'16'} fit={'cover'} />
                                            <Flex flexDir={'column'}>
                                                <Text fontSize={'md'} fontWeight={'semibold'} noOfLines={1}>{result.title?.romaji}</Text>
                                                <Text fontSize={'sm'} fontWeight={'medium'} noOfLines={1}>{result.releaseDate}</Text>
                                            </Flex>

                                        </Flex>
                                        <Divider></Divider>
                                    </RLink>
                                </>
                            ))}
                    </Flex>

                </ModalContent>
            </Modal>
        );
    }

    function ConstructionBox() {
        return (
            <Box p={{ base: 8, md: 8 }} borderRadius="md">
                <Flex flexDirection={'column'} gap={6}>
                    <Box>
                        <Flex alignItems="center" mb={4}>
                            <Icon as={FaTools} fontSize="2xl" mr={2} />
                            <Heading size={{ base: 'md', md: 'md' }}>Seacrh Feature Under Construction</Heading>
                        </Flex>
                        <Text fontSize="lg">
                            We are currently working hard to bring you this search feature. Stay tuned for
                            updates!
                        </Text>
                    </Box>
                    <Button onClick={onClose} >
                        Got It
                    </Button>
                </Flex>

            </Box>
        );
    };


    return (
        <>
            <Flex
                flexDir={{ base: 'column' }}
                shadow={'md'}
                bg="rgba(255, 255, 255, 0.8)" /* semi-transparent background color */
                backdropFilter="blur(10px)" /* for Chrome */
                _dark={{ bg: 'rgba(0, 0, 0, 0.6)' }}
                pos="fixed"
                zIndex={10}
                sx={{
                    "@-moz-document url-prefix()": {
                        backgroundColor: "rgba(255, 255, 255, 0.8)",
                        "-moz-backdrop-filter": "blur(10px)",
                    },
                }}
                w="100%"
                justifyContent="center"
                alignItems="center"
                py="4"
                gap={2}
                left={0}
                right={0}
            >
                <MyModal />
                <Flex alignItems="center" justifyContent="space-between" w="100%" px="4" maxW="1740px">
                    <Box flexGrow="2">
                        <Flex alignItems={'center'}>
                            <RLink to={'/'}>
                                <Heading
                                    display={{ base: 'flex', md: 'flex', lg: 'flex' }}
                                    fontSize={{ base: '2xl', md: '2xl', lg: '4xl' }}
                                    bgGradient="linear-gradient(135deg, #007AFF, #00BFFF)"
                                    bgClip="text"
                                    fontWeight={'semibold'}
                                    style={{ fontFamily: "Viga" }}
                                >
                                    Mikiflix
                                </Heading>
                            </RLink>

                        </Flex>

                    </Box>
                    <Box flexGrow="1" display={{ base: 'none', md: 'flex', lg: 'flex' }}>
                        <SearchBar />
                    </Box>
                    <Box flexGrow="1">
                        <Flex alignItems={'center'} justifyContent="end" pl={'4'} gap="2" display={{ base: 'flex', md: 'none', lg: 'none' }}>
                            {!isClicked ? <IconButton onClick={handleOpen} aria-label={'Search'}>
                                <AiOutlineSearch />
                            </IconButton> : <DarkModeToggle />}

                            <IconButton onClick={handleHamburger} aria-label={'Hamburger MEnu'}>
                                <GiHamburgerMenu />
                            </IconButton>
                        </Flex>
                        <Flex display={{ base: 'none', md: 'flex', lg: 'flex' }} justifyContent="end" alignItems={'center'} gap="2">
                            <Flex display={{ base: 'none', md: 'none', lg: 'flex' }} gap={2}>
                                <Button>Home</Button>
                                <Button onClick={() => toast({ status: 'warning', title: 'Genre Page Under Construction !!', description: 'We are currently working hard to bring you this page. Stay tune', duration: 2500, })}>Genre</Button>
                            </Flex>
                            <Flex display={{ base: 'none', md: 'flex', lg: 'flex' }} gap={2}>
                                <Link href='https://github.com/hansfigo' isExternal>
                                    <IconButton
                                        colorScheme="gray"
                                        aria-label="Call Sage"
                                        fontSize="24px"
                                        icon={<ImGithub />}
                                    />
                                </Link>
                                <Link href='https://linkedin.com/in/claudio-hans-figo-bbb872203/' isExternal>
                                    <IconButton
                                        colorScheme="gray"
                                        aria-label="Call Sage"
                                        fontSize="24px"
                                        icon={<ImLinkedin />}
                                    />
                                </Link>
                                <Link href='https://www.instagram.com/hans.figo/' isExternal>
                                    <IconButton
                                        colorScheme="gray"
                                        aria-label="Call Sage"
                                        fontSize="24px"
                                        icon={<ImInstagram />}
                                    />
                                </Link>
                            </Flex>
                            <DarkModeToggle />
                        </Flex>
                    </Box>

                </Flex>
                <Flex w={'full'} flexDir={'column'} pt={isClicked ? '3' : '0'} gap={3} style={{ height, transition: 'height 0.4s ease-in-out' }} overflow={'hidden'}>
                    <Button w={'full'} bgColor={'transparent'}>Home</Button>
                    <Button w={'full'} bgColor={'transparent'}>Genre</Button>
                    <Button w={'full'} bgColor={'transparent'}>Top Airing</Button>
                    <Button w={'full'} bgColor={'transparent'}>Recent Relase</Button>
                </Flex>
            </Flex>
        </>
    );
}

export default MyHeader;