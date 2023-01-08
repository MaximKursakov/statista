import { Switch } from '@mui/material';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { AspectScore } from "./scenes/AspectScore/AspectScore"
import { Benchmark } from './scenes/Benchmark/Benchmark';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AspectScore/>} />
          <Route path="/Benchmark" element={<Benchmark/>} />
        </Routes>
      </BrowserRouter>
      {/* <AspectScore></AspectScore> */}
    </div>
  );
}

export default App;
