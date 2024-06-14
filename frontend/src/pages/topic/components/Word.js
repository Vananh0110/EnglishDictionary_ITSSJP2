import { Card } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

function Word({ word }) {
  const navigate = useNavigate();
  return (
    <Card
      title={
        <div className='w-full text-center text-xl font-semibold'>
          {word.word}
        </div>
      }
      bordered
      className='w-full shadow-gray-400 shadow-md cursor-pointer hover:scale-105 transition-all '
      onClick={() => navigate(`/words/${word.id}/detail`)}
    >
      <img
        src={word.image_link[0]}
        alt=''
        className='w-full h-64 overflow-hidden'
      />
      <p className='text-pretty text-ellipsis line-clamp-2 w-full h-[44px]'>
        {word.definition}
      </p>
    </Card>
  );
}

export default Word;
