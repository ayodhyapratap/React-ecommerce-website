import React from 'react'

function NewSection1() {
  return (
    <div className="container-full bg-white px-3 md:px-10 md:h-[60vh] my-3 mx-auto">
            <div className=" md:flex  justify-center  my-7 items-center">
                <div className="flex flex-col my-auto items-center align-middle space-y-2 text-center ">
                    <div className="text-3xl  m-4 py-2 capitalize font-sans">We've got your Style</div>
                    <div className="text-normal font-serif">
                        Your Home reflection of you. Nail your aesthetic
                        <br />
                        with products our styles love and recommend
                    </div>

                </div>
                {/* Second Sectin div */}

                <div className="container mx-auto w-auto text-center my-2 md:my-0 flex md:flex-col items-center justify-center">
                    <div className="contianer-full md:w-[29vw]">

                    <img className='h-[18rem] w-[100vw] md:w-[29vw] my-2 md:mx-auto ' src="https://www.ulcdn.net/images/products/159172/product/Thorpe_Upholstered_Storage_Bed_Queen_LP.jpg?1510822520" alt="" />
                    <div className="flex text-3xl  mx-auto  capitalize font-sans">Mordern</div>

                    <div className=" flex mx-auto text-xl font-serif">
                        Form Meet Function
                    </div>
                    </div>
                    

                </div>

                {/* Third section */}
                <div className="container w-auto mx-auto my-2 md:my-0 text-center flex flex-col items-center justify-center">
                    <div className="contianer md:w-[29vw]">

                    <img className='h-[18rem] w-[100vw] md:w-[29vw] my-2 mx-auto ' src="https://www.ulcdn.net/images/products/149928/product/lp_2.jpg?1548906916" alt="" />
                    <div className="flex text-3xl  mx-auto  capitalize font-sans">Traditional</div>

                    <div className=" flex mx-auto text-xl font-serif">
                        Old World Charm
                    </div>
                    </div>
                    

                </div>





            </div>


    </div>
  )
}

export default NewSection1