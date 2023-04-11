import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import Register from '../pages/Register'
import About from '../pages/About'
import NewBlog from '../pages/NewBlog'
import Detail from '../pages/Detail'
import PrivateRouter from './PrivateRouter'

const AppRouter = () => {
  return (
   <Router>
    <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/about" element={<About/>}/>

        <Route path="/new-blog" element={<PrivateRouter/>}>
        <Route index element={<NewBlog/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
        </Route>
       
     


    </Routes>
   </Router>
  )
}

export default AppRouter

