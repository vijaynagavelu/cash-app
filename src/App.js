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
          <button
            className='mx-2  absolute hover:opacity-70 h-screen opacity-[0.02] top-[0%] text-red-500 rotate-180 z-[100]'
            onClick={() => handlePageChange(activePage - 1)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className='bg-white  rounded-full ' width="44" height="44" fill="none" viewBox="0 0 24 24" id="right-arrow"><path fill="#000" fill-rule="evenodd" d="M12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5ZM2.5 12C2.5 6.75329 6.75329 2.5 12 2.5C17.2467 2.5 21.5 6.75329 21.5 12C21.5 17.2467 17.2467 21.5 12 21.5C6.75329 21.5 2.5 17.2467 2.5 12Z" clip-rule="evenodd"></path><path fill="#000" fill-rule="evenodd" d="M6.5 12C6.5 11.7239 6.72386 11.5 7 11.5H16.5C16.7761 11.5 17 11.7239 17 12C17 12.2761 16.7761 12.5 16.5 12.5H7C6.72386 12.5 6.5 12.2761 6.5 12Z" clip-rule="evenodd"></path><path fill="#000" fill-rule="evenodd" d="M13.1464 8.14645C13.3417 7.95118 13.6583 7.95118 13.8536 8.14645L17.3536 11.6464C17.5488 11.8417 17.5488 12.1583 17.3536 12.3536L13.8536 15.8536C13.6583 16.0488 13.3417 16.0488 13.1464 15.8536C12.9512 15.6583 12.9512 15.3417 13.1464 15.1464L16.2929 12L13.1464 8.85355C12.9512 8.65829 12.9512 8.34171 13.1464 8.14645Z" clip-rule="evenodd"></path></svg>
          </button>
        )}
        {activePage !== 5 && (
          <button
            className='mx-2 absolute hover:opacity-70 opacity-[0.02] h-screen top-[0%] right-0 text-red-500 z-[100]'
            onClick={() => handlePageChange(activePage + 1)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className='bg-white rounded-full' width="44" height="44" fill="none" viewBox="0 0 24 24" id="right-arrow"><path fill="#000" fill-rule="evenodd" d="M12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5ZM2.5 12C2.5 6.75329 6.75329 2.5 12 2.5C17.2467 2.5 21.5 6.75329 21.5 12C21.5 17.2467 17.2467 21.5 12 21.5C6.75329 21.5 2.5 17.2467 2.5 12Z" clip-rule="evenodd"></path><path fill="#000" fill-rule="evenodd" d="M6.5 12C6.5 11.7239 6.72386 11.5 7 11.5H16.5C16.7761 11.5 17 11.7239 17 12C17 12.2761 16.7761 12.5 16.5 12.5H7C6.72386 12.5 6.5 12.2761 6.5 12Z" clip-rule="evenodd"></path><path fill="#000" fill-rule="evenodd" d="M13.1464 8.14645C13.3417 7.95118 13.6583 7.95118 13.8536 8.14645L17.3536 11.6464C17.5488 11.8417 17.5488 12.1583 17.3536 12.3536L13.8536 15.8536C13.6583 16.0488 13.3417 16.0488 13.1464 15.8536C12.9512 15.6583 12.9512 15.3417 13.1464 15.1464L16.2929 12L13.1464 8.85355C12.9512 8.65829 12.9512 8.34171 13.1464 8.14645Z" clip-rule="evenodd"></path></svg>
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
