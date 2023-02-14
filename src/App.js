import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import About from "./pages/About";
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Login from './pages/Login';


function App() {
  const [mousePosition, setMousePosition] = React.useState({
    x: 0,
    y: 0
  })

  useEffect(() => {
    const mouseMoveFun = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }
    window.addEventListener("mousemove", mouseMoveFun);
    return () => window.removeEventListener("mousemove", mouseMoveFun);
  }, [])

  return (
    <div >    
      <Router >
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/login' element={Login} />
        </Routes>
        <Footer />
      </Router>
      <div className='cursor' style={{
        // transform:`translate(${mousePosition.x}px,${mousePosition.y}px )`
        top: mousePosition.y + "px",
        left: mousePosition.x + "px",
      }} />
    </div>
  );
}

export default App;