import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import{Route,Routes, BrowserRouter as Router} from 'react-router-dom'

import Register from './Components/Pages/Admin/Register';
import Login from './Components/Pages/Admin/Login';

import AddCar from './Components/Pages/Admin/AddCar';
import AboutUs from './Components/Pages/Admin/AboutUs';
import Services from './Components/Pages/Admin/Services';
import Home from './Components/Pages/Admin/Home';
import CardDisplay from './Components/Pages/Admin/card';
import ContactUs from './Components/Pages/Admin/ContactUs';
import SingleCar from './Components/Pages/singleCar';
import Navbar from './Components/Pages/Admin/Navbar';
import UpdateCar from './Components/Pages/updateCar';


// import UserPanel

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Router>
        <Navbar/>
       <Routes>
       <Route path='/' element={<App/>} />
       
       <Route path='/login' element={<Login/>} />
       <Route path='/register' element={<Register/>}/>
       <Route path='/addcar'  element={<AddCar/>} />
       <Route path='/cars'   element={<CardDisplay/>}/>
       <Route path='/about'  element={<AboutUs/>} />
       <Route path='/services' element={<Services/>}/>
       <Route path='/contact'  element={<ContactUs/>}/>
       <Route  path='/singleCar/:id' element ={<SingleCar/>}  />
       <Route path='/home' element={<Home/>}/>
       <Route path='/updateCar/:id' element={<UpdateCar/>}/>
       </Routes>
    </Router>
   
);
