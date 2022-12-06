import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Navbar from './component/Navbar.js';
import Fetchdata from './component/Fetchdata.js';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar heading="News Hub" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/general" element={<Fetchdata cat="general" />} />
          <Route path="/entertainment" element={<Fetchdata cat="entertainment" />} />
          <Route path="/health" element={<Fetchdata cat="health" />} />
          <Route path="/science" element={<Fetchdata cat="science" />} />
          <Route path="/sports" element={<Fetchdata cat="sports" />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
