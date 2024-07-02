import "./App.css";
import Layout from "./Layout";
import Header from "./components/header/Header";
import Post from "./components/post/Post";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
import Login from "./pages/login-page/Login";
import Register from "./pages/register-page/Register";
import { UserContextProvider } from "./UserContext";
import CreatePost from "./pages/create-post/CreatePost";
import PostPage from "./pages/post-page/PostPage";

function App() {
  return (
    <UserContextProvider>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/create' element={<CreatePost />} />
        <Route path='/post/:id' element={<PostPage />} />
      </Route>
    </Routes>
    </UserContextProvider>
  );
}

export default App;
