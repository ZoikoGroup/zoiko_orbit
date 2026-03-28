import { Box, Typography } from "@mui/material";

export default function AboutWhoWeAre() {
  return (
    <Box component="section" sx={{ bgcolor: "white", py: { xs: 10, md: 14 } }}>
      <Box
        sx={{
          maxWidth: "1600px",
          mx: "auto",
          px: { xs: 3, lg: 8 },
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
            gap: 8,
            alignItems: "center",
          }}
        >
          {/* LEFT IMAGES */}
          <Box sx={{ position: "relative" }}>
            {/* Main Image */}
            <Box
              sx={{
                borderRadius: 4,
                overflow: "hidden",
                boxShadow: 6,
              }}
            >
              <Box
                component="img"
                src="/we1.png"
                alt="Global connectivity"
                sx={{ width: "100%", height: "420px", objectFit: "cover" }}
              />
            </Box>

            {/* Floating Image */}
            <Box
              sx={{
                position: "absolute",
                bottom: -48,
                right: 48,
                bgcolor: "white",
                borderRadius: 4,
                boxShadow: 8,
                border: "1px solid #e0e0e0",
                maxWidth: "360px",
              }}
            >
              <Box
                component="img"
                src="/we2.png"
                alt="eSIM on phone"
                sx={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                  borderRadius: 3,
                }}
              />
            </Box>
          </Box>

          {/* RIGHT CONTENT */}
          <Box sx={{ maxWidth: "640px" }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "30px", md: "36px" },
                fontWeight: 600,
                color: "grey.900",
              }}
            >
              Who We Are
            </Typography>

            <Typography
              sx={{
                mt: 3,
                fontSize: "16px",
                color: "grey.700",
                lineHeight: 1.8,
              }}
            >
              Zoiko Orbit™ is the premier global travel connectivity platform
              under Zoiko Communications Group Inc., part of the dynamic Zoiko
              Group — a diversified multinational enterprise spanning
              telecommunications, fintech, healthcare, technology, and consumer
              brands.
            </Typography>

            <Typography
              sx={{
                mt: 2.5,
                fontSize: "16px",
                color: "grey.700",
                lineHeight: 1.8,
              }}
            >
              Born from the robust telecom foundation of Zoiko Mobile, we draw
              on decades of engineering world-class networks. Yet as a proud
              brand in the Zoiko family, we also carry forward something deeper:
              a shared promise to uplift lives and protect the remarkable
              diversity of our world.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
