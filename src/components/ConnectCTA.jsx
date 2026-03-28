import { Box, Typography, Button, Divider } from "@mui/material";
import { Link } from "react-router-dom";

export default function ConnectCTA() {
  return (
    <>
      <Divider />

      <Box
        sx={{
          mx: { xs: 2, md: 6 },
          my: { xs: 3, md: 5 },
          borderRadius: "20px",
          overflow: "hidden",
          backgroundImage:
            "url('https://zoikoorbit.com/wp-content/uploads/2025/07/Content-3.webp')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          minHeight: "320px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          gap: "40px",
          position: "relative",

          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(26,63,168,0.85), rgba(33,150,243,0.85))",
            zIndex: 0,
          },
        }}
      >
        <Box sx={{ position: "relative", zIndex: 1, px: 2 }}>
          <Typography
            variant="h3"
            sx={{
              color: "#fff",
              fontWeight: 700,
              lineHeight: 1.3,
              fontSize: { xs: "1.8rem", md: "2.6rem" },
            }}
          >
            Connect your journey. <br />
            Empower your business
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              mt: 4,
              flexWrap: "wrap",
            }}
          >
            {/* ✅ Plans Page */}
            <Button
              component={Link}
              to="/plans"
              variant="contained"
              sx={{
                bgcolor: "#e0e0e0",
                color: "#1565c0",
                fontWeight: 600,
                borderRadius: "8px",
                px: 4,
                py: 1.5,
                textTransform: "none",
                "&:hover": { bgcolor: "#ffffff" },
              }}
            >
              Get Your eSIM
            </Button>

            {/* ✅ Travel Partner Page */}
            <Button
              component={Link}
              to="/ecosystem/agencies"
              variant="outlined"
              sx={{
                color: "#fff",
                borderColor: "rgba(255,255,255,0.7)",
                fontWeight: 600,
                borderRadius: "8px",
                px: 4,
                py: 1.5,
                textTransform: "none",
                "&:hover": {
                  borderColor: "#fff",
                  background: "rgba(255,255,255,0.1)",
                },
              }}
            >
              Partner with Us
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}