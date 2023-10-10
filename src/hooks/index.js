/* eslint-disable no-console */
import { useState, useEffect, useRef } from 'react';

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

// 1. useMount: 在组件首次渲染时，执行方法。
/**
 * @param {function} callback 组件挂载时执行的函数
 *  */
export const useMount = (callback) => {
  if (typeof callback !== 'function') throw new Error('callback必须是函数');
  useEffect(() => {
    callback();
  }, []);
};
// 2. useUnmount: 在组件卸载时，执行方法。
export const useUnmount = (callback) => {
  if (typeof callback !== 'function') throw new Error('callback必须是函数');
  useEffect(() => callback, []);
};
// 3. useUpdate: 强制组件重新渲染的 hook。
export const useUpdate = () => {
  const [, setState] = useState(0);
  return () => setState(Math.random());
};
// 4. useSize: 一个用于监听 dom 节点尺寸变化的 Hook。
/**
 * @param {object} ref 页面中HTML元素的引用
 * @param {HTMLElement} ref.current 页面中HTML元素
 */
export const useSize = (ref) => {
  // 如果ref传递的不是dom节点
  const [w, setW] = useState(0);
  const [h, setH] = useState(0);
  useEffect(() => {
    if (!(ref.current instanceof HTMLElement)) {
      throw new Error('ref参数必须为HTML元素');
    }
    const observer = new ResizeObserver((event) => {
      const { width, height } = event[0].contentRect;
      setW(width);
      setH(height);
    });
    observer.observe(ref.current);
    return () => observer.unobserve(ref.current);
  }, []);
  return { width: w, height: h };
};
// 5. useTitle: 用于设置页面标题的 Hook。
export const useTitle = (title) => {
  document.title = title;
};
// 6. useClickAway: 优雅的管理目标元素外点击事件的 Hook。
export const useClickAway = (callback, ref) => {
  const fn = (event) => {
    if (event.target !== ref.current) {
      callback();
    }
  };
  document.addEventListener('click', fn);
  useEffect(() => () => document.removeEventListener('click', fn), []);
};
// 7.  useInterval: 一个可以处理 setInterval 的 Hook。
export const useInterval = (callback, interval = 1000) => {
  if (typeof callback !== 'function') throw new Error('callback必须是函数');
  const timerRef = useRef(null);
  timerRef.current = setInterval(() => callback, interval);
  useUnmount(() => clearInterval(timerRef.current));
};
