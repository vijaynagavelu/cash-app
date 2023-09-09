import './App.css';
import './index.css';

import LARGE from './assets_Page2/pillar-large.png'
import MEDIUM from './assets_Page2/pillar-medium.png'
import SMALL from './assets_Page2/pillar-small.png'
import COLUMN from './assets_Page2/payments-column.png'
import COLUMNLEFT from './assets_Page2/payments-column-left.png'
import COLUMNCENTER from './assets_Page2/payments-column-center.png'
import MEDIUMSHORT from './assets_Page2/pillar-medium-short.png'
import PHPAY from './assets_Page2/phone-payments.png'

import EYE from './assets_Page1/eye.png'
import LOGO from './assets_Page1/logo.png'
import { useState } from 'react';
// import ARROW from './assets_Page1/ARROW.png'




export default function Page2() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <main>

            <div className="App_Page2 max-[700px]:hidden relative flex flex-col grow w-full overflow-hidden bg-white  h-screen text-white">

                <div className='w-full subPage2 flex justify-between  items-end text-white '>

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