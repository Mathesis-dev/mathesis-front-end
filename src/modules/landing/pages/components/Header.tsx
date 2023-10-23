import { Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const navigateToLoginPage = () => {
    navigate("/login");
  };

  return (
    <Box
      width="100%"
      bgcolor="primary.100"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      height={{
        xs: "5rem",
        sm: "6.875rem"
      }}
      position="fixed"
      px={{
        xs: "10%",
        md: "10%"
      }}
      zIndex="1"
    >
      <Typography
        sx={{
          color: "white",
          fontWeight: "bold",
          fontSize: {
            xs: "1.25rem",
            sm: "1.4375rem",
            lg: "1.625rem"
          }
        }}
      >
        Mathesis
      </Typography>
      <Box>
        <Button
          sx={{
            borderRadius: "20px",
            px: {
              xs: "1.5625rem",
              sm: "1.875rem"
            },
            py: {
              xs: "1.25rem",
              sm: "1.5625rem"
            },
            '&:hover': {
              color: "white",
              backgroundColor: "black"
            }
          }}
          onClick={navigateToLoginPage}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
}
