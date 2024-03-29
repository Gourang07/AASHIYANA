import './App.css'
import React from "react";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { list, list2 } from "./assets/cards-list";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLogin from "./components/Auth/UserLogin";
import Footer from "./components/Footer/Footer";
import UserRegister from "./components/Auth/UserRegister";
import HotelLogin from "./components/Auth/HotelLogin";
import HotelRegister from "./components/Auth/HotelRegister";
import UserDashboard from './components/Auth/UserDashboard';
import BookingPage from './components/Auth/BookingPage';
import Home from './components/Auth/Home';
import AddRoom from './components/Auth/AddRoom';
import NavigationBar from './components/Navbar/NavigationBar';
import UpdateHotel from './components/Auth/UpdateHotel';
import HotelDashboard from './components/Auth/HotelDashboard';
import UpdateUser from './components/Auth/UpdateUser';

export default function App() {
  return (
    <div className="Home">
    <NavigationBar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/userlogin' element={<UserLogin />} />
          <Route path='/userregister' element={<UserRegister />} />
          <Route path='/hotelregister' element={<HotelRegister />} />
          <Route path='/hotellogin' element={<HotelLogin />} />
          <Route path='/userdashboard' element={<UserDashboard />} />
          <Route path='/booking' element={<BookingPage />} />
          <Route path='/addRoom' element={<AddRoom/>} />
          <Route path='/updateHotel' element={<UpdateHotel/>} />
          <Route path='/updateUser' element={<UpdateUser/>} />
          <Route path='/hoteldashboard' element={<HotelDashboard/>} />


        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}
