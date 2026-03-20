import { Box, Typography, Button, Container } from "@mui/material";
import AudienceCards from "../components/AudienceCards";
import Plans from "../components/Plans";
import GlobalConnectivity from "../components/GlobalConnectivity";
export default function Home() {
  return (
    <>
      {/* ── Hero Section ─────────────────────────────────────────────── */}
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          backgroundImage:
            "url('https://zoikoorbit.com/wp-content/uploads/2025/07/Rectangle-4-scaled.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
          position: "relative",
          // dark overlay
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            // background:
            //   "linear-gradient(to bottom, rgba(10,60,90,0.55) 60%, rgba(255,255,255,1) 100%)",
          },
        }}
      >
        <Container sx={{ position: "relative", zIndex: 1 }}>
          <Typography
            variant="h2"
            fontWeight="bold"
            gutterBottom
            sx={{ fontSize: { xs: "2rem", md: "3.5rem", lg: "4rem" } }}
          >
            Stay Connected Everywhere
          </Typography>

          <Typography
            variant="h6"
            sx={{
              mb: 5,
              fontWeight: 400,
              opacity: 0.95,
              fontSize: { xs: "1rem", md: "1.15rem", lg: "1.3rem" },
            }}
          >
            Your global eSIM. Trusted by travelers, enterprises, and travel
            brands worldwide.
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "#4260a6",
                px: 4,
                py: 1.5,
                borderRadius: "8px",
                fontWeight: 600,
                textTransform: "none",
                fontSize: "1rem",
                "&:hover": { backgroundColor: "#142060" },
              }}
            >
              Get Your eSIM
            </Button>

            <Button
              variant="outlined"
              size="large"
              sx={{
                color: "white",
                borderColor: "white",
                borderRadius: "8px",
                px: 4,
                py: 1.5,
                fontWeight: 600,
                textTransform: "none",
                fontSize: "1rem",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.1)",
                  borderColor: "white",
                },
              }}
            >
              Partner with Us
            </Button>
          </Box>
        </Container>

        {/* Extra white space at the bottom so the cards have room to overlap */}
        <Box sx={{ height: { xs: 60, md: 80 } }} />
      </Box>
      {/* ── Audience Cards (overlap hero bottom) ─────────────────────── */}
      <AudienceCards />
      {/* ── Plans ────────────────────────────────────────────────────── */}
      <Plans />

      {/* ── Global Connectivity ──────────────────────────────────────── */}
      <GlobalConnectivity />
    </>
  );
}
