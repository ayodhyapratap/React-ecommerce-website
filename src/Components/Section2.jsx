import React from "react";
import { Link } from "react-router-dom";

function Section2() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex">
          <div className="container flex flex-col justify-center items-center">
            <div className="container my-10">
              <p className="text-xl font-bold text-center ">
                Explore Our furniture Range{" "}
              </p>
              <hr className="w-[15%] mx-auto my-3 border-2 border-yellow-400" />
            </div>
            {/* end 1 */}
            {/* start 2 */}
            <div className="container flex flex-col  ">
              {/* section1................. */}
              <div className="grid content-center grid-cols-4 gap-0 md:flex shrink md:flex-row md:mx-[10rem] justify-center">
                {/* item1 */}
                <div className="container  h-[8rem] md:w-[10rem]">
                  <Link to="/product">
                    <img
                      className="h-[30%] md:h-[40%] md:w-[100%] mx-auto w-auto justify-center"
                      src="https://www.ulcdn.net/media/web-home-popular-categories/sale.png?1477381415"
                      alt=""
                    />
                    <p className="text-center md:w-[54px] ">Deal Zone</p>
                  </Link>
                </div>
                {/* item2 */}
                <div className="container h-[8rem]">
                  <Link to="/product">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      data-name="Layer 1"
                      viewBox="0 0 30 30"
                      className="category-icon h-[30%] md:h-[45%] w-auto mx-auto"
                    >
                      <title>UL_CATEGORY_ICONS</title>
                      <path d="M24.55 11.16l-.75-1.06a.71.71 0 0 1-.12-.45l.1-1.27a1.74 1.74 0 0 0-1-1.69l-1.2-.55a.72.72 0 0 1-.35-.34l-.59-1.15a1.77 1.77 0 0 0-1.72-1l-1.33.09a.79.79 0 0 1-.5-.12L16 2.94a1.8 1.8 0 0 0-2 0l-1.1.72a.78.78 0 0 1-.5.12l-1.33-.09a1.77 1.77 0 0 0-1.72 1L8.78 5.8a.72.72 0 0 1-.35.34l-1.2.55a1.74 1.74 0 0 0-1 1.69l.1 1.27a.66.66 0 0 1-.12.45l-.76 1.06a1.67 1.67 0 0 0 0 2l.75 1.01a.66.66 0 0 1 .12.45l-.1 1.27a1.73 1.73 0 0 0 1 1.68l1.2.56a.72.72 0 0 1 .35.34l.58 1.15a1.8 1.8 0 0 0 1.72 1h.66v6.3a.49.49 0 0 0 .82.37l2.35-2 2.52 2.07a.54.54 0 0 0 .53.07.51.51 0 0 0 .29-.46v-6.33h.67a1.8 1.8 0 0 0 1.72-1l.58-1.15a.7.7 0 0 1 .36-.34l1.19-.56a1.73 1.73 0 0 0 1-1.68l-.1-1.27a.66.66 0 0 1 .13-.45l.74-1.06a1.67 1.67 0 0 0 .02-1.97zm-9.31 13a.51.51 0 0 0-.65 0l-1.84 1.6v-5.23a.53.53 0 0 1 .17.08l1.08.72a1.79 1.79 0 0 0 1 .3 1.77 1.77 0 0 0 1-.3l1.1-.72a.46.46 0 0 1 .16-.07v5.26zm8.5-11.61L23 13.59a1.67 1.67 0 0 0-.31 1.1l.09 1.31a.7.7 0 0 1-.43.69l-1.19.56a1.7 1.7 0 0 0-.83.8l-.58 1.15a.78.78 0 0 1-.76.41l-1.33-.09a1.8 1.8 0 0 0-1.12.29l-1.1.71a.8.8 0 0 1-.88 0l-1.1-.72a1.75 1.75 0 0 0-1-.3h-.12l-1.34.08a.79.79 0 0 1-.76-.41L9.68 18a1.79 1.79 0 0 0-.83-.8l-1.2-.56a.71.71 0 0 1-.43-.64l.1-1.28A1.67 1.67 0 0 0 7 13.59l-.74-1.06a.68.68 0 0 1 0-.79L7 10.68a1.7 1.7 0 0 0 .31-1.11L7.22 8.3a.73.73 0 0 1 .43-.7l1.2-.55a1.79 1.79 0 0 0 .83-.8l.58-1.15a.75.75 0 0 1 .74-.41l1.33.09a1.78 1.78 0 0 0 1.12-.29l1.1-.72a.82.82 0 0 1 .88 0l1.1.72a1.78 1.78 0 0 0 1.12.29L19 4.69a.76.76 0 0 1 .76.41l.57 1.15a1.81 1.81 0 0 0 .84.8l1.18.55a.71.71 0 0 1 .43.7l-.1 1.28a1.67 1.67 0 0 0 .31 1.1l.75 1.06a.68.68 0 0 1 0 .79zm-8.41-3.28l.86 1.73a.36.36 0 0 0 .27.2l1.93.28a.36.36 0 0 1 .2.62l-1.39 1.34a.36.36 0 0 0-.11.32l.33 1.9a.36.36 0 0 1-.53.39l-1.73-.9a.36.36 0 0 0-.34 0L13.1 16a.36.36 0 0 1-.53-.39l.33-1.9a.36.36 0 0 0-.11-.32l-1.38-1.29a.36.36 0 0 1 .2-.62l1.93-.28a.36.36 0 0 0 .27-.2l.87-1.73a.36.36 0 0 1 .65 0z"></path>
                    </svg>
                    <p className="text-center">Bestellers</p>
                  </Link>
                </div>
                {/* item3 */}
                <div className="container h-[8rem]">
                  <Link to="/product">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      data-name="Layer 1"
                      viewBox="0 0 30 30"
                      className="category-icon h-[30%] md:h-[45%] mx-auto"
                    >
                      <title>UL_CATEGORY_ICONS</title>
                      <path d="M27.5 19.4H27v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1h-.5A2.48 2.48 0 0 0 0 21.9v4a2.48 2.48 0 0 0 2.5 2.5h.2v1.1a.47.47 0 0 0 .5.5H5a.47.47 0 0 0 .5-.5v-1.1h19.2v1.1a.47.47 0 0 0 .5.5H27a.47.47 0 0 0 .5-.5v-1.1h.1a2.48 2.48 0 0 0 2.5-2.5v-4a2.63 2.63 0 0 0-2.6-2.5zM4 18.4a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v1.5a2.61 2.61 0 0 0-1 2v1.5H5v-1.5a2.61 2.61 0 0 0-1-2v-1.5zM4.4 29h-.8v-.6h.8v.6zm22 0h-.8v-.6h.8v.6zm2.6-3.1a1.54 1.54 0 0 1-1.5 1.5h-25A1.54 1.54 0 0 1 1 25.9v-4a1.54 1.54 0 0 1 1.5-1.5A1.54 1.54 0 0 1 4 21.9v2a.47.47 0 0 0 .5.5h21a.47.47 0 0 0 .5-.5v-2a1.5 1.5 0 0 1 3 0v4z"></path>
                      <circle cx="8.6" cy="19.2" r=".4"></circle>
                      <circle cx="15" cy="19.2" r=".4"></circle>
                      <circle cx="21.4" cy="19.2" r=".4"></circle>
                    </svg>
                    <p className="text-center">Sofas</p>
                  </Link>
                </div>
                {/* item4 */}
                <div className="container h-[8rem]">
                  <Link to="/product">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      data-name="Layer 1"
                      viewBox="0 0 30 30"
                      className="category-icon h-[30%] md:h-[45%] mx-auto"
                    >
                      <title>UL_CATEGORY_ICONS</title>
                      <path d="M28 24h-.5v-2a2 2 0 0 0-2-2h-20v-5a2 2 0 0 0-4 0v12.5a.47.47 0 0 0 .5.5h1.5v1.5a.47.47 0 0 0 .5.5h2a.47.47 0 0 0 .5-.5V28h17v1.5a.47.47 0 0 0 .5.5h2a.47.47 0 0 0 .5-.5V28H28a.47.47 0 0 0 .5-.5v-3a.47.47 0 0 0-.5-.5zM5.5 21h20a1 1 0 0 1 1 1v2h-21v-3zm-3-6a1.08 1.08 0 0 1 1-1 1 1 0 0 1 1 1v9h-2v-9zm3 14h-1v-1h1v1zm20 0h-1v-1h1v1zm2-2h-25v-2h25v2z"></path>
                    </svg>
                    <p className="text-center">Beds</p>
                  </Link>
                </div>
                {/* item5 */}
                <div className="container h-[8rem]">
                  <Link to="/product">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      data-name="Layer 1"
                      viewBox="0 0 30 30"
                      className="category-icon h-[30%] md:h-[45%] mx-auto"
                    >
                      <title>UL_CATEGORY_ICONS</title>
                      <path d="M30 10.5v19a.5.5 0 0 1-1 0V21h-3v-1h3v-9.5a.5.5 0 0 1 1 0zM4 20v1H1v8.5a.47.47 0 0 1-.5.5.47.47 0 0 1-.5-.5v-19a.47.47 0 0 1 .5-.5.47.47 0 0 1 .5.5V20h3z"></path>
                      <path d="M26.5 15h-23a.47.47 0 0 0-.5.5v2a.47.47 0 0 0 .5.5H5v11.5a.47.47 0 0 0 .5.5.47.47 0 0 0 .5-.5V21h1v8.5a.5.5 0 0 0 1 0V20H6v-2h18v2h-2v9.5a.5.5 0 0 0 1 0V21h1v8.5a.5.5 0 0 0 1 0V18h1.5a.47.47 0 0 0 .5-.5v-2a.47.47 0 0 0-.5-.5zm-.5 2H4v-1h22v1z"></path>
                    </svg>
                    <p className="text-center">Dining</p>
                  </Link>
                </div>
                {/* item6 */}
                <div className="container h-[8rem]">
                  <Link to="/product">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      data-name="Layer 1"
                      viewBox="0 0 30 30"
                      className="category-icon h-[30%] md:h-[45%] mx-auto"
                    >
                      <title>UL_CATEGORY_ICONS</title>
                      <path d="M25.5 2a1 1 0 0 0-1-1h-19a1 1 0 0 0-1 1v27a1 1 0 0 0 1 1h19a1 1 0 0 0 1-1V2zm-11 27h-9V8h9v21zm0-22h-9V2h9v5zm10 22h-9V8h9v21zm0-22h-9V2h9v5z"></path>
                      <path d="M17.5 16.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 1 0zM13.5 16.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 1 0zM17.5 4.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 1 1 1 0zM13.5 4.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 1 1 1 0z"></path>
                    </svg>
                    <p className="text-center">Wardrobes</p>
                  </Link>
                </div>
                {/* item7 */}
                <div className="container h-[8rem]">
                  <Link to="/product">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      data-name="Layer 1"
                      viewBox="0 0 30 30"
                      className="category-icon h-[30%] md:h-[45%] mx-auto"
                    >
                      <title>UL_CATEGORY_ICONS</title>
                      <path d="M24.73 23.1h-2.2v-1.6a1.5 1.5 0 0 0-1.6-1.5h-8.3l-4-5.9a3.8 3.8 0 0 0-5.2-1 .76.76 0 0 0-.2.4.37.37 0 0 0 .1.3l6.9 10.1V27a1.52 1.52 0 0 0 1.4 1.5v1a.47.47 0 0 0 .5.5h1.5a.47.47 0 0 0 .5-.5v-1h4.2v1a.47.47 0 0 0 .5.5h1.5a.47.47 0 0 0 .5-.5v-1h.1a1.51 1.51 0 0 0 1.5-1.3h3.7a.65.65 0 0 0 .6-.6v-1.5a1.91 1.91 0 0 0-2-2zM11 20.2a1.43 1.43 0 0 0-.7 1v1.11l-6-8.71a3.09 3.09 0 0 1 3.6 1l3.7 5.4a2 2 0 0 0-.6.2zm2.2 8.8h-.6v-.5h.64v.5zm6.7 0h-.59v-.5h.62v.5zm1.6-1.8a.55.55 0 0 1-.5.3h-9.2a.65.65 0 0 1-.6-.6v-4h10.3V27m.1-5H11.34v-.5a.51.51 0 0 1 .6-.5h9.2a.56.56 0 0 1 .6.5v.5h-.1zm4.3 4.2h-3.41V24h2.35a1.11 1.11 0 0 1 1.1 1.1v1.1z"></path>
                    </svg>
                    <p className="text-center">Recliners</p>
                  </Link>
                </div>
                {/* item8 */}
                <div className="container h-[8rem]">
                  <Link to="/product">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      data-name="Layer 1"
                      viewBox="0 0 30 30"
                      className="category-icon h-[30%] md:h-[45%] mx-auto"
                    >
                      <title>UL_CATEGORY_ICONS</title>
                      <path d="M20.3 22.5a.52.52 0 0 0 .2-.4v-.3a2.75 2.75 0 0 0-1.2-2.2v-7.1a1.32 1.32 0 0 0-1.3-1.3h-6.2a1.26 1.26 0 0 0-1.3 1.3v7.1a2.51 2.51 0 0 0-1.2 2.2v.3a.52.52 0 0 0 .2.4l-.8 7.1a.35.35 0 0 0 .4.4h.8a.66.66 0 0 0 .5-.4l1.7-7.1h5.8l1.7 7.1a.54.54 0 0 0 .5.4h.8a.35.35 0 0 0 .4-.4zm-.12 6.7l-1.49-6.7h.9l.94 6.7h-.35zm-9-16.7a.47.47 0 0 1 .5-.5h6.2a.47.47 0 0 1 .5.5v6.8a1.31 1.31 0 0 0-.5-.1H11.7a.9.9 0 0 0-.5.1v-6.8zM9.75 29.2H9.5l.89-6.7h.9zm.15-7.5a1.77 1.77 0 0 1 1.8-1.7h6.2a1.84 1.84 0 0 1 1.8 1.7H9.9z"></path>
                    </svg>
                    <p className="text-center">Seating</p>
                  </Link>
                </div>
              </div>
              {/* section2............... */}
              <div className="hidden md:flex shrink md:flex-row mx-[10rem] justify-center">
                {/* item1 */}
                <div className="container">
                  <Link to="/product">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      data-name="Layer 1"
                      viewBox="0 0 30 30"
                      className="category-icon h-[45%] mx-auto"
                    >
                      <title>UL_CATEGORY_ICONS</title>
                      <path d="M27 19.6H2.85a.47.47 0 0 0-.5.5v9.4a.47.47 0 0 0 .5.5h3.8a.47.47 0 0 0 .5-.5v-5.7h15.8v5.7a.47.47 0 0 0 .5.5h3.7a.47.47 0 0 0 .5-.5v-9.4a.77.77 0 0 0-.65-.5zm-.45 9.4h-2.7v-5.7a.47.47 0 0 0-.5-.5H6.65a.47.47 0 0 0-.5.5V29h-2.8v-8.4h23.2V29z"></path>
                    </svg>
                    <p className="text-center">Coffee Tables</p>
                  </Link>
                </div>
                {/* item2 */}
                <div className="container">
                  <Link to="/product">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      data-name="Layer 1"
                      viewBox="0 0 30 30"
                      className="category-icon h-[45%] mx-auto"
                    >
                      <title>UL_CATEGORY_ICONS</title>
                      <path d="M28.5 17h-13v-1H24a.47.47 0 0 0 .5-.5v-9A.47.47 0 0 0 24 6H6a.47.47 0 0 0-.5.5v9a.47.47 0 0 0 .5.5h8.5v1h-13a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h1v1.5a.47.47 0 0 0 .5.5h2a.47.47 0 0 0 .5-.5V28h19v1.5a.47.47 0 0 0 .5.5h2a.47.47 0 0 0 .5-.5V28h1a1 1 0 0 0 1-1v-9a1.08 1.08 0 0 0-1-1zm-24 12h-1v-1h1v1zm10-2h-13v-9h13v9zm-8-12V7h17v8h-17zm20 14h-1v-1h1v1zm2-2h-13v-9h13v9z"></path>
                      <path d="M17.5 21.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 1 0zM13.5 21.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 1 0z"></path>
                    </svg>
                    <p className="text-center">TV Units</p>
                  </Link>
                </div>
                {/* item3 */}
                <div className="container">
                  <Link to="/product">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      data-name="Layer 1"
                      viewBox="0 0 30 30"
                      className="category-icon h-[45%] mx-auto"
                    >
                      <title>UL_CATEGORY_ICONS</title>
                      <path d="M28.5 17h-27a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h1v1.5a.47.47 0 0 0 .5.5h2a.47.47 0 0 0 .5-.5V28h19v1.5a.47.47 0 0 0 .5.5h2a.47.47 0 0 0 .5-.5V28h1a1 1 0 0 0 1-1v-9a1.08 1.08 0 0 0-1-1zm-24 12h-1v-1h1v1zm10-2h-13v-9h13v9zm12 2h-1v-1h1v1zm2-2h-13v-9h13v9z"></path>
                      <path d="M17.5 21.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 1 0zM13.5 21.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 1 0z"></path>
                    </svg>
                    <p className="text-center">Shoe Racks</p>
                  </Link>
                </div>
                {/* item4 */}
                <div className="container">
                  <Link to="/product">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      data-name="Layer 1"
                      viewBox="0 0 30 30"
                      className="category-icon h-[45%] mx-auto"
                    >
                      <title>UL_CATEGORY_ICONS</title>
                      <path d="M29 12H1a.47.47 0 0 0-.5.5v2a.47.47 0 0 0 .5.5h1.5v14.5a.47.47 0 0 0 .5.5.47.47 0 0 0 .5-.5V19h11v8h12v2.5a.5.5 0 0 0 1 0V15H29a.47.47 0 0 0 .5-.5v-2a.47.47 0 0 0-.5-.5zm-2.5 14h-11v-7h11v7zm0-8h-23v-3h23v3zm2-4h-27v-1h27v1z"></path>
                      <path d="M16.5 16.5a.47.47 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.47.47 0 0 1 .5.5zM22.5 22.5a.47.47 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.47.47 0 0 1 .5.5z"></path>
                    </svg>
                    <p className="text-center">Study</p>
                  </Link>
                </div>
                {/* item5 */}
                <div className="container">
                  <Link to="/product">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      data-name="Layer 1"
                      viewBox="0 0 30 30"
                      className="category-icon h-[45%] mx-auto"
                    >
                      <title>UL_CATEGORY_ICONS</title>
                      <path d="M17 22a.47.47 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.47.47 0 0 0-.5-.5zm-9.5-3.7l-.9-3.9A.49.49 0 0 0 6 14a.55.55 0 0 0-.4.6l.9 3.9a.55.55 0 0 0 .6.4.51.51 0 0 0 .4-.6zm2-.2l-1.6-3.6a.54.54 0 0 0-1 .4l1.6 3.7a.43.43 0 0 0 .7.2.55.55 0 0 0 .3-.7zm0-8L7.9 6.5a.54.54 0 0 0-1 .4l1.6 3.7a.43.43 0 0 0 .7.2.55.55 0 0 0 .3-.7zm-2 8.2l-.9-3.9A.49.49 0 0 0 6 14a.55.55 0 0 0-.4.6l.9 3.9a.55.55 0 0 0 .6.4.51.51 0 0 0 .4-.6zm2-.2l-1.6-3.6a.54.54 0 0 0-1 .4l1.6 3.7a.43.43 0 0 0 .7.2.55.55 0 0 0 .3-.7zM17 22a.47.47 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.47.47 0 0 0-.5-.5zm0 0a.47.47 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.47.47 0 0 0-.5-.5zm-7.5-3.9l-1.6-3.6a.54.54 0 0 0-1 .4l1.6 3.7a.43.43 0 0 0 .7.2.55.55 0 0 0 .3-.7zm-2 .2l-.9-3.9A.49.49 0 0 0 6 14a.55.55 0 0 0-.4.6l.9 3.9a.55.55 0 0 0 .6.4.51.51 0 0 0 .4-.6zm0 0l-.9-3.9A.49.49 0 0 0 6 14a.55.55 0 0 0-.4.6l.9 3.9a.55.55 0 0 0 .6.4.51.51 0 0 0 .4-.6zm2-.2l-1.6-3.6a.54.54 0 0 0-1 .4l1.6 3.7a.43.43 0 0 0 .7.2.55.55 0 0 0 .3-.7zm0-8L7.9 6.5a.54.54 0 0 0-1 .4l1.6 3.7a.43.43 0 0 0 .7.2.55.55 0 0 0 .3-.7zM17 22a.47.47 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.47.47 0 0 0-.5-.5zm0 0a.47.47 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.47.47 0 0 0-.5-.5zM9.5 10.1L7.9 6.5a.54.54 0 0 0-1 .4l1.6 3.7a.43.43 0 0 0 .7.2.55.55 0 0 0 .3-.7zm0 8l-1.6-3.6a.54.54 0 0 0-1 .4l1.6 3.7a.43.43 0 0 0 .7.2.55.55 0 0 0 .3-.7zm-2 .2l-.9-3.9A.49.49 0 0 0 6 14a.55.55 0 0 0-.4.6l.9 3.9a.55.55 0 0 0 .6.4.51.51 0 0 0 .4-.6zm0 0l-.9-3.9A.49.49 0 0 0 6 14a.55.55 0 0 0-.4.6l.9 3.9a.55.55 0 0 0 .6.4.51.51 0 0 0 .4-.6zm2-.2l-1.6-3.6a.54.54 0 0 0-1 .4l1.6 3.7a.43.43 0 0 0 .7.2.55.55 0 0 0 .3-.7zm0-8L7.9 6.5a.54.54 0 0 0-1 .4l1.6 3.7a.43.43 0 0 0 .7.2.55.55 0 0 0 .3-.7zM17 22a.47.47 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.47.47 0 0 0-.5-.5zm-9.5-3.7l-.9-3.9A.49.49 0 0 0 6 14a.55.55 0 0 0-.4.6l.9 3.9a.55.55 0 0 0 .6.4.51.51 0 0 0 .4-.6zm2-.2l-1.6-3.6a.54.54 0 0 0-1 .4l1.6 3.7a.43.43 0 0 0 .7.2.55.55 0 0 0 .3-.7zm0-8L7.9 6.5a.54.54 0 0 0-1 .4l1.6 3.7a.43.43 0 0 0 .7.2.55.55 0 0 0 .3-.7zM17 22a.47.47 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.47.47 0 0 0-.5-.5zm0 0a.47.47 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.47.47 0 0 0-.5-.5zM9.5 10.1L7.9 6.5a.54.54 0 0 0-1 .4l1.6 3.7a.43.43 0 0 0 .7.2.55.55 0 0 0 .3-.7zm0 8l-1.6-3.6a.54.54 0 0 0-1 .4l1.6 3.7a.43.43 0 0 0 .7.2.55.55 0 0 0 .3-.7zm-2 .2l-.9-3.9A.49.49 0 0 0 6 14a.55.55 0 0 0-.4.6l.9 3.9a.55.55 0 0 0 .6.4.51.51 0 0 0 .4-.6zm0 0l-.9-3.9A.49.49 0 0 0 6 14a.55.55 0 0 0-.4.6l.9 3.9a.55.55 0 0 0 .6.4.51.51 0 0 0 .4-.6zm2-.2l-1.6-3.6a.54.54 0 0 0-1 .4l1.6 3.7a.43.43 0 0 0 .7.2.55.55 0 0 0 .3-.7zm0-8L7.9 6.5a.54.54 0 0 0-1 .4l1.6 3.7a.43.43 0 0 0 .7.2.55.55 0 0 0 .3-.7zM17 22a.47.47 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.47.47 0 0 0-.5-.5zm0 0a.47.47 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.47.47 0 0 0-.5-.5zM9.5 10.1L7.9 6.5a.54.54 0 0 0-1 .4l1.6 3.7a.43.43 0 0 0 .7.2.55.55 0 0 0 .3-.7zm0 8l-1.6-3.6a.54.54 0 0 0-1 .4l1.6 3.7a.43.43 0 0 0 .7.2.55.55 0 0 0 .3-.7zm-2 .2l-.9-3.9A.49.49 0 0 0 6 14a.55.55 0 0 0-.4.6l.9 3.9a.55.55 0 0 0 .6.4.51.51 0 0 0 .4-.6zM17 22a.47.47 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.47.47 0 0 0-.5-.5zm0 0a.47.47 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.47.47 0 0 0-.5-.5zm0 0a.47.47 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.47.47 0 0 0-.5-.5zm-9.5-3.7l-.9-3.9A.49.49 0 0 0 6 14a.55.55 0 0 0-.4.6l.9 3.9a.55.55 0 0 0 .6.4.51.51 0 0 0 .4-.6zm2-.2l-1.6-3.6a.54.54 0 0 0-1 .4l1.6 3.7a.43.43 0 0 0 .7.2.55.55 0 0 0 .3-.7zm0-8L7.9 6.5a.54.54 0 0 0-1 .4l1.6 3.7a.43.43 0 0 0 .7.2.55.55 0 0 0 .3-.7z"></path>
                      <path d="M24.5 3h-19a1 1 0 0 0-1 1v23a1 1 0 0 0 1 1h1v1.5a.5.5 0 0 0 1 0V28h15v1.5a.5.5 0 0 0 1 0V28h1a1 1 0 0 0 1-1V4a1.08 1.08 0 0 0-1-1zm-10 24h-9v-7h9v7zm0-8h-9v-7h9v7zm0-8h-9V4h9v7zm10 16h-9v-7h9v7zm0-8h-9v-7h9v7zm0-8h-9V4h9v7z"></path>
                      <path d="M7.2 10.9a.47.47 0 0 1-.6-.4l-.9-3.9a.47.47 0 0 1 .4-.6.47.47 0 0 1 .6.4l.9 3.9a.82.82 0 0 1-.4.6zM24.3 7l-1.6 3.7a.43.43 0 0 1-.7.2.55.55 0 0 1-.3-.7l1.6-3.7a.43.43 0 0 1 .7-.2.52.52 0 0 1 .3.7z"></path>
                      <path d="M22.9 7.5l-2.4 3.2a.5.5 0 1 1-.8-.6l2.4-3.2a.49.49 0 0 1 .7-.1.56.56 0 0 1 .1.7zM24.2 14.8l-1.6 3.7a.36.36 0 0 1-.6.2.61.61 0 0 1-.3-.7l1.6-3.7a.52.52 0 0 1 .7-.3.88.88 0 0 1 .2.8zM22.2 14.7l-.9 3.9a.51.51 0 0 1-1-.2l.9-3.9a.55.55 0 0 1 .6-.4.49.49 0 0 1 .4.6zM11.4 18.7a.49.49 0 0 1-.7-.1l-2.2-3.3a.62.62 0 0 1 .1-.7.49.49 0 0 1 .7.1l2.2 3.3a.47.47 0 0 1-.1.7zM13.5 22.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 1 0z"></path>
                    </svg>
                    <p className="text-center">Bookshelves</p>
                  </Link>
                </div>
                {/* item6 */}
                <div className="container">
                  <Link to="/product">
                    <img
                      className="h-[45%] mx-auto w-auto justify-center"
                      src="https://img.icons8.com/external-icongeek26-outline-icongeek26/64/000000/external-lamp-lifestyle-icongeek26-outline-icongeek26.png"
                      alt=""
                    />
                    <p className="text-center">Lighting</p>
                  </Link>
                </div>
                {/* item7 */}
                <div className="container">
                  <Link to="/product">
                    <img
                      className="h-[45%] mx-auto w-auto justify-center"
                      src="https://img.icons8.com/ios/50/000000/shop.png"
                      alt=""
                    />
                    <p className="text-center">Store</p>
                  </Link>
                </div>
                {/* item8 */}
                {/* <div className="container">
                                <img className='h-[45%] mx-auto w-auto justify-center' src="https://www.ulcdn.net/media/web-home-popular-categories/sale.png?1477381415" alt="" />
                                <p className='text-center'>Deal Zone</p>
                            </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
