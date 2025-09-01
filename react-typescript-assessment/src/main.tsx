import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import './scss/style.scss'
import { MyProvider } from './context/MyContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MyProvider>
      <App />
    </MyProvider>
  </StrictMode>,
)
