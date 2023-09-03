import React from 'react';
import {useNavigate} from 'react-router-dom';
import {GiBookCover} from 'react-icons/gi'
// Initialization for ES Users
import {Modal, Ripple, initTE,} from "tw-elements";
  
  initTE({ Modal, Ripple });

export default function Nav(){
    const navigate = useNavigate();
    
    const loginpage = ()=>{
        navigate('/loginPage');
    }

return (<>
    <nav className="relative flex  w-full flex-wrap items-center justify-between bg-slate-800 py-2  shadow-lg   lg:py-4">
    
        <div className='px-2 flex '>
            <GiBookCover className='text-white h-9 w-9'/>
            <div className='px-2 font-bold text-xl text-white'>Books Store</div>
        </div>  
        <div className="ml-5 flex w-[30%] items-center justify-between">    
            <input
                type="search"
                className="relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none motion-reduce:transition-none dark:border-neutral-500 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon2" />

    
            <span className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200" id="basic-addon2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5">
                <path
                    fill-rule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clip-rule="evenodd" />
                </svg>
            </span>
        </div>
        <div className="items-center">
               
                    <button
                        onClick = {loginpage}
                        type="button"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        className="mr-3 inline-block rounded px-6 pb-2 pt-2.5 text-xs bg-gray-600 font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-blue-600 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 motion-reduce:transition-none">
                        Login 
                    
                    </button>
                
         </div>
    </nav>
</>);
}