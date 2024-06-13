import { Card } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

function Topic({ topic }) {
  const navigate = useNavigate();

  return (
    <Card
      className='text-3xl w-full font-semibold cursor-pointer shadow-gray-400 shadow-md  hover:scale-105 transition-all'
      onClick={() => navigate(`/topics/${topic.topic_name}`)}
      title={<div className="text-center text-xl">{topic.topic_name}</div>}
    >
      <img src={topic.image} alt='' className="w-full h-64 overflow-hidden"/>
    </Card>
  );
}

export default Topic;
