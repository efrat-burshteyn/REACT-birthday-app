import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {I18nContextProvider} from './context/I18nContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <I18nContextProvider>
       <App />
    </I18nContextProvider>
  </StrictMode>,
)
