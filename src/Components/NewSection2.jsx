import React from "react";

function NewSection2() {
  return (
    <div className="container  mx-auto">
      <div className="flex flex-col justify-center items-center">
        {/* Heading */}
        <div className="container my-10">
          <p className="text-xl font-bold text-center ">
            What Everyone Eyeing{" "}
          </p>
          <hr className="w-[15%] mx-auto my-3 border-2 border-yellow-400" />
        </div>

        <div className="grid grid-flow-row md:grid-rows-2 grid-cols-3 grid-rows-3 md:grid-cols-4 gap-1 md:gap-2 mx-4">
          <div className="row-span-2  col-span-2 md:col-span-1 md:row-span-2">
            <img
              className="h-full"
              src="https://www.ulcdn.net/images/products/149928/product/lp_2.jpg?1548906916"
              alt=""
            />
          </div>
          <div className="md:row-span-2 self-center h-[9rem] md:h-full">
            <img
              className="h-full"
              src="https://www.ulcdn.net/images/products/149928/product/lp_2.jpg?1548906916"
              alt=""
            />
          </div>
          <div className="self-center ">
            <img
              className="w-full h-[9rem] md:h-[15rem] "
              src="https://www.ulcdn.net/images/products/149928/product/lp_2.jpg?1548906916"
              alt=""
            />
          </div>
          <div className="self-center	">
            <img
              className="w-full  h-[9rem] md:h-[15rem] "
              src="https://www.ulcdn.net/images/products/149928/product/lp_2.jpg?1548906916"
              alt=""
            />
          </div>
          <div className="self-center	">
            <img
              className="w-full  h-[9rem] md:h-[15rem]"
              src="https://www.ulcdn.net/images/products/149928/product/lp_2.jpg?1548906916"
              alt=""
            />
          </div>
          <div className="md:self-center  md:col-auto	">
            <img
              className="w-full  h-[9rem] md:h-[15rem]"
              src="https://www.ulcdn.net/images/products/149928/product/lp_2.jpg?1548906916"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewSection2;
