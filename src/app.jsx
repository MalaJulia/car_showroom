import "./app.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Header from "./components/Header/Header";
import CarPage from "./pages/CarsPage";
import Footer from "./components/Footer/Footer";


export default function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/vehicles/:id" element={<CarPage />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}
