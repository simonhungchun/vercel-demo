import React, { useState } from 'react';
// 受控元素和非受控元素
function Bar() {
  const [msg, setMsg] = useState('123');
  return (
    <div style={{ border: '1px solid red' }}>
      <h2>bar</h2>
      <input type="text" onInput={(e) => setMsg(e.nativeEvent.target.value)} />
      <h3>{msg}</h3>
    </div>
  );
}

export default Bar;
