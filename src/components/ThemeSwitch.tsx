import {
    useColorMode,
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

    const handleClick = () => {
        toggleColorMode();
        const styleEl = document.createElement('style');
        const cssText = document.createTextNode(
          'html * { transition: color, background-color 0.4s ease-out!important }',
        );
        styleEl.appendChild(cssText);
        document.head.appendChild(styleEl);
        setTimeout(() => {
          document.head.removeChild(styleEl);
        }, 300);
      };

    return (
        <Tooltip   placement='right-end' closeOnClick={false}>
            <Switch
                size={{base : 'lg', md:'lg'}}
                isChecked={isDark}
                onChange={handleClick}
                colorScheme="purple"
            />
        </Tooltip>
    );
}

export default DarkModeToggle

