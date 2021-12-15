import "./App.css";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Contents from "./components/Contents";
import Login from "./components/Login";
import Cart from "./components/Cart";
import React, {useState} from "react"
import "./style.css"
import Modal from "./components/Modal";
function App() {
  const [isOpen,setIsOpen] = useState(false)
  const [cartIsOpen,setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const handleLoginClick = () =>
  {
    setIsOpen(true);
  }
  const handleClose = () =>
  {
    setIsOpen(false)
  }
  const handleCartClick = () =>
  {
    setCartOpen(true);
  }
  const handleCartCloseClick = () =>
  {
    console.log("Close this shit")
    setCartOpen(false);
  }
  
  // WORK IN PROGRESS CODE
  // const onAdd = (product) => {
  //   if(exist) {
  //     setCartItems(
  //       cartItems.map((x) => x.id === product.id ? {...exist,qty: exist.qty +1} : x)
  //     )
  //   }
  //   else {
  //     setCartItems([...cartItems,{...product, qty: 1}])
  //   }
  // }
  return (
    <div className="App">
      <Navbar
        handleLoginClick={handleLoginClick}
        handleCartClick={handleCartClick}
      />
      <Modal open={isOpen}>
        <Login handleClose={handleClose} />
      </Modal>

      <Modal open={cartIsOpen}>
        <Cart handleCartCloseClick={handleCartCloseClick} cartItems={cartItems} />
      </Modal>
      <SearchBar />

      <Contents />
    </div>
  );
}

export default App;
