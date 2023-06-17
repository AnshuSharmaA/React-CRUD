import Add from "./pages/Add";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/add/records" element={<Add />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;