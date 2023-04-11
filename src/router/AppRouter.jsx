import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import About from "../pages/About";
import NewBlog from "../pages/NewBlog";
import Detail from "../pages/Detail";
import PrivateRouter from "./PrivateRouter";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AppRouter = () => {
  return (
    
      <BrowserRouter>

      <Navbar/>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="about" element={<About />} />

          <Route path="new-blog" element={<PrivateRouter />}>
            <Route index element={<NewBlog />} />
            <Route path="detail/:id" element={<Detail />} />
          </Route>

          <Route path="*" element={<NotFound/>}/>
        </Routes>

        <Footer/>
        
      </BrowserRouter>
   
  )
};

export default AppRouter;

