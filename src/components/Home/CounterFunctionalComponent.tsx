import { useState } from 'react';

const CounterFunctionalComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <button
        onClick={() => {
          // setCount(count + 1);
          setCount((previousState) => previousState + 1);
        }}
        className='text-3xl btn btn-outline btn-square btn-success'
      >
        {count}
      </button>
      <button
        onClick={() => {
          // setCount(0);
          setCount((previousState) => previousState * 0);
        }}
        className='text-lg btn btn-outline btn-lg btn-square btn-error'
      >
        Reset
      </button>
    </>
  );
};

export default CounterFunctionalComponent;
