import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import ComparePage from './pages/ComparePage';
import CompareResultPage from './pages/CompareResult';
import NewsPage from './pages/NewsPage';
import CountryDetailPage from './pages/CountryDetailPage';

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/compare" element={<ComparePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/country/:name" element={<CountryDetailPage />} />
        <Route path="/compare/result" element={<CompareResultPage />} />  
      </Routes>
    </div>
  );
};

export default App;
