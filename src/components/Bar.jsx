/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import React, { useState } from 'react';
import Types from 'prop-types';

// 受控元素和非受控元素
function Bar(props) {
  const { a, b, c, d, e, f } = props;
  console.log(a, b, c, d, e, f);
  const [msg, setMsg] = useState('123');
  return (
    <div style={{ border: '1px solid red' }}>
      <h2>bar</h2>
      <input type="text" onInput={(event) => setMsg(event.nativeEvent.target.value)} />
      <h3>{msg}</h3>
    </div>
  );
}
// 组件.propTypes这个对象是对当前组件的props参数的一个验证和约束
// string number object array func element shape({a: b: c: })
Bar.propTypes = {
  // Bar存在一个props属性为a 该参数是必须要传递的且类型为数字
  a: Types.number.isRequired,
  b: Types.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  c: Types.array.isRequired,
  d: Types.func,
  e: Types.element,
  f: Types.shape({}),
};
// 对于组件的参数来说 不是规定必传参数 就必须在defaultProps中去指定默认值
Bar.defaultProps = {
  d: () => console.log('默认'),
  e: <h1>默认</h1>,
  f: {},
};

export default Bar;
