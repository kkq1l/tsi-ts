import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";

import Footer from "./components/Footer";
import Soglashenie from "./pages/Soglashenie";
import Politika from "./pages/Politika";
import Products from "./pages/Products";
import Message from "./pages/Message";
import Auth from "./pages/Auth";
import Registration from "./pages/Registration";
import Profile from "./pages/Profile";
import E403 from "./pages/errors/E403";
import E404 from "./pages/errors/E404";
const env = await import.meta.env;
export const version = env.TEST;

function App() {
  const [authorized, setAuhorized] = useState(false);
  useEffect(() => {
    const tryData = async () => {
      const checkSession = await fetch("http://localhost:5000/profile", {
        credentials: "include",
      });
      if (checkSession.ok) {
        setAuhorized(true);
      } else {
        console.log("Нет доступа к профилю");
      }
    };
    if (!authorized) {
      tryData();
    }
  }, []);

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/message" element={<Message />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contacts" element={<Contacts />}></Route>
          <Route path="/products" element={<Products />}></Route>
          //Route footer
          <Route path="/soglashenie" element={<Soglashenie />}></Route>
          <Route path="/politika" element={<Politika />}></Route>
          <Route path="/registration" element={<Registration />}></Route>
          <Route path="/auth" element={<Auth />}></Route>
          <Route
            path="/profile"
            element={authorized ? <Profile /> : <E403 />}
          ></Route>
          <Route path="*" element={<E404 />}></Route>
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
