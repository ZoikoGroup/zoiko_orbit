import { Box, Typography } from "@mui/material";

export default function TravelConnectivity() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: { xs: 420, md: 520 },
        backgroundImage:
          "url('https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=1600&q=85')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
    >
      {/* Floating card — right side with gap from edge */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          right: { xs: "4%", md: "5%" },
          width: { xs: "88%", sm: "55%", md: "42%" },
          bgcolor: "rgba(10, 95, 115, 0.30)",
          backdropFilter: "blur(8px)",
          borderRadius: 2,
          px: { xs: 3, md: 4.5 },
          py: { xs: 4, md: 5 },
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          color="common.white"
          sx={{
            mb: 2,
            lineHeight: 1.35,
            fontSize: { xs: "1.3rem", md: "1.65rem" },
          }}
        >
          Experience the future of travel connectivity—one eSIM for every
          destination.
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "rgba(255,255,255,0.88)",
            lineHeight: 1.85,
            fontSize: { xs: "0.9rem", md: "0.95rem" },
          }}
        >
          Stay connected effortlessly across 190+ countries with a single Zoiko
          Orbit™ eSIM—no contracts, no SIM swaps, no hidden fees. Enjoy
          seamless, secure, high-speed data wherever your journey takes you.
        </Typography>
      </Box>
    </Box>
  );
}
