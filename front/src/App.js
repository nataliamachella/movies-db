import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SeriesPage from "./pages/SeriesPage";
import UsersPage from "./pages/UsersPage";
import NotFound from "./pages/NotFound";
import UserPage from "./pages/UserPage";
import Login from "./pages/Login";
import Register from "./pages/Register";

import "./App.css";

import { Routes, Route } from "react-router-dom";
import AuthContextProvider from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />

          <Route exact path="/series" element={<SeriesPage />} />

          <Route exact path="/users" element={<UsersPage />} />
          <Route exact path="/users/:id" element={<UserPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
