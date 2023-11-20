import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterAccount from "./RegisterAccount/RegisterAccount";
import Login from "./LoginAccount/Login";
import HomePage from "./HomePage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />     {/* mặc định login sẽ hiển thị trước */}
        
        <Route path="/RegisterAccount" element={<RegisterAccount />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/HomePage" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;