import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './i18n/config'

// Loading component while translations are being loaded
const LoadingScreen = () => (
  <div className="h-screen w-full flex items-center justify-center bg-[#0F0826]">
    <div className="text-white text-xl">Loading...</div>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={<LoadingScreen />}>
      <App />
    </Suspense>
  </React.StrictMode>,
)
