import '../App.css';
import { Text, Link, IconButton, Input, InputGroup, InputLeftElement, Modal, ModalContent, ModalOverlay, useDisclosure, Box, Button, Flex, Heading, Icon, Avatar } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Logo from '../../public/logo.png'
import { ImGithub, ImLinkedin, ImInstagram } from 'react-icons/im'
import { FaTools } from "react-icons/fa";
import DarkModeToggle from './ThemeSwitch';
import avatar from '../../public/figomager.png'


function MyHeader() {
    const { isOpen, onOpen, onClose } = useDisclosure();

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
            <Box p={8} borderRadius="md">
                <Flex alignItems="center" mb={4}>
                    <Icon as={FaTools} fontSize="2xl" mr={2} />
                    <Heading size="md">Feature Under Construction</Heading>
                </Flex>
                <Text fontSize="lg">
                    We are currently working hard to bring you this feature. Stay tuned for
                    updates!
                </Text>
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
            <Avatar src={avatar} size="lg" name="Figma" />
        );
    }

    return (
        <Flex
            shadow={'md'}
            bg="whiteAlpha.800"
            _dark={{ bg: 'blackAlpha.600' }}
            backdropFilter="blur(10px)"
            pos="fixed"
            zIndex={10}
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
                        <MyAvatar />
                        <Heading
                            display={['none', 'none', 'flex', 'flex']}
                            fontSize={['4xl', '4xl', '4xl', '4xl', '6xl']}
                            bgGradient="linear(to-l, #7928CA, #FF0080)"
                            bgClip="text"
                            fontWeight={'semibold'}
                        >
                            AnimeDB
                        </Heading>
                    </Flex>

                </Box>
                <Box flexGrow="1" display={['none', 'none', 'flex', 'flex']}>
                        <SearchBar />
                </Box>
                <Box flexGrow="1">
                    <Flex justifyContent="end" pl={'4'} gap="2" display={['flex', 'flex', 'flex', 'none']}>
                        <DarkModeToggle />
                    </Flex>
                    <Flex display={['none', 'none', 'none', 'flex']} justifyContent="end" alignItems={'center'} gap="2">
                        <Button>Home</Button>
                        <Button>Genre</Button>
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
                        <DarkModeToggle />
                    </Flex>
                </Box>
            </Flex>
        </Flex>
    );
}


export default MyHeader;