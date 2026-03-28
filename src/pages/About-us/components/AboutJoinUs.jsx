import { Box, Typography } from "@mui/material";

export default function AboutJoinUs() {
  return (
    <Box component="section" sx={{ bgcolor: "white", py: { xs: 10, md: 12 } }}>
      <Box sx={{ maxWidth: "1600px", mx: "auto" }}>

        {/* IMAGE + CARD WRAPPER */}
        <Box sx={{ position: "relative", overflow: "hidden" }}>

          {/* Background Image */}
          <Box
            component="img"
            src="/join.png"
            alt="Join us in redefining travel"
            sx={{
              width: "100%",
              height: { xs: "420px", md: "480px" },
              objectFit: "cover",
              display: "block",
            }}
          />

          {/* Overlay Card */}
          <Box
            sx={{
              position: "absolute",
              right: { xs: 24, md: 40, lg: 64 },
              top: "50%",
              transform: "translateY(-50%)",
              bgcolor: "rgba(10, 122, 143, 0.70)",
              backdropFilter: "blur(8px)",
              color: "white",
              borderRadius: 4,
              p: { xs: 4, md: 5 },
              maxWidth: "520px",
              boxShadow: 8,
            }}
          >
            <Typography
              variant="h3"
              sx={{ fontSize: { xs: "22px", md: "24px" }, fontWeight: 600, mb: 2 }}
            >
              Join Us in Redefining Travel
            </Typography>

            <Typography
              sx={{ fontSize: { xs: "14px", md: "15px" }, lineHeight: 1.8, color: "rgba(255,255,255,0.9)" }}
            >
              Whether you're planning your next international adventure,
              managing a retail chain seeking premium travel products,
              or operating a travel agency or insurance platform eager
              to integrate instant global connectivity — Zoiko Orbit
              is here to help you succeed.
            </Typography>

            <Typography
              sx={{ mt: 2, fontSize: { xs: "14px", md: "15px" }, lineHeight: 1.8, color: "rgba(255,255,255,0.9)" }}
            >
              Together, we can build a world where you're always connected,
              and where every trip leaves a legacy of care, compassion,
              and a better tomorrow.
            </Typography>
          </Box>
        </Box>

      </Box>
    </Box>
  );
}