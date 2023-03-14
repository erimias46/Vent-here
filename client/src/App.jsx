import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './Pages/Home'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from './componets/Header';
import About from './Pages/About';
import Write from './Pages/Write';

function App() {
 

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/write" element={<Write />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
