import "./App.scss";
import { useState } from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom"




import Header from "./components/Header/Header";
import HomePage from "./Pages/HomePage";
import NextVideo from "./components/NextVideo/NextVideo";



function App() {

  return (
    <BrowserRouter >
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}  />
        <Route path="/videos/:videoId" element={<HomePage />}  />
      </Routes>
    
    
    </BrowserRouter>
   
    
    
  );
}

export default App;
