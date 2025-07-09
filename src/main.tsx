import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

createRoot(document.getElementById('root')!, {
  onRecoverableError(error, errorInfo) {
    console.error('An error occurred: ', error, errorInfo);
  }
}).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
