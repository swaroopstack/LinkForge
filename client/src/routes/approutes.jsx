import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/mainlayout";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";
import Dashboard from "../pages/dashboard";
import Analytics from "../pages/analytics";
import Profile from "../pages/profile";
import Settings from "../pages/settings";
import NotFound from "../pages/notfound";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analytics/:id" element={<Analytics />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;