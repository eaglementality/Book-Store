import React, {useState, useEffect, useContext} from 'react';
import {AiOutlineEdit} from 'react-icons/ai';
import {RiDeleteBinLine} from 'react-icons/ri';
import axios from 'axios';
import {baseURL} from '../util/BaseURL';
// import { CurrentDataUpDate } from '../Pages/BookForm';
import { useNavigate } from 'react-router-dom';
import Data from '../context';

export default function MainContents(){
    
    const {setId,setUpdateORadd,setBookID,setBookCover,setBookTitle,setBookAuthor,setBookPrice,setBookCategory,setBookDescription} = useContext(Data);

    const navigate = useNavigate()

    const [data, setData]= useState([]);

    useEffect(()=>{
        axios.get(`${baseURL}/get`)
        .then((res)=>{
            console.log(res.data);
            setData(res.data);
        })
        .catch((err)=>console.log(err))
    },[]);  

    return(
    <>
            <div className="bg-white ">
                <div className="mx-auto max-w-2xl px-4 py-20 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className='text-2xl font-bold'>Products</h2>
<hr className='mt-3'/>
                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        
                         {

                        data.map((product,id) => 
                              
                              <div key={id}  className="group mt-5">
                                  
                                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                      <img
                                      src={product.bookImage}
                                      alt='BookCover'
                                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                                      />
                                  </div>

                                  <p className="mt-4 text-sm text-gray-700">{product.category}</p>
                                  <p className='mt-2 text-xl text-gray-800 font-bold'>{product.title}</p>
                                  <p className="mt-1 text-lg font-bold text-gray-500">{product.price}</p>
                                  <p className='mt-1 text-md text-gray-400'>{product.author}</p>
                                  <p className='mt-1 text-sm text-gray-400'>{product.description}</p>
                                  <hr className='my-2'/>
                                  <div className='mt-2 flex gap-5'>
                                    <AiOutlineEdit className='text-2xl cursor-pointer' onClick={()=>{
                                        navigate('/BookFormPage');
                                        setBookID(product.bookId)
                                        setBookCover(product.bookImage)
                                        setBookTitle(product.title)
                                        setBookAuthor(product.author)
                                        setBookPrice(product.price)
                                        setBookCategory(product.category)
                                        setBookDescription(product.description)
                                        setId(product._id)
                                        setUpdateORadd(true);
                                  }}/>
                                        
                                    <RiDeleteBinLine className='text-2xl cursor-pointer' onClick={()=>{
                                        axios.delete(`${baseURL}/delete/${product._id}`)
                                        window.location.reload(false);
                                    }}/>
                                  </div>
                              </div>
                              )                        
                            
                        
                        }  

                    </div>
                </div>
            </div>
    </>
    )
}