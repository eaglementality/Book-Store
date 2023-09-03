import React from "react";
import { useNavigate } from "react-router-dom";
export default function SignUp(){
    const navigate = useNavigate();
   
    const signUpPage =()=>{
        navigate('/signUpPage');
    }
    
    return(<>
        <div className="py-2 ml-5 mr-5  shadow-lg lg:py-4" style={{ marginTop:'135px', padding:'10px'}}>
            
            <h2 className="text-2xl font-bold leading-7 my-5 text-gray-900">Login </h2>
            
            <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>
<br/>
            {/* <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"> */}
                <div className="sm:col-span-4">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email
                    </label>
                    <div className="mt-2">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            autoComplete="family-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-4">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        Password
                    </label>
                    <div className="mt-2">
                        <input
                            type="password"
                            name="password"
                            id="password"
                            autoComplete="family-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className=" col-span-4 text-center">
                    <hr className="my-5"/>
                        <div className="my-5 pl-5 flex gap-3 ">
                            Have'nt signed up ? 
                            <a className=" cursor-pointer p-2 rounded-lg shadow-md text-white bg-slate-400 hover:bg-slate-600" onClick={signUpPage}>Sign Up</a>
                            <a className=" cursor-pointer p-2 rounded-lg shadow-md text-white bg-slate-400 hover:bg-slate-600" onClick={()=>{navigate('/')}}>Cancel</a>
                        </div>
                </div>
            </div>
        {/* </div> */}
    </>)
}