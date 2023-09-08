import './App.css';
import './index.css';

import GRAPH1 from './assets_Page5/investing-graph-1.png'
import GRAPH2 from './assets_Page5/investing-graph-2.png'
import GRAPH3 from './assets_Page5/investing-graph-3 1.png'
import STOCKS from './assets_Page5/investing-stocks.png'
import BITCOIN from './assets_Page5/investing-bitcoin.png'
import TWEETBLACK from './assets_Page5/tweetBlack.png'
import THREADBLACK from './assets_Page5/threadBlack.png'
import INSTABLACK from './assets_Page5/instaBlack.png'
import ARROW from './assets_Page1/ARROW.png'
import APPLE from './assets_Page1/APPLE.png'
import STORE from './assets_Page1/STORE.png'


export default function Page5() {
    return (

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

    )


}