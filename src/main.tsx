import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react'
import customTheme from './theme'
import "@fontsource/noto-color-emoji";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
    <CSSReset/>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
