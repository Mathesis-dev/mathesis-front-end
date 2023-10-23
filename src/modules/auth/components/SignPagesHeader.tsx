import { Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function SignPagesHeader() {
  const navigate = useNavigate();

  const navigateToLandingPage = () => {
    navigate("/");
  };

  return (
    <Box
      className="header"
      sx={{
        display: "flex",
        width: "100%",
        bgcolor: "primary.main",
        justifyContent: "space-between",
        alignItems: "center",
        height: { xs: "5rem", sm: "6.875rem" },
        position: "fixed",
        paddingX: { xs: "10%", md: "10%" },
      }}
    >
      <Button
        sx={{
          borderRadius: "20px",
          paddingX: { xs: "1.5625rem", sm: "1.875rem" },
          paddingY: { xs: "1.25rem", sm: "1.5625rem" },
          '&:hover': {
            color: "white",
            bgcolor: "black",
          }
        }}
        onClick={navigateToLandingPage}
      >
        Voltar
      </Button>
      <Typography
        sx={{
          color: "white",
          fontWeight: "bold",
          fontSize: { xs: "1.25rem", sm: "1.4375rem", lg: "1.625rem" },
        }}
      >
        Mathesis
      </Typography>
    </Box>
  );
}
