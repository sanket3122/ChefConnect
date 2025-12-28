import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import FaqPage from "./pages/FaqPage";
import AboutPage from "./pages/AboutPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/faq" element={<FaqPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}
