import react from "react";
import Main from "./pages/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/SignUp";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/education" element={<Main />} />
        <Route path="/eduaction/signup" element={<SignUp />} />
        <Route path="/education/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
