/* eslint-disable no-console */
import './App.css';
import React from 'react';
import { Button } from 'antd';
import { getLoginQrCKey } from './api';

function App() {
  const fn = () => {
    getLoginQrCKey()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>我修改了项目 vercel会实时更新么？</h1>
      <Button type="primary" onClick={fn}>
        按钮
      </Button>
    </div>
  );
}

export default App;
