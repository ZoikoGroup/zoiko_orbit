import { Box, Typography } from "@mui/material";

export default function ExperienceFuture() {
  return (
    <Box
      component="section"
      sx={{ position: "relative", width: "100%", bgcolor: "white" }}
    >
      <Box sx={{ position: "relative", width: "100%", overflow: "hidden" }}>
        {/* Background Image */}
        <Box
          component="img"
          src="/exp.png"
          alt="Experience future of travel"
          sx={{
            width: "100%",
            height: { xs: "420px", md: "480px", lg: "520px" },
            objectFit: "cover",
            display: "block",
          }}
        />

        {/* Overlay Card */}
        <Box
          sx={{
            position: "absolute",
            right: { xs: 24, md: 40, lg: 140 },
            top: "50%",
            transform: "translateY(-24px)",
            bgcolor: "rgba(11,124,143,0.70)",
            backdropFilter: "blur(6px)",
            color: "white",
            borderRadius: "16px",
            p: { xs: 3.5, md: 4.5 },
            maxWidth: "540px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
          }}
        >
          <Typography
            component="h3"
            sx={{
              fontSize: { xs: "20px", md: "22px", lg: "24px" },
              fontWeight: 600,
              lineHeight: 1.4,
              color: "white",
            }}
          >
            Experience the future of travel connectivity—one eSIM for every
            destination.
          </Typography>
          <Typography
            sx={{
              mt: 2,
              fontSize: { xs: "14px", md: "15px" },
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.9)",
            }}
          >
            Stay connected effortlessly across 220+ countries with a single
            Zoiko Orbit™ eSIM—no contracts, no SIM swaps, no hidden fees. Enjoy
            seamless, secure, high-speed data wherever your journey takes you.
          </Typography>
        </Box>
      </Box>

      {/* White space bottom */}
      <Box sx={{ height: 80, bgcolor: "white" }} />
    </Box>
  );
}
