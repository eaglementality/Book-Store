import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

export default function AddItem(){
    
    const navigate = useNavigate()
    
    const BookFormPage =()=>{
        navigate('/BookFormPage');
        window.location.reload(false);
    }
    
    return (<>
        <div className='fixed relative' style={{display:'grid', marginTop:'10px', padding:'10px', marginLeft:"50px",marginRight:"50px"}}>
            <div className='relative flex w-full flex-wrap items-center justify-between  py-2 mb-2  shadow-lg  lg:py-4'>
                <div className='ml-5 font-bold text-xl flex w-[30%] items-center justify-between'>
                    Add a Book
                </div>
                <div className="flex items-center">
                    <button
                        onClick={BookFormPage}
                        type="button"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        className="mr-3 inline-block rounded px-6 pb-2 pt-2.5 text-xs bg-gray-600 font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-blue-600 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 motion-reduce:transition-none">
                        + Add
                    </button> 
                </div>
            </div>
        </div>
    </>)
}