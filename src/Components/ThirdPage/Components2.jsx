import React from 'react'
import hotel from "./svgIcon/hotel-svgrepo-com.svg"
import hotel2 from "./svgIcon/hotel.png"
import office from "./svgIcon/office-building.png"
import restorant from "./svgIcon/restaurant-plate-svgrepo-com.svg"
import worker from "./svgIcon/worker-builder-svgrepo-com.svg"
import warehouse from "./svgIcon/warehouse-svgrepo-com.svg"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import "./Componenet2.css"
import Components3_ from './Components3_'

const City = {
  "AN":"Andaman and Nicobar Islands",
  "AP":"Andhra Pradesh",
  "AR":"Arunachal Pradesh",
  "AS":"Assam",
  "BR":"Bihar",
  "CG":"Chandigarh",
  "CH":"Chhattisgarh",
  "DN":"Dadra and Nagar Haveli",
  "DD":"Daman and Diu",
  "DL":"Delhi",
  "GA":"Goa",
  "GJ":"Gujarat",
  "HR":"Haryana",
  "HP":"Himachal Pradesh",
  "JK":"Jammu and Kashmir",
  "JH":"Jharkhand",
  "KA":"Karnataka",
  "KL":"Kerala",
  "LA":"Ladakh",
  "LD":"Lakshadweep",
  "MP":"Madhya Pradesh",
  "MH":"Maharashtra",
  "MN":"Manipur",
  "ML":"Meghalaya",
  "MZ":"Mizoram",
  "NL":"Nagaland",
  "OR":"Odisha",
  "PY":"Puducherry",
  "PB":"Punjab",
  "RJ":"Rajasthan",
  "SK":"Sikkim",
  "TN":"Tamil Nadu",
  "TS":"Telangana",
  "TR":"Tripura",
  "UP":"Uttar Pradesh",
  "UK":"Uttarakhand",
  "WB":"West Bengal"
}



const handleDragStart = (e) => e.preventDefault();
const data = ["https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp",
"https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(40).webp",
"https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(35).webp"]
const items = [
  <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp"  />,
  <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(40).webp"  />,
  <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(35).webp"  />,
];



//     


