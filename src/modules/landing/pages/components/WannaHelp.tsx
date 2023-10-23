import { Button, Box, Typography } from "@mui/material";
import TeamIcon from "../../../../shared/assets/icons/team.svg";

export default function WannaHelp() {
  return (
    <Box
      width="100%"
      bgcolor="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
      height={{
        xs: "39.0625rem",
        sm: "38rem",
        "2xl": "50rem",
      }}
    >
      <Box
        width="65%"
        display="flex"
        flexDirection={{ md: "column", xl: "row" }}
        justifyContent="space-around"
        alignItems="center"
      >
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography
            fontWeight="bold"
            fontSize={{
              xs: "2.5rem",
              "2xl": "3rem",
            }}
            textAlign="center"
            pt={{ xs: "0px", sm: "5rem" }}
            pb={{ xs: "2.8125rem", sm: "2.5rem" }}
          >
            Queremos te ajudar!
          </Typography>

          <Typography
            width={{ xs: "21.875rem", sm: "100%", md: "35rem" }}
            textAlign="center"
            fontSize={{
              xs: "1.25rem",
              "2xl": "1.375rem",
            }}
          >
            Nossa missão é te ajudar da melhor forma possível. Navegue pela
            plataforma e encontre os melhores profissionais.
          </Typography>

          <Button
            sx={{
              backgroundColor: "primary.100",
              mt: { xs: "3.75rem", sm: "3.125rem" },
              borderRadius: "20px",
              px: "3.75rem",
              py: "1.5625rem",
              color: "white",
              '&:hover': {
                backgroundColor: "primary.100"
              }
            }}
          >
            Sobre nós
          </Button>
        </Box>

        <Box
          component="img"
          src={TeamIcon}
          alt="Equipe"
          display={{ xs: "none", sm: "block" }}
          mt="0px"
          width={{ xs: "0px", md: "60%", xl: "60%" }}
          height={{ xs: "0px", md: "31.25rem", xl: "60%" }}
        />
      </Box>
    </Box>
  );
}
