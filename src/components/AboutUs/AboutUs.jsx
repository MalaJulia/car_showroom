import { Button } from "@mui/material";
import "./style.css";
import { HashLink } from 'react-router-hash-link';

export default function AboutUs() {
  return (
    <div className="aboutUsContainer" id="aboutUs">
      <p className="premium">ПРЕМІУМ АВТОМОБІЛІ</p>
      <h2>ЗНАЙДІТЬ СВОЄ </h2>
      <h2>ІДЕАЛЬНЕ АВТО</h2>
      <p className="preview">Широкий вибір автомобілів за найкращими цінами</p>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "gold",
          color: "black",
          margin: "5px",
          position: "inherit",
        }}
      >
        <HashLink to="#catalog">Перейти до каталогу</HashLink>
      </Button>
    </div>
  );
}
