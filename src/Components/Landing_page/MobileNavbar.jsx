import React,{useCallback, useEffect, useState} from 'react'
import "./MobileNavbar.css"
import { Link } from 'react-router-dom';
function MobileNavbar() {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = useCallback(
        ()=>{
            if(typeof window !== 'undefined'){
                if(window.scrollY > 100){
                  setShow(false);  
                }
                else{setShow(true)}
                // else if(window.scrollY <= 150){
                //     setShow(true)
                // }
                
            }
            
        },[lastScrollY]
    );

    useEffect(()=>{
        if (typeof window !== 'undefined'){
            window.addEventListener('scroll', controlNavbar);
            return ()=>{
                window.removeEventListener('scroll',controlNavbar);
            }
        }
    },[controlNavbar])



    const [filter, setFilter] = useState(1);
    const nfilter = (e,filterId)=>{

        setFilter(filterId);
        // nfilter(e);

    }

  return (
    <div className={`container fixed md:hidden   z-40 left-0 right-0 ${show?'top-16': 'top-5'} `}>
                <div className="flex justify-center items-center">
                    <ul className='flex divide-x-2 p-1 rounded bg-gray-300'>
                    <li className={`p-1 px-2 text-sm rounded ${filter == 1?'activeM':''}`} onClick={(e)=>nfilter(e,1)}><Link to="/"> SHOWCASE</Link></li>
                        <li className={`p-1 px-2 text-sm rounded ${filter === 2?'activeM':''}`} onClick={(e)=>nfilter(e,2)}><Link to="/product">STORES</Link></li>
                        <li className={`p-1 px-2 text-sm rounded ${filter === 3?'activeM':''}`} onClick={(e)=>nfilter(e,3)}><Link to="/about">FEEDS</Link></li>
                        <li className={`p-1 px-2 text-sm rounded ${filter === 4?'activeM':''}`} onClick={(e)=>nfilter(e,4)}><Link to="/cart">ONLY LUXURY</Link></li>
                    </ul>
                </div>
    </div>
  )
}

export default MobileNavbar