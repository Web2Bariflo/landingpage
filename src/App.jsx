import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import HeroSection from './components/HeroSection.jsx'
import Features from './components/Features.jsx'
import Workflow from './components/Workflow.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <>
      <div className="min-h-screen">
        <Header />
        <main className="pt-16">
          <HeroSection />
          <Features />
          <Workflow />
          <Footer/>
        </main>

      </div>
    </>
  )
}

export default App
