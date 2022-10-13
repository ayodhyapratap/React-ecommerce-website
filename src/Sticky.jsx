import React from 'react'

import Itemsecton2 from "./Itemsecton2";
import Itemsection3 from "./Itemsection3";
import Itemsection4 from "./Itemsection4";
import Itemsection5 from "./Itemsection5";
import Itemsection6 from "./Itemsection6";
import Itemsection7 from "./Itemsection7";
import Itemsection8 from "./Itemsection8";
import Itemsection9 from "./Itemsection9";
import Itemsection10 from "./Itemsection10";
import Itemsection1 from "./Itemsection1";

function Sticky() {
  return (
    <div className="container-full  backdrop-blur-xl bg-[#F3F4F6] shadow z-40 sticky  top-0 left-0 right-0 hidden md:flex  mx-auto justify-center">
          <div className="  flex  flex-nowrap justify-center">
            <div className=" flex-row text-center justify-center m-2   font-serif items-center  space-x-9">
              <div className="inline-flex  relative group transition-opacity cursor-pointer py-2">
                {" "}
                <span className="text-sm parent hover:text-orange-400">Deal Zone</span>
                <Itemsection1 />
                {/* navigation hover data */}
              </div>
              <div
                className="inline-flex relative group transition-shadow cursor-pointer py-2"
                onClick={''}
              >
                {" "}
                <span className="text-sm hover:text-orange-400">
                  Sofas & recliners
                </span>
                <Itemsecton2 />
                {/*  */}
              </div>

              <div
                className="inline-flex relative group  cursor-pointer py-2"
                onClick={''}
                onMouseOver={''}
              >
                {" "}
                <span className="text-sm hover:text-orange-400">Living</span>
                <Itemsection3 />
              </div>
              <div
                className="inline-flex relative group  cursor-pointer py-2"
                onClick={''}
                onMouseOver={''}
              >
                <span className="text-sm hover:text-orange-400">
                  Bedrooms&Matteress
                </span>
                <Itemsection4 />
              </div>
              <div
                className="inline-flex relative group  cursor-pointer py-2"
                onClick={''}
                onMouseOver={''}
              >
                <span className="text-sm hover:text-orange-400">Dining</span>
                <Itemsection5 />
              </div>
              <div
                className="inline-flex relative group  cursor-pointer py-2"
                onClick={''}
                onMouseOver={''}
              >
                <span className="text-sm hover:text-orange-400">Storage</span>
                <Itemsection6 />
              </div>
              <div
                className="inline-flex relative group  cursor-pointer py-2"
                onClick={''}
                onMouseOver={''}
              >
                <span className="text-sm hover:text-orange-400">Interior</span>
                <Itemsection7 />
              </div>
              <div
                className="inline-flex relative group  cursor-pointer py-2"
                onClick={''}
                onMouseOver={''}
              >
                <span className="text-sm hover:text-orange-400">Trending</span>
                <Itemsection8 />
              </div>
              <div
                className="inline-flex relative group  cursor-pointer py-2"
                onClick={''}
                onMouseOver={''}
              >
                <span className="text-sm hover:text-orange-400">Decor</span>
                <Itemsection9 />
              </div>
              <div
                className="md:inline-flex relative group  cursor-pointer py-2"
                onClick={''}
                onMouseOver={''}
              >
                <span className="text-sm hover:text-orange-400">study</span>
                <Itemsection10 />
              </div>
            </div>
          </div>
          {/* absoulute */} {/* assing data for absoulute value data */}
          
          {/* end of nav data section */}
        </div>
  )
}

export default Sticky