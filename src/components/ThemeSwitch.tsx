import { useState } from 'react';
import {
    useColorMode,
    Button,
    IconButton,
    useColorModeValue,
    Tooltip,
    Switch,
} from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

function DarkModeToggle() {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === 'dark';
    const toggleIcon = isDark ? <FaSun /> : <FaMoon />;
    const toggleLabel = isDark ? 'Switch to light mode' : 'Switch to dark mode';
    const toggleBg = useColorModeValue('gray.200', 'gray.700');

    return (
        <Tooltip   placement='right-end' closeOnClick={false}>
            <Switch
                size={{base : 'lg', md:'lg'}}
                isChecked={isDark}
                onChange={toggleColorMode}
                colorScheme="purple"
                transition="background-color 0.2s ease-in-out"
            />
        </Tooltip>
    );
}

export default DarkModeToggle

