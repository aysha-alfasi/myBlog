import "./App.css";
import Layout from "./Layout";
import Header from "./components/header/Header";
import Post from "./components/post/Post";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
import Login from "./pages/login-page/Login";
import Register from "./pages/register-page/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path='register' element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
