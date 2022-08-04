export default function Login(){
    return(
        <>
        <div className="p-10 flex justify-center">
        <button className="bg-green-700 w-96 text-white p-2">
            Sign In
        </button>
        </div>

        <section className="grid grid-cols-3 border-t-[2px] border-gray-900 ">
            <div className="">
                <img src="https://images.squarespace-cdn.com/content/v1/61dcd32b3fb8bb4b5af9b560/8d79bf98-80dd-4f9e-b2c7-b1ce65aec799/fair-trade-clothing-summersalt"/>
            </div>
        <div className="flex justify-center">  
        <div className="flex items-center p-5">
         
        </div>
        <div className=" mx-64 ">
          
            <div className="text-lg p-5 flex justify-center">
                Sign in to LIAMI
            </div>
            <div className="text-sm px-5">
                Enter your detail below
            </div>
            <div className="pt-5 px-5 ">
            <input type="text" placeholder="email" className="outline px-2 w-72 h-9"  />
            </div>
            <div className="pt-7 px-5">
            <input type="text" placeholder="password" className=" outline px-2 w-72 h-9"/>
            </div>
            <div className="flex pt-4 ">
            <div className="pl-5">
            <button className="bg-black text-white w-20  h-9 rounded-full">Sign In</button>
            </div>
            
            <p className="px-[92px]">
            forgot Password?
            </p>
            </div>
        </div>
         </div>
        





        </section>
        </>
    )
}