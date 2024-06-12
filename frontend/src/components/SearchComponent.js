import React, { useState, useEffect } from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';

const SearchComponent = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get('/words')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);
  useEffect(() => {
    if (searchTerm) {
      const results = data
        .filter((wordEntry) =>
          wordEntry.word.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .slice(0, 10);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm, data]);

  const handleResultClick = (id) => {
    navigate(`/words/${id}/detail`);
    setSearchTerm('');
  };

  return (
    <div className="mt-10 mx-auto w-full max-w-3xl p-4">
      <Input
        placeholder="Enter search keywords..."
        size="large"
        prefix={<SearchOutlined className="text-gray-400" />}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="shadow-lg rounded-lg"
      />
      <div className="mt-4">
        {searchResults.map((item) => (
          <div
            key={item.id}
            className="p-2 border-b border-gray-300 cursor-pointer hover:bg-gray-100"
            onClick={() => handleResultClick(item.id)}
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
