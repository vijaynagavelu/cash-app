import React, { useState } from 'react';
import './App.css';
import './index.css';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page4';
import Page4 from './Page3';
import Page5 from './Page5';

function App() {
  const [activePage, setActivePage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  return (
    <div className='flex flex-col w-full overflow-hidden'>
      <div className={`page ${activePage === 1 ? 'fade-in' : 'fade-out'}`}>
        <Page1 />
      </div>
      <div className={`page ${activePage === 2 ? 'fade-in' : 'fade-out'}`}>
        <Page2 />
      </div>
      <div className={`page ${activePage === 3 ? 'fade-in' : 'fade-out'}`}>
        <Page3 />
      </div>
      <div className={`page ${activePage === 4 ? 'fade-in' : 'fade-out'}`}>
        <Page4 />
      </div>
      <div className={`page ${activePage === 5 ? 'fade-in' : 'fade-out'}`}>
        <Page5 />
      </div>
      <div className='flex mt-4'>
        {activePage !== 1 && (
          <button className='mx-2 cursor-default absolute hover:opacity-70 h-screen opacity-[0.02] top-[0%] text-red-500 rotate-180 z-[100]'>
            <svg onClick={() => handlePageChange(activePage - 1)} xmlns="http://www.w3.org/2000/svg" className='bg-white rounded-full cursor-pointer' viewBox="0 0 40 40" width="44" height="44" id="arrow"><path d="M16.8 29c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l7.3-7.3-7.3-7.3c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l8 8c.4.4.4 1 0 1.4l-8 8c-.2.2-.5.3-.7.3z"></path><path d="M20 40C9 40 0 31 0 20S9 0 20 0c4.5 0 8.7 1.5 12.3 4.2.4.3.5 1 .2 1.4-.3.4-1 .5-1.4.2C27.9 3.3 24 2 20 2 10.1 2 2 10.1 2 20s8.1 18 18 18 18-8.1 18-18c0-3.2-.9-6.4-2.5-9.2-.3-.5-.1-1.1.3-1.4.5-.3 1.1-.1 1.4.3C39 12.9 40 16.4 40 20c0 11-9 20-20 20z"></path></svg>
          </button>
        )}
        {activePage !== 5 && (
          <button className='mx-2 cursor-default absolute hover:opacity-70 opacity-[0.02]  h-screen top-[0%] right-0 text-red-500 z-[100]'>
            <svg onClick={() => handlePageChange(activePage + 1)} xmlns="http://www.w3.org/2000/svg" className='bg-white rounded-full cursor-pointer' viewBox="0 0 40 40" width="44" height="44" id="arrow"><path d="M16.8 29c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l7.3-7.3-7.3-7.3c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l8 8c.4.4.4 1 0 1.4l-8 8c-.2.2-.5.3-.7.3z"></path><path d="M20 40C9 40 0 31 0 20S9 0 20 0c4.5 0 8.7 1.5 12.3 4.2.4.3.5 1 .2 1.4-.3.4-1 .5-1.4.2C27.9 3.3 24 2 20 2 10.1 2 2 10.1 2 20s8.1 18 18 18 18-8.1 18-18c0-3.2-.9-6.4-2.5-9.2-.3-.5-.1-1.1.3-1.4.5-.3 1.1-.1 1.4.3C39 12.9 40 16.4 40 20c0 11-9 20-20 20z"></path></svg>
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
