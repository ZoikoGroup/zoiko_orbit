import { Box, Typography, Grid } from "@mui/material";

const cards = [
  {
    img: "/what1.png",
    title: "Engineered for Global Trust",
    desc: "Our advanced eSIM platform runs on Tier-1 carrier partnerships across 220+ countries, safeguarded by PCI DSS, GDPR, and rigorous data privacy standards. You get local-quality speeds and secure transactions wherever your journey takes you.",
  },
  {
    img: "/what2.png",
    title: "Built to Give Back",
    desc: "Unlike typical travel SIM providers, we embed impact at the core of every connection. Each Zoiko Orbit purchase actively supports animal rescue centers, wildlife rehabilitation programs, and community conservation efforts — so your travels help sustain the beauty you've come to explore.",
  },
  {
    img: "/what3.png",
    title: "Part of the Zoiko Promise",
    desc: "As a member of Zoiko Group, we uphold a legacy of operational excellence, cultural intelligence, and meaningful innovation — dedicated to improving lives and safeguarding the world we all share.",
  },
];

export default function WhatSetUsApart() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        bgcolor: "#F7FBFE",
        py: 12,
        overflow: "hidden",
      }}
    >
      <Box sx={{ maxWidth: "1400px", mx: "auto", px: { xs: 3, lg: 8 } }}>
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: "32px", md: "38px" },
              fontWeight: 600,
              color: "grey.900",
            }}
          >
            What Sets Us Apart
          </Typography>
        </Box>

        {/* Cards */}
        <Grid container spacing={7} sx={{ textAlign: "center" }}>
          {cards.map((card, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Box sx={{ maxWidth: "360px", mx: "auto" }}>
                <Box
                  component="img"
                  src={card.img}
                  alt={card.title}
                  sx={{
                    width: 72,
                    height: 72,
                    objectFit: "contain",
                    mx: "auto",
                    mb: 3,
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "grey.900",
                    mb: 1.5,
                  }}
                >
                  {card.title}
                </Typography>
                <Typography
                  sx={{ fontSize: "15px", color: "grey.600", lineHeight: 1.8 }}
                >
                  {card.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
