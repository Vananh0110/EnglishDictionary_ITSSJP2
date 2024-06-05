import React, { useState } from 'react';
import { Input } from 'antd';

const SearchComponent = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = value => {
    onSearch(value); // Thực hiện tìm kiếm
    setSearchTerm(value);
  };

  return (
    <div className="p-4">
      <Input.Search
        placeholder="Nhập từ khoá tìm kiếm..."
        enterButton="Tìm kiếm"
        size="large"
        onSearch={handleSearch}
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchComponent;
