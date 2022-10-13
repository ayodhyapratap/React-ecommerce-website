import React from 'react'

function Section7() {
  return (
    <div className="container md:px-3 md:mx-auto my-8 flex">
        <div className="flex-flex-col mx-auto p-1 items-center justify-center">
            <h1 className='font-bold text-center text-xl md:text-2xl my-4 font-serif uppercase'>Sign up and get a chance to win the giveway of the week</h1>
            <div className="flex flex-row mx-auto justify-center md:space-x-2 my-4 items-center">
                <div>
                    <input className='px-4 p-2' type="text" name="" id="" placeholder='Your Email Id'/>
                </div>
                <div>
                    <button className='uppercase text-xl p-2 rounded font-bold bg-blue-600 text-white hover:scale-105 hover:bg-blue-500' >Subscribe</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section7