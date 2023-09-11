import './App.css';
import './index.css';
import './Mobile.css';

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


import { useState } from 'react';
import ARROW from './assets_Page1/ARROW.png'


export default function Page1() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };


    return (
        <main>

            <div className="App max-[701px]:hidden  relative flex flex-col w-full overflow-x-hidden items-center h-screen  bg-black  text-white">

                <nav className='flex w-full px-[4%] py-[1%] items-center justify-between bg-gay-800'>
                    <div>
                        <img className='w-[100%]' src={LOGO} alt="background" />
                    </div>

                    <ul className='flex flex-wrap px-[4%] justify-center gap-5 font-extrabold text-sm'>
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
                        <img className='w-[100%]' src={EYE} alt="background" />
                    </div>
                </nav>

                <div className='w-full relative grow  flex flex-col justify-around'>

                    <div className='flex w-full px-[12%] -mb-[5%] justify-between items-start text-white  floating-icon'>
                        <img className=' w-[8%] ' src={CUBE} alt="background" />
                        <img className='w-[18%] ' src={STAIRS} alt="background" />
                    </div>

                    <div className='w-full flex justify-center  -mt-[2%]  '>
                        <div className=' w-[50%]  relative flex justify-center items-center text-white '>
                            <div className='flex flex-col relative items-center'>
                                <div className='w-[110%]'> <img className='w-[100%]' src={CASH} alt="background" /></div>
                                <img className=' invisible w-[10%]' src={CASH} alt="background" />

                                <div className='w-[62%]  flex  absolute -mt-[11%]'>
                                    <img className='w-[100%]' src={PHONE} alt="Phone" />
                                </div>

                                <div className='w-[80%]'><img className='relative w-[100%]' src={APP} alt="background" /></div>
                            </div>
                        </div>
                    </div>

                    <div className='px-[15%] -mt-[17%]  flex justify-between  items-end text-white  floating-icon'>
                        <img className='w-[20%] mb-[8%]' src={CUBES} alt="background" />
                        <img className='w-[34%]  ' src={INTROPILLAR} alt="background" />
                    </div>
                </div>

                <nav className='w-full text-white absolute bottom-0  flex justify-between items-center  px-14 lg:mb-0 sm:mb-4'>

                    <div className='flex '>
                        <ul className='flex gap-5 font-extrabold text-xs '>
                            <button className='flex hover:-translate-y-1 hover:scale-105 transition-all duration-700ms gap-2 items-end px-4 py-3.5 rounded-lg border-2 border-white bg-black'>
                                <span>
                                    <img className='w-[100%]' src={APPLE} alt="background" />
                                </span>
                                <span className='lg:flex sm:hidden'>APP STORE </span>
                            </button>
                            <button className='flex gap-2 hover:-translate-y-1 hover:scale-105 transition-all duration-700ms items-end px-4 py-3.5 rounded-lg border-2 border-white  bg-black'>
                                <span>
                                    <img className='w-[100%]' src={STORE} alt="background" />
                                </span>
                                <span className='lg:flex sm:hidden'> GOOGLE PLAY</span>
                            </button>
                        </ul>
                    </div>

                    <div className='flex animate-bounce pr-2 pl-8'>
                        <img tabIndex={0} className='w-[100%]' src={ARROW} alt="background" />
                    </div>

                    <div className='flex'>
                        <div className='lg:flex pr-4 pb-2 w-[410px] sm:hidden'>
                            <p className=' font-AgrandirLight font-semibold text-xs text-gray-300 text-left m-0'>Brokerage services by Cash App Investing LLC, member FINRA / SIPC.
                                See our BrokerCheck. Investing involves risk; you may lose money. Bitcoin trading offered by Cash App. Cash App Investing does not trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash App facilitates banking services through Sutton Bank and Lincoln Savings Bank, Members FDIC.</p>
                        </div>

                        <ul className='flex gap-5 font-extrabold text-xs'>
                            <button>
                                <img className='w-[100%] ' src={THREAD} alt="background" />
                            </button>
                            <button>
                                <img className='w-[100%] ' src={TWEET} alt="background" />
                            </button>
                            <button>
                                <img className='w-[100%] ' src={INSTA} alt="background" />
                            </button>
                        </ul>
                    </div>
                </nav>

            </div >


            <div className="AppMobile min-[701px]:hidden flex flex-col w-full overflow-y-auto oveflow-x-hidden items-center h-screen  bg-black  text-white">

                <nav className='flex w-full px-[4%] py-[4%]  items-center justify-between px-4'>
                    <div className='w-[5%] '>
                        <img className='w-[100%]' src={LOGO} alt="background" />
                    </div>

                    <div className="text-xl relative border-b-[0.5px] border-gray-500">
                        <button
                            className="text-[#00D54B]"
                            onClick={toggleMenu}
                        >
                            ☰ Menu
                        </button>
                        {menuOpen && (
                            <div className='flex  absolute -ml-[122%] mt-[0%]'>
                                <ul className=" z-[1] text-sm ml-0 mt-4 p-2 text-[#00D54B] bg-black border border-green-300 rounded shadow-lg">
                                    <li>
                                        <button className="block border-b-[0.5px] border-gray-500  py-1 w-full">
                                            SIGN IN
                                        </button>
                                    </li>
                                    <li>
                                        <button className="block border-b-[0.5px] border-gray-500  py-1   w-full">
                                            LEGAL
                                        </button>
                                    </li>
                                    <li>
                                        <button className="block border-b-[0.5px] border-gray-500  py-1  w-full">
                                            LICENSES
                                        </button>
                                    </li>

                                </ul>
                                <ul className=" z-[1] text-sm ml-0 mt-4 p-2 text-[#00D54B] bg-black border border-green-300 rounded shadow-lg">

                                    <li>
                                        <button className="block border-b-[0.5px] border-gray-500  py-1  w-full">
                                            SECURITY
                                        </button>
                                    </li>
                                    <li>
                                        <button className="block border-b-[0.5px] border-gray-500  py-1  w-full">
                                            CAREERS
                                        </button>
                                    </li>
                                    <li>
                                        <button className="block border-b-[0.5px] border-gray-500  py-1  w-full">
                                            PRESS
                                        </button>
                                    </li>
                                </ul>
                                <ul className=" z-[1] text-sm ml-0 mt-4 p-2 text-[#00D54B] bg-black border border-green-300 rounded shadow-lg">
                                    <li>
                                        <button className="block border-b-[0.5px] border-gray-500  py-1  w-full">
                                            SUPPORT
                                        </button>
                                    </li>
                                    <li>
                                        <button className="block border-b-[0.5px] border-gray-500  py-1  w-full">
                                            STATUS
                                        </button>
                                    </li>
                                    <li>
                                        <button className="block border-b-[0.5px] border-gray-500  py-1  w-full">
                                            CODEBLOG
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>

                    <div className='w-[10%]'>
                        <img className='w-[100%] ml-[0%]' src={EYE} alt="background" />
                    </div>
                </nav>

                <div className='flex flex-col grow justify-evenly '>
                    <div className='flex px-6 w-full  justify-between items-start text-white  floating-icon'>
                        <img className='w-[14%] ml-[0%]' src={CUBE} alt="background" />
                        <img className='w-[20%] mr-[0%]' src={STAIRS} alt="background" />
                    </div>

                    <div className=' w-[100%]  relative flex justify-center items-center text-white '>
                        <div className='flex flex-col items-center'>
                            <img className='w-[84%] ' src={CASH} alt="background" />
                            <img className=' invisible w-[10%]' src={CASH} alt="background" />

                            <div className='w-[44%]  -mt-[5%] absolute '>
                                <img className='w-[100%]' src={PHONE} alt="PHONE" />
                            </div>

                            <img className='relative w-[63%]' src={APP} alt="background" />
                        </div>
                    </div>

                    <div className='px-6 -mb-[0%]  flex justify-between  items-end text-white  floating-icon'>
                        <img className='w-[24%] ml-[0%]' src={CUBES} alt="background" />
                        <div className='flex animate-bounce pr-2 pl-8'>
                            <img tabIndex={0} className='w-[100%]' src={ARROW} alt="background" />
                        </div>
                        <img className='w-[28%]  mr-[0%]' src={INTROPILLAR} alt="background" />
                    </div>
                </div>

                <nav className=' bg-blak w-full text-white  flex flex-col  justify-between '>
                    <div className='flex w-full grow justify-between grow'>
                        <div className='flex gap-5 font-extrabold p-2  pb-4 text-xs bg-black'>
                            <button>
                                <img className='w-[100%] ' src={THREAD} alt="background" />
                            </button>
                            <button>
                                <img className='w-[100%] ' src={TWEET} alt="background" />
                            </button>
                            <button>
                                <img className='w-[100%] ' src={INSTA} alt="background" />
                            </button>
                        </div>

                        <div className='flex items-end  font-extrabold p-2   pb-4 text-xs bg-black'>
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

        </main>

    )


}