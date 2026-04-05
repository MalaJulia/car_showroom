import AboutUs from "../components/AboutUs/AboutUs";
import CarComponents from "../components/Cars/CarComponent";
import "./style.css";

export default function MainPage() {
  return (
    <div className="mainPage">
      <AboutUs />
      <CarComponents />
    </div>
  );
}
