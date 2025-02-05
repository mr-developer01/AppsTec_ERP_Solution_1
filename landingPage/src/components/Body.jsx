import React from 'react'
import AllUsers from './AllUsers'
import { Routes, Route } from "react-router";
import Landing from './Landing';
import AddUser from './AddUser';

const Body = () => {
  return (
    <div>
        <Routes>
            <Route>
                <Route path='/' element={<Landing />}></Route>
                <Route path='/create' element={<AddUser />}></Route>
                <Route path="/users" element={<AllUsers />} />  
            </Route>
        </Routes>
    </div>
  )
}

export default Body