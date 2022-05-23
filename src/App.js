import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/Pages/About/About";
import Blog from "./Components/Pages/Blog/Blog";
import Contact from "./Components/Pages/Contact/Contact";
import Home from "./Components/Pages/Home/Home";
import Login from "./Components/Pages/Login/Login";
import Services from "./Components/Pages/Services/Services";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import Navbar from "./Components/Shared/Navbar";

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
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
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
