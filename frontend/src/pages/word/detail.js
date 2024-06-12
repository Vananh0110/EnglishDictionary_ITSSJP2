import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { useParams } from 'react-router-dom';
import axios from '../../api/axios';
import { Input } from 'antd';
import SearchComponent from '../../components/SearchComponent';
const { Search } = Input;

const Detail = () => {
  const { id } = useParams();
  console.log(id);
  const [wordDetail, setWordDetail] = useState(null);
  const [words, setWords] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = searchTerm => {
    console.log("Tìm kiếm cho:", searchTerm);
  };

  useEffect(() => {
    const fetchWordDetail = async () => {
      try {
        const response = await axios.get(`/words/${id}`);
        console.log(response.data);
        setWordDetail(response.data);
      } catch (error) {
        console.error('Failed to fetch word', error);
      }
    };

    fetchWordDetail();
  }, [id]);

  useEffect(() => {
    const fetchWords = async () => {
      try {
        const response = await axios.get('/words');
        console.log(response.data);
        setWords(response.data);
      } catch (error) {
        console.error('Failed to fetch words:', error);
      }
    };
    fetchWords();
  }, []);

  if (!wordDetail) {
    return (
      <Layout>
        <div className="flex min-h-full justify-center items-center">
          <p>Loading...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="mb-10">
        <SearchComponent onSearch={handleSearch} />
      <div className="search-results">
        {/* Hiển thị kết quả tìm kiếm ở đây */}
        {searchResults.map((result, index) => (
          <div key={index}>{result}</div>
        ))}
      </div>
      </div>
      <div className="min-h-full flex">
        <div className="border rounded-2xl hover:shadow-md bg-white p-4 me-10 w-1/4">
          <h2 className="text-xl mb-4">Related Words</h2>
        </div>
        <div className="border rounded-2xl hover:shadow-md bg-white p-4 w-3/4">
          <p className="text-4xl mt-3 mb-4">
            {wordDetail.word} - /pronunciation/
          </p>
          <div className="flex">
            <div className="w-2/3 p-4">
              <p className="text-lg mt-4">
                <strong>Definition:</strong> {wordDetail.definition}
              </p>
              <p className="text-lg mt-3">
                <strong>Usage:</strong> {wordDetail.usage}
              </p>
              <p className="text-lg mt-3">
                <strong>Example:</strong> {wordDetail.example}
              </p>
            </div>
            <div className="w-1/3 p-4">
              <img
                src={wordDetail.image_link}
                alt={wordDetail.word}
                className="max-w-full h-auto rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Detail;
