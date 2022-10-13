import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


 const slider = [
             <div className="relative container   p-2 flex">
                <img className='h-[100%] md:w-[75vw] m-1  md:m-0' src="https://images.pexels.com/photos/90317/pexels-photo-90317.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <div className="absolute left-10 bottom-14 flex flex-col">
                <h1 className='font-bold font-serif text-xl md:text-5xl  text- text-gray-600' style={{"text-shadow": "0 0 3px #ffffff, 0 0 5px #0000FF"}}>Wake up  next to your</h1>
                <p className='md:text-4xl text-sm font-serif  text-gray-600'style={{"text-shadow": "0 0 3px #ffffff, 0 0 5px #0000FF"}}>Favourite person every day</p>
                <p className='font-bold font-sarif my-5 text-sm md:text-2xl  text-gray-600'style={{"text-shadow": "0 0 3px #ffffff, 0 0 5px #0000FF"}}>Up to 60% Off on Beds</p>
                <div className="container p-1 text-sm md:text-base text-center transition-transform hover:scale-x-105 w-[5rem] md:w-[10rem] md:p-2 cursor-pointer shadow-lg hover:bg-slate-300 rounded bg-white">Shop Now</div>

            </div>
                </div>,

                <div className="relative container   p-2 flex">
                <img className='h-[100%] md:w-[75vw] m-1  md:m-0' src="https://images.pexels.com/photos/90317/pexels-photo-90317.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <div className="absolute left-10 bottom-14 flex flex-col">
                <h1 className='font-bold font-serif text-xl md:text-5xl  text- text-gray-600' style={{"text-shadow": "0 0 3px #ffffff, 0 0 5px #0000FF"}}>Wake up  next to your</h1>
                <p className='md:text-4xl text-sm font-serif  text-gray-600'style={{"text-shadow": "0 0 3px #ffffff, 0 0 5px #0000FF"}}>Favourite person every day</p>
                <p className='font-bold font-sarif my-5 text-sm md:text-2xl  text-gray-600'style={{"text-shadow": "0 0 3px #ffffff, 0 0 5px #0000FF"}}>Up to 60% Off on Beds</p>
                <div className="container p-1 text-sm md:text-base text-center transition-transform hover:scale-x-105 w-[5rem] md:w-[10rem] md:p-2 cursor-pointer shadow-lg hover:bg-slate-300 rounded bg-white">Shop Now</div>

                </div>
                </div>,

            // sider3

            <div className="relative container   p-2 flex">
            <img className='h-[100%] md:w-[75vw] m-1  md:m-0' src="https://images.pexels.com/photos/90317/pexels-photo-90317.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <div className="absolute left-10 bottom-14 flex flex-col">
            <h1 className='font-bold font-serif text-xl md:text-5xl  text- text-gray-600' style={{"text-shadow": "0 0 3px #ffffff, 0 0 5px #0000FF"}}>Wake up  next to your</h1>
            <p className='md:text-4xl text-sm font-serif  text-gray-600'style={{"text-shadow": "0 0 3px #ffffff, 0 0 5px #0000FF"}}>Favourite person every day</p>
            <p className='font-bold font-sarif my-5 text-sm md:text-2xl  text-gray-600'style={{"text-shadow": "0 0 3px #ffffff, 0 0 5px #0000FF"}}>Up to 60% Off on Beds</p>
            <div className="container p-1 text-sm md:text-base text-center transition-transform hover:scale-x-105 w-[5rem] md:w-[10rem] md:p-2 cursor-pointer shadow-lg hover:bg-slate-300 rounded bg-white">Shop Now</div>

        </div>
            </div>,
 ]

function Adbasedcomponentes() {
  return (
    <div className='container  flex justify-center items.center mx-auto p-1 my-4 '>
        <div className="contianer mx-auto w-auto   justify-center md:flex">

            {/* slider */}
            <div id="carouselExampleControls" className="carousel slide relative mr-1 md:w-[55vw]" data-bs-ride="carousel">
                <div className="carousel-inner relative w-full overflow-hidden">
                    <div className="carousel-item active duration-150 relative float-left w-full">
                        {slider[0]}
                    </div>
                    <div className="carousel-item relative duration-150  float-left w-full">
                            {slider[1]}
                    </div>
                    <div className="carousel-item relative duration-150  float-left w-full">
                    {slider[2]}
                    </div>
                </div>
                <button
                    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next w-auto absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
        
                
            <div className="container w-auto grid grid-flow-row grid-cols-1 gap-1  grid-rows-2 m-1">
                <div className='md:w-60 m-2'>
                <img className='h-full ' src="https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />

                </div>
                <div className='md:w-60 m-2'>
                <img className='h-full ' src="https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </div>

            </div>
        </div>

    </div>
  )
}

export default Adbasedcomponentes




{/* <img className='h-full w-[190px]' src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <img className='h-full w-[190px]' src="https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <img className='h-full w-[190px]' src="https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <img className='h-full w-[190px]' src="https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /> */}


{/* <div className="relative container w-[56vw]  p-2 flex">
            <img className='h-[100%] w-[75vw]' src="https://images.pexels.com/photos/90317/pexels-photo-90317.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <div className="absolute left-10 top-10 flex flex-col">
                <h1 className='font-bold font-serif text-5xl'>Wake up  next to your</h1>
                <p className='text-4xl font-serif'>Favourite person every day</p>
                <p className='font-bold font-sarif my-5 text-2xl'>Up to 60% Off on Beds</p>
                <div className="container text-center transition-transform hover:scale-x-105 w-[10rem] p-2 cursor-pointer shadow-lg hover:bg-slate-300 rounded bg-white">Shop Now</div>

            </div>
                </div> */}