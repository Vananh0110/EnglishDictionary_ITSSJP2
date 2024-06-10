import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchPage from './pages/search/SearchPage';
import ListTopics from './pages/topic/pages/ListTopics';
import TopicWords from './pages/topic/pages/TopicWords';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<SearchPage />} />
        <Route path="topics" element={<ListTopics />} />
        <Route path="topics/:name" element={<TopicWords />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
