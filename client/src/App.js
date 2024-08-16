import logo from "./logo.svg";
import "./App.css";
import Signup from "./compoennts/register";
import Login from "./compoennts/login";
import Homepage from "./compoennts/homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Signup />} />
          <Route exact path="/homepage" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
