import { LOGO_URL } from "../utils/constants";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Cart from "./Cart";

const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<About />} />          
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
      </div>
    );
  };
   export default Header;
   