import React from 'react'

interface Increse{
    count: number;
    inc: (num: number) => void;
}

const Counter: React.FC<Increse> = ({count, inc}) => {
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={() => inc(count + 1)}>Increment</button>
        <button onClick={() => inc(count - 1)}>Decrement</button>
    </div>
  )
}

export default Counter