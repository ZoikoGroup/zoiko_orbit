import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const items = [
  {
    src: "/en1.png",
    alt: "Predictable Billing",
    title: "Predictable Costs",
    body: "Consolidated global spend, Pooled data plans, volume pricing, cost center tagging.",
  },
  {
    src: "/en2.png",
    alt: "Tier-1 Network Security",
    title: "Tier-1 Security & Compliance",
    body: "GDPR, SOC 2, PCI — enterprise data handling standards baked in.",
  },
  {
    src: "/en3.png",
    alt: "Admin Dashboard",
    title: "Easy Central Admin",
    body: "Provision, reassign, and report on usage across teams in one dashboard.",
  },
];

export default function WhyEnterprisesChooseZoiko() {
  return (
    <Box component="section" sx={{ bgcolor: "#EEF6FB", py: 10 }}>
      <Container maxWidth={false} sx={{ maxWidth: "1600px", px: { xs: 3, lg: 8 } }}>
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 7 }}>
          <Typography
            variant="h2"
            sx={{ fontSize: { xs: "2rem", md: "2.5rem" }, fontWeight: 600, color: "grey.900" }}
          >
            Why leading enterprises standardize on Zoiko Orbit™
          </Typography>
          <Typography sx={{ mt: 1.5, fontSize: "1rem", color: "grey.600" }}>
            Unlock new revenue and delight travelers with ready-to-activate global data.
          </Typography>
        </Box>

        {/* White container */}
        <Box
          sx={{
            position: "relative",
            bgcolor: "common.white",
            borderRadius: 4,
            boxShadow: 1,
            px: 4,
            py: 7,
          }}
        >
          {/* Vertical dividers */}
          {[1, 2].map((i) => (
            <Box
              key={i}
              sx={{
                display: { xs: "none", md: "block" },
                position: "absolute",
                top: 56,
                bottom: 56,
                left: `${(i * 100) / 3}%`,
                width: "1px",
                bgcolor: "grey.200",
              }}
            />
          ))}

          <Grid container spacing={6}>
            {items.map(({ src, alt, title, body }) => (
              <Grid key={title} size={{ xs: 12, md: 4 }}>
                <Box sx={{ textAlign: "center", px: 3 }}>
                  <Box
                    component="img"
                    src={src}
                    alt={alt}
                    sx={{ width: 72, height: 72, mx: "auto", mb: 3 }}
                  />
                  <Typography variant="h6" sx={{ fontWeight: 600, color: "grey.900", mb: 1.5 }}>
                    {title}
                  </Typography>
                  <Typography sx={{ fontSize: "0.9375rem", color: "grey.600", lineHeight: 1.7 }}>
                    {body}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}