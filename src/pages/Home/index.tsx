import React from 'react';
import { Result } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

const Home: React.FunctionComponent = () => {
  return (
    <Result
      icon={<ClockCircleOutlined />}
      title="正在开发中"
      subTitle="弱中心化的群体知识管理方式"
    />
  );
};

export default Home;
