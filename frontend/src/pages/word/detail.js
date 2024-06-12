import React, { useState } from 'react';
import SearchComponent from '../../components/SearchComponent';

import Layout from '../../components/Layout'

const Detail = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = searchTerm => {
    console.log("Tìm kiếm cho:", searchTerm);
  };

  return (
    <Layout>
    <div className="container mx-auto">
      <SearchComponent onSearch={handleSearch} />
      <div className="search-results">
        {/* Hiển thị kết quả tìm kiếm ở đây */}
        {searchResults.map((result, index) => (
          <div key={index}>{result}</div>
        ))}
      </div>
    </div>
    </Layout>
  );
};

export default Detail;
