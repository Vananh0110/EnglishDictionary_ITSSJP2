import React, { useState } from "react";
import SearchComponent from "../../components/SearchComponent";

import Layout from "../../components/Layout";
import defaultIcon from "../../assets/motaradef icon.png";
import noResult from "../../assets/noresult.png";
import SearchItem from "./SearchItem";

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [isDefault, setIsDefault] = useState(true);

  return (
    <Layout page='1'>
      <div className='container mx-auto'>
        <SearchComponent
          setWords={setSearchResults}
          setIsDefault={setIsDefault}
        />
        <div className='border-[#CED9E3] border-[3px] w-full max-w-4xl mx-auto h-[26rem] rounded-3xl my-8'>
          {searchResults?.length > 0 ? (
            <div className='p-4 w-full h-full flex flex-wrap items-center justify-around gap-y-8 overflow-auto'>
              {searchResults?.map((item) => (
                <SearchItem key={item.id} word={item} />
              ))}
            </div>
          ) : (
            <div className='p-4 text-center w-full h-full'>
              <img
                src={isDefault ? defaultIcon : noResult}
                alt='icon'
                className='mx-auto mt-8'
              />
              <div className='font-bold text-4xl mt-4'>
                {isDefault ? "Find some words" : "No data found"}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default SearchPage;
