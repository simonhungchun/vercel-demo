import React, { useState } from 'react';
// 受控元素和非受控元素
function Foo() {
  const [msg, setMsg] = useState('123');
  return (
    <div style={{ border: '1px solid teal', marginTop: '2px' }}>
      <h2>Foo</h2>
      <input type="text" value={msg} onInput={(e) => setMsg(e.nativeEvent.target.value)} />
      <h3>{msg}</h3>
    </div>
  );
}

export default Foo;
