import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Header from "./components/Header/Header";
import CarPage from "./pages/CarsPage";
import Footer from "./components/Footer/Footer";


export function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/vehicles/:id" element={<CarPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
