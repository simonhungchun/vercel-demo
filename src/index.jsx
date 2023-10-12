import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';
// import './store/slices/user';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
// redux 全局的数据存储
// react-redux 桥接作用
// redux(RTK) ----> react-redux  ----> react (复杂且繁琐)
// @reduxjs/toolkit（RTK）（简化复杂的使用流程！）

// 全局数据 <-> 局部数据 （函数的作用域）
// 局部数据： 定义在某个组件内部，组件外部一般无法访问和使用（自产（产生）自消（消费））
// 全局数据： 定义在某个公共且唯一的存储数据的容器中，理论上来说可以供任何组件访问和使用
// 所有数据都可以存储在全局数据中！（不考虑代码逻辑是否合理）

// import "url" (只执行js文件但不倒入任何模块)
// import module from "url" （执行js并导入默认模块【export default {}】）
// import {a} from "url" （执行js并导入具名导出的模块哦 【export let a = []】）

// 1.安装所需要的js库（@reduxjs/toolkit、react-redux）
