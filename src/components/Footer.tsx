import { Flex, IconButton, Image, Link, Text } from "@chakra-ui/react";
import { ImGithub, ImLinkedin, ImInstagram } from "react-icons/im";
import logo from '/sayaka.png';

const MyFooter = () => {
    return (
        <Flex pos={'relative'} flexDir={'column'} w={'full'} alignItems={'center'} shadow="md">
            <Image visibility={{base: 'inherit', md: 'hidden', xl : 'hidden'}} pos={'absolute'} transform="scaleX(-1)" bottom={-28} left={'-160px'} right={0} h={'340px'} src={logo}></Image>
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