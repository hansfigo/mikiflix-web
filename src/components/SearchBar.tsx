import { SearchIcon } from "@chakra-ui/icons";
import { Text, Box, InputGroup, InputLeftElement, Input, Flex, Icon, Heading, Button, Modal, ModalOverlay, ModalContent, useDisclosure } from "@chakra-ui/react";
import { FaTools } from "react-icons/fa";





const SeachModal = () => {
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
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay
                bg="blackAlpha.300"
                backdropInvert="80%"
                backdropFilter="blur(2px) hue-rotate(90deg)"
            />
            <ModalContent>
                <SearchBarModal />
            </ModalContent>
        </Modal>
    );
}

export default SeachModal;


function ConstructionBox() {
    const { isOpen, onOpen, onClose } = useDisclosure();

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