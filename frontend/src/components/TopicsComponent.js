import React, { useState, useEffect } from 'react';
import axios from '../api/axios';
import { Divider, List, Typography } from 'antd';


const TopicsComponent = () => {
    const [data, setData] = useState([]);


    useEffect(() => {
        axios.get('/topic')
          .then(response => {
            setData(response.data);
          })
          .catch(error => {
            console.error('Error fetching data: ', error);
          });
      }, []);

    return (
      <>
          <Divider orientation="left">Topics List</Divider>
          <List
              size="large"
              // header={<div>Header</div>}
              // footer={<div>Footer</div>}
              bordered
              dataSource={data}
              renderItem={(item) => (
                  <List.Item key={item.id}>
                      {item.topic_name}
                  </List.Item>
              )}
          />
      </>
  );
};

export default TopicsComponent;
