import React, { useState, useEffect } from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import axios from '../api/axios';
import { useNavigate } from "react-router-dom";

const SearchComponent = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [enterTerm, setEnterTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [enterResults, setEnterResults] = useState([]);

  // Lấy dữ liệu một lần khi component được tải
  useEffect(() => {
    axios.get('/words')
      .then(response => {
        setData(response.data);  // Lưu trữ dữ liệu toàn bộ từ server
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  // Lọc dữ liệu dựa trên từ khoá tìm kiếm chỉ trong trường 'word'
  useEffect(() => {
    if (searchTerm) {
      const results = data.filter(wordEntry =>
        wordEntry.word.toLowerCase().includes(searchTerm.toLowerCase())
      ).slice(0, 10);  // Chỉ lấy 10 kết quả đầu tiên
      setSearchResults(results);
      setEnterResults([]);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm, data]);

  useEffect(() => {
    if (enterTerm) {
      const results = data.filter(wordEntry =>
        wordEntry.word.toLowerCase().includes(searchTerm.toLowerCase())
      ).slice(0, 10);  // Chỉ lấy 10 kết quả đầu tiên
      setEnterResults(results);
      setSearchResults([]);
    } else {
      setEnterResults([]);
    }
  }, [enterTerm, data]);

  return (
    <div>
      <div className="mt-10 mx-auto w-full max-w-3xl p-4">
        <Input
          placeholder="Enter search keywords..."
          size="large"
          prefix={<SearchOutlined className="text-gray-400" />}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => setEnterTerm(e.target.value)}
          className="shadow-lg rounded-lg"
        />
        <div className="mt-4">
          {searchResults.map((item) => (
            <div key={item.id} className="p-2 border-b border-gray-300">
              <p className="font-bold">{item.word}</p>
              <p>{item.definition}</p>
            </div>
          ))}
        </div>
        

      </div>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-4/5 mx-auto">
        {enterResults.map((item) => (
          <div key={item.id} className="p-4 border rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-200"
            onClick={() => navigate(`/words/${item.id}/detail`)}
          >
            <p className="font-bold">{item.word}</p>
            <p>{item.definition}</p>
          </div>
        ))}
      </div>
    </div>    
  );
};

export default SearchComponent;
