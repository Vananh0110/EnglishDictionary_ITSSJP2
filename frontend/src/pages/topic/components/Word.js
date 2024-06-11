import { Card } from "antd";
import React from "react";

function Word({ word }) {
  return (
    <Card
      title={
        <div className='w-full text-center text-lg font-semibold text-blue-600'>
          {word.word}
        </div>
      }
      bordered={false}
      className='group w-3/5 mx-auto cursor-pointer hover:scale-110 transition-all '
    >
      <p className='text-pretty text-ellipsis line-clamp-2 w-full group-hover:line-clamp-none'>
        {word.definition}
      </p>
    </Card>
  );
}

export default Word;
