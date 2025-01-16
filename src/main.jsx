import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Main from './main/Main'
import Header from './Header/Header'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Main />
  </StrictMode>,
)
