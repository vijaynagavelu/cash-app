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
                    <svg className={`absolute ${click ? '' : 'hidden'} floating-icon w-[6%] mt-[30%] ml-[80%]`} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" width='100px' viewBox="0 0 128 128" id="tap"><path d="M40.37218,77.40576a43.42279,43.42279,0,0,1,0-60.81152,42.11947,42.11947,0,0,1,60.077,0,1.95835,1.95835,0,0,0,2.794,0,2.01664,2.01664,0,0,0,0-2.82812,46.0361,46.0361,0,0,0-65.66492,0,47.28343,47.28343,0,0,0,7.171,72.41864,24.75846,24.75846,0,0,1-1.91534-6.48926C41.99114,78.9649,41.16521,78.20844,40.37218,77.40576Z"></path><path d="M82.48522 61.53735a18.7742 18.7742 0 1 0-23.65558.39551v-5.6004a14.82413 14.82413 0 1 1 23.65558-.66754zM50.152 26.49365a2.01664 2.01664 0 0 0 0-2.82812 1.95828 1.95828 0 0 0-2.79395 0 33.3264 33.3264 0 0 0-.81781 45.798c.04364-.03778.082-.0769.12653-.11444a12.0254 12.0254 0 0 1 3.34906-1.98779A29.28455 29.28455 0 0 1 50.152 26.49365z"></path><path d="M90.22808,68.1922A10.00436,10.00436,0,0,1,94.029,69.732a33.32279,33.32279,0,0,0-.56567-46.06647,1.95835,1.95835,0,0,0-2.794,0,2.01664,2.01664,0,0,0,0,2.82813,29.28615,29.28615,0,0,1,0,41.0127A1.99074,1.99074,0,0,0,90.22808,68.1922Z"></path><path d="M95.96154,75.56055a8.7991,8.7991,0,0,0-1.739.17529A6.67132,6.67132,0,0,0,88.19323,72a7.54087,7.54087,0,0,0-1.83545.26318,8.67683,8.67683,0,0,0-7.82422-4.12256V45.96387a7.87662,7.87662,0,1,0-15.75226,0V76.13623c-.77081-1.05762-1.53973-2.02539-2.29517-2.88525a8.0955,8.0955,0,0,0-11.28967-.82861c-5.21124,4.395-1.17224,11.89844,1.7771,17.37744a38.09788,38.09788,0,0,1,2.00671,4.05469c.8678,2.34033,1.76453,4.75977,2.72015,6.91748,2.326,6.59717,4.24207,10.73779,6.20825,13.41992,2.38251,3.24951,2.6676,9.5625,2.57642,11.7207a2.01454,2.01454,0,0,0,.54749,1.47021A1.96458,1.96458,0,0,0,66.459,128H98.07244a1.98815,1.98815,0,0,0,1.97589-2v-7.58252c.78772-1.854,3.93719-9.57959,3.93719-14.56494V94.86816c.00964-.11377.01447-.22949.01447-.3457V83.30469A7.90431,7.90431,0,0,0,95.96154,75.56055ZM68.42565,124a35.312,35.312,0,0,0-.37213-4H96.09661v4Zm31.60822-29.23242v9.085c0,3.39832-2.04053,9.12994-3.267,12.14746H67.44689a1.93921,1.93921,0,0,0-.30731.03137,14.81394,14.81394,0,0,0-2.0578-4.22327c-1.70715-2.3291-3.51416-6.28662-5.68585-12.4541q-.02673-.07617-.05933-.14941c-.916-2.05957-1.80072-4.44678-2.65649-6.75586a40.2817,40.2817,0,0,0-2.23633-4.563c-2.29419-4.26172-5.436-10.09814-2.71722-12.39062a4.17759,4.17759,0,0,1,5.80835.416,49.65019,49.65019,0,0,1,5.51172,7.96973,1.96446,1.96446,0,0,0,2.22235.93066A1.996,1.996,0,0,0,66.733,82.87988v-36.916A3.87081,3.87081,0,0,1,70.59161,42a3.935,3.935,0,0,1,3.99023,3.96387V70.5611l-.00189.019V82.46a1.976,1.976,0,1,0,3.95166,0V72.16809c.128-.01117.25592-.03625.383-.03625a4.54952,4.54952,0,0,1,4.33905,2.91772V86.04a1.976,1.976,0,1,0,3.95166,0V76.17358A4.1603,4.1603,0,0,1,88.19323,76c.92676,0,2.00049.29755,2.96887,2.44916-.00043.01727-.00507.03345-.00507.05084V89.2998a1.976,1.976,0,1,0,3.95166,0V79.64435a4.87157,4.87157,0,0,1,.85284-.0838,3.9314,3.9314,0,0,1,4.08679,3.74414l.00049,11.21777A1.98381,1.98381,0,0,0,100.03387,94.76758Z"></path></svg>
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