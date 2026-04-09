import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function EnterpriseHero() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "calc(105vh - 90px)",
        overflow: "hidden",
        bgcolor: "background.paper",
      }}
    >
      {/* Background Image */}
      <Box
        component="img"
        src="/hr.png"
        alt="Enterprise connectivity solutions"
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* Overlay */}
      <Box sx={{ position: "absolute", inset: 0, bgcolor: "rgba(0,0,0,0.20)" }} />

      {/* Content */}
      <Container
        maxWidth={false}
        sx={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1600px",
          px: { xs: 4, lg: 14 },
          display: "flex",
          alignItems: "center",
          minHeight: "calc(100vh - 90px)",
        }}
      >
        <Box sx={{ maxWidth: 720, color: "common.white" }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2rem", md: "2.75rem", lg: "3.375rem" },
              fontWeight: 600,
              lineHeight: 1.2,
            }}
          >
            Empower Your Teams <br />
            with Global Connectivity.
          </Typography>

          <Typography
            sx={{
              mt: 2.5,
              fontSize: { xs: "1rem", md: "1.125rem" },
              color: "rgba(255,255,255,0.90)",
              lineHeight: 1.7,
              maxWidth: 640,
            }}
          >
            Enterprise eSIM solutions for corporate travel, remote teams, and
            global device deployments
          </Typography>

          <Button
            variant="contained"
            sx={{
              mt: 4,
              bgcolor: "#4B6FBF",
              "&:hover": { bgcolor: "#3f61aa" },
              px: 4,
              py: 1.75,
              borderRadius: 3,
              fontSize: "1rem",
              fontWeight: 600,
              textTransform: "none",
            }}
          >
            Get Your eSIM
          </Button>
        </Box>
      </Container>
    </Box>
  );
}