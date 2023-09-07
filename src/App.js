import './App.css';
import './index.css';
import PHONE from './assets_Page1/phone.png'
import CASH from './assets_Page1/CASH.png'
import APP from './assets_Page1/APP.png'
import STAIRS from './assets_Page1/intro-stairs 1.png'
import CUBE from './assets_Page1/intro-cube 1.png'
import INTROPILLAR from './assets_Page1/intro-pillar 1.png'
import CUBES from './assets_Page1/intro-cubes 1.png'
import EYE from './assets_Page1/eye.png'
import LOGO from './assets_Page1/logo.png'
import APPLE from './assets_Page1/APPLE.png'
import STORE from './assets_Page1/STORE.png'
import INSTA from './assets_Page1/INSTA_ICON.png'
import TWEET from './assets_Page1/TWITTER_ICON.png'
import THREAD from './assets_Page1/THREADS_ICON.png'
import ARROW from './assets_Page1/ARROW.png'


import LARGE from './assets_Page2/pillar-large.png'
import MEDIUM from './assets_Page2/pillar-medium.png'
import SMALL from './assets_Page2/pillar-small.png'
import COLUMN from './assets_Page2/payments-column.png'
import COLUMNLEFT from './assets_Page2/payments-column-left.png'
import COLUMNCENTER from './assets_Page2/payments-column-center.png'
import MEDIUMSHORT from './assets_Page2/pillar-medium-short.png'
import PHPAY from './assets_Page2/phone-payments.png'


import BANKINGCOLUMN from './assets_Page3/banking-column.png'
import BANKINGCUBES from './assets_Page3/banking-cubes.png'
import BANKINGHOLE from './assets_Page3/banking-hole.png'
import BANKINGHOLEDOWN from './assets_Page3/banking-hole-down.png'
import BANKINGMONSTER from './assets_Page3/banking-monster.png'
import BANKINGPHONE from './assets_Page3/banking-phone.png'
import BANKINGRAMP1 from './assets_Page3/banking-ramp-1.png'
import BANKINGRAMP2 from './assets_Page3/banking-ramp-2.png'
import BANKINGSTAIRS1 from './assets_Page3/banking-stairs-1.png'
import BANKINGSTAIRS2 from './assets_Page3/banking-stairs-2.png'
import BANKINGTRACK1 from './assets_Page3/banking-track-1.png'
import BANKINGTRACK2 from './assets_Page3/banking-track-2.png'
import BANKINGTUBE from './assets_Page3/banking-tube.png'

import BURGER from './assets_Page4/boost-burger.png'
import CARD from './assets_Page4/boost-card.png'
import COFFEE from './assets_Page4/boost-coffee.png'
import HAND from './assets_Page4/boost-hand.png'
import BOOSTPHONE from './assets_Page4/boost-phone.png'
import BOOSTSHOE from './assets_Page4/boost-shoe.png'
import BOOSTSTAIRS1 from './assets_Page4/boost-stairs-1.png'
import BOOSTSTAIRS2 from './assets_Page4/boost-stairs-2.png'

import GRAPH1 from './assets_Page5/investing-graph-1.png'
import GRAPH2 from './assets_Page5/investing-graph-2.png'
import GRAPH3 from './assets_Page5/investing-graph-3 1.png'
import STOCKS from './assets_Page5/investing-stocks.png'
import BITCOIN from './assets_Page5/investing-bitcoin.png'
import TWEETBLACK from './assets_Page5/tweetBlack.png'
import THREADBLACK from './assets_Page5/threadBlack.png'
import INSTABLACK from './assets_Page5/instaBlack.png'