const settings = {
    
    autoplaySpeed:2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };


  const imgdiv = [
    <div className="grid grid-flow-row grid-cols-2 grid-rows-2 px-1 md:px-10 my-2 mx-1 md:m-4 gap-2 ">
                  <div className='hover: relative group'>
                    <div className="invisible absolute container hover:backdrop-brightness-50 backdrop-saturate-50 top-0 right-0 left-0 bottom-0 text-center align-middle group-hover:visible  transition-all">
                      <div className="flex flex-col h-full justify-center items-center">
                        <div className='text-white font-serif mb-6 font-bold'>ISLAND KICHEN</div>
                        <button className=' p-2 rounded border border-white text-white px-4 hover:bg-orange-500 hover:scale-105 transition-transform ' >View all</button>
                      </div>
                    </div>
                    <img className=' h-[15rem] md:h-[35vh] w-full' src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" /></div>
                  <div className='row-span-2 hover:brightness-[95%] relative group'>
                  <div className="invisible absolute container backdrop-brightness-50 backdrop-saturate-50 top-0 right-0 left-0 bottom-0 text-center align-middle group-hover:visible transition-all">
                      <div className="flex flex-col h-full justify-center items-center">
                        <div className='text-white font-serif mb-6 font-bold'>ISLAND KICHEN</div>
                        <button className=' p-2 rounded border border-white text-white px-4 hover:bg-orange-500 hover:scale-105 transition-transform' >View all</button>
                      </div>
                    </div>
                    <img className='h-[30rem] md:h-[70vh]' src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" /></div>
                  <div className='hover:brightness-[95%] relative group'>
                  <div className="invisible absolute container backdrop-brightness-50 top-0 right-0 left-0 bottom-0 text-center align-middle group-hover:visible transition-all">
                      <div className="flex flex-col h-full justify-center items-center">
                        <div className='text-white font-serif mb-6 font-bold'>ISLAND KICHEN</div>
                        <button className=' p-2 rounded border border-white text-white px-4 hover:bg-orange-500 hover:scale-105 transition-transform' >View all</button>
                      </div>
                    </div>
                    <img className=' h-[14.5rem] md:h-[35vh] w-full' src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" /></div>

                </div>,



<div className="grid grid-flow-row grid-cols-2 grid-rows-2 px-1 md:px-10 my-2 mx-1 md:m-4 gap-2 ">
                  <div className='hover: relative group'>
                    <div className="invisible absolute container hover:backdrop-brightness-50 backdrop-saturate-50 top-0 right-0 left-0 bottom-0 text-center align-middle group-hover:visible  transition-all">
                      <div className="flex flex-col h-full justify-center items-center">
                        <div className='text-white font-serif mb-6 font-bold'>ISLAND KICHEN</div>
                        <button className=' p-2 rounded border hover:bg-orange-500 hover:scale-105 transition-transform border-white text-white px-4 ' >View all</button>
                      </div>
                    </div>
                    <img className=' h-[15rem] md:h-[35vh] w-full' src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" /></div>
                  <div className='row-span-2 hover:brightness-[95%] relative group'>
                  <div className="invisible absolute container backdrop-brightness-50 backdrop-saturate-50 top-0 right-0 left-0 bottom-0 text-center align-middle group-hover:visible transition-all">
                      <div className="flex flex-col h-full justify-center items-center">
                        <div className='text-white font-serif mb-6 font-bold'>ISLAND KICHEN</div>
                        <button className=' p-2 rounded border border-white text-white px-4 hover:bg-orange-500 hover:scale-105 transition-transform ' >View all</button>
                      </div>
                    </div>
                    <img className='h-[30rem] md:h-[70vh]' src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" /></div>
                  <div className='hover:brightness-[95%] relative group'>
                  <div className="invisible absolute container backdrop-brightness-50 top-0 right-0 left-0 bottom-0 text-center align-middle group-hover:visible transition-all">
                      <div className="flex flex-col h-full justify-center items-center">
                        <div className='text-white font-serif mb-6 font-bold'>ISLAND KICHEN</div>
                        <button className=' p-2 rounded border border-white text-white px-4 hover:bg-orange-500 hover:scale-105 transition-transform ' >View all</button>
                      </div>
                    </div>
                    <img className=' h-[14.5rem] md:h-[35vh] w-full' src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" /></div>

                </div>
  ];


