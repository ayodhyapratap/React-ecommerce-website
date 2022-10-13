import React from "react";
// import {Swiper, SwiperSlide} from 'swiper/react';
// import { Autoplay, Pagination, Navigation } from "swiper";
// import "swiper/css";
// import "swiper/css/navigation";

function Section3() {
  return (
    <div className="container mx-auto">
      <div className="flex">
        <div className="container flex flex-col justify-center items center">
            <div className="container my-10">
                <p className="text-xl font-bold text-center ">
                Value Buys In Furniture{" "}
                </p>
                <hr className="w-[15%] mx-auto my-3 border-2 border-yellow-400" />
            </div>

        <div className="container my-3 px-2 mx-auto">
            <div id="carouselExampleControls" class="carousel slide relative" data-bs-ride="carousel">
          <div class="carousel-inner relative w-full overflow-hidden">
            {/* corosel 1 */}
            <div class="carousel-item active relative float-left w-full">
              {/* <img
                src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
                class="block w-full"
                alt="Wild Landscape"
              /> */}
                <div className="contianer flex justify-center items-center mx-auto p-1 space-x-1 md:space-x-[6rem] my-2">
                    <div className="contianer hover:scale-x-105 transition-transform">
                        <img src="https://www.ulcdn.net/media/collection/listings/Desktop_CarouselSofa_Beds_home_new.jpg?1652093807" alt="" />
                    </div>
                    <div className="contianer hover:scale-x-105 transition-transform">
                        <img src="https://www.ulcdn.net/media/collection/listings/Desktop_CarouselBookshelves_home_new.jpg?1652093707" alt="" />
                    </div>
                    <div className="contianer hover:scale-x-105 transition-transform">
                        <img src="https://www.ulcdn.net/media/collection/listings/Desktop_CarouselDining_home_new.jpg?1652093769" alt="" />
                    </div>

                </div>


            </div>
            {/* corosel 2 */}
            <div class="carousel-item  relative float-left w-full">
              {/* <img
                src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
                class="block w-full"
                alt="Wild Landscape"
              /> */}
                <div className="contianer flex justify-center items-center mx-auto p-1 space-x-1 md:space-x-[6rem]">
                    <div className="contianer hover:scale-x-105 transition-transform">
                        <img src="https://www.ulcdn.net/media/collection/listings/Desktop_CarouselSofa_Beds_home_new.jpg?1652093807" alt="" />
                    </div>
                    <div className="contianer hover:scale-x-105 transition-transform">
                        <img src="https://www.ulcdn.net/media/collection/listings/Desktop_CarouselBookshelves_home_new.jpg?1652093707" alt="" />
                    </div>
                    <div className="contianer hover:scale-x-105 transition-transform">
                        <img src="https://www.ulcdn.net/media/collection/listings/Desktop_CarouselDining_home_new.jpg?1652093769" alt="" />
                    </div>

                </div>


            </div>
            {/* corosel 3 */}
            <div class="carousel-item  relative float-left w-full">
              {/* <img
                src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
                class="block w-full"
                alt="Wild Landscape"
              /> */}
                <div className="contianer  flex justify-center items-center mx-auto p-1 space-x-1 md:space-x-[6rem]">
                    <div className="contianer hover:scale-x-105 transition-transform">
                        <img src="https://www.ulcdn.net/media/collection/listings/Desktop_CarouselSofa_Beds_home_new.jpg?1652093807" alt="" />
                    </div>
                    <div className="contianer hover:scale-x-105 transition-transform">
                        <img src="https://www.ulcdn.net/media/collection/listings/Desktop_CarouselBookshelves_home_new.jpg?1652093707" alt="" />
                    </div>
                    <div className="contianer hover:scale-x-105 transition-transform">
                        <img src="https://www.ulcdn.net/media/collection/listings/Desktop_CarouselDining_home_new.jpg?1652093769" alt="" />
                    </div>

                </div>


            </div>
            {/* <div class="carousel-item relative float-left w-full">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
                class="block w-full"
                alt="Camera"
              />
            </div>
            <div class="carousel-item relative float-left w-full">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
                class="block w-full"
                alt="Exotic Fruits"
              />
            </div> */}
          </div>
  <button
    class="carousel-control-prev absolute  text-gray-400 top-0 bottom-0 flex items-center justify-center p-0 text-center border-0  hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon inline-block " aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
                
            </div>



            
        </div>
      </div>
    </div>
  );
}

export default Section3;





{/* <div className="container mx-auto">
                <div className="flex ">
                    <div className="container flex flex-row justify-around">
                        <div className="flex-col">
                            <div className="contianer object-cover">
                                

                            </div>
                        </div>
                    </div>


                </div>
            </div> */}
