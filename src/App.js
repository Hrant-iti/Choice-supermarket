import "./App.css";
import Cart from "./components/actual components/Cart";
import Footer from "./components/actual components/Footer";
import Header from "./components/actual components/Header";
import Home from "./components/pages/home/Home";
import { Context } from "./components/actual components/Context";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Products from "./components/pages/products/Products";
import { homeproductslist } from "./components/pages/home/homeproductslist";
import Order from '../src/components/pages/order/Order';
import Delivery from '../src/components/pages/delivery/Delivery';
import Contact from './components/pages/contact/Contact';
import About from './components/pages/about/About';
import Favorite from "./components/pages/favorite/Favorite";
import AddingAnimation from "./components/actual components/AddingAnimation";
import { Link } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { CiHeart } from "react-icons/ci";
import { useEffect } from "react"; 
import Aos from "aos"; 
import "aos/dist/aos.css"; 

function App() {
  const [booleanForCart, setBooleanForCart] = useState(false);
  const [count, setCount] = useState(0);
  const [filterProducts,setFilterProducts] = useState(homeproductslist);
  const [total, setTotal] = useState(0);
  const [productAdding,setProductAdding] = useState(false)
  const [type, setType] = useState('Foreign');
  const [load,setLoad] = useState(false);

  useEffect(() => { 
    Aos.init({ duration: 2000 }); 
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, Math.round(Math.random() * 5000));
  }, []); 
 
  const [cart,setCart] = useState([]);
  const addCart = item => setCart([...cart, item]);
  const removeCart = id => setCart([...cart.filter(el => el.id !== id)])

  const [favorite,setFavorite] = useState([]);
  const addFavorite = item => setFavorite([...favorite, item]);
  const removeFavorite = id => setFavorite([...favorite.filter(el => el.id !== id)])

  const filtering = (catName) => {
    setFilterProducts(homeproductslist.filter(obj => obj.category === catName))
  }

  const properties = {
    booleanForCart,
    setBooleanForCart,
    setCount,addCart,cart,
    filterProducts,filtering,
    removeCart,setFilterProducts,
    total, setTotal,
    favorite,addFavorite,removeFavorite,
    productAdding,setProductAdding,
    type, setType,
    setLoad, load
  };

  return (
    <Context.Provider value={properties}>
      <div className="App">
      <label className="panele_bar">
        <span>
          <GiShoppingCart
            onClick={() => {
              setBooleanForCart(true);
            }}
          />
          <button>{cart.length}</button>
        </span>
        <Link to='/Favorite'>
          <span>
            <CiHeart />
            <button>{favorite.length}</button>
          </span>
        </Link>
      </label>
        <Header />
        <Cart />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/Order" element={<Order />} />
            <Route path="/Delivery" element={<Delivery />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/About" element={<About />} />
            <Route path="/Favorite" element={<Favorite />} />
        </Routes>
        <AddingAnimation />
        <Footer />
        <div className="loader" style={{display : load ? 'flex' : 'none'}}>
          <div className="loader_circle"></div>
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;