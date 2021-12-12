import "./App.css";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Contents from "./components/Contents";

function App(props) {
  return (
    <div className="App">
      <Navbar />
      <SearchBar />
      <Contents />
    </div>
  );
}

export default App;
