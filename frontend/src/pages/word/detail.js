import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { useParams, Link } from 'react-router-dom';
import axios from '../../api/axios';
import { Carousel, List } from 'antd';
import SearchComponent from '../../components/SearchComponent';
import SearchImg from '../../assets/search.png';
const { Meta } = List.Item;

const Detail = () => {
  const { id } = useParams();
  const [wordDetail, setWordDetail] = useState(null);

  useEffect(() => {
    const fetchWordDetail = async () => {
      try {
        const response = await axios.get(`/words/${id}`);
        setWordDetail(response.data);
      } catch (error) {
        console.error('Failed to fetch word', error);
      }
    };

    fetchWordDetail();
  }, [id]);

  console.log(wordDetail);

  if (!wordDetail) {
    return (
      <Layout>
        <div className="flex min-h-full justify-center items-center">
          <p>Loading...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="pb-12">
        <div className="mb-10">
          <SearchComponent className="relative" />
          <img
            src={SearchImg}
            alt="icon"
            className="absolute  w-72 h-auto right-8 top-3"
          />
        </div>
        <div className="min-h-full flex">
          <div className="border-[#CED9E3] border-[3px] rounded-3xl hover:shadow-md bg-white p-4 me-10 w-1/4">
            <h3 className="text-xl font-semibold mb-2 mt-3">Synonyms</h3>
            <List
              dataSource={wordDetail?.tdn}
              renderItem={(item) => (
                <List.Item className="hover:bg-slate-50">
                  <Meta
                    title={
                      item.wordId ? (
                        <Link to={`/words/${item.wordId}/detail`}>
                          <strong>{item.word}</strong>
                        </Link>
                      ) : (
                        <strong>{item.word}</strong>
                      )
                    }
                    description={item.definition}
                  />
                </List.Item>
              )}
            />
            <h3 className="text-xl font-semibold mb-2 mt-9">Antonyms</h3>
            <List
              dataSource={wordDetail?.ttn}
              renderItem={(item) => (
                <List.Item className="hover:bg-slate-50">
                  <Meta
                    title={
                      item.wordId ? (
                        <Link to={`/words/${item.wordId}/detail`}>
                          <strong>{item.word}</strong>
                        </Link>
                      ) : (
                        <strong>{item.word}</strong>
                      )
                    }
                    description={item.definition}
                  />
                </List.Item>
              )}
            />
          </div>
          <div className="border-[#CED9E3] border-[3px] rounded-3xl hover:shadow-md bg-white p-4 w-3/4">
            <p className="text-4xl mt-3 mb-4 pl-4 font-semibold">
              {wordDetail.word} - {wordDetail.pronunciation}
            </p>
            <div className="flex p-4">
              <div className="w-2/3 p-4">
                <p className="text-lg mt-4">
                  <strong>Definition:</strong> {wordDetail.definition}
                </p>
                <p className="text-lg mt-6">
                  <strong>Examples:</strong>
                </p>
                <ul>
                  {wordDetail.examples.map((example, index) => (
                    <li className="list-disc text-lg ml-8 mt-3" key={index}>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-1/3 mt-10">
                <Carousel autoplay arrows>
                  {wordDetail.image_link.map((link, index) => (
                    <div
                      key={index}
                      className="relative h-80 flex items-center justify-center"
                    >
                      <img
                        src={link}
                        alt={wordDetail.word}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Detail;
