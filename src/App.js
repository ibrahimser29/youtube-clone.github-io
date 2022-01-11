import React , {useState} from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Search from './Search';
import RecommendedVideos from './RecommendedVideos';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style.css';
export default function App() {

  return (
    <div className="app">
      <BrowserRouter>
      <Header />
      <div className="app_page">
        <Sidebar />
     
        <Routes>
        <Route path="search/:search" element={<Search  />} />
          <Route path="/" element={<RecommendedVideos />}>
          </Route>
        </Routes>
        </div>
      </BrowserRouter>
      {/** <Header />
      <div className="app_page">
        <Sidebar />
        <RecommendedVideos />
      </div>*/}
    </div>
  );
}
