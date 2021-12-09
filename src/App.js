import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import AudioBooksPage from "./pages/AudioBooksPage";
import HomePage from "./pages/HomePage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import Routing from "./Routes";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routing/>
      </BrowserRouter>
      {/*<HomePage />*/}
      {/*<AudioBooksPage />*/}
      {/*<ShoppingCartPage />*/}
    </div>
  );
}

export default App;
