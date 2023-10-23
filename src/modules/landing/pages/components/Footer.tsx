import { Button, Box, Typography } from "@mui/material";
import { useState } from "react";

const bgColors = [
  "#6E4AC2",
  "#00A6CE",
  "#ff3333",
  "#fdf498",
  "#fe8a71",
  "#7bc043",
  "#4b3832",
  "#3c2f2f",
  "#8b9dc3",
];

export default function Footer() {
  const [selectedColor, setSelectedColor] = useState(bgColors[0]);

  return (
    <Box
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="space-around"
      height={{
        xs: "5rem",
        sm: "8rem"
      }}
      bgcolor="primary.200"
    >
      <Button
        sx={{
          borderRadius: "0px",
          width: {
            xs: "0px",
            md: "12.5rem",
            lg: "16.75rem"
          },
          height: {
            xs: "0px",
            md: "5.25rem"
          },
          display: {
            xs: "none",
            md: "flex"
          },
          bgcolor: selectedColor,
          color: "white",
          fontSize: {
            xs: "1.125rem",
            lg: "1.625rem"
          },
          fontWeight: "bold",
          '&:hover': {
            backgroundColor: selectedColor,
          }
        }}
        onMouseOver={() =>
          setSelectedColor(
            bgColors[Math.floor(Math.random() * bgColors.length)]
          )
        }
      >
        Mathesis
      </Button>
      <Box
        width="21.875rem"
        display="flex"
        justifyContent="space-around"
      >
        {["Criar conta", "Login", "Sobre nós"].map((text) => (
          <Typography
            key={text}
            sx={{
              cursor: "pointer",
              color: "white",
              fontSize: {
                xs: "1rem",
                sm: "1.125rem"
              }
            }}
          >
            {text}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}
