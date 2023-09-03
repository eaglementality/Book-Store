import React,{useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/login';
import SignUp from './Pages/signUp.jsx';
import BookForm from './Pages/BookForm';
import Data from './context';
function App() {
 
  const [BookID ,setBookID] = useState('');
  const [BookCover, setBookCover] = useState('');
  const [BookTitle, setBookTitle] = useState('');
  const [BookAuthor, setBookAuthor] = useState('');
  const [BookPrice ,setBookPrice ]= useState('');
  const [BookCategory ,setBookCategory] = useState('');
  const [BookDescription ,setBookDescription] = useState('');
  const [id, setId]=useState('');

  const[updateORadd, setUpdateORadd]= useState(false);
 
  return (
    <>
    <Data.Provider value={{
      id,setId,
      BookID,setBookID,
      BookCover, setBookCover,
      BookTitle, setBookTitle,
      BookAuthor, setBookAuthor,
      BookPrice ,setBookPrice,
      BookCategory ,setBookCategory,
      BookDescription ,setBookDescription,
      updateORadd, setUpdateORadd
    }}>
      <BrowserRouter>
      <Routes>
            <Route path='/'  element={<Dashboard/>}/>
            <Route path='/loginPage'  element={<Login/>}/>
            <Route path='/signUpPage' element={<SignUp/>}/>
            <Route path='/BookFormPage' element={<BookForm/>}/>
      </Routes>
      </BrowserRouter> 
    </Data.Provider>

    </>
  )
}

export default App;
