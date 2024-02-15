import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Questions from "./pages/Questions/Questions";
import Auth from "./pages/Auth/Auth";
import AskQuestion from "./pages/AskQuestion/AskQuestion";
import DisplayQuestion from "./pages/Questions/DisplayQuestion";
import Tags from './pages/Tags/Tags';
import Users from './pages/Users/Users';
import UsersProfile from './pages/UserProfile/UsersProfile';

const AllRoutes = () => {
  return (
    <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/Auth' element={<Auth/>} />
        <Route path='/Questions' element={<Questions/>} />
        <Route path='/AskQuestion' element={<AskQuestion/>} />
        <Route path='/Questions/:id' element={<DisplayQuestion/>} />
        <Route path='/Tags' element={<Tags/>} />
        <Route path='/Users' element={<Users/>} />
        <Route path='/Users/:id' element={<UsersProfile/>} />
    </Routes>
  )
}

export default AllRoutes
