import { Box, Container, Typography, Grid, Divider, Link } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link as RouterLink } from "react-router-dom";

const stats = [
  {
    value: "98%",
    bold: "Customer satisfaction",
    rest: " achieved through seamless global connectivity and reliable eSIM solutions.",
  },
  {
    value: "500K+",
    bold: "Travelers and partners",
    rest: " empowered with instant, secure mobile access across continents.",
  },
  {
    value: "50+",
    bold: "Global partnerships",
    rest: " built across airlines, travel brands, retailers, and enterprises.",
  },
];

export default function GlobalConnectivity() {
  return (
    <Box sx={{ bgcolor: "background.paper", pt: { xs: 6, md: 10 }, pb: 0 }}>
      <Container>
        {/* ── Heading ── */}
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          gutterBottom
        >
          Empowering Global Connectivity Through Innovation
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          color="text.secondary"
          sx={{ mb: 5, maxWidth: 600, mx: "auto" }}
        >
          Pioneering seamless eSIM solutions that connect people, businesses,
          and journeys—anytime, anywhere.
        </Typography>

        {/* ── Image with overlapping quote card ── */}
        <Box sx={{ position: "relative", mb: 0 }}>
          {/* Hero image — takes left ~65% on desktop */}
          <Box
            component="img"
            src="https://zoikoorbit.com/wp-content/uploads/2025/07/Vector-4.webp"
            alt="eSIM connectivity"
            sx={{
              width: { xs: "100%", md: "65%" },
              height: { xs: 260, md: 420 },
              objectFit: "cover",
              borderRadius: 3,
              display: "block",
            }}
          />

          {/* Quote card — absolutely overlaps the image on desktop */}
          <Box
            sx={{
              position: { xs: "relative", md: "absolute" },
              top: { md: "50%" },
              right: { md: 0 },
              transform: { md: "translateY(-50%)" },
              width: { xs: "100%", md: "48%" },
              mt: { xs: 3, md: 0 },
              bgcolor: "white",
              borderRadius: 3,
              boxShadow: "0 8px 32px rgba(0,0,0,0.13)",
              p: { xs: 3, md: 4 },
            }}
          >
            <Typography
              variant="body1"
              sx={{
                lineHeight: 1.9,
                mb: 3,
                color: "text.primary",
                fontSize: { xs: "0.95rem", md: "1.05rem" },
              }}
            >
              "At Zoiko Orbit™, we empower people and businesses with seamless,
              secure global connectivity. Our mission is to deliver smart,
              scalable eSIM solutions that enhance every journey and help
              partners thrive in a connected world."
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Box
                component="img"
                src="https://randomuser.me/api/portraits/men/41.jpg"
                alt="James Carter"
                sx={{
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  objectFit: "cover",
                  flexShrink: 0,
                }}
              />
              <Box>
                <Typography variant="subtitle2" fontWeight="bold">
                  James Carter
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Chief Technology Officer, Zoiko Orbit™
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* ── Value Gained + Stats bar ── */}
      <Box sx={{ bgcolor: "background.paper", mt: { xs: 5, md: 8 }, pb: 6 }}>
        <Container>
          {/* Header row: title + link */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography variant="h5" fontWeight="bold" color="text.primary">
              Value Gained
            </Typography>

            {/* ✅ Same pattern as GetInTouch.jsx — MUI Link + RouterLink */}
            <Link
              component={RouterLink}
              to="/about-us"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                color: "#0e7c86",
                fontWeight: 600,
                fontSize: "0.95rem",
                textDecoration: "none",
                border: "1.5px solid #0e7c86",
                borderRadius: "6px",
                px: 2,
                py: 0.8,
                transition: "all 0.2s",
                "&:hover": {
                  bgcolor: "#0e7c86",
                  color: "white",
                  textDecoration: "none",
                },
              }}
            >
              Discover Our Story
              <ArrowForwardIcon sx={{ fontSize: 16 }} />
            </Link>
          </Box>

          <Divider sx={{ mb: 3 }} />

          <Grid container spacing={3}>
            {stats.map(({ value, bold, rest }) => (
              <Grid key={value} size={{ xs: 12, sm: 4 }}>
                <Typography
                  variant="h3"
                  fontWeight="bold"
                  sx={{ color: "#0e7c86", mb: 0.5 }}
                >
                  {value}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <Box
                    component="span"
                    sx={{ fontWeight: 700, color: "text.primary" }}
                  >
                    {bold}
                  </Box>
                  {rest}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}