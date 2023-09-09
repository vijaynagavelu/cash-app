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

export default function Page4() {

    return (
        <main>

            <div className="App_Page4 max-[701px]:hidden  relative flex w-full overflow-hidden bg-black  h-screen text-white">

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


                    <div className='absolute floating-icon  2xl:w-[20%]  2xl:mt-[18%] 2xl:ml-[20%] text-left sm:mt-[20%] sm:ml-[10%] sm:w-[33%] transition-all duration-500 ease-in-out '>
                        <label className='text-[#00d54b] text-4xl mb-[10%]'>Cash Card & Boost</label>
                        <p className='text-white text-base mt-[2%] font-AgrandirNarrow '>Receive your paycheck, tax returns, and other direct deposits up to two days early using your Cash App routing
                            and account number. </p>
                    </div>

                    <div className='flex flex-col justify-end items-center right-0 bottom-0 w-[64%] -ml-[80%] '>
                        <div><img className='w-[100%] -ml-[0%]  -mb-[0%]' src={BOOSTSTAIRS1} alt="Phone" /></div>
                    </div>

                </div>
            </div>

            <div className="App_Page4 min-[701px]:hidden  relative flex w-full overflow-hidden bg-black  h-screen text-white">

                <div className='w-full flex grow justify-between  text-white '>

                    <div className='flex grow justify-en items-end z-[51]  w-[100%]  ml-[0%] '>
                        <div><img className='w-[70%] mb-[30%]' src={BOOSTPHONE} alt="Phone" />  </div>
                        <div><img className='w-[100%] mb-[280%] -ml-[30%]  floating-icon' src={BURGER} alt="Phone" /></div>
                        <div className='scale-[2]'><img className='w-[100%] mb-[185%] -ml-[10%] floating-icon' src={COFFEE} alt="Phone" /></div>
                        <div><img className='w-[100%]  mb-[410%] -ml-[90%] floating-icon' src={CARD} alt="Phone" /></div>
                        <div><img className='w-[100%] -ml-[80%] mb-[600%] floating-icon' src={HAND} alt="Phone" /></div>
                        <div><img className='w-[100%] mb-[200%] floating-icon' src={BOOSTSHOE} alt="Phone" /></div>
                    </div>


                    <div className='absolute floating-icon p-10  text-left transition-all duration-500 ease-in-out '>
                        <label className='text-[#00d54b] text-4xl mb-[10%]'>Cash Card & Boost</label>
                        <p className='text-white text-lg mt-[2%] font-AgrandirNarrow '>Receive your paycheck, tax returns, and other direct deposits up to two days early using your Cash App routing
                            and account number. </p>
                    </div>

                    <div className='flex absolute flex-col justify-end items-center right-0 bottom-0 w-[120%] -ml-[80%] '>
                        <div><img className='w-[100%] -ml-[0%]  -mb-[0%]' src={BOOSTSTAIRS1} alt="Phone" /></div>
                    </div>

                </div>
            </div>

        </main>
    )
}