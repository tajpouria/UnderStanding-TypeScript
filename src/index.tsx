import React from 'react';
import ReactDOM from 'react-dom';

export default function App(): JSX.Element {
  const sum = (a: number, b: number): number => a + b;
  return <div>HEllo World{sum(4, 4)}</div>;
}

ReactDOM.render(<App />, document.getElementById('root'));
