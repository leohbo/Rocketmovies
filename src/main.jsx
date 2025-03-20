import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Details} from './Pages/Details/';
import GlobalStyles from './styles/global';
import theme from "./styles/theme"
import { ThemeProvider } from 'styled-components';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
    <Details />
    </ThemeProvider>
  </StrictMode>,
)
