import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import "./style.css";
import { useLocation } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();

  const navigate = useNavigate();

  const isHomePage = pathname === "/";
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className="header">
      <a href="/" className="headerName">
        {" "}
        C A R<span> S H O W R O O M </span>
      </a>
      {isHomePage ? (
        <div className="linkContainer">
          <a href="/#catalog">Каталог</a>
          <a href="/#aboutUs">Про нас</a>
          <a href="/#contact">Контакти</a>
        </div>
      ) : (
        <></>
      )}

      {!isMobile ? (
        <Button
          sx={{
            backgroundColor: "gold",
            color: "black",
            marginRight: "5px",
          }}
          className="buttonMain"
          variant="contained"
          onClick={() => navigate("/")}
        >
          Головна сторінка
        </Button>
      ) : (
        <a href="/">
          {" "}
          <HomeIcon
            fontSize="medium"
            sx={{ color: "gold", paddingRight: "5px" }}
          />
        </a>
      )}
    </div>
  );
}
