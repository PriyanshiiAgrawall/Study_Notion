import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css"
function App() {

  const [isLoggedIn, setIsLogIn] = useState(false);
  return (
    <div className="App">
      <Navbar isLoggedIn={isLoggedIn} setIsLogIn={setIsLogIn} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login setIsLogIn={setIsLogIn} />}></Route>
        <Route path="/signup" element={<Signup setIsLogIn={setIsLogIn} />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>



      </Routes>














    </div>
  );
}

export default App;
