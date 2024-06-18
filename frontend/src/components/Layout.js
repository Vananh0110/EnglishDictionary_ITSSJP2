import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Menu } from 'antd';
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
const AppLayout = ({ children, page = '1' }) => {
  const navigate = useNavigate();
  const handleChangePage = (value) => {
    switch (value.key) {
      case '1':
        navigate('/');
        break;
      case '2':
        navigate('/topics');
        break;
      default:
        console.log('chuc nang chua kha dung');
        break;
    }
  };
  return (
    <Layout className='h-[100vh] text-[#2E4051] relative'>
      <Header className='flex items-center bg-white border-b-2 fixed top-0 left-0 right-0 z-20'>
        <div className='container max-w-4xl mx-auto flex items-center'>
          <Menu
            mode='horizontal'
            defaultSelectedKeys={[page]}
            items={items}
            className='flex-1 text-lg'
            onClick={handleChangePage}
          />
          <div className='text-lg'>
            Provided by <b>たかチーム</b>
          </div>
        </div>
      </Header>
      <Content className='p-12 bg-white pt-20'>{children}</Content>
    </Layout>
  );
};
export default AppLayout;
