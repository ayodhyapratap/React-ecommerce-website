import React from 'react'
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Components3_() {
    const [open, setOpen] = useState(1);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 


  return (
    <>
    <div className=" flex flex-col justify-center items-center">
            <div className='container  p-2 md:px-10 mx-4 text-center '>
                <h3 className='font-serif text-lg uppercase'>Design your Modular Furniture With Us</h3>
                <p className='text-sm font-serif my-3 px-1 text-gray-500'>Our expert designers will guide you through every step, keep your project running smoothly and make sure you achieve your kitchen goals on time. Fill the form to get started now!</p>
            </div>


            <div className="container mx-auto justify-center  space-x-2 px-2 md:px-0  grid grid-cols-3 grid-rows-1 ">
                <div className="flex flex-col hover:shadow md:px-3">
                    <img className='md:w-44 h-[8rem] md:h-auto mx-auto' src="https://ii1.pepperfry.com/media/wysiwyg/banners/look-design-step1.jpg" alt="" />
                    <div className='flex flex-col w-42 text-center font-serif px-1  '>
                        <h2 className='font-bold ' >Consult</h2>
                        <p className='md:px-2'>Get instant design option & quote</p>
                    </div>
                </div>
                <div className="flex flex-col hover:shadow md:px-3">
                    <img className='w-44 h-[8rem] md:h-auto mx-auto' src="https://ii1.pepperfry.com/media/wysiwyg/banners/look-design-step1.jpg" alt="" />
                    <div className='flex flex-col w-42 text-center font-serif px-1  '>
                        <h2 className='font-bold my-1' >Conceptualize</h2>
                        <p className='px-2'>Finalize the design & specifications</p>
                    </div>
                </div>
                <div className="flex flex-col hover:shadow md:px-3">
                    <img className='w-44 h-[8rem] md:h-auto mx-auto' src="https://ii1.pepperfry.com/media/wysiwyg/banners/look-design-step1.jpg" alt="" />
                    <div className='flex flex-col w-42 text-center font-serif px-1  '>
                        <h2 className='font-bold my-1' >Execute</h2>
                        <p className='md:px-2 text-center text-ellipsis'>Delivery & installation  under expert supervision</p>
                    </div>
                </div>
            </div>

    </div>


    <hr className='w-[70%] border-y-1 mx-auto' />

    <div className="container md:px-5 flex">
        <div className="flex flex-col justify-center md:ml-4 items-center divide-y-2">
                <div className='text-xl font-bold uppercase text-center m-4'>Frequently  Asked Questions</div>
                <Fragment>
      <Accordion className={'h-auto'} open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)}>
         <p className='text-base md:text-xl pl-5 md:pl-0'>GETTING STARTED</p> 
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
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
        <p className='text-base md:text-xl pl-5 md:pl-0 '>ORDER BOOKING AND PROJECT EXECUTION</p> 
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
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)}>
         <p className='text-base md:text-xl pl-5 md:pl-0'>WARRANTY, CANCELLATION AND RETURNS</p> 
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

    </>
  )
}

export default Components3_