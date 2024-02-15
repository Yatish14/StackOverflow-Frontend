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
        <Route exact path='/StackOverflow-Frontend/' element={<Home/>} />
        <Route path='/StackOverflow-Frontend/Auth' element={<Auth/>} />
        <Route path='/StackOverflow-Frontend/Questions' element={<Questions/>} />
        <Route path='/StackOverflow-Frontend/AskQuestion' element={<AskQuestion/>} />
        <Route path='/StackOverflow-Frontend/Questions/:id' element={<DisplayQuestion/>} />
        <Route path='/StackOverflow-Frontend/Tags' element={<Tags/>} />
        <Route path='/StackOverflow-Frontend/Users' element={<Users/>} />
        <Route path='/StackOverflow-Frontend/Users/:id' element={<UsersProfile/>} />
    </Routes>
  )
}

export default AllRoutes
