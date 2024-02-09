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
    <div className = "min-h-full">
      <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes> 
          <Footer />
      </Router>
      </div>
    </>
  )
}

export default App
