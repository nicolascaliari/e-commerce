
import CheckoutPage from "./components/CheckoutPage";
import NavBar from "./components/Navbar";
import Product from "./components/Product";
import Products from "./components/Products"; 
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="App">
  <BrowserRouter >
        <NavBar />
  
      <Routes>
         <Route path='/signup' element={<Signup />}></Route>
         <Route path='/login' element={<Login />}></Route>
         <Route path='/' element={<Products />}></Route>
         <Route path="/checkout-page" element={<CheckoutPage/>}></Route>
      </Routes>
  </BrowserRouter>

    </div>
  );
}

export default App;
