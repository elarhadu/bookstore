import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Books from './Pages/Books';
import Categories from './Pages/Categories';
import './App.css';

export default function App() {
  return (
    <Router>

      <Navigation />
      <h1>BOOKSTORE📖</h1>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>

    </Router>
  );
}
