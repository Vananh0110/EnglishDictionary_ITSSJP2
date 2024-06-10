import React from "react";
import { useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";
const { Header, Content } = Layout;
const items = [
  {
    key: 1,
    label: `Search`,
  },
  {
    key: 2,
    label: `Topics`,
  },
];
const AppLayout = ({ children, page = "1" }) => {
  const navigate = useNavigate();
  const handleChangePage = (value) => {
    switch (value.key) {
      case "1":
        navigate("/");
        break;
      case "2":
        navigate("/topics");
        break;
      default:
        console.log("chuc nang chua kha dung");
        break;
    }
  };
  return (
    <Layout className='h-[100vh]'>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
        className='mb-10'
      >
        <div className='demo-logo' />
        <Menu
          theme='dark'
          mode='horizontal'
          defaultSelectedKeys={[page]}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
          onClick={handleChangePage}
        />
      </Header>
      <Content
        style={{
          padding: "0 48px",
        }}
      >
        {children}
      </Content>
    </Layout>
  );
};
export default AppLayout;
