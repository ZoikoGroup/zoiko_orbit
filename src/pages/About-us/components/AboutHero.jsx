import { Box, Typography } from "@mui/material";

export default function AboutHero() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "420px",
        height: "calc(100vh - 80px)",
        maxHeight: "640px",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <Box
        component="img"
        src="/abouthero.png"
        alt="Traveler connected with nature"
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(0,0,0,0.75), rgba(0,0,0,0.45), rgba(0,0,0,0.1))",
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1600px",
          mx: "auto",
          height: "100%",
          px: { xs: 3, lg: 8 },
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box sx={{ maxWidth: "720px", color: "white" }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "30px", md: "42px", lg: "52px" },
              fontWeight: 600,
              lineHeight: 1.2,
            }}
          >
            Your World. Always Connected.
            <br />
            Always Compassionate.
          </Typography>

          <Typography
            sx={{
              mt: 2.5,
              fontSize: { xs: "15px", md: "17px" },
              color: "rgba(255,255,255,0.9)",
              lineHeight: 1.7,
            }}
          >
            At Zoiko Orbit, we believe travel is more than movement — it's
            about meaningful connections to people, cultures, and the planet.
          </Typography>

          <Typography
            sx={{
              mt: 1.5,
              fontSize: { xs: "15px", md: "17px" },
              color: "rgba(255,255,255,0.9)",
              lineHeight: 1.7,
            }}
          >
            We keep you connected everywhere you go while supporting a more
            compassionate world.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}