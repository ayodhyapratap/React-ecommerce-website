import React from 'react'

function CartSectio_Delivery() {
  return (
    <div className='hidden  md:flex  items-center mx-auto'>
        <div className="flex justify-between p-2">
        <div className='uppercase text-sm w-24 font-serif '>Delivery</div>
        <div className="container flex flex-col space-y-3 justify-center ml-3 items-center">
            <div className="flex mx-auto ml-2  rounded border p-1 justify-start">
                <input className='outline-none' placeholder='Enter a Pincode' type="text" />
                <button className='w-44 rounded text-orange-500 font-bold'>Apply</button>
            </div>
            <div className=" md:flex space-x-2 ">
                <div className="container flex border p-2 rounded justify-start w-auto items-center">

                <div>Qty</div>
                <select name="Qty" id="">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="4">4</option>
                    <option value="6">6</option>
                    <option value="8">8</option>
                    <option value="10">10</option>
                </select>
                </div>
                <button className='uppercase text-center border p-2 rounded  w-44'>Add To Cart</button>
                <button className='uppercase text-center border bg-orange-500 text-white p-2 rounded  w-44'>Buy NOW</button>

            </div>
        </div>

        </div>
        


    </div>
  )
}

export default CartSectio_Delivery