import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Projects from './pages/projects'
import About from './pages/aboutme'
import Contact from './pages/contact'
import Resume from './pages/resume'
import Footer from './components/footer'

function App() {

  return (
    <>
    <Navbar />
    <About />
    <Projects />
    <Contact />
    <Resume />
    <Footer />
    </>
  )
}

export default App
