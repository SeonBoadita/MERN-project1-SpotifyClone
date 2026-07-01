import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { MusicProvider } from './context/MusicContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import { Provider } from 'react-redux'
import store from './store/store.js'

gsap.registerPlugin(useGSAP, ScrollTrigger);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Provider store={store}>
          <MusicProvider>
            <App />
          </MusicProvider>
        </Provider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
