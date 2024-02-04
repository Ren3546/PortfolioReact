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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes> 
        </div>
      </Router>
    </>
  )
}

export default App
