import React, {useState,useEffect, useContext} from "react"
import {useNavigate} from 'react-router-dom'
import {baseURL} from '../util/BaseURL'
import axios from 'axios';
import Data from "../context";


export default function BookForm() {
  const {id,setUpdateORadd,BookID,BookCover,BookTitle,BookAuthor,BookPrice,BookCategory,BookDescription,updateORadd} = useContext(Data)
  
  const navigate = useNavigate(); 

  const [bookID,setBookID] = useState(`${BookID}`);
  const [bookCover, setBookCover] = useState(`${BookCover}`);
  const [bookTitle, setBookTitle] = useState(`${BookTitle}`);
  const [bookAuthor, setBookAuthor] = useState(`${BookAuthor}`);
  const [bookPrice ,setBookPrice ]= useState(`${BookPrice}`);
  const [bookCategory ,setBookCategory] = useState(`${BookCategory}`);
  const [bookDescription ,setBookDescription] = useState(`${BookDescription}`);

 
  
  const dashboardPage = ()=>{
      navigate('/');
  }

  const  addToDataBase = ()=>{
      axios.post(`${baseURL}/add`,{bookId:bookID,bookImage:bookCover,title:bookTitle,author:bookAuthor, description:bookDescription,price:bookPrice,category:bookCategory});
      setUpdateORadd(false);
      navigate('/');
      window.location.reload(false)
    }

  const updateDatabase = ()=>{
      axios.put(`${baseURL}/update/${id}`,{bookId:bookID,bookImage:bookCover,title:bookTitle,author:bookAuthor, description:bookDescription,price:bookPrice,category:bookCategory})
      navigate('/');
      window.location.reload(false)
    }  

  function uploadFile (e){
      var file = e.target.files[0]
      let reader = new FileReader()
      reader.readAsDataURL(file)
     
      reader.onload = () => {
        setBookCover(reader.result)
      };
      reader.onerror = function (error) {
        console.log('Error: ', error);
        console.log('File too large')
      }   
  }
    
  return (<>
  <div className="py-2 m-2 shadow-lg lg:py-4" style={{display:'grid', marginTop:'5px', padding:'10px', marginLeft:"50px",marginRight:"50px"}}>
    <form method='POST' action="../Pages/BookForm.jsx">
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-2xl font-bold leading-7 text-gray-900">Book Form</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you share.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="bookID" className="block text-sm font-medium leading-6 text-gray-900">
                Book ID
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="bookID"
                    value={bookID}
                    onChange={(e) => {setBookID(e.target.value)}
                    }
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Enter Book ID"
                    required={true}
                  />
                </div>
              </div>
            </div>
            
            <div className="sm:col-span-4">
              <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                Book Title
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="bookTitle"
                    value = {bookTitle}
                    onChange={(e)=>{setBookTitle(e.target.value)}}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Enter Book Title"
                    required={true}
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="author" className="block text-sm font-medium leading-6 text-gray-900">
                Book Author
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="bookAuthor"
                   value={bookAuthor}
                   onChange={(e)=>{setBookAuthor(e.target.value)}}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Enter Book Author"
                    required={true}
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="Price" className="block text-sm font-medium leading-6 text-gray-900">
                Book Price
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="bookPrice"
                    value={bookPrice}
                    onChange={(e)=>{setBookPrice(e.target.value)}}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Enter Book Price"
                    required={true}
                  />
                </div>
              </div>
            </div>
            
            <div className="sm:col-span-4">
              <label htmlFor="Category" className="block text-sm font-medium leading-6 text-gray-900">
                Category
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="bookPrice"
                    value={bookCategory}
                    onChange={(e)=>{setBookCategory(e.target.value)}}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Enter Book Category"
                    required={true}
                  />
                </div>
              </div>
            </div>
            {/* <div className="sm:col-span-4">
              <label htmlFor="Category" className="block text-sm font-medium leading-6 text-gray-900">
                Book Cover Image(URL)
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="bookCover"
                    value={bookCover}
                    onChange={(e)=>{setBookCover(e.target.value)}}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Enter Book Price"
                  />
                </div>
              </div>
            </div> */}

            <div className="sm:col-span-4">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                Description
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={bookDescription}
                  onChange={(e)=>{setBookDescription(e.target.value)}}
                  required={true}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about the book.</p>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                Book Cover photo
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input name="file-upload" type="file" onChange={uploadFile} required={true}/>
                    </label>
                    
                  </div>
                  <p className="text-xs mt-1 leading-5 text-gray-600">
                  PNG, JPEG less than 70KB
                  <br/> 
                  or
                  <br/>
                  <a className="text-blue-400" href="https://jpeg-optimizer.com/compress-image-to-20kb/"> Click to reduce size of image before upload</a>
                  </p>
                  
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" onClick={dashboardPage} className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          onClick={updateORadd ? updateDatabase : addToDataBase}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  </div>


</>)
}


