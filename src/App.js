// import logo from './logo.svg';
import "./App.css";
import React, { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   NavLink
// } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom'
import Home from "./Home";
import Start2nd_p from "./Components/Secondpage/Start2nd_p";
import Cart_main from "./Components/CartSection_buy/Cart_main";
import ThirdHome from "./Components/ThirdPage/ThirdHome";
import Langding_page from "./Components/Landing_page/Langding_page";
import Mobileviewdrawer from "./Mobileviewdrawer";



function App() {
// for cart click drwer open 

      const onmobileview = ()=>{
        const draw = document.querySelector("#mobiledrawer");
        draw.classList.toggle("anim")
      }

      const onclickcart = ()=>{
        const draw = document.querySelector("#drawer");
        draw.classList.toggle("ani")
        
      }

      const onclickheart = ()=>{
        const draw2 = document.querySelector("#drawer2");
        draw2.classList.toggle("ani")
      }

   const onlogin = ()=>{
     const a = document.querySelector("#close");
     if (a.classList.contains("hidden")){
          a.classList.remove("hidden");
     }
     
   }

   const signup = ()=>{
    const a = document.querySelector("#signup");
    if (a.classList.contains("hidden")){
         a.classList.remove("hidden");
    }
    
  }
  

  return (
    <>
    
      <div className=" overflow-x-hidden md:overflow-x-visible ">
      
      <div className="container-full bg-gray-100 mx-auto p-1 ">
        <div className="p-3 flex    justify-center items-center md:space-x-7 md:mx-[11.5rem]  ">
          {/* icon logo */}
        <Link to="/Home">
          <div className="container hidden md:flex items-center px-2 space-x-3 w-auto">
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="40"
              viewBox="0 0 50 37"
              class="logo-with-gradient"
            >
              <defs>
                <linearGradient id="a" x1="0%" y1="50%" y2="50%">
                  <stop offset="0%" stop-color="#EC8523"></stop>
                  <stop offset="35%" stop-color="#ED7745"></stop>
                  <stop offset="37%" stop-color="#ED7545"></stop>
                  <stop offset="76%" stop-color="#E95D47"></stop>
                  <stop offset="100%" stop-color="#E85448"></stop>
                </linearGradient>
              </defs>
              <polygon
                fill="url(#a)"
                fill-rule="evenodd"
                points="0 0 0 36.201 33.604 36.201 33.604 31.948 4.359 31.948 4.359 4.253 45.641 4.253 45.641 36.201 50 36.201 50 0"
              ></polygon>
            </svg>
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="50"
              viewBox="0 0 213 107"
              class="logo-text"
            >
              <g fill="#2F4858">
                <path d="M20.28 46.3C8.68 46.3 0 39.6 0 24.68V.93h9.1V24.4c0 9.5 4.12 14.2 11.32 14.2s11.3-4.7 11.3-14.2V.9h8.76v23.7c0 14.9-8.6 21.6-20.2 21.6v.1zm37.46-18.6v17.35h-8.52v-31.8h7.8l.37 5.8c1.8-3.66 6.4-6.68 11.8-6.68v8.3c-5.8-1.35-11.5 1.6-11.5 7.03zM93.9 45.93c-4.5 0-9.2-2.06-11.83-5.95l-.3 5.07h-7.7V.93h8.5v16.7c2.8-3.38 6.96-5.3 11.33-5.23 8.58 0 14.9 7.2 14.9 16.77 0 9.55-6.3 16.76-14.9 16.76zm-2.65-27.2c-5 0-9.03 3.9-9.03 10.44 0 6.55 4.04 10.45 9.03 10.45 5 0 9.03-3.9 9.03-10.45 0-6.55-4.04-10.44-9.03-10.44zm49.3 26.32l-.3-5.07c-2.65 3.9-7.35 5.95-11.83 5.95-8.58 0-14.9-7.2-14.9-16.76 0-9.56 6.3-16.77 14.9-16.77 4.48 0 9.18 2.06 11.83 5.96l.3-5.08h7.7v31.77h-7.7zm-9.48-26.32c-5 0-9.04 3.9-9.04 10.44 0 6.55 4.04 10.45 9.04 10.45 5 0 9.03-3.9 9.03-10.45 0-6.55-4.03-10.44-9.03-10.44zm48.56 26.32V27.48c0-6.18-2.14-8.24-6.02-8.24-4 0-8.4 3.68-8.4 8.1v17.72h-8.5v-31.8h7.8l.4 5.88c2.2-4.05 6.9-6.77 11.8-6.77 8.5 0 11.6 5.9 11.6 13.75v18.9h-8.5v.03h-.13zm-179.4 61V61.93h8.95v37.13h19.77v7H.23zm58.62 0l-.3-5.07c-2.63 3.9-7.33 5.95-11.82 5.95-8.58 0-14.9-7.2-14.9-16.76 0-9.56 6.3-16.77 14.9-16.77 4.5 0 9.2 2.06 11.83 5.96l.3-5.08h7.72v31.77h-7.72zm-9.47-26.32c-5 0-9.04 3.9-9.04 10.44 0 6.55 4.04 10.45 9.04 10.45 5 0 9.03-3.9 9.03-10.45 0-6.55-4-10.44-9-10.44zm50.76 26.32l-.3-5.07c-2.64 3.9-7.34 5.95-11.82 5.95-8.58 0-14.9-7.2-14.9-16.76 0-9.56 6.3-16.77 14.9-16.77 4.37-.07 8.53 1.85 11.3 5.22v-16.7h8.54v44.13h-7.72zm-9.5-26.32c-5 0-9.04 3.9-9.04 10.44 0 6.55 4.04 10.45 9.04 10.45 5 0 9.03-3.9 9.03-10.45 0-6.55-4.03-10.44-9.03-10.44zm50.78 26.32l-.3-5.07c-2.64 3.9-7.34 5.95-11.83 5.95-8.6 0-15-7.2-15-16.76 0-9.56 6.3-16.77 14.9-16.77 4.4-.07 8.5 1.85 11.3 5.22v-16.7h8.5v44.13h-7.7.1zm-9.48-26.32c-5 0-9.04 3.9-9.04 10.44 0 6.55 4.04 10.45 9.04 10.45 5 0 9.03-3.9 9.03-10.45 0-6.55-4.02-10.44-9.02-10.44zm53.43 10.67H164.2c-.2 4.84 2.3 10.34 10.83 10.34 3.75-.1 7.37-1.4 10.3-3.75v6.1c-3.02 2.3-7.65 3.7-12.94 3.7-9.8 0-16.7-7.2-16.7-17 0-10.2 7.8-16.6 16-16.6 8.1 0 14.1 5 14.1 12.5 0 1.5-.2 3-.6 4.42l.13.24zM172 78.83c-3.58 0-6.7 2.06-7.42 7h13.6c.72-3.84-1.77-7-6.18-7zm29.53 9.87v17.35H193v-31.8h7.78l.37 5.8c1.83-3.66 6.43-6.68 11.83-6.68v8.3c-5.76-1.35-11.45 1.6-11.45 7.03z"></path>
              </g>
            </svg>
            
          </div>
          </Link>
          {/* drawer on mobile view .......................... */}
            <div className="transition-transform hover:scale-105 flex mx-auto ml-0 justify-center p-2 border rounded items-center md:hidden " onClick={onmobileview}>
              <i className="text-center  fa-solid fa-bars"></i>
            </div>
            <Mobileviewdrawer  />

          {/* search input and search icon */}
          <div className=" container  flex  text-sm rounded-full justify-end md:justify-center h-10 ">
            <input
              className="md:w-full   outline-none px-6 rounded-l-full"
              type="text"
              placeholder="Search"
            />
              
            
            <div className="flex p-3 text-center hover:text-yellow-400 bg-white rounded-r-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="15"
                fill="currentColor"
                class="bi bi-search "
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </div>
          </div>
          <div className="container hidden md:flex w-auto space-x-1 ">
            <div className="container flex py-2 items-center justify-center">
              {/* van icon */}
              <div className=" flex px-2 hover:text-orange-400">
                <Link to="/about">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="20"
                  fill="currentColor"
                  class="bi bi-truck"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                </svg>
                </Link>
              </div>
              {/* user icon */}
              <div className=" group relative flex px-2 hover:text-orange-400 ">
              
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="20"
                  fill="currentColor"
                  class="bi bi-person-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
              
                
                {/* <div className="flex absolute backdrop-blur-sm w-5 h-5 text-center bg-slate-300 items-center justify-center rounded -right-1 -top-4  ">0</div> */}
                <div className="container hidden flex-col w-20  rounded top-5 absolute bg-white z-50 group-hover:flex ">
                  <button><div className="flex text-center rounded border px-2 hover:bg-slate-300" onClick={onlogin} >Login</div></button>
                  <button><div className="flex text-center rounded border px-2 hover:bg-slate-300 "onClick={signup}>Signup</div></button>
                </div>
              </div>
              {/* heart icon */}
              <div className="relative flex px-2 hover:text-orange-400" onClick={onclickheart}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="20"
                  fill="currentColor"
                  class="bi bi-suit-heart"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
                </svg>
                <div className="flex absolute backdrop-blur-sm w-5 h-5 text-center bg-slate-300 justify-center items-center rounded -right-1 -top-4  ">
                  0
                </div>
              </div>
              {/* cart icon */}
              <div className=" relative flex px-2 hover:text-orange-400" onClick={onclickcart}>
                
                
                <svg

                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="20"
                  fill="currentColor"
                  class="bi bi-cart"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
                
                <div className="flex absolute backdrop-blur-sm w-5 h-5 text-center bg-slate-300 justify-center items-center rounded -right-1 -top-4  ">
                  0
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />

        {/* Navigation for absolute section inherit */}

        
        <hr />
        </div>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Home" element={<Home/>}/>
          <Route exact path="/product" element={<Langding_page  />}/>
          <Route exact path="/about" element={<Start2nd_p/>}/>
          <Route exact path="/cart" element={<Cart_main />}/>
          <Route exact path="/inTuch" element={<ThirdHome />}/>
          {/* <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/recovery-password" element={<RecoveryPassword/>}/> */}
          {/* <Route path="*" element={<NotFound/>}/> */}

        </Routes>
      </div>
      
    </>
  );
}

export default App;
