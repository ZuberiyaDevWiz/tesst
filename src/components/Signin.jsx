export default function Signin(){
    return(
        <>
      

        <section className="grid grid-cols-4  py-20  ">
            <div>
                <img src="https://images.squarespace-cdn.com/content/v1/61dcd32b3fb8bb4b5af9b560/8d79bf98-80dd-4f9e-b2c7-b1ce65aec799/fair-trade-clothing-summersalt"/>
            </div>
        <div className="flex justify-center items-center p-5">  
    
         
        </div>
        <div className = "-mx-28 ">
          
            <div className="text-3xl font-bold pt-16 px-4 ">
                Sign in to LIAMI
            </div>
            <div className="text-sm px-5 pt-2">
                Enter your detail below
            </div>
            <div className="pt-5 px-5 ">
            <input type="text" placeholder="email" className="outline-neutral-700 px-2 w-96 h-9 rounded border border-gray-800"  />
            </div>
            <div className="pt-7 px-5">
            <input type="text" placeholder="password" className="  border border-gray-800 rounded px-2 w-96 h-9"/>
            </div>
            <div className="flex pt-4 ">
            <div className="pl-5">
            <button className="bg-black text-white w-20  h-9 rounded-full">Sign In</button>
            </div>
            
            <p className="px-44">
            forgot Password?
            </p>
            </div>
        </div>
        <div className="flex items-center justify-center pb-[670px]">
        <div className=" p-5">
            Not a member?
        </div>
        <button className="rounded-full h-12 w-36 bg-orange-500">signUp Now</button>
        </div>


        </section>
        </>
    )
}