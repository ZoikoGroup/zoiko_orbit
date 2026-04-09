import { Box, Typography, Button } from "@mui/material";

export default function PartnerHero() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "calc(105vh - 90px)",
        overflow: "hidden",
        bgcolor: "white",
      }}
    >
      {/* Background Image */}
      <Box
        component="img"
        src="/drop-hero.png"
        alt="Global eSIM partnership"
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* Overlay */}
      <Box
        sx={{ position: "absolute", inset: 0, bgcolor: "rgba(0,0,0,0.20)" }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1600px",
          mx: "auto",
          px: { xs: 6, lg: 14 },
          display: "flex",
          alignItems: "center",
          minHeight: "calc(100vh - 90px)",
        }}
      >
        <Box sx={{ maxWidth: "720px", color: "white" }}>
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: "32px", md: "44px", lg: "54px" },
              fontWeight: 600,
              lineHeight: 1.2,
              color: "white",
            }}
          >
            Grow Your Business with <br />
            Global eSIM Connectivity
          </Typography>

          <Typography
            sx={{
              mt: 2.5,
              fontSize: { xs: "16px", md: "18px" },
              color: "rgba(255,255,255,0.9)",
              lineHeight: 1.7,
              maxWidth: "640px",
            }}
          >
            Seamless eSIM solutions for travel agencies, OTAs, tour operators,
            and distributors.
          </Typography>

          <Button
            variant="contained"
            sx={{
              mt: 4,
              bgcolor: "#4B6FBF",
              color: "white",
              px: 4,
              py: 1.8,
              borderRadius: "12px",
              fontSize: "16px",
              fontWeight: 600,
              textTransform: "none",
              "&:hover": { bgcolor: "#3f61aa" },
            }}
          >
            Become a Partner
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
