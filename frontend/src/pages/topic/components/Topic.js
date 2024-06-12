import React from "react";
import { useNavigate } from "react-router-dom";

function Topic({ topic }) {
  const navigate = useNavigate();

  return (
    <div
      className='text-3xl font-semibold bg-[#D9D9D9] px-16 pb-1 cursor-pointer rounded-full shadow-gray-400 shadow-md hover:bg-blue-400 hover:text-white hover:scale-110 transition-all'
      onClick={() => navigate(`/topics/${topic.topic_name}`)}
    >
      {topic.topic_name}
    </div>
  );
}

export default Topic;
