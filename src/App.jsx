/* eslint-disable no-console */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease, increaseByValue } from './store/slices/counter';
// 消费RTK（redux）中定义数据（useSelector）
function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{count}</h1>
      <button type="button" onClick={() => dispatch(increase())}>
        ++
      </button>
      <button type="button" onClick={() => dispatch(decrease())}>
        --
      </button>
      <button type="button" onClick={() => dispatch(increaseByValue(10))}>
        ++10
      </button>
    </div>
  );
}

export default App;
