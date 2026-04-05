import { useState } from "react";
import { TextField, Button, Box, Rating, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function ReviewForm({ id }) {
  const [reviews, setReviews] = useState(() => {
    const stored = localStorage.getItem("reviews");
    return stored ? JSON.parse(stored) : [];
  });

  const [errors, setErrors] = useState({});
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const newReview = {
      id: id,
      rating: rating || 0,
      comment: formData.get("comment"),
      reviewerName: formData.get("reviewerName"),
      reviewerEmail: formData.get("reviewerEmail"),
      date: new Date().toISOString(),
    };
    const newErrors = {};

    if (!newReview.comment || newReview.comment.trim().length < 3) {
      newErrors.comment = "Коментар має містити щонайменше 3 символів";
    }

    if (!newReview.reviewerName || newReview.reviewerName.trim().length < 2) {
      newErrors.reviewerName = "Імʼя занадто коротке";
    }

    if (!newReview.reviewerEmail || !newReview.reviewerEmail.includes("@")) {
      newErrors.reviewerEmail = "Невірний емейл";
    }

    if (newReview.rating === 0) {
      newErrors.rating = "Будь-ласка вкажіть рейтиг ";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    const updatedReviews = [...reviews, newReview];

    setReviews(updatedReviews);

    localStorage.setItem("reviews", JSON.stringify(updatedReviews));

    e.currentTarget.reset();
    setRating(0);
  };

  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const width = isMobile || isTablet ? "400px" : "auto";

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: width,
        maxWidth: 400,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        backgroundColor: "#2b2b2b",
        padding: "20px",
        borderRadius: "12px",
      }}
    >
      <Typography variant="h6" sx={{ color: "white" }}>
        Add Review
      </Typography>

      <Rating
        sx={{
          "& .MuiRating-iconFilled": {
            color: "gold",
          },
          "& .MuiRating-iconHover": {
            color: "gold",
          },
        }}
        value={rating}
        onChange={(_, newValue) => setRating(newValue)}
      />
      {errors.rating && (
        <Typography color="error" variant="caption">
          {errors.rating}
        </Typography>
      )}

      <TextField
        sx={{
          "& .MuiOutlinedInput-root": {
            backgroundColor: "#2b2b2b",
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

          "& .MuiInputLabel-root": {
            color: "#aaa",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "gold",
          },
          zIndex: 0,
        }}
        name="comment"
        label="Comment"
        multiline
        rows={3}
        required
        error={!!errors.comment}
        helperText={errors.comment}
      />

      <TextField
        sx={{
          "& .MuiOutlinedInput-root": {
            backgroundColor: "#2b2b2b",
            color: "white",
            "& input:-webkit-autofill": {
              WebkitBoxShadow: "0 0 0 100px #2b2b2b inset",
              WebkitTextFillColor: "white",
              caretColor: "white",
            },

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

          "& .MuiInputLabel-root": {
            color: "#aaa",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "gold",
          },
          zIndex: 0,
        }}
        name="reviewerName"
        label="Name"
        required
        error={!!errors.reviewerName}
        helperText={errors.reviewerName}
      />

      <TextField
        sx={{
          "& .MuiOutlinedInput-root": {
            backgroundColor: "#2b2b2b",
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
            "& input:-webkit-autofill": {
              WebkitBoxShadow: "0 0 0 100px #2b2b2b inset",
              WebkitTextFillColor: "white",
              caretColor: "white",
            },
          },

          "& .MuiInputLabel-root": {
            color: "#aaa",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "gold",
          },
          zIndex: 0,
        }}
        name="reviewerEmail"
        label="Email"
        type="email"
        required
        error={!!errors.reviewerEmail}
        helperText={errors.reviewerEmail}
      />

      <Button
        sx={{
          backgroundColor: "gold",
          color: "black",
          fontWeight: "bold",

          "&:hover": {
            backgroundColor: "#e6c200",
          },
        }}
        type="submit"
        variant="contained"
      >
        Submit
      </Button>
    </Box>
  );
}
