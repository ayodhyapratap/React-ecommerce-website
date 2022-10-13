import React from 'react'

function Sectoion6() {
  return (
    <div className='container my-3 mx-auto'>
        <div className="md:flex md:space-x-2 justify-center items-center">
                            {/* first section image */}
                <div className="container rounded mx-auto md:w-[50%] p-1 relative">
                    <img className='brightness-50 rounded' src="https://sopha.co.uk/wp-content/uploads/2020/12/Sopha-Galaxy-Small-Sofa-Stock-in-Charcoal.jpg" alt="" />
                    <div className="container justify-center text-white my-4 flex flex-col bottom-0 absolute">
                        <p className='text-center px-1 text-2xl font-semibold font-serif'>
                            Can't fall asleep? 
                            <br />
                            Don't blame it on love.
                            <br />
                            <span className='font-bold px-1 text-center text-xl'>your probably need a new matteress.</span>
                        </p>
                        <div className="transition-transform hover:scale-105  container font-bold bg-orange-400 w-[30%] rounded shadow m-2 p-2 mx-auto flex justify-center itmes-center uppercase text-center">
                            Upgrade Now

                        </div>

                    </div>

                </div>
                {/* Second image */}

                <div className="container rounded md:ml-0 md:mx-auto md:w-[50%] p-1 relative">
                    <img className='brightness-50 h-[20rem] md:h-[418px] w-full rounded md:w-[628px]' src="https://m.media-amazon.com/images/I/61cjoh5+0oL._SL1500_.jpg" alt="" />
                    <div className="container justify-center text-white my-4 flex flex-col bottom-0 absolute">
                        <p className='text-center px-1 text-2xl font-semibold font-serif'>
                            Adulting made easy. 
                            <br />
                            Well, short of
                            <br />
                            <span className='font-bold text-center px-1 text-xl'>Up to 60% off on Appliances.</span>
                        </p>
                        <div className="transition-transform hover:scale-105 container font-bold bg-orange-400 w-[30%] rounded shadow m-2 p-2 mx-auto flex justify-center itmes-center uppercase text-center">
                            Shop Now

                        </div>

                    </div>

                </div>

        </div>
    
    
    
    </div>
  )
}

export default Sectoion6