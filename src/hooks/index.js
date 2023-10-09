import { useState, useEffect } from 'react';

export const useToggle = (initalValue) => {
  const [value, changeValue] = useState(initalValue);
  const toggle = () => changeValue((v) => !v);
  return { value, toggle };
};

export const useMousePosition = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  // todo: 添加节流的功能
  const mousemoveHandler = (e) => {
    setX(e.x);
    setY(e.y);
  };
  useEffect(() => {
    window.addEventListener('mousemove', mousemoveHandler);
    return () => window.removeEventListener('mousemove', mousemoveHandler);
  }, []);
  return { x, y };
};

export const useDateBinding = (initalValue) => {
  const [value, setValue] = useState(initalValue);
  const onInput = (e) => setValue(e.target.value);
  return { value, onInput };
};

// fetch可不可以集成在useRequest中？
export const useRequest = (service, option = {}) => {
  const defaultOption = {
    manual: false,
    params: {},
  };
  const configure = Object.assign(defaultOption, option);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [data, setData] = useState();
  const run = () => {
    service(configure.params)
      .then((res) => setData(res))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };
  if (configure.manual) {
    return { data, loading, error, run };
  }
  useEffect(run, []);
  return { data, loading, error, run };
};

// hook本质是以use开头的函数
// react内置hook：useState、useEffect、useContext、useRef、useImperativeHandle、useReducer
// 自定义hook: 自己创建以use开头为函数名的函数（定义函数）
// hook的特性：可复用、功能单一、hook函数内部可以继续调用其它hook函数
// 自定义hook的意义：使用基础的hook函数组合封装出相对复杂的hook逻辑
// useToggle
// 1.需要提供表示boolean值(初始值由执行者提供)
// 2.并且提供直接取反切换的方法
// 3.对应的UI视图重新渲染
// 请定义一个自定义hook可以实时获取鼠标在页面上的坐标 useMousePosition
// 使用鼠标移动事件 (window)
// 返回值是鼠标的坐标位置 [x, y], {x, y}
