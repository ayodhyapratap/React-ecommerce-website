import React, {useState, Fragment} from 'react'
import location from "/home/ayodhya/Desktop/urban_ladder_replica/urban_ladder/src/Components/CartSection_buy/location-sign-svgrepo-com.svg"
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";
function MobileCartsection() {
    const [open, setOpen] = useState(1);
 
    const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <div className="container md:hidden overflow-hidden flex flex-col">
        <div className="flex-col px-3 py-2 justify-start items-start">
            <ul className='list-disc text-xl font-bold font-serif list-inside space-y-1  text-orange-500 '><h2>PRODUCT DETAILS</h2>
            <li className='text-sm pl-1 text-gray-600 capitalize'>COUNTRY OF ORIGIN : {"CHINA"}</li>
            <li className='text-sm pl-1 text-gray-600 capitalize'>SUB CATEGORY : {"STUDY TABLES"} </li>
            <li className='text-sm pl-1 text-gray-600 capitalize'>PACKAGE CONTAINS : {"1 STUDY TABLE"} </li>
            <li className='text-sm pl-1 text-gray-600 truncate capitalize'>PRODUCT DIMENSIONS : {"75.0 CM X 120.0 CM X 51.0 CM"} </li>
            <li className='text-sm pl-1 text-gray-600 capitalize'>NET QUANTITY : {"1 N"} </li>
            {/* <li className='text-sm capitalize'></li> */}
            <h2>More Information <span><i class="fa-solid fa-angle-down"></i></span></h2>
            
            </ul>

        </div>

        <div className="flex-col px-2 py-1 my-1 justify-start  items-start">
            <img className='h-[10rem] w-full' src="https://cdn.dribbble.com/users/5917891/screenshots/16245699/media/85d96892d20e2bd6daf10f395acf9cf6.jpg?compress=1&resize=400x300" alt="" />
        </div>

        <div className="flex-col px-3 py-1 my-2 justify-start  items-start">
            <p className='before:content-["*"] before:text-red-500' >All discounts are dynamic and can be subjects to change at any time.</p>
        </div>

        <div className="flex-col px-2 py-1 my-2 justify-start  items-start">
            <div className="flex space-x-4 px-1">
                <img className='h-[2rem]' src="https://icon-library.com/images/financing-available-icon/financing-available-icon-2.jpg" alt="" />
                <p className='align-baseline pt-1'>EMI starting from 298 ! <span className='text-orange-600 underline'>More</span></p>
            </div>
        </div>

        <div className="flex-col px-2 py-1 my-2 justify-start  items-start">
            <div className="flex space-x-4 px-1">
                
                <img className='h-[1.8rem] ml-1' src="https://img.favpng.com/18/0/18/shield-icon-layered-graph-png-favpng-Mu4WHHMQp991fNjdiFXH9h410.jpg" alt="" />
                <p className='align-baseline pt-1'>12 months warranty on this product <span className='text-orange-600 underline'>Know More</span></p>
            </div>
        </div>


        <div className="flex-col px-2 py-1 my-2 justify-start  items-start">
            <div className="flex space-x-4 relative px-1">
                
            <img className='h-[30px] p-1                ' src={location} alt="" />
                <p className='align-baseline pt-1'>Bangalore- {"560001"} <span className='text-orange-600 underline'></span></p>
                <p className='text-orange-500 underline align-baseline absolute right-3 '>Change</p>

                <div id='location' className='absolute hidden top-0 right-0 bg-white p-2   w-[100vw] '>
                                <div className="flex-col  justify-start  items-start">
                            <div className="  flex rounded   ">
                                
                                    <img className='h-[30px] p-1 rounded-l ' src={location} alt="" />
                                    <input className='outline-none w-[20rem]' type="text" placeholder='Enter Pincode..' />
                                    <button className=' p-1 m-0 rounded-r bg-orange-500' >CHECK</button>
                            </div>
                        </div>


                </div>
            </div>
        </div>


        <div className="flex-col px-2 py-1 my-2 justify-start  items-start">
            <div className="flex space-x-4 px-1">
                
                <img className='h-[2rem]' src="https://www.freeiconspng.com/thumbs/delivery-icon/delivery-icon-1.png" alt="" />
                <p className='align-baseline pt-1'>Delivery between  <span className='text-gray-600  font-bold'>{"Oct 14- Oct 16"}</span></p>
            </div>
        </div>


        <div className="flex-col px-2 py-1 my-2 bg-orange-200 justify-start  items-start">
            <p className='list-disc list-outside pl-2' ><li>We are committed to giving you the best shopping experience with on-time deliveries and quality products. We provide swift installation within 48 hours from the day of delivery. Happy shopping!</li></p>
        </div>


        <div className='flex justify-start items-center '>
            <img className='h-[3rem]' src="https://www.clipartmax.com/png/middle/291-2916483_shop-icon-store-icon-white-png.png" alt="" />
            <div className="flex flex-col">
                <h2 className='font-bold' >Visit Our Stores</h2>
                <p>See the Twain Study Table in these stores near you</p>
                {/* <div className='flex justify-start'>
                    <button>JP Nagar</button>
                    <button>Domlur</button>
                </div> */}
            </div>
        </div>

        {/* accoudian for moble view ites details and feature and propperties ans warranty details.. */}
        <div className='flex-col text-left justify-start items-center '>

        <Fragment>
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)}>
         <p className='text-base md:text-xl pl-4 md:pl-0'>FEATURES</p> 
        </AccordionHeader>
        <AccordionBody className={'pl-3'} style={{    "color": "gray"}} >
            <ul className='list-outside space-y-2 list-disc px-3'>
                <li>What do I need to do to start a Modular project? Will it be made on site?</li>
                <li>What modular units can you make?</li>
                <li>Do you undertake renovation projects as well or work with an existing countertop?</li>
                <li>What do I expect from the design consultants? How do I get regular updates on my project?</li>
                <li>Do I need to book an appointment to visit Pepperfry Design Consultant? </li>
                <li>What materials do you use for the modular units? Is the material used waterproof?</li>
            </ul>
             
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
        <p className='text-base md:text-xl pl-5 md:pl-0 '>PROPERTIES</p> 
        </AccordionHeader>
        <AccordionBody className={'pl-3'} style={{    "color": "gray"}} >
            <ul className='list-outside space-y-2 list-disc px-3'>
                <li>What do I need to do to start a Modular project? Will it be made on site?</li>
                <li>What modular units can you make?</li>
                <li>Do you undertake renovation projects as well or work with an existing countertop?</li>
                <li>What do I expect from the design consultants? How do I get regular updates on my project?</li>
                <li>Do I need to book an appointment to visit Pepperfry Design Consultant? </li>
                <li>What materials do you use for the modular units? Is the material used waterproof?</li>
            </ul>
             
        </AccordionBody>
      </Accordion>
      <Accordion className={'h-auto'} open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)}>
         <p className='text-base md:text-xl pl-5 md:pl-0'>RETURNS</p> 
        </AccordionHeader>
        <AccordionBody className={'pl-3 '} style={{    "color": "gray"}} >
            <ul className='list-outside space-y-2 overflow-y-scroll list-disc px-3'>
                <li>What do I need to do to start a Modular project? Will it be made on site?</li>
                <li>What modular units can you make?</li>
                <li>Do you undertake renovation projects as well or work with an existing countertop?</li>
                <li>What do I expect from the design consultants? How do I get regular updates on my project?</li>
                <li>Do I need to book an appointment to visit Pepperfry Design Consultant? </li>
                <li>What materials do you use for the modular units? Is the material used waterproof?</li>
            </ul>
             
        </AccordionBody>
      </Accordion>
    </Fragment>
            
        </div>





    </div>
  )
}

export default MobileCartsection