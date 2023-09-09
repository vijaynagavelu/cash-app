import './App.css';
import './index.css';

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

import EYE from './assets_Page1/eye.png'
import LOGO from './assets_Page1/logo.png'
import { useState } from 'react';


export default function Page3() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };


    return (

        <main>
            <div className="App_Page3  relative flex w-full overflow-hidden bg-[#00d54b]  h-screen text-white">

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
            </div >


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
        </main >
    )
}