import React, { useState } from 'react';

const App = () => {
  const [text, setText] = useState('');

  const b1 = () => {
    setText(text.toUpperCase());
  };

  const b2 = () => {
    setText(text.toLowerCase());
  };

  const b3 = () => {
    navigator.clipboard.writeText(text);
  };

  const b4 = () => {
    setText(text + navigator.clipboard.readText());
  };

  const b5 = () => {
    setText('');
  };

  const b6 = () => {
    setText(text + text);
  };

  const b7 = () => {
    alert(`Character count: ${text.length}`);
  };

  const b8 = () => {
    const wordCount = text.trim().split(/\s+/).length;
    alert(`Word count: ${wordCount}`);
  };

  const b9 = () => {
    setText(text.replace(/\s+/g, ' '));
  };

  const b10 = () => {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    document.getElementById("mes").style.backgroundColor = randomColor;
  };

  return (
    <div id="body">
      <textarea id="mes" rows={40} cols={100} value={text} onChange={(e) => setText(e.target.value)}></textarea>
      <br></br>

      <button onClick={b1}>UpperCase</button>
      <button onClick={b2}>LowerCase</button>
      <button onClick={b3}>Copy</button>
      <button onClick={b4}>Pase</button>
      <button onClick={b5}>clear</button>
      <button onClick={b6}>duplicate</button>
      <button onClick={b7}>count char</button>
      <button onClick={b8}>count word</button>
      <button onClick={b9}>remove extra space</button>
      <button onClick={b10}>mode</button>
    </div>
  )
}

export default App;
