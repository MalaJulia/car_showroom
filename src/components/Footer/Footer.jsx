import "./style.css";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationPinIcon from "@mui/icons-material/LocationPin";

export default function Footer() {
  return (
    <div className="footer" id="contact">
      <div className="showroom">
        <h2>
          {" "}
          C A R<span> S H O W R O O M </span>
        </h2>
        <p>Ваш надійний партнер у виборі автомобілів</p>
      </div>
      <div className="contact">
        <h2>Контакти</h2>
        <div>
          <LocalPhoneIcon sx={{ color: "rgb(186, 17, 17)" }} />
          <p>+380 (00) 000-00-00</p>
        </div>
        <div>
          <MailOutlineIcon sx={{ color: "rgb(186, 17, 17)" }} />
          <p>infoCar@gmail.com</p>
        </div>
        <div>
          <LocationPinIcon sx={{ color: "rgb(186, 17, 17)" }} />
          <p>м.Київ</p>
        </div>
      </div>
      <div className="work">
        <h2>Графік роботи</h2>
        <p>Пн-Пт: 09:00 - 20:00</p>
        <p>Cб: 10:00 - 18.00</p>
        <p>Нд: Вихідний</p>
      </div>
    </div>
  );
}
