import React,{useState} from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Section5 from '../Section5';
import CartSection_color_variety from './CartSection_color_variety';
import CartSection_col_2 from './CartSection_col_2';
import CartSection_Seater_variety from './CartSection_Seater_variety';
import CartSectio_Delivery from './CartSectio_Delivery';
import Cart_Section_more_details_offer from './Cart_Section_more_details_offer';


// slick couresel

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import "./Cart_main.css"
import MobileCartsection from './MobileCartsection';

const handleDragStart = (e) => e.preventDefault();
const data = ["https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp",
"https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(40).webp",
"https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(35).webp"]
const items = [
  <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp"  />,
  <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(40).webp"  />,
  <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(35).webp"  />,
];



function Cart_main() {
//     


const settings = {
    dots: true,
    autoplaySpeed:2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };


  return (
    < >
    
    <div className="container my-8 overflow-hidden md:flex mx-auto">
    <div className='md:w-[50vw] p-1 px-5 my-10 md:mx-2'>
        
        <Slider {...settings}
        nextArrow={<></>}
        prevArrow ={<></>}  
        customPaging={(i) => {
            return (
                <img className='h-10 my-2 w-20 rounded'
                src={data[i]}
                alt=""
               
              />
            );
          }}
          dotsClass="slick-dots custom-indicator"
          autoplay= 'true'
        >
        {items}
        </Slider>
      </div>
           







          {/* second Section of cart   */}
          <div className="contianer md:h-[80vh] w-auto shadow-black my-6 py-3 md:py-0 overflow-hidden stopOverflow">
            <CartSection_col_2 />
            <MobileCartsection/>
            <CartSection_color_variety />
            <CartSection_Seater_variety />
            <CartSectio_Delivery />
            <Cart_Section_more_details_offer /> 


          </div>


          


    </div>

    <Section5 />
    <div ></div>
    </>
  )
}

export default Cart_main



