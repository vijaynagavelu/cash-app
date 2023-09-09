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
// import ARROW from './assets_Page1/ARROW.png'


export default function Page1() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };


    return (
        <main>

            <div className="App max-[700px]:hidden  flex flex-col w-full overflow-hidden items-center  bg-black h-screen text-white">

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

                    <div className='flex w-full  justify-between items-start text-white  floating-icon'>
                        <img className=' ml-[12%] w-[6%]' src={CUBE} alt="Phone" />
                        <img className='w-[15%] mr-[15%]' src={STAIRS} alt="Phone" />
                    </div>

                    <div className='-mt-[10%] -mb-[4%] -ml-[6%]  relative flex justify-center items-center text-white '>
                        <div className='w-[48%] flex flex-col items-center'>
                            <img className='w-[84%]' src={CASH} alt="Cash" />
                            <img className=' invisible w-[10%]' src={CASH} alt="Cash" />

                            <div className='w-[49%] absolute -top-[22%] left-[38.7%] '>
                                <img className='w-[48%]' src={PHONE} alt="Phone" />
                            </div>

                            <img className='relative w-[63%]' src={APP} alt="App" />
                        </div>
                    </div>

                    <div className='w-full -mb-[0%]  flex justify-between  items-start text-white  floating-icon'>
                        <img className='w-[14%] ml-[12%]' src={CUBES} alt="Phone" />
                        <img className='w-[22%]  mr-[22%]' src={INTROPILLAR} alt="Phone" />
                    </div>
                </div>

                <nav className='w-full text-white absolute bottom-0  flex justify-between items-center  px-14'>

                    <div className='flex '>
                        <ul className='flex gap-5 font-extrabold text-xs '>
                            <button className='flex hover:-translate-y-1 hover:scale-105 transition-all duration-700ms gap-2 items-end px-6 py-3.5 rounded-lg border-2 border-white bg-black'>
                                <span>
                                    <img className='w-[100%]' src={APPLE} alt="Phone" />
                                </span>APP STORE</button>
                            <button className='flex gap-2 hover:-translate-y-1 hover:scale-105 transition-all duration-700ms items-end px-4 py-3.5 rounded-lg border-2 border-white  bg-black'>
                                <span>
                                    <img className='w-[100%]' src={STORE} alt="Phone" />
                                </span>GOOGLE PLAY</button>
                        </ul>
                    </div>

                    {/* <div className='flex animate-bounce pr-2 pl-8'>
                    <img tabIndex={0} className='w-[100%]' src={ARROW} alt="Phone" />
                </div> */}

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

            <div className="AppMobile   flex flex-col w-full overflow-hidden items-center  bg-black h-screen text-white">

                <nav className='flex w-full px-[4%] py-[1%] items-center justify-between bg-gray-700'>

                    <div className='w-[5%]'>
                        <img className='w-[100%]' src={LOGO} alt="Logo" />
                    </div>

                    <div className="relative text-xl">
                        <button
                            className="text-[#00D54B]"
                            onClick={toggleMenu}
                        >
                            ☰ Menu
                        </button>
                        {menuOpen && (
                            <ul className="absolute text-base ml-3 mt-1 px-1 text-[#00D54B] bg-black border border-green-300 rounded shadow-lg">
                                <li>
                                    <button className="block border-b-[0.5px] border-gray-500   w-full">
                                        SIGN IN
                                    </button>
                                </li>
                                <li>
                                    <button className="block border-b-[0.5px] border-gray-500    w-full">
                                        LEGAL
                                    </button>
                                </li>
                                <li>
                                    <button className="block border-b-[0.5px] border-gray-500   w-full">
                                        LICENSES
                                    </button>
                                </li>
                                <li>
                                    <button className="block border-b-[0.5px] border-gray-500   w-full">
                                        SECURITY
                                    </button>
                                </li>
                                <li>
                                    <button className="block border-b-[0.5px] border-gray-500   w-full">
                                        CAREERS
                                    </button>
                                </li>
                                <li>
                                    <button className="block border-b-[0.5px] border-gray-500   w-full">
                                        PRESS
                                    </button>
                                </li>
                                <li>
                                    <button className="block border-b-[0.5px] border-gray-500   w-full">
                                        SUPPORT
                                    </button>
                                </li>
                                <li>
                                    <button className="block border-b-[0.5px] border-gray-500   w-full">
                                        STATUS
                                    </button>
                                </li>
                                <li>
                                    <button className="block border-b-[0.5px] border-gray-500   w-full">
                                        CODEBLOG
                                    </button>
                                </li>
                            </ul>
                        )}
                    </div>

                    <div className='w-[10%]'>
                        <img className='w-[100%] ml-[0%]' src={EYE} alt="Eye" />
                    </div>
                </nav>

                {/* <div className='w-full grow flex flex-col mt-[50%] justify-betwen '>

                    <div className='flex w-full  justify-between items-start text-white  floating-icon'>
                        <img className=' ml-[12%] w-[6%]' src={CUBE} alt="Phone" />
                        <img className='w-[15%] mr-[15%]' src={STAIRS} alt="Phone" />
                    </div>

                    <div className='-mt-[10%] -mb-[4%] -ml-[6%]  relative flex justify-center items-center text-white '>
                        <div className='w-[48%] flex flex-col items-center'>
                            <img className='w-[84%]' src={CASH} alt="Cash" />
                            <img className=' invisible w-[10%]' src={CASH} alt="Cash" />

                            <div className='w-[49%] absolute -top-[22%] left-[38.7%] '>
                                <img className='w-[48%]' src={PHONE} alt="Phone" />
                            </div>

                            <img className='relative w-[63%]' src={APP} alt="App" />
                        </div>
                    </div>

                    <div className='w-full -mb-[0%]  flex justify-between  items-start text-white  floating-icon'>
                        <img className='w-[14%] ml-[12%]' src={CUBES} alt="Phone" />
                        <img className='w-[22%]  mr-[22%]' src={INTROPILLAR} alt="Phone" />
                    </div>
                </div> */}

                {/* <nav className='w-full text-white absolute bottom-0  flex justify-between items-center  px-14'>

                    <div className='flex '>
                        <ul className='flex gap-5 font-extrabold text-xs '>
                            <button className='flex hover:-translate-y-1 hover:scale-105 transition-all duration-700ms gap-2 items-end px-6 py-3.5 rounded-lg border-2 border-white bg-black'>
                                <span>
                                    <img className='w-[100%]' src={APPLE} alt="Phone" />
                                </span>APP STORE</button>
                            <button className='flex gap-2 hover:-translate-y-1 hover:scale-105 transition-all duration-700ms items-end px-4 py-3.5 rounded-lg border-2 border-white  bg-black'>
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
                </nav> */}

            </div >

        </main>

    )


}