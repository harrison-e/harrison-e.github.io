import Header from './Header.js'
import { useEffect } from 'react';

function Page({ children }) {
  const pageTitle = 'harrison-e';
  useEffect(() => {
    document.title = pageTitle 
  }, []);

  return (
    <div className='flex flex-col items-center w-full h-screen space-y-5'>
      <Header />
      <div className='grid place-content-center max-w-4xl  text-lime-100 p-6 space-y-5'>
        { children }
      </div>
    </div>
  );
}

export default Page;
