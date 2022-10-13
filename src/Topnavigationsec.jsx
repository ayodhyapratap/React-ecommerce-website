import React from 'react'
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom'
import ThirdHome from './Components/ThirdPage/ThirdHome'

function Topnavigationsec() {
  return (
    

    <div className="App">
      <div className="container hidden mf:flex flex-row  justify-center space-x-1 text-sm mx-auto ">
        <div className="container flex flex-row mx-[10.5rem] space-x-2   items-center">
          

          <div className="container flex flex-row mx-0 w-auto  items-center">
            <Link className='flex' to="/intuch">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-question-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
            </svg>
            <div className="px-1 cursor-pointer">Help</div>
            </Link>
          </div>
          <div className=" flex flex-row   ">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            class="bi bi-truck"
            viewBox="0 0 16 16"
          >
            <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
          </svg>
          <div className="w-[7vw] -ml-2 cursor-pointer  ">Track Order</div>
          </div>



      <div className="container ml-8 flex flex-row p-1  space-x-4 justify-end">
        <div className="mx-2 cursor-pointer">Store</div>
        <div className="mx-2 cursor-pointer"><Link to="/inTuch" >  Bulk Order </Link></div>
        <div className="mx-2 cursor-pointer">Gift Cards</div>
      </div>
        </div>

      {/* second nav section */}
      </div>
      {/* <Navigation /> */}
      {/* <Second_navigation /> */}
      
    </div>

    
  )
}

export default Topnavigationsec