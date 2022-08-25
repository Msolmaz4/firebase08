import "./App.css";
import Signup from "./component/Signup";
//import Deneme from './component/Deneme';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./component/Login";
import Home from "./component/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
