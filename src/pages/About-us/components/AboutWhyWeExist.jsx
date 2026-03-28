import { Box, Typography } from "@mui/material";

export default function AboutWhyWeExist() {
  return (
    <Box
      component="section"
      sx={{ bgcolor: "#EEF6FB", py: { xs: 10, md: 12 } }}
    >
      <Box sx={{ maxWidth: "1600px", mx: "auto", px: { xs: 3, lg: 8 } }}>
        {/* HEADER */}
        <Box
          sx={{ textAlign: "center", maxWidth: "900px", mx: "auto", mb: 12 }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "30px", md: "36px" },
              fontWeight: 600,
              color: "grey.900",
            }}
          >
            Why We Exist
          </Typography>
          <Typography
            sx={{ mt: 2, fontSize: "16px", color: "grey.600", lineHeight: 1.8 }}
          >
            In an age where travelers cross borders more than ever, staying
            connected should be effortless. Yet too often, it's complicated,
            costly, or unreliable. We created Zoiko Orbit to change that.
          </Typography>
        </Box>

        {/* MISSION BLOCK */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
            gap: 8,
            alignItems: "center",
            mb: 14,
          }}
        >
          {/* Image */}
          <Box
            sx={{
              borderRadius: 4,
              overflow: "hidden",
              boxShadow: 6,
              border: "1px solid rgba(0,113,138,0.3)",
            }}
          >
            <Box
              component="img"
              src="/why1.png"
              alt="Traveler at airport"
              sx={{ width: "100%", height: "380px", objectFit: "cover" }}
            />
          </Box>

          {/* Text */}
          <Box sx={{ maxWidth: "640px" }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: "22px",
                fontWeight: 600,
                color: "grey.900",
                mb: 2,
              }}
            >
              Our mission is clear:
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                color: "grey.700",
                lineHeight: 1.8,
                fontStyle: "italic",
              }}
            >
              "To give travelers — and the entire travel ecosystem — instant,
              secure, seamless mobile connectivity across 220+ countries, backed
              by Tier-1 infrastructure, transparent pricing, and unmatched
              global support."
            </Typography>
            <Typography
              sx={{
                mt: 2.5,
                fontSize: "16px",
                color: "grey.700",
                lineHeight: 1.8,
              }}
            >
              Every Zoiko Orbit purchase supports animal shelters, wildlife
              sanctuaries, and conservation initiatives worldwide — helping
              protect endangered species and preserve habitats for generations
              to come.
            </Typography>
          </Box>
        </Box>

        {/* NATURE & SAFARIS BLOCK */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
            gap: 8,
            alignItems: "center",
          }}
        >
          {/* Text */}
          <Box sx={{ maxWidth: "640px" }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: "26px",
                fontWeight: 600,
                color: "grey.900",
                lineHeight: 1.3,
              }}
            >
              A Unique Focus
              <br />
              on Nature & Safaris
            </Typography>
            <Typography
              sx={{
                mt: 2,
                fontSize: "16px",
                color: "grey.700",
                lineHeight: 1.8,
              }}
            >
              We're especially proud to stand with travelers who explore the
              natural wonders of our planet.
            </Typography>
            <Typography
              sx={{
                mt: 2,
                fontSize: "16px",
                color: "grey.700",
                lineHeight: 1.8,
              }}
            >
              Those headed on safaris or wildlife expeditions receive exclusive
              Zoiko Orbit discounts, plus the knowledge that part of every
              purchase directly funds global efforts to care for and protect the
              very creatures they've journeyed to see.
            </Typography>
          </Box>

          {/* Image */}
          <Box sx={{ borderRadius: 4, overflow: "hidden", boxShadow: 6 }}>
            <Box
              component="img"
              src="/why2.png"
              alt="Safari traveler"
              sx={{ width: "100%", height: "380px", objectFit: "cover" }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
