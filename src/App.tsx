import { Switch } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Burger } from './components/Burger';
import NavBar from './components/NavBar';
import { AspectScore } from "./scenes/AspectScore/AspectScore"
import { Benchmark } from './scenes/Benchmark/Benchmark';

const App =() => {
  const [menuOpen, setMenuOpen] = useState(true)
  const windowSize = useRef(window.innerWidth);

  console.log(windowSize.current)
  useEffect(() => {
    if(windowSize.current <= 1250) {
      setMenuOpen(false)
    } else setMenuOpen(true)
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar menuOpen={menuOpen}></NavBar>
      <Burger menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Burger>
        <Routes>
          <Route path="/" element={<AspectScore/>} />
          <Route path="/Home" element={<AspectScore/>} />
          <Route path="/Benchmark" element={<Benchmark/>} />
        </Routes>
      </BrowserRouter>
      {/* <AspectScore></AspectScore> */}
    </div>
  );
}

export default App;
