import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function PersonalTravelerHero() {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        height: { xs: "520px", md: "620px" },
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background Image */}
      <Box
        component="img"
        src="/travel1.png"
        alt="Personal Traveler eSIM"
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* Dark Overlay */}
      <Box
        sx={{ position: "absolute", inset: 0, bgcolor: "rgba(0,0,0,0.55)" }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1600px",
          mx: "auto",
          height: "100%",
          px: { xs: 3, lg: 12 },
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box sx={{ maxWidth: "720px", color: "white" }}>
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: "34px", md: "46px", lg: "56px" },
              fontWeight: 600,
              lineHeight: 1.2,
              color: "white",
            }}
          >
            Travel Freely. Stay <br />
            Connected Across <br />
            220+ Countries
          </Typography>

          <Typography
            sx={{
              mt: 3,
              fontSize: { xs: "16px", md: "18px" },
              color: "rgba(255,255,255,0.9)",
              lineHeight: 1.7,
            }}
          >
            Instant eSIM activation. No roaming shocks. Every plan supports
            animal welfare.
          </Typography>

          <Link to="/plans" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{
                mt: 4,
                bgcolor: "#00718A",
                color: "white",
                px: 4,
                py: 1.8,
                borderRadius: "12px",
                fontSize: "16px",
                fontWeight: 600,
                textTransform: "none",
                "&:hover": { bgcolor: "#0995B3" },
              }}
            >
              Get Your eSIM
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
