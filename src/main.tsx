import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import { MantineProvider } from '@ui';
import "@mantine/core/styles.css";

import App from './App.tsx'

createRoot(document.getElementById('root')!, {
  onRecoverableError(error, errorInfo) {
    console.error('An error occurred: ', error, errorInfo);
  }
}).render(
  <StrictMode>
	  <MantineProvider>
		<BrowserRouter>
		  <App />
		</BrowserRouter>
	  </MantineProvider>
  </StrictMode>,
)
