import React ,{useState} from 'react'

function Favoriteslider() {

    const [closerfav, setCloserfav] = useState(false);
    const close3 = ()=>{
        const a = document.querySelector("#drawer2");
        console.log(closerfav)
        if (!closerfav){
            a.classList.toggle("ani");
            
            
            setCloserfav(false);
        } 
    }
  return (
    <div id='drawer2' className="hidden absolute md:flex -right-[100%] top-0  bg-orange-100 px-2 h-[100%]">
    <div className="flex  flex-col mx-auto w-[25rem] pl-5">
        <div className='justify-end text-right  text-white w-auto '>
            <div className='px-2 mx-auto bg-orange-500 w-7 float-right' onClick={close3}>

            <i class="fa-solid fa-xmark"></i></div>
            </div>
        <div>
            <h2 className='text-lg font-bold font-serif uppercase  text-center'>Faverite item</h2>
        <hr className='text-orange w-[50%] text-center mx-auto' />
        </div>

        <div className='flex-col space-y-2' >
            <h2 className='font-bold text-xl '>Product</h2>
            <div className="flex justify-start space-x-3">
                <div className='flex w-20 h-20 bg-gray-200'>
                    img
                </div>
                <div className='flex flex-col text-left text-sm space-y-2 capitalize'>
                    <div>item heading name</div>
                    <div>item dicribtion</div>
                    <div>quantity:{"0"}</div>
                </div>
            </div>
            <div className='font-bold text-base uppercase'>
                    price:  {"200"}
                </div>
        </div>
        <hr />

        <div className='flex flex-col justify-center space-y-2 '>
            <h2 className='text-xl font-bold font-serif'>Apply Coupon/Vouchers</h2>

            <div className='flex justify-between '>
                <p className='text-base uppercase'>Cart total</p>
                <p className='font-bold  px-2' >{"200"}</p>
            </div>

            <div className='flex justify-between'>
                <p className='text-base uppercase'>discount</p>
                <p className='font-bold  px-2' >{"200"}</p>
            </div>

            <div className='flex justify-between'>
                <p className='text-base uppercase '>Dilivery</p>
                <p className='font-bold  px-2' >{"200"}</p>
            </div>

            <div className='flex justify-between'>
                <p className='text-base font-bold uppercase'>total amount:</p>
                <p className='font-bold px-2' >{"200"}</p>
            </div>
            
           

        </div>

        <div className='flex justify-between mt-2'>
            <div className=" flex text-center uppercase shadow border-teal-100 border  rounded px-5 transition-transform cursor-pointer hover:scale-105 text-orange-500">Continue</div>
            <div className="flex text-center uppercase shadow bg-orange-500 text-white rounded px-5 transition-transform cursor-pointer hover:scale-105"> chekout</div>
        </div>
        



    </div>
</div>
  )
}

export default Favoriteslider