import React from 'react'

function Cart_Section_more_details_offer() {
  return (
    <>
    <div className='hidden md:flex flex-col justify-center  items-center p-2 '>
        <div className="flex ">
            <div className="flex mr-2 text-start ">
                More Offer
            </div>
            {/* offer container list */}
            <div className="container flex  px-2 flex-col">
                {/* data offer and vouchers 1 */}
                <div className=" text-sm font-bold font-serif">
                    <p className='text-sm'>Extra 10% off on HDFC Card Code:HDFCYDFG10</p>
                    <p className='text-xs text-gray-400'>Extra 10% off on 6 Month No Cost EMI on HDFC bank CC&DC Transaction Max Discount of Rs. 3500!</p>
                </div>

                {/* data offer and vouchers 2 */}
                <div className=" text-sm font-bold font-serif">
                    <p className='text-sm'>Extra 10% off on HDFC Card Code:HDFCYDFG10</p>
                    <p className='text-xs text-gray-400'>Extra 10% off on 6 Month No Cost EMI on HDFC bank CC&DC Transaction Max Discount of Rs. 3500!</p>
                </div>

                {/* data offer and vouchers 3 */}
                <div className=" text-sm font-bold font-serif">
                    <p className='text-sm'>Extra 10% off on HDFC Card Code:HDFCYDFG10</p>
                    <p className='text-xs text-gray-400'>Extra 10% off on 6 Month No Cost EMI on HDFC bank CC&DC Transaction Max Discount of Rs. 3500!</p>
                </div>
                <button className='ml-0 text-orange-500 rounded w-20 text-start py-1 text-sm '>See All(4)</button>

            </div>
        </div>

            

    </div>
    <Cart_Details />
    
    </>
  )
}

export default Cart_Section_more_details_offer





export function Cart_Details() {
  return (
    <div className='hidden md:flex flex-col w-auto  items-center p-2 '>
        <div className="flex justify-start space-x-9">
            <div className="flex mx-2  w-17 ml-0 text-start  ">
                Details
            </div>
            {/* offer container list */}
            <div className=" flex w-[30rem] flex-col">
                {/* data offer and vouchers 1 */}
                <div className="grid grid-flow-row justify-items-start items-start grid-cols-2 gap-2  text-start">
                        <div className='text-sm text-gray-500 font-serif' >
                            <p >Brand</p>
                            <p className='text-gray-700'>Woodswarth</p>
                        </div>
               {/* col2 */}
                        <div className='text-sm text-gray-500 font-serif' >
                            <p>Dimension(in Inches)</p>
                            <p className='text-gray-700'>Woodswarth</p>
                        </div>
                        {/* 2nd row */}


                        <div className='text-sm text-gray-500 font-serif' >
                            <p>Weight</p>
                            <p className='text-gray-700'>54 KG</p>
                        </div>
               {/* col2 */}
                        <div className='text-sm text-gray-500 font-serif' >
                            <p>Warranty </p>
                            <p className='text-gray-700'>36 months Warranty</p>
                        </div>

                        {/* 3rd row */}

                        <div className='text-sm text-gray-500 font-serif' >
                            <p>Room Type</p>
                            <p className='text-gray-700'>Living Room</p>
                        </div>
               {/* col2 */}
                        <div className='text-sm text-gray-500 font-serif' >
                            <p>Collection</p>
                            <p className='text-gray-700'>Miranda</p>
                        </div>

                        {/* 4th row */}

                        <div className='text-sm text-gray-500 font-serif' >
                            <p>Assembly</p>
                            <p className='text-gray-700'>Carpanter Assembly</p>
                        </div>
               {/* col2 */}
                        <div className='text-sm text-gray-500 font-serif' >
                            <p>Primary Material</p>
                            <p className='text-gray-700'>Fabric</p>
                        </div>

                        {/* see more- details information */}

                        <button className='font-serif font-bold text-sm text-orange-500 my-2'>See More Informations</button>










                

            </div>

            </div>
        </div>

            

    </div>



    
  )
}

        // <div className="flex justify-between">
        //     <div className=" flex mx-auto ml-0  text-start ">
        //         More Offer
        //     </div>
        //     {/* details material- order dipscription list */}
            // <div className="grid grid-flow-row grid-cols-2 mx-auto">
            //    <div className='text-sm text-gray-500 font-serif' >
            //     <p>Brand</p>
            //     <p>Woodswarth</p>
            //    </div>
            //    {/* col2 */}
            //    <div className='text-sm text-gray-500 font-serif' >
            //     <p>Dimension(in Inches)</p>
            //     <p>Woodswarth</p>
            //    </div>




                

            // </div>
        // </div>
