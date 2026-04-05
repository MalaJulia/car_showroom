import { useEffect, useState } from "react";
import { getCars } from "../../services/serviceCar";
import { useNavigate } from "react-router-dom";
import Filter from "../FilterAndSearch/Filter";
import Search from "../FilterAndSearch/Search";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import "./style.css";

export default function CarComponents() {
  const navigate = useNavigate();
  const [car, setCars] = useState([]);
  const [filter, setFilter] = useState([]);
  const [param, setParam] = useState({});
  const [search, setSearch] = useState("");

  useEffect(() => {
    getCars(param ? param : "").then(setCars);
  }, [param]);
  const tags = new Set();
  for (let text of car) {
    for (let tag of text.tags) {
      tags.add(tag);
    }
  }

  const filteredCars = car.filter((carItem) => {
    const matchesFilter =
      filter.length === 0 || filter.every((tag) => carItem.tags.includes(tag));

    const matchesSearch =
      !search ||
      carItem.title.toLowerCase().includes(search.toLowerCase()) ||
      carItem.description.toLowerCase().includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const handleClick = (res) => {
    navigate(`/vehicles/${res}`);

    window.scrollTo(0, 0);
  };

  return (
    <div id="catalog">
      <div className="textContainer">
        <p>КАТАЛОГ</p>
        <h2>Наші автомобілі</h2>
      </div>
      <div className="filterAndSearchContainer">
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={10} md={1} alignContent="center">
            <Search setSearch={setSearch} />
          </Grid>
          <Grid item xs={12} sm={10} md={1}>
            <Filter
              tags={[...tags]}
              setFilter={setFilter}
              setParam={setParam}
            />
          </Grid>
        </Grid>
      </div>
      <Grid container spacing={3} justifyContent="center">
        {filteredCars.map((res, index) => (
          <div key={index}>
            <div  className="card">
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card
                  onClick={() => handleClick(res.id)}
                  sx={{
                    minWidth: "300px",
                    maxWidth: "400px",
                    minHeight: "350px",
                    maxHeight: "420px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    sx={{ height: 140 }}
                    image={res.images[0]}
                    title={res.brand}
                  />
                  <CardContent
                    sx={{ background: "rgb(30, 30, 30)", flexGrow: 1 }}
                  >
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ color: "white" }}
                    >
                      {res.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitLineClamp: 5,
                        WebkitBoxOrient: "vertical",
                        color: "grey",
                      }}
                    >
                      {res.description}
                    </Typography>
                  </CardContent>
                  <Box
                    sx={{
                      background: "rgb(30, 30, 30)",
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "3px",
                    }}
                  >
                    <Typography
                      sx={{ color: "gold" }}
                      variant="body1"
                      padding="5px"
                    >
                      Детальніше
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: "rgb(186, 17, 17)", padding: "5px" }}
                    >
                      {res.price}$
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            </div>
          </div>
        ))}
      </Grid>
    </div>
  );
}
