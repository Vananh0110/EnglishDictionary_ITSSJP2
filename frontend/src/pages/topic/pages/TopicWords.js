import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Layout from "../../../components/Layout";
import axios from "../../../api/axios";

function TopicWords() {
  const [data, setData] = useState([]);
  const params = useParams();

  useEffect(() => {
    axios
      .get(`/topic?topic_name=${params.name}&_embed=words`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [params.name]);

  console.log(data);
  return (
    <Layout page={"2"}>
      <div className='container mx-auto'>
        <div className='w-full text-center text-5xl font-bold'>
          {params.name}
        </div>
      </div>
    </Layout>
  );
}

export default TopicWords;
