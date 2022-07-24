import React from 'react';
import './App.css';
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom'
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
           </Routes>

      </Router>
      <Footer/>
      <ToastContainer />
    </>
  );
}

export default App;
