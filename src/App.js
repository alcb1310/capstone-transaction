import "./css/style.css";
import { Routes, Route } from "react-router-dom";
import Photos from "./pages/Photos";
import Cart from "./pages/Cart";

import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route exact path="/" element={<Photos />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
