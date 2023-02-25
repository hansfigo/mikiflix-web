import Header from './components/Header'
import './App.css'
import AnimeHomePage from './pages/AnimeHomePage'
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import AnimePlayer from './pages/AnimePlayerPage'
import { Text, Grid, GridItem, Box, Container, Heading, Flex, InputGroup, Input, InputLeftElement, useDisclosure, Button, Modal, ModalContent, ModalOverlay, IconButton } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { ImGithub, ImLinkedin, ImInstagram } from 'react-icons/im'
import MyHeader from './components/Header';


function App() {

  return (
    <Container pos={'relative'} maxW={['', '', '1740px']}>
      <Router>
        <MyHeader />
        <Box pt={'28'}>
          <Routes>
            <Route path="/" element={<AnimeHomePage />} />
            <Route path="/anime/:animeId/:episodeId" element={<AnimePlayer />}></Route>
          </Routes>
        </Box>
      </Router>
    </Container>
  )
}


export default App
