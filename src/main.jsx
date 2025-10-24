import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NeatStarter from './NeatStarter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode >
    
    <NeatStarter/>
   
  </StrictMode>,
)

