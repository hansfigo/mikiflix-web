import { Box, Text, Flex } from "@chakra-ui/react";

import { GiChemicalDrop } from "react-icons/gi"

function FloatingActionButton() {
    return (
        <Box
            position="fixed"
            bottom="6"
            right="4"
            borderRadius="xl"
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            color="white"
            boxShadow="md"
            display="flex"
            py='1'
            px='2'
            justifyContent="center"
            alignItems="center"
            cursor="pointer"
        >
            {/* FAB icon */}
            <Flex alignItems={'center'} gap={2}>
                <GiChemicalDrop />
                <Text fontSize={{base : 'xs', md: 'md'}}> Beta version</Text>
            </Flex>

        </Box>
    );
}

export default FloatingActionButton;
