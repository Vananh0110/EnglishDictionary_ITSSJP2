import React, { useState, useEffect } from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';
import Highlighter from 'react-highlight-words';

const SearchComponent = ({
  keyword = '',
  setWords,
  setIsDefault = () => {},
}) => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState(keyword);
  const [searchResults, setSearchResults] = useState([]);
  const [open, setOpen] = useState(false);

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
      const results = data.filter((wordEntry) =>
        wordEntry.word.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
      setOpen(true);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm, data]);

  const handleResultClick = (id) => {
    navigate(`/words/${id}/detail`);
    setSearchTerm('');
    setOpen(false);
  };

  return (
    <div className="my-8 container max-w-4xl mx-auto relative">
      <Input
        placeholder="Enter search keywords..."
        size="large"
        prefix={<SearchOutlined className="mr-1 text-[#2E4051] text-2xl" />}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onPressEnter={() => {
          setWords(searchResults);
          setOpen(false);
          setIsDefault(false);
        }}
        className="shadow-sm rounded-3xl bg-[#F1F4F7] p-4 text-xl border-[#CED9E3] border-[3px]"
      />
      {searchResults?.length > 0 && open && (
        <div className="w-full bg-white border-2 mt-2 rounded-3xl overflow-x-hidden max-h-80 overflow-y-auto absolute top-full z-50">
          {searchResults.map((item) => (
            <div
              key={item.id}
              className="p-4 border-b border-gray-300 cursor-pointer hover:bg-gray-100"
              onClick={() => handleResultClick(item.id)}
            >
              <Highlighter
                highlightClassName="YourHighlightClass"
                searchWords={[searchTerm]}
                autoEscape={true}
                textToHighlight={item.word}
                className="font-bold"
              />
              <p>{item.definition}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
