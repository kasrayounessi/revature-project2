import {Route, Routes } from "react-router-dom";
import AudioBooksPage from "./pages/AudioBooksPage";
import HomePage from "./pages/HomePage";
import ShoppingCartPage from "./pages/ShoppingCartPage";


const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/audiobooks" element={<AudioBooksPage/>}/>
      <Route path="/shoppingcart" element={<ShoppingCartPage />}/>
    </Routes>
  );
};
export default Routing;