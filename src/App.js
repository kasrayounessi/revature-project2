import "./App.css";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Contents from "./components/Contents";
import Login from "./components/Login";
import React, {useState} from "react"
import "./style.css"
import Modal from "./components/Modal";
function App() {
  const [isOpen,setIsOpen] = useState(false)
  const handleLoginClick = () =>
  {
    setIsOpen(true);
  }
  const handleClose = () =>
  {
    setIsOpen(false)
  }
  return (
    <div className="App">
      <Navbar handleLoginClick={handleLoginClick} />
      <Modal open={isOpen}>
        <Login handleClose={handleClose} />
      </Modal>
      <SearchBar />
      <Contents />
    </div>
  );
}

export default App;
