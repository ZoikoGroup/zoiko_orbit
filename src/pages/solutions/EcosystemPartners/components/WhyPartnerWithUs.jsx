import { Box, Typography, Grid } from "@mui/material";

const items = [
  {
    img: "/us1.png",
    title: "Attractive Commissions",
    desc: "Earn competitive margins on every traveler you activate—recurring revenue options available.",
  },
  {
    img: "/us2.png",
    title: "Tier-1 Global Data",
    desc: "Backed by top carrier networks across 190+ countries for dependable, high-speed coverage.",
  },
  {
    img: "/us3.png",
    title: "White-Label & Co-Brand Ready",
    desc: "Offer eSIMs in your brand: customizable storefronts, bundles, email templates, and upsell flows.",
  },
  {
    img: "/us4.png",
    title: "Fast Onboarding & Support",
    desc: "API plug-and-play, guided setup, partner enablement kits, dedicated success team.",
  },
];

export default function WhyPartnerWithUs() {
  return (
    <Box
      component="section"
      sx={{ bgcolor: "#F7FBFE", py: 12, overflow: "hidden" }}
    >
      <Box sx={{ maxWidth: "1500px", mx: "auto", px: { xs: 3, lg: 8 } }}>
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: "32px", md: "40px" },
              fontWeight: 600,
              color: "grey.900",
            }}
          >
            Why Partner with Us
          </Typography>
          <Typography sx={{ mt: 1.5, fontSize: "16px", color: "grey.600" }}>
            Unlock new revenue and delight travelers with ready-to-activate
            global data.
          </Typography>
        </Box>

        {/* Cards — MUI v7 Grid */}
        <Grid container spacing={4} sx={{ textAlign: "center" }}>
          {items.map((item, i) => (
            <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={i}>
              <Box
                component="img"
                src={item.img}
                alt={item.title}
                sx={{ width: 80, height: 80, mx: "auto", mb: 3 }}
              />
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "grey.900",
                  mb: 1,
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{ fontSize: "15px", color: "grey.600", lineHeight: 1.7 }}
              >
                {item.desc}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
