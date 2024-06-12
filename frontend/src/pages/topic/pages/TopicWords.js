import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Layout from "../../../components/Layout";
import axios from "../../../api/axios";
import { Col, Pagination, Row } from "antd";
import Word from "../components/Word";

function TopicWords() {
  const [data, setData] = useState([]);
  const params = useParams();
  const [currentPage, setCurrentPage] = useState(1);

  const onChange = (page) => {
    setCurrentPage(page);
  };

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

  return (
    <Layout page={"2"}>
      <div className='container mx-auto '>
        <div className='w-full text-center text-5xl font-bold'>
          {params.name}
        </div>

        <Row gutter={[16, 16]} className='min-h-80'>
          {data &&
            data[0]?.words?.map(
              (word, index) =>
                index >= 9 * currentPage - 9 &&
                index < 9 * currentPage && (
                  <Col span={8} key={word.id}>
                    <div className='flex items-center justify-center p-2 mt-20'>
                      <Word word={word}></Word>
                    </div>
                  </Col>
                )
            )}
        </Row>
        <Pagination
          className='w-full text-end mt-4'
          defaultPageSize={9}
          total={data?.length || 1}
          current={currentPage}
          onChange={onChange}
        />
      </div>
    </Layout>
  );
}

export default TopicWords;
