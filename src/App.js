import About from "./components/about";
import Contact from "./components/contact";
import Home from "./components/home";
import Login from "./components/login";
import Navbar from "./components/navbar";
import Signup from "./components/signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./components/registration";
import Notfound from "./components/notfound";
import Details from "./components/details";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={
              <>
                <About />
              </>
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/details" element={<Details />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
