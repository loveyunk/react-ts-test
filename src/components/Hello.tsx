import React, { useState } from 'react';

export interface HelloProps {}

const defaultProps: Partial<HelloProps> = {};

const Hello: React.FC = props => {
  const [count, setState] = useState(0);

  const increment = () => {
    setState(count + 1);
  };

  const decrement = () => {
    setState(count - 1);
  };

  return (
    <div>
      <div>count: {count}</div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

Hello.defaultProps = defaultProps;

export default Hello;
