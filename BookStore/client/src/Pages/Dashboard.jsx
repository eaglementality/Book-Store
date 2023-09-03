import React,{ useContext, useEffect, useState} from 'react';
import Nav from '../components/Navbar';
import AddItem from '../components/AddBook';
import MainContents from '../components/Books';
import Data from '../context'

export default function Dashboard(){
    


return(<>
    
        <Nav/>
        <hr className='mt-8'/>
        <AddItem/>
        <hr className='mt-5'/>
        <MainContents/>
    
    </>)
}