import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'
import { ProyectsProvider } from './context/proyects/proyects'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProyectsProvider>
      <App />
    </ProyectsProvider>
  </React.StrictMode>
)
