import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { App } from './App'
import './index.css'
import { ProyectsProvider } from './context/proyects/provider/proyects.provider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProyectsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProyectsProvider>
  </React.StrictMode>
)
