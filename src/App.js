// import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React,{BrowserRouter, Route, Routes} from "react-router-dom";
import AddCart from './AddCart';
import Cart from './Cart'
import Navbar from './Navbar';
// import { Data } from './Data';
import Product from './Product';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      {/* <Route path='/' element = {<Product/>}/> */}
      <Route path='/' element = {<AddCart/>}/>
      <Route path='/cart' element = {<Cart/>}/>
    </Routes>
    </BrowserRouter>

    {/* <Navbar/>
    <AddCart/>
    <Cart/> */}
    </div>
  );
}

export default App;
