import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar'
import Shop from "./pages/shop/Shop"
import Cart from "./pages/cart/Cart"
import Header from './components/Header';
import { ShopContextProvider } from './context/ShopContext';


function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <BrowserRouter>
      <Navbar/>
      <Header/>
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;
