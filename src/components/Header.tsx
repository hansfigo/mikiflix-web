import '../App.css';
import { Text, Link, IconButton, Input, InputGroup, InputLeftElement, Modal, ModalContent, ModalOverlay, useDisclosure, Box, Button, Flex, Heading, Icon, Avatar, useToast } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Logo from '../../public/logo.png'
import { ImGithub, ImLinkedin, ImInstagram } from 'react-icons/im'
import { FaTools } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import DarkModeToggle from './ThemeSwitch';
import { Link as RLink } from 'react-router-dom'
import avatar from '/figomager.png'
import { useRef, useState } from 'react';


function MyHeader() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();
    const toastIdRef = useRef<number | undefined>();
    const [height, setHeight] = useState('0px');
    const [isClicked, setClicked] = useState<boolean>(false);


    function SearchBar() {
        return (
            <InputGroup onClick={onOpen} size="lg" color="gray.800">
                <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.400" />} />
                <Input type="text" placeholder="Search Anime..." />
            </InputGroup>
        );
    }

    function SearchBarModal() {
        return (
            <InputGroup onClick={onOpen} size="lg" color="gray.800">
                <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.400" />} />
                <Input type="text" placeholder="Search Anime..." />
            </InputGroup>
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

    function MyModal() {
        return (
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay
                    bg="blackAlpha.300"
                    backdropInvert="80%"
                    backdropFilter="blur(2px) hue-rotate(90deg)"
                />
                <ModalContent>
                    <ConstructionBox />
                </ModalContent>
            </Modal>
        );
    }

    function MyAvatar() {
        return (
            <RLink to={'/'}>
                <Avatar src={avatar} size={{ base: 'md', md: 'lg' }} name="Figma" />
            </RLink>
        );
    }

    function handleHamburger() {
        console.log(isClicked)
        setClicked(isClicked ? false : true);
        setHeight(height == '0px' ? '300px' : '0px')
    }



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
                <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    w="100%"
                    px="4"
                    maxW="1740px"
                >
                    <Box flexGrow="2">
                        <Flex alignItems={'center'}>
                            {/* <Box bgSize={'12px'}>
                                <MyAvatar />
                            </Box> */}
                            <RLink to={'/'}>
                                <Heading
                                    display={{ base: 'flex', md: 'flex', lg: 'flex' }}
                                    fontSize={{ base: '2xl', md: '2xl', lg: '4xl' }}
                                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                                    bgClip="text"
                                    fontWeight={'semibold'}
                                >
                                    AnimeDB
                                </Heading>
                            </RLink>

                        </Flex>

                    </Box>
                    <Box flexGrow="1" display={{ base: 'none', md: 'flex', lg: 'flex' }}>
                        <SearchBar />
                    </Box>
                    <Box flexGrow="1">
                        <Flex alignItems={'center'} justifyContent="end" pl={'4'} gap="2" display={{ base: 'flex', md: 'none', lg: 'none' }}>
                            {!isClicked ? <IconButton onClick={onOpen} aria-label={'Search'}>
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