function App() {
  return (
    <div className='flex flex-col  w-full'>

      <div className="App  flex flex-col w-full overflow-hidden items-center  bg-black h-screen text-white">
        <nav className='flex w-full px-[4%] py-[1%] items-center justify-between bg-gay-800'>
          <div>
            <img className='w-[100%]' src={LOGO} alt="Phone" />
          </div>

          <ul className='flex flex-wrap px-[4%] justify-center gap-5 font-extrabold	text-xs'>
            <button >SIGN IN</button>
            <button>LEGAL</button>
            <button>LICENSES</button>
            <button>SECURITY</button>
            <button>CAREERS</button>
            <button>PRESS</button>
            <button>SUPPORT</button>
            <button>STATUS</button>
            <button>CODEBLOG</button>
          </ul>

          <div>
            <img className='w-[100%]' src={EYE} alt="Phone" />
          </div>
        </nav>

        <div className='w-full grow flex flex-col justify-between'>

          <div className='flex w-full  justify-between items-start text-white bg-gay-700 floating-icon'>
            <img className=' ml-[12%] w-[6%]' src={CUBE} alt="Phone" />
            <img className='w-[15%] mr-[15%]' src={STAIRS} alt="Phone" />
          </div>

          <div className='-mt-[10%] -mb-[4%] -ml-[6%]  relative flex justify-center items-center text-white bg-gay-700'>
            <div className='w-[48%] flex flex-col items-center'>
              <img className='w-[84%]' src={CASH} alt="Cash" />
              <img className=' invisible w-[10%]' src={CASH} alt="Cash" />

              <div className='w-[49%] absolute -top-[22%] left-[38.7%] '>
                <img className='w-[48%]' src={PHONE} alt="Phone" />
              </div>

              <img className='relative w-[63%]' src={APP} alt="App" />
            </div>
          </div>

          <div className='w-full -mb-[0%]  flex justify-between  items-start text-white bg-gay-700 floating-icon'>
            <img className='w-[14%] ml-[12%]' src={CUBES} alt="Phone" />
            <img className='w-[22%]  mr-[22%]' src={INTROPILLAR} alt="Phone" />
          </div>
        </div>

        <nav className='w-full text-white absolute bottom-0  flex justify-between items-center  px-14'>

          <div className='flex '>
            <ul className='flex gap-5 font-extrabold text-xs '>
              <button className='flex gap-2 items-end px-6 py-3.5 rounded-lg border-2 border-white bg-black'>
                <span>
                  <img className='w-[100%]' src={APPLE} alt="Phone" />
                </span>APP STORE</button>
              <button className='flex gap-2 items-end px-4 py-3.5 rounded-lg border-2 border-white  bg-black'>
                <span>
                  <img className='w-[100%]' src={STORE} alt="Phone" />
                </span>GOOGLE PLAY</button>
            </ul>
          </div>

          <div className='flex animate-bounce pr-2 pl-8'>
            <img tabIndex={0} className='w-[100%]' src={ARROW} alt="Phone" />
          </div>

          <div className='flex '>
            <div className='flex pr-4 pb-2 w-[410px]'>
              <p className=' font-AgrandirLight font-semibold text-xs  text-white text-left m-0'>Brokerage services by Cash App Investing LLC, member FINRA / SIPC.
                See our BrokerCheck. Investing involves risk; you may lose money. Bitcoin trading offered by Cash App. Cash App Investing does not trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash App facilitates banking services through Sutton Bank and Lincoln Savings Bank, Members FDIC.</p>
            </div>

            <ul className='flex gap-5 font-extrabold	text-xs'>
              <button>
                <img className='w-[100%] ' src={THREAD} alt="Phone" />
              </button>
              <button>
                <img className='w-[100%] ' src={TWEET} alt="Phone" />
              </button>
              <button>
                <img className='w-[100%] ' src={INSTA} alt="Phone" />
              </button>
            </ul>
          </div>



        </nav>
      </div >

      {/* <div className="App_Page2 relative flex flex-col w-full overflow-hidden bg-white-100  h-screen text-white">

        <div className='w-full sub flex justify-between  items-end text-white '>

          <div className='flex items-end absolute w-[35%] -mb-[0%] '>
            <div><img className='-ml-[18%]  w-[100%] -mb-[0%] mr-[0%]' src={COLUMNLEFT} alt="Phone" />  </div>
            <div><img className='w-[100%] mb-[70%] ml-[70%]' src={SMALL} alt="Phone" /></div>
            <div><img className='w-[100%] mb-[30%]  -ml-[100%]' src={MEDIUM} alt="Phone" /></div>
          </div>

          <div className='flex w-[50%]'>
            <div className='absolute floating-icon 2xl:mt-[8%] text-left ml-[22%] w-[20%] xl:mt-[2%] lg:-mt-[4%] md:-mt-[16%] sm:-mt-[30%]  transition-all duration-500 ease-in-out transition-transform'>
              <label className='text-green-500 text-4xl mb-[10%]'>Payments</label>
              <p className='text-black text-base mt-[2%] font-AgrandirNarrow '>Send and receive money with anyone, donate  to an important cause, or tip professionals.
                Just enter a $cashtag, phone number, or
                scan their  QR code to pay. </p>
            </div>
            <div><img className='w-[100%] mb-[27%] ml-[48%]' src={PHPAY} alt="Phone" />  </div>
          </div>

          <div className='flex -ml-[20%] absolute w-[120%]'>
            <div className=''><img className='w-[100%] -mb-[0%] -mt-[9%] ml-[119%] ' src={COLUMN} alt="Phone" /></div>
            <div><img className='w-[100%] -mb-[0%]  mt-[40%] ml-[340%]' src={MEDIUM} alt="Phone" /></div>
            <div><img className='w-[100%] mt-[8%] -ml-[40%] ' src={COLUMNCENTER} alt="Phone" />  </div>
          </div>

          <div className='flex w-[35%] ml-[30%] absolute'>
            <div><img className='w-[100%] -mt-[124%] ml-[130%]' src={LARGE} alt="Phone" /></div>
            <div><img className='w-[100%]  -mt-[62%] -ml-[48%]' src={MEDIUM} alt="Phone" /></div>
            <div><img className='w-[100%] -mb-[0%] -ml-[50%]' src={MEDIUMSHORT} alt="Phone" />  </div>
          </div>
        </div>

      </div > */}

      {/* <div className="App_Page3  flex w-full overflow-hidden bg-[#00d54b]  h-screen text-white">

        <div className='w-full flex grow justify-between  text-white '>

          <div className='flex flex-col  justify-between items-center abslute w-[50%]'>
            <div><img className='w-[100%] ' src={BANKINGHOLE} alt="Phone" /></div>
            <div><img className='w-[55%] ml-[13%] -mt-[60%]' src={BANKINGCOLUMN} alt="Phone" /></div>
            <div><img className='w-[55%] lg:-ml-[20%]  mb-[70%] sm:-ml-[5%]' src={BANKINGSTAIRS2} alt="Phone" />  </div>
          </div>

          <div className='flex flex-col justify-end items-center absoute w-[50%]  '>
            <div><img className='w-[75%] -ml-[5%] -mb-[45%] mt-[0%]' src={BANKINGTRACK1} alt="Phone" /></div>

            <div className='absolute floating-icon e w-[20%] floatig-icon 2xl:mb-[19%]  text-left 2xl:-ml-[22%]  sm:mb-[42%] sm:ml-[20%] sm:w-[20%] transition-all duration-500 ease-in-out transition-transform'>
              <label className='text-white text-4xl mb-[10%]'>Banking</label>
              <p className='text-black text-base mt-[2%] font-AgrandirNarrow '>Receive your paycheck, tax returns, and other direct deposits up to two days early using your Cash App routing
                and account number. </p>
            </div>

            <div><img className='w-[105%] ml-[35%] -mb-[20%]' src={BANKINGPHONE} alt="Phone" />  </div>
            <div><img className='w-[75%] -ml-[50%] -mb-[20%]' src={BANKINGRAMP2} alt="Phone" /></div>
            <div><img className='w-[50%] ml-[30%] mb-[0%]' src={BANKINGTUBE} alt="Phone" /></div>
          </div>

          <div className='flex flex-col justify-between items-end abslute w-[50%]'>
            <div><img className='w-[75%] ml-[20%] mt-[55%]' src={BANKINGRAMP1} alt="Phone" /></div>
            <div><img className='w-[65%] ml-[50%] -mb-[10%]' src={BANKINGCUBES} alt="Phone" /></div>
            <div><img className='w-[100%] ml-[10%]' src={BANKINGHOLEDOWN} alt="Phone" />  </div>
          </div>

          <div className='flex flex-col justify-between items-center w-[50%]  abslute'>
            <div><img className='w-[75%] -ml-[30%] mt-[2%]' src={BANKINGTRACK2} alt="Phone" /></div>
            <div><img className='w-[55%] ml-[10%]' src={BANKINGSTAIRS1} alt="Phone" /></div>
            <div><img className='w-[55%] ml-[20%] mb-[25%]' src={BANKINGMONSTER} alt="Phone" />  </div>
          </div>

        </div>
      </div > */}

      {/* <div className="App_Page4 snap-center relative flex w-full overflow-hidden bg-black  h-screen text-white">

        <div className='w-full flex grow justify-between  text-white '>

          <div className='flex flex-col  justify-end items-center absoute bottom-0 w-[34%]'>
            <div><img className='w-[80%] ' src={BOOSTSTAIRS2} alt="Phone" /></div>
          </div>

          <div className='flex justify-end items-end z-[51]  w-[80%]  ml-[0%] '>
            <div><img className='w-[50%] ml-[25%] mb-[20%]' src={BOOSTPHONE} alt="Phone" />  </div>
            <div><img className='w-[55%] -ml-[20%] mb-[200%]' src={BURGER} alt="Phone" /></div>
            <div><img className='w-[100%] -ml-[80%] mb-[150%]' src={COFFEE} alt="Phone" /></div>
            <div><img className='w-[65%] -ml-[110%] mb-[280%]' src={CARD} alt="Phone" /></div>
            <div><img className='w-[60%] -ml-[130%] mb-[410%]' src={HAND} alt="Phone" /></div>
            <div><img className='w-[60%] -ml-[85%] mb-[140%]' src={BOOSTSHOE} alt="Phone" /></div>
          </div>


          <div className='absolute floating-icon  2xl:w-[20%]  2xl:mt-[18%] 2xl:ml-[20%] text-left sm:mt-[20%] sm:ml-[10%] sm:w-[33%] transition-all duration-500 ease-in-out transition-transform'>
            <label className='text-[#00d54b] text-4xl mb-[10%]'>Cash Card & Boost</label>
            <p className='text-white text-base mt-[2%] font-AgrandirNarrow '>Receive your paycheck, tax returns, and other direct deposits up to two days early using your Cash App routing
              and account number. </p>
          </div>

          <div className='flex flex-col justify-end items-center right-0 bottom-0 w-[64%] -ml-[80%] '>
            <div><img className='w-[100%] -ml-[0%]  -mb-[0%]' src={BOOSTSTAIRS1} alt="Phone" /></div>
          </div>

        </div>
      </div> */}

      <div className="App_Page5 relative flex flex-col w-full overflow-hidden  bg-[#00d54b] h-screen text-white">

        <div className='w-full  grow flex flex-col justify-center'>
          <div className=' relative flex  items-end text-white bg-gay-700'>
            <img className='w-[47%] mt-[28%]' src={GRAPH1} alt="Cash" />
            <img className=' w-[12%] mb-[9%] -ml-[11%]' src={STOCKS} alt="App" />
            <img className=' w-[12%]  mb-[9%] ml-[5%]' src={BITCOIN} alt="App" />
            <img className=' w-[18%] mb-[14%] ml-[17%]' src={GRAPH2} alt="App" />
            <img className=' w-[30%] -ml-[30%] mb-[1%]' src={GRAPH3} alt="App" />
          </div>
        </div>

        <div className='absolute  bottom-[80%] left-[40%] w-[20%] '>
          <label className='text-white text-4xl mb-[10%]'>Investing</label>
        </div>

        <div className='absolute  w-full flex floating-icon lg:text-lg  lg:w-[22%]  lg:mt-[19%] lg:ml-[10%]  sm:mt-[24%] sm:ml-[8%] sm:w-[26%] sm:text-base transition-all duration-500 ease-in-out transition-transform'>
          <div className='text-left text-black'>
            <label className='text-2xl'>Stocks</label>
            <p className=' mt-[4%] font-AgrandirNarrow '>Whether you’re an expert or just getting started, Cash App is the fastest and most accessible way to invest in stocks. Start now with as little as $1. </p>
          </div>
        </div>

        <div className='absolute w-full flex floating-icon lg:text-lg lg:w-[22%]  lg:mt-[19%] lg:ml-[68%]   sm:mt-[24%] sm:ml-[70%] sm:w-[26%] sm:text-base transition-all duration-500 ease-in-out transition-transform'>
          <div className='text-left text-black'>
            <label className='text-2xl'>Bitcoin</label>
            <p className='mt-[4%] font-AgrandirNarrow'>Cash App is the fastest way to convert dollars to bitcoin. From your home screen, six taps are all it takes to stack sats, buy an entire bitcoin, or just see what it’s all about. </p>
          </div>
        </div>

        <nav className='w-full text-black absolute bottom-0  flex justify-between items-center  px-14'>

          <div className='flex '>
            <ul className='flex gap-5 font-extrabold text-xs '>
              <button className='flex gap-2 items-end px-6 py-3.5 rounded-lg border-2 border-black bg-white'>
                <span>
                  <img className='w-[100%]' src={APPLE} alt="Phone" />
                </span>APP STORE</button>
              <button className='flex gap-2 items-end px-4 py-3.5 rounded-lg border-2 border-black  bg-white'>
                <span>
                  <img className='w-[100%]' src={STORE} alt="Phone" />
                </span>GOOGLE PLAY</button>
            </ul>
          </div>

          <div className='flex animate-bounce pr-2 pl-8'>
            <img tabIndex={0} className='w-[100%]' src={ARROW} alt="Phone" />
          </div>

          <div className='flex '>
            <div className='flex pr-4 pb-2 w-[410px]'>
              <p className=' font-AgrandirLight font-semibold text-xs  text-[#606060] text-left m-0'>Brokerage services by Cash App Investing LLC, member FINRA / SIPC.
                See our BrokerCheck. Investing involves risk; you may lose money. Bitcoin trading offered by Cash App. Cash App Investing does not trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash App facilitates banking services through Sutton Bank and Lincoln Savings Bank, Members FDIC.</p>
            </div>

            <ul className='flex gap-5 font-extrabold	text-xs'>
              <button>
                <img className='w-[100%] ' src={THREADBLACK} alt="Phone" />
              </button>
              <button>
                <img className='w-[100%] ' src={TWEETBLACK} alt="Phone" />
              </button>
              <button>
                <img className='w-[100%] ' src={INSTABLACK} alt="Phone" />
              </button>
            </ul>
          </div>



        </nav>
      </div >



    </div>

  );
}

export default App;
