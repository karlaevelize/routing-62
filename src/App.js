import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navigation } from "./components";
import { Homepage, AboutPage, PokemonDetails } from "./pages";

//1. I want homepage on the path "/"
//2. I want my about page on the path "/about"
//3. I want my navbar in all pages

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/pokemon/:name" element={<PokemonDetails />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
