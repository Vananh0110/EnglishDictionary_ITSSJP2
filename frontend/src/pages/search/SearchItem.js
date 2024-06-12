import React from "react";
import { useNavigate } from "react-router-dom";

function SearchItem({ word }) {
  const navigate = useNavigate();

  return (
    <div
      className='max-w-96 border-[#CED9E3] border-[3px] p-4 h-[128px] rounded-3xl cursor-pointer group hover:scale-105 w-[378px]'
      onClick={() => navigate(`/words/${word.id}/detail`)}
    >
      <div className='font-bold text-black text-xl group-hover:text-[#1CB0F6]'>
        {word.word}
      </div>
      <div className='text-ellipsis line-clamp-2 mt-2 text-lg'>
        {word.definition}
      </div>
    </div>
  );
}

export default SearchItem;
