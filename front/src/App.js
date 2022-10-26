import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SeriesPage from "./pages/SeriesPage";
import UsersPage from "./pages/UsersPage";
import NotFound from "./pages/NotFound";
import UserPage from "./pages/UserPage";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/series" element={<SeriesPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:id" element={<UserPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
