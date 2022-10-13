import React from 'react'
import appstore from "./ThirdPage/svgIcon/app-store-png-logo-33107.png"

function Footer() {
  return (
    <div className=' h-[22rem] w-auto container-full py-3 items-center my-3 bg-slate-300 hidden md:flex flex-col mx-auto'>
        <div className="container mx-auto  flex  justify-center">

            <div className="space-y-2 mx-auto flex flex-col font-serif">
                <h2 className='font-bold my-2 text-2xl'>More Information</h2>
                <ul>
                    <li>About</li>
                    <li>About</li>
                    <li>About</li>
                    <li>About</li>
                    <li>About</li>
                    
                </ul>
            </div>
            {/* second section of footer */}
            <div className="space-y-2 mx-auto  flex flex-col font-serif">
                <h2 className='font-bold my-2 text-2xl'>Explore More</h2>
                <ul>
                    <li>About</li>
                    <li>About</li>
                    <li>About</li>
                    <li>About</li>
                    <li>About</li>
                    
                </ul>
            </div>
            {/* third section */}

            <div className=" space-y-2 mx-auto justify-center flex flex-col font-serif">
                <h2 className='font-semibold my-2 text-2xl capitalize'>Address</h2>
                <ul>
                    <li>B-115, Block b, Mansarover</li>
                    <li>garden, new delhi 2nd floor</li>
                    <li>poloce station,kirti nagar</li>
                    <li>opposit, delhi 110015</li>
                    <li><br /></li>
                    <li>+91 9999999999999</li>
                    <li>info@information.com</li>
                    
                </ul>
            </div>
        </div>

        {/* secand row starting */}
        <div className="container mx-auto flex justify-between">

                <div className="contianer ml-[9%] items-start flex flex-col space-y-4">

                            <h2 className='font-bold my-2 text-3xl capitalize'>Connect With Us:</h2>
                            <div className="flex justify-center space-x-2">

                                {/* telephone icons */}
                                        <div className="hove:text-orange-400">

                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                                            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                                        </svg>
                                        </div>

                            {/* email icon */}
                                    <div className="hove:text-orange-400">

                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                                    </svg>

                                    </div>
                                {/* facebook icons */}

                                <img className='h-8' src="https://img.icons8.com/ios-filled/50/000000/facebook-new.png"/>

                                {/* Twitter */}

                                <img className='h-8' src="https://img.icons8.com/ios-filled/50/000000/twitter.png"/>

                                {/* Youtube */}
                                <img className='h-8' src="https://img.icons8.com/ios-filled/50/000000/youtube-play.png"/>



                            </div>
                        

                </div>

                <div className="contianer mr-[7%] flex flex-col justify-between items-center">

                            <h2 className='font-bold my-2 text-3xl capitalize'>Downloads App:</h2>
                            <div className="flex justify-center items-center h-12 space-x-2">
                                    {/* app store */}
                                <img className='w-[100px]' src={appstore} alt="" />
                                        {/*play store  */}
                                <img className='h-8' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="" />        
                                



                            </div>


</div>
        </div>




    </div>


  )
}

export default Footer