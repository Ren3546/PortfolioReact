import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/header';
import Portfolio from './components/portfolio';
import About from './components/aboutme';
import Contact from './components/contact';
import Resume from './components/resume';
import Footer from './components/footer';

function App() {

  return (
    <>
    <div className = "min-h-full">
      <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
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
