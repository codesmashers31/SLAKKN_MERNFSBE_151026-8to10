import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CounterProvider from './provider/CounterProvider'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <CounterProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </CounterProvider>,
)
