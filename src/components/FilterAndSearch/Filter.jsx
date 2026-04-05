import {
  Autocomplete,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import { useState } from "react";
import "./style.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function Filter({ tags, setFilter, setParam }) {
  const [sortBy, setSortBy] = useState("");

  const params = [
    { sortBy: "price", value: "asc", text: "Від дешевих" },
    { sortBy: "price", value: "desc", text: "Від дорожчих" },
    { sortBy: "rating", value: "asc", text: "Від найменшого рейтингу" },
    { sortBy: "rating", value: "desc", text: "Від найбільшого рейтингу" },
    { text: "Скидання фільтру" },
  ];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const width = isMobile || isTablet ? 400 : 300;

  const handleChange = (event) => {
    setSortBy(event.target.value);
    for (let sort of params) {
      if (event.target.value === sort.text) {
        let paramsQuery = {
          sortBy: sort.sortBy,
          value: sort.value,
        };
        setParam(paramsQuery);
      }
    }
  };
  return (
    <div className="filterContainer">
      <FormControl
        variant="standard"
        sx={{
          width: width,
          paddingY: "5px",
          "& .MuiInputLabel-root": {
            color: "#aaa",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "gold",
          },

          "& .MuiInputLabel-root.MuiInputLabel-shrink": {
            color: "gold",
          },
        }}
      >
        <InputLabel
          sx={{ color: "gold" }}
          id="demo-simple-select-standard-label"
        >
          Фільтр за...
        </InputLabel>
        <Select
          sx={{
            color: "white",
            "&:before": { borderBottomColor: "#555" },
            "&:hover:not(.Mui-disabled):before": {
              borderBottomColor: "gold",
            },
            "&:after": { borderBottomColor: "gold" },
            ".MuiSvgIcon-root": { color: "gold" },
          }}
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select"
          value={sortBy}
          label="Фільтр"
          onChange={handleChange}
          MenuProps={{
            PaperProps: {
              sx: {
                backgroundColor: "#2b2b2b",
                color: "white",
              },
            },
          }}
        >
          {params.map((data, index) => (
            <MenuItem
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(255,215,0,0.2)",
                },
                "&.Mui-selected": {
                  backgroundColor: "rgba(255,215,0,0.3)",
                },
              }}
              key={index}
              value={data.text}
            >
              {data.text}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Autocomplete
        sx={{
          width: width,
          paddingY: "5px",

          "& .MuiOutlinedInput-root": {
            backgroundColor: "#2b2b2b",
            borderRadius: "10px",
            color: "white",

            "& fieldset": {
              borderColor: "#555",
            },

            "&:hover fieldset": {
              borderColor: "gold",
            },

            "&.Mui-focused fieldset": {
              borderColor: "gold",
            },
          },

          "& .MuiAutocomplete-tag": {
            backgroundColor: "rgba(255,215,0,0.2)",
            color: "white",
          },

          "& .MuiAutocomplete-tag svg": {
            color: "gold",
          },

          "& input": {
            color: "white",
          },
        }}
        ListboxProps={{
          sx: {
            backgroundColor: "#2b2b2b",
            color: "white",

            "& .MuiAutocomplete-option": {
              "&:hover": {
                backgroundColor: "rgba(255,215,0,0.2)",
              },
              "&[aria-selected='true']": {
                backgroundColor: "rgba(255,215,0,0.3)",
              },
            },
          },
        }}
        multiple
        id="tags-standard"
        options={tags}
        getOptionLabel={(option) => option}
        onChange={(event, value) => setFilter(value)}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Фільтр по тегам"
            placeholder="Tag"
            sx={{
              "& .MuiInputLabel-root": {
                color: "#aaa",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "gold",
              },
              "& .MuiInput-underline:before": {
                borderBottomColor: "#555",
              },
              "& .MuiInput-underline:hover:before": {
                borderBottomColor: "gold",
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "gold",
              },
            }}
          />
        )}
      />
    </div>
  );
}
