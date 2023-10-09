/* eslint-disable no-console */
import React from 'react';
import { useToggle, useMousePosition, useDateBinding, useRequest } from './hooks';
import Bar from './components/Bar';
import Foo from './components/Foo';
import { getLoginQrCKey } from './api';

function App() {
  const { value: bool, toggle } = useToggle(false);
  const { x, y } = useMousePosition();
  const username = useDateBinding('shc');
  const password = useDateBinding('123');
  const {
    loading,
    data,
    run: execGetLoginQrCKey,
  } = useRequest(getLoginQrCKey, { manual: true, params: {} });

  return (
    <div>
      {loading ? <h3>请求中...</h3> : <h2>{data?.data.unikey}</h2>}
      <button type="button" onClick={execGetLoginQrCKey}>
        发送请求
      </button>
      <Bar />
      <Foo />
      <h1>
        鼠标此时的位置：{x},{y}
      </h1>
      <button onClick={toggle} type="button">
        {bool ? '开' : '关'}
      </button>
      <div>
        <h2>登陆</h2>
        <div>
          <label htmlFor="username">
            账号：
            <input type="text" id="username" {...username} />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            密码：
            <input type="password" id="password" {...password} />
          </label>
        </div>
        <button
          type="button"
          onClick={() => console.log({ username: username.value, password: password.value })}
        >
          提交
        </button>
      </div>
    </div>
  );
}

export default App;
