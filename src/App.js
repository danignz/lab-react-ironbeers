import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Beers from "./views/Beers";
import BeerDetails from "./views/BeerDetails";
import NewBeer from "./views/NewBeer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/random-beer" element={<BeerDetails />} />
        <Route path="/new-beer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
