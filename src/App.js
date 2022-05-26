import { Route, Routes } from "react-router-dom";
import "./App.css";

import Blog from "./Components/Pages/Blog/Blog";
import Contact from "./Components/Pages/Contact/Contact";
import Home from "./Components/Pages/Home/Home";
import Login from "./Components/Pages/Login/Login";
import Products from "./Components/Pages/Products/Products";
import Register from "./Components/Pages/Register/Register";
import Reviews from "./Components/Pages/Review/Reviews";

import RequireAuth from "./Components/RequireAuth/RequireAuth";

import Navbar from "./Components/Shared/Navbar";

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Products></Products>} />
          <Route path="/reviews" element={<Reviews></Reviews>} />
         
          <Route path="/blog" element={<Blog />} />
          <Route
            path="/contact"
            element={
              <RequireAuth>
                <Contact></Contact>
              </RequireAuth>
            }
          />
           <Route path="/login" element={<Login></Login> } />
           <Route path="/register" element={<Register></Register> } />
        </Routes>
       
      </Navbar>
      
      
    </div>
  );
}

export default App;
