import CounterFunctionalComponent from './CounterFunctionalComponent';

const Home = () => {
  return (
    <div className='flex items-center justify-center  flex-col gap-10'>
      <div className='text-3xl'>Wassup!</div>
      <CounterFunctionalComponent></CounterFunctionalComponent>
    </div>
  );
};

export default Home;
