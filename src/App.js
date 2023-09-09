import './App.css';
import './index.css';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';

function App() {


  return (
    <div className='flex flex-col w-full h-screen overflow-auto'>
      <Page4 />
      {/* <Page5 /> */}
      <Page1 />
      <Page2 />
      <Page3 />
    </div>
  );
}

export default App;
