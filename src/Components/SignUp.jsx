import React,{useState} from 'react'

function SignUp() {
  
    const [close, setClose] = useState(false);

    const close1 = ()=>{
        const a = document.querySelector("#signup");
        console.log(close)
        if (!close){
            a.classList.toggle("hidden");
            console.log(a);
            console.log(close);
            setClose(false);
        }


 }



  return (
    <div id="signup"  className=" container-full hidden w-full h-[100vh]  fixed z-50 top-0 backdrop-brightness-50 left-0 right-0 bottom-0">

    <div className="container-full mx-auto w-[70vw] h-[30rem] flex absolute top-14 bg-slate-200 left-0 right-0 bottom-0 z-50 p-1 ">
      <div className="relative mx-auto flex"> <img src="https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/605ad3f4c6679_json_image_1616565236.webp" alt="" /></div>



      {/* section 2nd  */}
      <div className="flex items-center w-[31rem] bg-white space-y-3 flex-col ">
        <div className="flex text-sm font-serif text-gray-500 self-end px-1 items-center hover:text-orange-600 ">
            <div onClick={close1} className="flex justify-center items-center hover:cursor-pointer "><i className="fa-sharp  text-xl align-middle m-0 fa-solid fa-xmark" ></i></div>
          
        </div>
        <div className="text-center font-serif font-bold text-2xl">
          SIGN UP FOR SALE UPDATES
        </div>
        <div className="text-center font-serif text-normal text-gray-400 ">
          Get Ideas,inspirations & offers in your inbox
        </div>
        <div className="text-center font-serif text-sm font-bold">
          BE THE FIRST TO KNOW.
        </div>
        <hr className="w-[10rem] border-orange-700" />
        <div className="flex flex-col  space-y-2">
          <div className=" border">
            {" "}
            <input
              className="p-2 w-[20rem]"
              type="email"
              name=""
              id=""
              placeholder="Email Address"
            />
          </div>
          <div className=" flex mx-auto items-center ">
            {" "}
            <input
              className="-ml-[100px] p-2 w-[20rem] border"
              type="password"
              name=""
              id=""
              placeholder="Password"
            />{" "}
            <p className="-mx-24 text-xs font-serif align-middle cursor-pointer text-red-400">
              Forget Password
            </p>
          </div>
        </div>

        <div className="bg-orange-500 p-2 rounded w-[18.5rem] justify-center text-center transition-transform hover:scale-105 ">
          <button className="capitalize  font-bold ">SIGN UP</button>
        </div>
        <div className="text-sm">
         Have an account?{" "}
          <span className="text-orange-500 hover:cursor-pointer">Log-in</span>{" "}
        </div>

        <div className="uppercase text-sm">Social Sign-in</div>
        <hr className="w-[5rem] border-orange-700" />

        <div className="flex space-x-2">
          <div className="flex space-x-4 text-white bg-blue-700 rounded px-2 p-1 items-center cursor-pointer">
            <div className="flex">
            <i class="fa-brands fa-facebook"></i>
            </div>
            <p>Connect</p>
            <div>
              <i class="fa-sharp fa-solid fa-arrow-right"></i>
            </div>
          </div>

          <div className="flex space-x-4 bg-red-700 px-2 rounded p-1 items-center text-white cursor-pointer">
            <div className="flex">
              <i className="fa-brands text-white fa-google"></i>{" "}
            </div>
            <p>Connect</p>
            <div>
              <i class="fa-sharp fa-solid fa-arrow-right"></i>
            </div>
          </div>
          
        </div>
        <div className="text-xs font-serif text-orange-500 flex  uppercase self-end ">
          *T&C Apply 
        </div>
      </div>
    </div>
    </div>
  )
}

export default SignUp