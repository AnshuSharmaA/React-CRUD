


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Home from "./pages/dashboard/Home";
import Add from "./pages/user/Add";
import Edit from "./pages/user/Edit";
import Profile from "./pages/user/Profile";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/user/dashboard" element={<Home />}></Route>
          <Route path="/add/user" element={<Add />}></Route>
          <Route path="/edit/user" element={<Edit />}></Route>
          <Route path="/user/profile" element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;