import './App.css';
import './index.css';

import BURGER from './assets_Page4/boost-burger.png'
import CARD from './assets_Page4/boost-card.png'
import COFFEE from './assets_Page4/boost-coffee.png'
import HAND from './assets_Page4/boost-hand.png'
import BOOSTPHONE from './assets_Page4/boost-phone.png'
import BOOSTSHOE from './assets_Page4/boost-shoe.png'
import BOOSTSTAIRS1 from './assets_Page4/boost-stairs-1.png'
import BOOSTSTAIRS2 from './assets_Page4/boost-stairs-2.png'


import EYE from './assets_Page1/eye.png'
import LOGO from './assets_Page1/logo.png'
import { useState } from 'react';

export default function Page4() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <main>

            <div className="App_Page4  snap-center relative flex w-full overflow-hidden bg-black  h-screen text-white">

                <div className='w-full flex grow justify-between  text-white '>

                    <div className='flex flex-col  justify-end items-center absoute bottom-0 w-[34%]'>
                        <div><img className='w-[80%] ' src={BOOSTSTAIRS2} alt="Phone" /></div>
                    </div>

                    <div className='flex justify-end items-end z-[51]  w-[80%]  ml-[0%] '>
                        <div><img className='w-[50%] ml-[25%] mb-[20%] ' src={BOOSTPHONE} alt="Phone" />  </div>
                        <div><img className='w-[55%] -ml-[20%] mb-[200%] floating-icon' src={BURGER} alt="Phone" /></div>
                        <div><img className='w-[100%] -ml-[80%] mb-[150%] floating-icon' src={COFFEE} alt="Phone" /></div>
                        <div><img className='w-[65%] -ml-[110%] mb-[280%] floating-icon' src={CARD} alt="Phone" /></div>
                        <div><img className='w-[60%] -ml-[130%] mb-[410%] floating-icon' src={HAND} alt="Phone" /></div>
                        <div><img className='w-[60%] -ml-[85%] mb-[140%] floating-icon' src={BOOSTSHOE} alt="Phone" /></div>
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
            </div>

            <div className="AppMobile hidden  flex flex-col w-full overflow-hidden items-center  bg-black h-screen text-white">

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