function Components2() {
  return (
    <div className=' container-full w-full'>
        <div className="  md:flex justify-center relative my-14  ">
            <div className=" md:w-[60%] flex flex-col  mx-auto space-y-4 m-2 ">
                <div className='uppercase text-2xl text-center p-2  font-serif'>We Specilized In</div>
                <div className= 'justify-center md:mx-20 justify-items-center  grid grid-flow-col grid-rows-3 grid-cols-2 md:grid-cols-3 md:grid-rows-2 md:gap-x-10 gap-y-2'>
                    <div className="flex  flex-col w-20">
                    <img className='h-16' src={hotel} alt="" />
                    <h2 className='text-center'>Hotels</h2>

                    </div>

                    <div className="flex flex-col w-20">
                    <img className='h-16' src={worker} alt="" />
                    <h2 className='text-center'>Co-Worker & Co-LivingSpace</h2>

                    </div>

                    <div className="flex flex-col w-20">
                    <img className='h-16' src={warehouse} alt="" />
                    <h2 className='text-center'>Retail Spaces & Warehouse</h2>

                    </div>

                    <div className="flex flex-col w-20">
                    <img className='h-16' src={restorant} alt="" />
                    <h2 className='text-center'>Cafe & Restourants</h2>

                    </div>

                    <div className="flex flex-col w-20 content-center">
                    <img className='h-16 px-1 w-[4.7rem] mx-auto' src={hotel2} alt="" />
                    <h2 className='text-center'>Show Flats & Lobbies</h2>

                    </div>

                    <div className="flex flex-col w-20">
                    <img className='h-16 w-[4.75rem] px-1 mx-auto' src={office} alt="" />
                    <h2 className='text-center'>Offices</h2>

                    </div>

                </div>
                {/* Details what we do */}



                {/* coresole like grid */}
                <div className="container md:w-[60vw] mx-auto">

                <div className= ' md:w-[80%] mx-auto uppercase text-xl text-center p-2  font-serif'>CHOOSE FROM OUR EXTENSIVE RANGE OF MOUDULAR KITCHENS & WARDROBES</div>
                <div className= ' md:w-[80%] mx-auto uppercase text-sm text-center text-gray-400 font-serif'>Find a modular solution tailor-made for you. Customize from a wide variety of materials, accessories and finishes. Fill the form to get started!</div>
                  {/* slider items  */}
                <div className="  ">

                        <Slider
                
                  // dotsClass="slick-dots custom-indicator"
                  autoplay= 'true'
                  nextArrow={<></>}
                  prevArrow ={<></>}
                >
                  {imgdiv.map(item=>(

                  <div className='container'>
                      {item}

                  </div>
                  ))}
                </Slider>
                </div>
                
                

                </div>


                <hr className='w-[70%] border-y-1 mx-auto' />
                

                <Components3_ />


            </div>





            {/* section 2 */}
            <div className='mx-2  top-10  md:sticky   md:w-[35vw] h-[35rem] md:h-[25rem] bg-white drop-shadow-2xl md:m-1   md:mx-auto  justify-center  font-serif '>
              
              {/* new input details section */}
              <div className="container flex flex-col justify-center p-3">
                <p className='text-center text-xl font-serif my-3'>Consult A Designer <br/> Give Us Your Details so we can Call You back</p>

                  {/* input details items */}
                <div className='my-2'>
                  <label htmlFor="Full Name">Full Name</label>
                <div className='border rounded '>
                  <input className='p-2 font-serif ' type="text" />
                </div>
                </div>
                {/* email and Mobile Number */}

                <div className="md:flex md:space-x-7 my-3">
                <div className='my-2 w-auto'>
                  <label htmlFor="Email">Email ID</label>
                <div className='border rounded '>
                  <input className='p-2 font-serif ' type="email" />
                </div>
                </div>

                <div className='my-2 w-full'>
                  <label htmlFor="Mobile Number">Mobile Number</label>
                <div className='border rounded '>
                  <input className='p-2 font-serif ' type="text" />
                </div>
                </div>

                </div>

                {/* next items input  */}
                <div className='my-2 w-full'>
                  <label htmlFor="Mobile Number">State</label>
                <div className='border rounded '>
                  <select className='py-2 w-full' name="City" id="City">
                    {Object.values(City).map((city,i) =>(
                      <option value={i}> {city}</option>
                    ))}
                    
                  </select>
                  
                </div>
                </div>
                {/* submit */}
                <div className="text-center bg-blue-500 p-2 font-bold uppercase mx-2 rounded cursor-pointer transition-transform hover:scale-[102%] hover:bg-blue-400">Submit</div>



            </div>
                
            </div>
        </div>
    </div>
  )
}

export default Components2











{/* <h3 className='uppercase text-2xl my-4 '>Get in Touch with us</h3>
              <p className='uppercase  w-full px-3 text-normal'>Your Details</p>
              <div className="container flex flex-col  my-2 border justify-center">
                
                <textarea className='mx-auto h-72 p-3   w-full' placeholder='Enter Details... ' name="" id="" cols="30" rows="10"></textarea>
                <div className="text-center bg-blue-500 p-2 font-bold uppercase mx-2 rounded cursor-pointer transition-transform hover:scale-[102%] hover:bg-blue-400">Submit</div>
              </div> */}