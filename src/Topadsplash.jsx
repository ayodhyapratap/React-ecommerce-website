import React,{useState} from 'react'

function Topadsplash() {
  const [click, setclick] = useState(true);
  const click1=()=> setclick(!click);




  return (
   <div className={click?"hidden md:block container-full bg-red-400 mx-auto":"hidden"}>
    <div className="flex relative justify-center items-center text-white text-center">
            <p className='relative'>Light up your home upto 50% off 
            
            <div className="flex w-auto justify-center items-center">
            <svg onClick={click1} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" text-gray-400 w-6 h-6 -right-10 top-0 mx-2 absolute">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>

            </div>
            </p>


        
    </div>
   </div>
  )
}

export default Topadsplash