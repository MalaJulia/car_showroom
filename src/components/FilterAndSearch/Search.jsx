import { TextField } from "@mui/material";

export default function Search({ setSearch }) {
  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  return (
    <div className="mainSearchContainer">
      <TextField
        sx={{
          width: "400px",

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

          "& input": {
            color: "white",
          },

          "& .MuiInputLabel-root": {
            color: "#aaa",
          },

          "& .MuiInputLabel-root.Mui-focused": {
            color: "gold",
          },
          "& input[type='search']::-webkit-search-cancel-button": {
            WebkitAppearance: "none",
            height: "16px",
            width: "16px",
            cursor: "pointer",

            backgroundImage:
              'url(\'data:image/svg+xml;utf8,<svg fill="gold" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" stroke="gold" stroke-width="2"/></svg>\')',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          },
          zIndex: 0,
        }}
        onChange={handleChange}
        label="Пошук"
        slotProps={{
          input: {
            type: "search",
          },
        }}
      />
    </div>
  );
}
