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


// import ARROW from './assets_Page1/ARROW.png'




export default function Page2() {



    return (
        <main>

            <div className="App_Page2 max-[701px]:hidden relative flex flex-col grow w-full overflow-hidden bg-white  h-screen text-white">

                <div className='w-full subPage2 flex justify-between  items-end text-white '>

                    <div className='flex items-end absolute w-[35%] -mb-[0%] '>
                        <div><img className='-ml-[18%]  w-[100%] -mb-[0%] mr-[0%]' src={COLUMNLEFT} alt="Phone" />  </div>
                        <div><img className='w-[100%] mb-[70%] ml-[70%]' src={SMALL} alt="Phone" /></div>
                        <div><img className='w-[100%] mb-[30%]  -ml-[100%]' src={MEDIUM} alt="Phone" /></div>
                    </div>

                    <div className='flex w-[50%]'>
                        <div className='absolute floating-icon 2xl:mt-[8%] text-left ml-[22%] w-[20%] xl:mt-[2%] lg:-mt-[4%] md:-mt-[16%] sm:-mt-[30%]  transition-all duration-500 ease-in-out '>
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

            <div className="App_Page2 min-[701px]:hidden relative flex flex-col grow w-full overflow-hidden bg-white  h-screen text-white">

                <div className='flex flex-col z-[0] mb-[50%] items-center w-[100%] '>

                    <div className='floating-icon text-left w-[100%] p-12 transition-all duration-500 ease-in-out '>
                        <label className='text-green-500 text-4xl'>Payments</label>
                        <p className='text-black text-lg  font-AgrandirNarrow '>Send and receive money with anyone, donate  to an important cause, or tip professionals.
                            Just enter a $cashtag, phone number, or
                            scan their  QR code to pay. </p>
                    </div>
                    <div><img className='w-[100%] scale-125' src={PHPAY} alt="Phone" />  </div>

                </div>

                <div className='w-full subPage2Mobile flex justify-end  text-white '>
                    <div className='flex absolute   w-[80%] -ml-[10%] left-0 bottom-0'>
                        <div><img className='w-[100%] ml-[70%] mt-[60%]' src={LARGE} alt="Phone" /></div>
                        <div><img className='w-[100%] -ml-[70%]' src={COLUMNLEFT} alt="Phone" /></div>
                    </div>

                    <div className='flex  items-end  w-[65%]'>
                        <div><img className=' w-[100%] ml-[30%] mb-[40%]' src={MEDIUM} alt="Phone" />  </div>
                        <div><img className='w-[100%] ' src={COLUMNLEFT} alt="Phone" /></div>
                    </div>
                </div>

            </div >
        </main>
    )
}