/* eslint-disable no-console */
import './App.css';
import React from 'react';
import { Button } from 'antd';
import { getLoginQrCKey } from './api';
import { useDataBinding } from './hooks';

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
  const data = useDataBinding('123');
  return (
    <div>
      <h1>我修改了项目 vercel会实时更新么？</h1>
      <Button type="primary" onClick={fn}>
        按钮
      </Button>
      <h2>{data.value}</h2>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <input type="text" {...data} />
    </div>
  );
}

export default App;
