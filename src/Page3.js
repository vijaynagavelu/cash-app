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
            <div className="App_Page3 max-[701px]:hidden  relative flex w-full overflow-hidden bg-[#00d54b]  h-screen text-white">

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


            <div className="App_Page3 min-[701px]:hidden  relative flex w-full overflow-hidden bg-[#00d54b]  h-screen text-white">

                <div className='w-full flex grow justify-between  text-white '>

                    <div className='flex flex-col  justify-between items-center abslute w-[50%]'>
                        <div><img className='w-[100%]' src={BANKINGHOLE} alt="Phone" /></div>
                        <div><img className='w-[80%]' src={BANKINGCOLUMN} alt="Phone" /></div>
                        <div><img className='w-[75%] pl-4' src={BANKINGSTAIRS2} alt="Phone" />  </div>
                    </div>


                    <div className='flex flex-col justify-between items-center absoute w-[50%]  '>
                        <div className=' floating-icon  w-[100%]  pt-32 text-left  transition-all duration-500 ease-in-out transition-transform'>
                            <label className='text-white text-4xl mb-[10%]'>Banking</label>
                            <p className='text-black text-lg mt-[2%] font-AgrandirNarrow '>Receive your paycheck, tax returns, and other direct deposits up to two days early using your Cash App routing
                                and account number. </p>
                        </div>

                        <div><img className='w-[100%] ' src={BANKINGPHONE} alt="Phone" />  </div>
                        <div><img className='w-[60%] ' src={BANKINGTUBE} alt="Phone" /></div>
                    </div>


                    <div className='flex flex-col relative justify-between items-center pr-4 w-[40%]  abslute'>
                        <div><img className='w-[100%] absolute right-0 mr-4' src={BANKINGTRACK2} alt="Phone" /></div>
                        <div><img className='w-[100%] ' src={BANKINGSTAIRS1} alt="Phone" /></div>
                        <div><img className='w-[100%] pb-12' src={BANKINGMONSTER} alt="Phone" />  </div>
                    </div>

                </div>
            </div >
        </main >
    )
}