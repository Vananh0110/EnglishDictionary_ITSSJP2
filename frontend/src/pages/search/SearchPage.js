import React, { useState } from 'react';
import SearchComponent from '../../components/SearchComponent';

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = searchTerm => {
    console.log("Tìm kiếm cho:", searchTerm);
    // Thêm logic tìm kiếm tại đây, ví dụ gọi API
    // Và cập nhật kết quả vào setSearchResults
  };

  return (
    <div className="App">
      <SearchComponent onSearch={handleSearch} />
      <div className="search-results">
        {/* Hiển thị kết quả tìm kiếm ở đây */}
        {searchResults.map((result, index) => (
          <div key={index}>{result}</div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
