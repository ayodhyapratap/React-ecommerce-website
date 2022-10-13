import React from 'react'
import App from '../../App'
import Sticky from '../../Sticky'
import Topadsplash from '../../Topadsplash'
import Topnavigationsec from '../../Topnavigationsec'
import Adbasedcomponentes from './Adbasedcomponentes'
import Section2nd_2 from './Section2nd_2'
import Section2nd_3 from './Section2nd_3'

function Start2nd_p() {
  return (
    <>
    
    <Sticky />
    
    {/* mainSection */}

    <div className="flex">
    <div className="container hidden md:flex sticky-top mt-8 left-5 top-20 z-0 bottom-0 mx-auto h-[100vh] w-[20rem] px-2 bg-[#F3F4F6]  space-y-5 md:flex-col">
                <ul className=' space-y-2' ><p className='font-bold'>Short By</p>
                    <li className='flex flex-row text-center align-middle' ><div className='flex mx-2 mt-1 w-1 h-1 p-2 rounded-full justify-center border-2 bg-blue-500'></div> Relavence</li>
                    <li className='flex flex-row text-center align-middle' ><div className='flex mx-2 mt-1 w-1 h-1 p-2 rounded-full justify-center border-2 '></div> Relavence</li>
                    <li className='flex flex-row text-center align-middle' ><div className='flex mx-2 mt-1 w-1 h-1 p-2 rounded-full justify-center border-2 '></div> Relavence</li>
                    <li className='flex flex-row text-center align-middle' ><div className='flex mx-2 mt-1 w-1 h-1 p-2 rounded-full justify-center border-2 '></div> Relavence</li>
                    <li className='flex flex-row text-center align-middle' ><div className='flex mx-2 mt-1 w-1 h-1 p-2 rounded-full justify-center border-2 '></div> Relavence</li>
                    
                </ul>


                {/* second filter */}

                <ul className=' space-y-2' ><p className='font-bold'>Discount</p>
                    <li className='flex flex-row text-center align-middle' ><div className='flex mx-2 mt-1 w-1 h-1 p-2 rounded-full justify-center border-2 bg-blue-500'></div> 10% and Above (1036)</li>
                    <li className='flex flex-row text-center align-middle' ><div className='flex mx-2 mt-1 w-1 h-1 p-2 rounded-full justify-center border-2 '></div> 10% and Above (1036)</li>
                    <li className='flex flex-row text-center align-middle' ><div className='flex mx-2 mt-1 w-1 h-1 p-2 rounded-full justify-center border-2 '></div> 10% and Above (1036)</li>
                    <li className='flex flex-row text-center align-middle' ><div className='flex mx-2 mt-1 w-1 h-1 p-2 rounded-full justify-center border-2 '></div> 10% and Above (1036)</li>
                    <li className='flex flex-row text-center align-middle' ><div className='flex mx-2 mt-1 w-1 h-1 p-2 rounded-full justify-center border-2 '></div> 10% and Above (1036)</li>
                    
                </ul>
            </div>


      <div className='flex flex-col'>
        <Section2nd_2 />
    <Section2nd_3 />
    <Adbasedcomponentes />
      </div>
    </div>


    
    
    
    
    </>
  )
}

export default Start2nd_p