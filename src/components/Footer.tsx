import { Flex, IconButton, Link, Text } from "@chakra-ui/react";
import { ImGithub, ImLinkedin, ImInstagram } from "react-icons/im";

const MyFooter = () => {
    return (
        <Flex flexDir={'column'} w={'full'} alignItems={'center'} shadow="md">
            <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight={'light'} >Made by FigoMager 🌊</Text>
            <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight={'light'} >Powered by consumet API</Text>
            <Flex py={2} gap={2}>
                <Link href='https://github.com/hansfigo' isExternal>
                    <IconButton
                        size={'sm'}
                        colorScheme="gray"
                        aria-label="Call Sage"
                        fontSize="18px"
                        icon={<ImGithub />}
                    />
                </Link>
                <Link href='https://linkedin.com/in/claudio-hans-figo-bbb872203/' isExternal>
                    <IconButton
                        size={'sm'}
                        colorScheme="gray"
                        aria-label="Call Sage"
                        fontSize="18px"
                        icon={<ImLinkedin />}
                    />
                </Link>
                <Link href='https://www.instagram.com/hans.figo/' isExternal>
                    <IconButton
                        size={'sm'}
                        colorScheme="gray"
                        aria-label="Call Sage"
                        fontSize="18px"
                        icon={<ImInstagram />}
                    />
                </Link>
            </Flex>

        </Flex>
    )
}
export default MyFooter;