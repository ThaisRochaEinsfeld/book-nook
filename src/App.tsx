import React from 'react';
import './App.css';
import Search from './pages/Search';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookDetail from "./pages/BookDetails"; 
import Profile from './pages/Profile';
import Shelf from './pages/Shelf';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route path="/book/:id" element={<BookDetail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/shelf" element={<Shelf />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
