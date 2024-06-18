import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';

import Layout from '../../../components/Layout';
import axios from '../../../api/axios';
import { Col, Pagination, Row, Tooltip } from 'antd';
import Word from '../components/Word';

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
        console.error('Error fetching data: ', error);
      });
  }, [params.name]);
  return (
    <Layout page={'2'}>
      <div className="container mx-auto flex flex-col items-center">
        <div className="w-full max-w-4xl mx-auto flex items-center">
          <Tooltip title="Back">
            <Link
              to={'/topics'}
              className="text-3xl cursor-pointer hover:scale-110 transition-all"
            >
              <ArrowLeftOutlined />
            </Link>
          </Tooltip>
          <div className="flex-1 text-center text-5xl font-bold">
            {params.name}
          </div>
        </div>

        <Row gutter={[16, 16]} className="flex-1 mt-16 max-w-6xl">
          {data &&
            data[0]?.words?.map(
              (word, index) =>
                index >= 9 * currentPage - 9 &&
                index < 9 * currentPage && (
                  <Col span={8} key={word.id}>
                    <div className="flex items-center justify-center p-2">
                      <Word word={word}></Word>
                    </div>
                  </Col>
                )
            )}
        </Row>
        <Pagination
          className="w-full text-end mt-4"
          defaultPageSize={9}
          total={data[0]?.words?.length || 1}
          current={currentPage}
          onChange={onChange}
        />
      </div>
    </Layout>
  );
}

export default TopicWords;
