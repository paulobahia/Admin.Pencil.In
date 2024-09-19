import React from 'react'
import ReactDOM from 'react-dom/client'
import './globals.css'
import { ThemeProvider } from './components/theme-provider'
import { RouterProvider } from 'react-router-dom'
import { Routers } from './routes'
import { SpeedInsights } from '@vercel/speed-insights/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={Routers} />
      <SpeedInsights />
    </ThemeProvider>
  </React.StrictMode>,
)
