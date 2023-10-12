/* eslint-disable no-param-reassign */
// 1.如何创建一个数据切片 （需要借助RTK的工具函数：createSlice）
import { createSlice } from '@reduxjs/toolkit';
// 提供数据的初始值、修改数据的逻辑、当前切片的名字

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '张三',
    age: 18,
    phone: '18998765432',
    gender: false,
  },
  reducers: {
    // 增加年龄
    increaseAge(state) {
      state.age += 1;
    },
  },
});
// eslint-disable-next-line no-console
console.log(userSlice);
export default userSlice.reducer;
