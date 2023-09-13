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
import APPLE from './assets_Page1/APPLE.png'
import STORE from './assets_Page1/STORE.png'
import CLICK from './assets_Page5/click_here.png'



import { useState } from 'react';



export default function Page5() {

    const [trigger, setTrigger] = useState(false);
    const [click, setClick] = useState(true);



    return (
        <main>

            <div className="App_Page5 max-[701px]:hidden relative flex flex-col w-full overflow-hidden  bg-[#00d54b] h-screen text-white">

                <div className='w-full  grow flex flex-col justify-center'>
                    <div className=' relative flex  items-end text-white bg-gay-700'>
                        <img className='w-[47%] mt-[28%]' src={GRAPH1} alt="background" />
                        <img className=' w-[12%] mb-[9%] -ml-[11%]' src={STOCKS} alt="background" />
                        <img className=' w-[12%]  mb-[9%] ml-[5%]' src={BITCOIN} alt="background" />
                        <img className=' w-[18%] mb-[14%] ml-[17%]' src={GRAPH2} alt="background" />
                        <img className=' w-[30%] -ml-[30%] mb-[1%]' src={GRAPH3} alt="background" />
                    </div>
                </div>

                <div className='absolute  bottom-[80%] ml-[39%] w-[20%] '>
                    <label className='text-white text-4xl mb-[10%]'>Investing</label>
                </div>

                <div className='absolute  w-full flex floating-icon lg:text-lg  lg:w-[22%]  lg:mt-[19%] lg:ml-[10%]  sm:mt-[24%] sm:ml-[8%] sm:w-[26%] sm:text-base transition-all duration-500 ease-in-out '>
                    <div className='text-left text-black'>
                        <label className='text-2xl'>Stocks</label>
                        <p className=' mt-[4%] font-AgrandirNarrow '>Whether you’re an expert or just getting started, Cash App is the fastest and most accessible way to invest in stocks. Start now with as little as $1. </p>
                    </div>
                </div>

                <div className='absolute w-full flex floating-icon lg:text-lg lg:w-[22%]  lg:mt-[19%] lg:ml-[68%]  sm:mt-[24%] sm:ml-[75%] sm:w-[26%] sm:text-base transition-all duration-500 ease-in-out '>
                    <div className='text-left text-black'>
                        <label className='text-2xl'>Bitcoin</label>
                        <p className='mt-[4%] font-AgrandirNarrow'>Cash App is the fastest way to convert dollars to bitcoin. From your home screen, six taps are all it takes to stack sats, buy an entire bitcoin, or just see what it’s all about. </p>
                    </div>
                </div>

                <nav className='w-full text-black absolute bottom-0  flex justify-between items-center  px-14 lg:mb-0 sm:mb-4'>

                    <div className='flex '>
                        <ul className='flex  gap-5 font-extrabold text-xs '>
                            <button className='flex hover:-translate-y-1 hover:scale-105 transition-all duration-700ms gap-2 items-end px-4 py-3.5 rounded-lg border-2 border-black bg-white'>
                                <span>
                                    <img className='w-[100%]' src={APPLE} alt="background" />
                                </span>
                                <span className='lg:flex sm:hidden'>APP STORE </span>
                            </button>
                            <button className='flex hover:-translate-y-1 hover:scale-105 transition-all duration-700ms gap-2 items-end px-4 py-3.5 rounded-lg border-2 border-black  bg-white'>
                                <span>
                                    <img className='w-[100%]' src={STORE} alt="background" />
                                </span>
                                <span className='lg:flex sm:hidden'> GOOGLE PLAY</span>
                            </button>
                        </ul>
                    </div>


                    <div className='flex '>
                        <div className='lg:flex pr-4 pb-2 w-[410px] sm:hidden'>
                            <p className=' font-AgrandirLight font-semibold text-xs  text-[#606060] text-left m-0'>Brokerage services by Cash App Investing LLC, member FINRA / SIPC.
                                See our BrokerCheck. Investing involves risk; you may lose money. Bitcoin trading offered by Cash App. Cash App Investing does not trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash App facilitates banking services through Sutton Bank and Lincoln Savings Bank, Members FDIC.</p>
                        </div>

                        <ul className='flex gap-5 font-extrabold text-xs'>
                            <button>
                                <img className='w-[100%] ' src={THREADBLACK} alt="background" />
                            </button>
                            <button>
                                <img className='w-[100%] ' src={TWEETBLACK} alt="background" />
                            </button>
                            <button>
                                <img className='w-[100%] ' src={INSTABLACK} alt="background" />
                            </button>
                        </ul>
                    </div>



                </nav>
            </div >


            <div className="App_Page5 min-[701px]:hidden  relative flex flex-col w-full overflow-hidden  bg-[#00d54b] h-screen text-white">

                <div className='text-white mt-[6%]'>
                    <label className='text-white text-3xl mb-[10%]'>Investing</label>
                </div>

                <div className='flex relative overflow-hidden w-[90%] min-[500px]:scale-[0.85] -mt-[18%] items-center text-white '>
                    <div onClick={() => { setTrigger(!trigger); setClick(false) }} className={` cursor-pointer flex- flex-col  px-0  ${trigger ? 'translate-x-[160%] scale-[0.6]' : ' translate-x-[20%] scale-100'}  transition-all duration-500 ease-in-out`}>
                        <div className='text-left text-black'>
                            <label className='text-2xl '>Stocks</label>
                            <p className=' mt-[4%] font-AgrandirNarrow text-sm '>Whether you’re an expert or just getting started, Cash App is the fastest and most accessible way to invest in stocks. Start now with as little as $1. </p>
                        </div>
                        <img className=' w-[100%]' src={STOCKS} alt="background" />
                    </div>

                    <div onClick={() => { setTrigger(!trigger); setClick(false) }} className={`cursor-pointer flex flex-col px-0 ${trigger ? ' -translate-x-[70%] scale-[0.7]' : 'translate-x-[20%] scale-[0.4] '} transition-all duration-500 ease-in-out`}>
                        <div className='text-left text-black'>
                            <label className='text-2xl '>Bitcoin</label>
                            <p className=' mt-[4%] font-AgrandirNarrow text-lg'>Cash App is the fastest way to convert dollars to bitcoin. From your home screen, six taps are all it takes to stack sats, buy an entire bitcoin, or just see what it’s all about. </p>
                        </div>
                        <img className=' w-[100%] ' src={BITCOIN} alt="background" />
                    </div>
                    <img className={`absolute ${click ? '' : 'hidden'} floating-icon w-[6%] mt-[30%] ml-[80%]`} src={CLICK} alt="background" />
                </div>


                <div className='w-full absolute bottom-[6%]  grow flex justify-end'>
                    <div className=' relative flex  items-end text-white bg-gay-700'>
                        <img className='w-[55%]' src={GRAPH1} alt="background" />
                        <img className=' w-[26%] ml-[20%]  mb-[15%]' src={GRAPH2} alt="background" />
                        <img className=' w-[34%] -ml-[34%] mb-[1%]' src={GRAPH3} alt="background" />
                    </div>
                </div>

                <nav className=' w-full text-white flex flex-col grow items-end  justify-between '>
                    <div className='flex w-full grow justify-between items-end'>
                        <div className='flex gap-5 font-extrabold p-2  pb-4 text-xs'>
                            <button>
                                <img className='w-[100%] ' src={THREADBLACK} alt="background" />
                            </button>
                            <button>
                                <img className='w-[100%] ' src={TWEETBLACK} alt="background" />
                            </button>
                            <button>
                                <img className='w-[100%] ' src={INSTABLACK} alt="background" />
                            </button>
                        </div>

                        <div className='flex items-end font-extrabold p-2   pb-4 text-xs'>
                            <button className='flex hover:-translate-y-1 hover:scale-105 transition-all duration-700ms items-end px-2   border-r-2 border-white '>
                                <span>
                                    <img className='w-[100%]' src={APPLE} alt="background" />
                                </span>
                            </button>
                            <button className='flex hover:-translate-y-1 hover:scale-105 transition-all duration-700ms  items-end px-2 '>
                                <span>
                                    <img className='w-[100%]' src={STORE} alt="background" />
                                </span>
                            </button>
                        </div>
                    </div>
                </nav>

            </div >

        </main >


    )


}