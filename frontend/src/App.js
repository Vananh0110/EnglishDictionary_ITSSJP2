import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchPage from './pages/search/SearchPage';
import ListTopics from './pages/topic/ListTopics';
import Detail from './pages/word/detail';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<SearchPage />} />
        <Route path="topics" element={<ListTopics />} />
        <Route path="words/detail" element={<Detail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
