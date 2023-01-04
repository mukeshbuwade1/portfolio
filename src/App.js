import React from 'react';
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
import Component from './components/Component';

const name = "mukesh"
function App() {
  return (
    <div >
      <About />
      {/* <Router >
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path='/login' element={Login} />
        </Routes>
        <Footer />
      </Router>  */}
    </div>
  );
}

export default App;