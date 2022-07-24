import React, { useState} from 'react';
import './App.css';
import { BrowserRouter as Router , Routes, Route, useNavigate} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Cart from './pages/Cart';
import Product from './pages/Product';
import Home from './pages/Home';
import LoginBuyer from './pages/buyer/LoginBuyer';
import RegisterBuyer from './pages/buyer/Registerbuyer';
import Footer from './components/Footer';
import ProductList from './pages/ProductList';
import HeaderNav from './components/HeaderNav';
import About from './pages/About';
import SearchBar from './pages/SearchBar';
import ErrorPage from './pages/ErrorPage';



function App() {
   

  return (
    <>
     <Router> 
          <HeaderNav/>
             <Routes>
             <Route path='/' element={ <Home/> } />
             <Route path='/login' element={<LoginBuyer/> } />
             <Route path='/register' element={<RegisterBuyer/>} />
             <Route path="/products/:category" element={<ProductList/>} />
             <Route path="/product/:id" element={<Product />}/>
             <Route path='/cart' element={ <Cart /> }  />
             <Route path='/about' element={<About/> } />
             <Route path='/search' element={ <SearchBar /> } />
             <Route path="*" element={ <ErrorPage />} />
           </Routes>

      </Router>
      <Footer/>
      {/* <ToastContainer /> */}
    </>
  );
}

export default App;
