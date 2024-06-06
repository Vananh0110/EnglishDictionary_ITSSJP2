import React from "react";
import TopicsComponent from "../../components/TopicsComponent";
import Layout from "../../components/Layout";

// const ListTopics = () => {
//   return <Layout page={"2"}>List Topics</Layout>;
// };

const ListTopics = () => {
  return (
    <Layout page={"2"}>
      <TopicsComponent />
    </Layout>
  );
};

export default ListTopics;
