import React from 'react';
import './App.css';
import Search from './pages/Search';
import dunaImage from './assets/duna.png';
import neuromancer from './assets/neuromancer.png';
import fundacao from './assets/fundacao.png';
import robo from './assets/robo.png';
import admiravel from './assets/admiravel.png';
import infancia from './assets/infancia.png';
import solaris from './assets/solaris.png';
import escuridao from './assets/escuridao.png';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookList from "./components/BookList";
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
