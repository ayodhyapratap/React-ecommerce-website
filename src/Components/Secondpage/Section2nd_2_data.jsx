import React,{useState} from 'react'
import { Link } from 'react-router-dom';

function Section2nd_2_data() {
        const [onhover, setonhover] = useState(false);
        const absolute = ()=> {setonhover(!onhover); console.log(onhover)};
        const [onhover1, setonhover1] = useState(false);
        const absolute1 = ()=> {setonhover1(!onhover1); };
        const [onhover2, setonhover2] = useState(false);
        const absolute2= ()=> {setonhover2(!onhover2); };
  return (
    <> 
    {/* data_1 */}
    <div className="container flex flex-col hover:shadow p-1  justify-center my-5 md:h-[25rem] items-center relative  " onMouseEnter={absolute} onMouseLeave={absolute}>

                                {/* faverite icon for mobile view */}

                                <div className='absolute  hover:text-orange-700 text-orange-300 transition-transform md:hidden hover:scale-105 top-3 right-1 flex w-auto mx-auto justify-end   '>
                                <i  className=" fa-regular fa-heart px-2"></i>
                                </div >

                                {/* faverite icon end */}

                          <Link to="/cart">  <div>
                            <img className='md:w-[22vw] p-1 md:h-60 ' src="https://sopha.co.uk/wp-content/uploads/2020/12/Sopha-Galaxy-Small-Sofa-Stock-in-Charcoal.jpg" alt="" />
                        </div></Link>
                        <div className="w-[180px] md:w-[300px]   font-bold text-normal font-sarif">
                            Cheshire 3 Seater Vevlet Sofa in Teal Blue Colour Ambrevilla
                        </div>
                        <div className="w-[180px] md:w-[300px]  font-bold text-normal font-sarif">
                        
                        
                        <div className="flex text-xs font-sans text-gray-800 text-center  mx-auto truncate space-x-2">
                    <span className='line-through  text-gray-400'>
                        <div className="flex  mx-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-currency-rupee -mx-1" viewBox="0 0 16 16">
                            <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
                        </svg>
                            66,299</div>
                        </span>
                        <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-currency-rupee -mx-1" viewBox="0 0 16 16">
                            <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
                        </svg>
                        38453

                        </div>
                    </div>


                        </div>

                        <div className='w-[180px] md:w-[300px]  font-bold text-sm font-sarif text-green-500'>38% off</div>
                        <div className='w-[180px] md:w-[300px] font-bold text-xs font-sarif text-gray-400'>ship in 1 day</div>
                            
                            {/* absolute order button */}
                        <div className= {onhover?"container hidden md:flex  absolute left-0 bottom-0 top-2 right-2 flex-col  ": "hidden"}>
                            <div className="md:flex hidden  justify-end items center absolute top: right-2 md:right-5 md:top-9 bg-slate-300 rounded p-1 transition-transform hover:scale-105">
                                <div className='flex justify-end   '>
                                <i  className=" fa-regular fa-heart px-2"></i>
                                </div >
                                <p className='text-center hidden md:flex truncate align-middle text-sm font-serif text-orange-500 capitalize'>add to wishlist</p>
                            </div>
                            <div className="absolute flex -bottom-4 w-[2rem] md:w-[7rem]  left-4 bg-slate-300 rounded text-center md:p-1 md:px-2 transition-transform hover:scale-105 hover:text-orange-500">
                                <div className=' mx-auto hidden md:flex text-center  justify-center ' ><i className="fa-solid  fa-plus"></i></div>
                                <div className="hidden md:flex truncate text-sm text-center ">
                                    Add to cart

                                </div>
                            </div>
                            <div className="absolute hidden md:flex -bottom-4 right-5 bg-slate-300 rounded p-1 md:px-3 transition-transform hover:scale-105 hover:text-orange-500">
                                <div className="md:flex  truncate  w-[6rem] md:w-[7rem] text-sm text-center md:px-3">
                                <Link to="/cart">  View Product </Link>

                                </div>
                            </div>
                        </div>


                </div>

                {/* data_2 */}
                <div className="container hover:shadow flex flex-col justify-center my-5 p-1 md:h-[25rem] items-center relative  " onMouseEnter={absolute1} onMouseLeave={absolute1}>

                                {/* faverite icon for mobile view */}

                                <div className='absolute  hover:text-orange-700 text-orange-300 md:hidden transition-transform hover:scale-105 top-3 right-1 flex w-auto mx-auto justify-end   '>
                                <i  className=" fa-regular fa-heart px-2"></i>
                                </div >

                                {/* faverite icon end */}


                        <Link to="/cart">  <div>
                            <img className='md:w-[22vw] md:h-60 p-1 ' src="https://sopha.co.uk/wp-content/uploads/2020/12/Sopha-Galaxy-Small-Sofa-Stock-in-Charcoal.jpg" alt="" />
                        </div></Link>
                        <div className="w-[180px] md:w-[300px]   font-bold text-normal font-sarif">
                            Cheshire 3 Seater Vevlet Sofa in Teal Blue Colour Ambrevilla
                        </div>
                        <div className="w-[180px] md:w-[300px]  font-bold text-normal font-sarif">
                        
                        
                        <div className="flex text-xs font-sans text-gray-800 text-center  mx-auto truncate space-x-2">
                    <span className='line-through  text-gray-400'>
                        <div className="flex  mx-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-currency-rupee -mx-1" viewBox="0 0 16 16">
                            <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
                        </svg>
                            66,299</div>
                        </span>
                        <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-currency-rupee -mx-1" viewBox="0 0 16 16">
                            <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
                        </svg>
                        38453

                        </div>
                    </div>


                        </div>

                        <div className='w-[180px] md:w-[300px]  font-bold text-sm font-sarif text-green-500'>38% off</div>
                        <div className='w-[180px] md:w-[300px] font-bold text-xs font-sarif text-gray-400'>ship in 1 day</div>

                            {/* absolute order button */}
                        <div className= {onhover1?"container hidden md:flex  absolute left-0 bottom-0 top-2 right-2 flex-col  ": "hidden"}>
                            <div className="md:flex hidden justify-end items center absolute top: right-2 md:right-5 md:top-9 bg-slate-300 rounded p-1 transition-transform hover:scale-105">
                                <div className='flex justify-end   '>
                                <i  className=" fa-regular fa-heart px-2"></i>
                                </div >
                                <p className='text-center hidden md:flex truncate align-middle text-sm font-serif text-orange-500 capitalize'>add to wishlist</p>
                            </div>
                            <div className="absolute flex -bottom-4 w-[2rem] md:w-[7rem]  left-4 bg-slate-300 rounded text-center md:p-1 md:px-2 transition-transform hover:scale-105 hover:text-orange-500">
                                <div className=' mx-auto hidden md:flex text-center  justify-center ' ><i className="fa-solid  fa-plus"></i></div>
                                <div className="hidden md:flex truncate text-sm text-center ">
                                    Add to cart

                                </div>
                            </div>
                            <div className="absolute hidden md:flex -bottom-4 right-5 bg-slate-300 rounded p-1 md:px-3 transition-transform hover:scale-105 hover:text-orange-500">
                                <div className="md:flex  truncate  w-[6rem] md:w-[7rem] text-sm text-center md:px-3">
                                <Link to="/cart">  View Product </Link>

                                </div>
                            </div>
                        </div>


                </div>
                {/* data_3 */}
                <div className="container hover:shadow flex flex-col justify-center p-1 my-5 md:h-[25rem] items-center relative  " onMouseEnter={absolute2} onMouseLeave={absolute2}>


                                {/* faverite icon for mobile view */}

                                <div className='absolute  hover:text-orange-700 text-orange-300 transition-transform hover:scale-105 top-3 right-1 flex md:hidden w-auto mx-auto justify-end   '>
                                <i  className=" fa-regular fa-heart px-2"></i>
                                </div >

                                {/* faverite icon end */}


                        <Link to="/cart">  <div>
                            <img className='md:w-[22vw] md:h-60 p-1 ' src="https://sopha.co.uk/wp-content/uploads/2020/12/Sopha-Galaxy-Small-Sofa-Stock-in-Charcoal.jpg" alt="" />
                        </div></Link>
                        <div className="w-[180px] md:w-[300px]   font-bold text-normal font-sarif">
                            Cheshire 3 Seater Vevlet Sofa in Teal Blue Colour Ambrevilla
                        </div>
                        <div className="w-[180px] md:w-[300px]  font-bold text-normal font-sarif">
                        
                        
                        <div className="flex text-xs font-sans text-gray-800 text-center  mx-auto truncate space-x-2">
                    <span className='line-through  text-gray-400'>
                        <div className="flex  mx-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-currency-rupee -mx-1" viewBox="0 0 16 16">
                            <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
                        </svg>
                            66,299</div>
                        </span>
                        <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-currency-rupee -mx-1" viewBox="0 0 16 16">
                            <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
                        </svg>
                        38453

                        </div>
                    </div>


                        </div>

                        <div className='w-[180px] md:w-[300px]  font-bold text-sm font-sarif text-green-500'>38% off</div>
                        <div className='w-[180px] md:w-[300px] font-bold text-xs font-sarif text-gray-400'>ship in 1 day</div>

                            {/* absolute order button */}
                        <div className= {onhover2?"container  hidden md:flex  absolute left-0 bottom-0 top-2 right-2 flex-col  ": "hidden"}>
                            <div className="md:flex hidden justify-end items center absolute top: right-2 md:right-5 md:top-9 bg-slate-300 rounded p-1 transition-transform hover:scale-105">
                                <div className='flex justify-end   '>
                                <i  className=" fa-regular fa-heart px-2"></i>
                                </div >
                                <p className='text-center hidden md:flex truncate align-middle text-sm font-serif text-orange-500 capitalize'>add to wishlist</p>
                            </div>
                            <div className="absolute flex -bottom-4 w-[2rem] md:w-[7rem]  left-4 bg-slate-300 rounded text-center md:p-1 md:px-2 transition-transform hover:scale-105 hover:text-orange-500">
                                <div className=' mx-auto hidden md:flex text-center  justify-center ' ><i className="fa-solid  fa-plus"></i></div>
                                <div className="hidden md:flex truncate text-sm text-center ">
                                    Add to cart

                                </div>
                            </div>
                            <div className="absolute hidden md:flex -bottom-4 right-5 bg-slate-300 rounded p-1 md:px-3 transition-transform hover:scale-105 hover:text-orange-500">
                                <div className="md:flex  truncate  w-[6rem] md:w-[7rem] text-sm text-center md:px-3">
                                <Link to="/cart">  View Product </Link>

                                </div>
                            </div>
                        </div>


                </div>
    
    
    </>
  )
}

export default Section2nd_2_data