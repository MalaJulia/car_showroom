import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import "./style.css";
import { useLocation } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function Header() {
  const { pathname } = useLocation();

  const navigate = useNavigate();

  const isHomePage = pathname === "/";
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className="header">
      <Link to="/" className="headerName">
        {" "}
        C A R<span> S H O W R O O M </span>
      </Link>
      {isHomePage ? (
        <div className="linkContainer">
          <HashLink to="#catalog">Каталог</HashLink>
          <HashLink to="#aboutUs">Про нас</HashLink>
          <HashLink to="#contact">Контакти</HashLink>
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
        <Link to="/">
          {" "}
          <HomeIcon
            fontSize="medium"
            sx={{ color: "gold", paddingRight: "5px" }}
          />
        </Link>
      )}
    </div>
  );
}
