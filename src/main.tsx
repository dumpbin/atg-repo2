import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'react-loading-skeleton/dist/skeleton.css';
import  { SkeletonTheme } from 'react-loading-skeleton';





const newLocal = '#141414 ';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode >
    <style>
      @import
      url('https://fonts.googleapis.com/css2?family=Sora:wght@100..800&display=swap');
    </style>
    <SkeletonTheme baseColor={newLocal} highlightColor='#202020' >

    <App />
    </SkeletonTheme>
  </React.StrictMode>,
)
