import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SimCardIcon from "@mui/icons-material/SimCard";
import WorkIcon from "@mui/icons-material/Work";

const cards = [
  {
    icon: <SimCardIcon sx={{ fontSize: 32, color: "primary.dark" }} />,
    title: "For Individuals",
    desc: "One eSIM, global coverage, no hidden fees.",
  },
  {
    icon: <WorkIcon sx={{ fontSize: 32, color: "primary.dark" }} />,
    title: "For Businesses",
    desc: "Retailers & Distributors, Travel Agencies & Tour Operators, Insurance & Loyalty Programs, Airlines & OTAs.",
  },
];

export default function AudienceCards() {
  return (
    <Box
      sx={{
        mt: { xs: 0, md: "-60px" },
        position: "relative",
        zIndex: 10,
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3} alignItems="stretch">
          {cards.map(({ icon, title, desc }) => (
            <Grid
              key={title}
              size={{ xs: 12, md: 6, lg: 6 }}
              sx={{ display: "flex" }}
            >
              <Paper
                elevation={4}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2.5,
                  p: { xs: 3, md: 2, lg: 4 },
                  borderRadius: 4,
                  bgcolor: "background.paper",
                  cursor: "pointer",
                  width: "100%",
                  height: "100%",
                  transition: "all 0.25s ease",
                  "&:hover": {
                    boxShadow: "0 12px 40px rgba(45,58,140,0.15)",
                    transform: "translateY(-3px)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 72,
                    height: 72,
                    minWidth: 72,
                    borderRadius: "50%",
                    bgcolor: "#eef1fb",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {icon}
                </Box>

                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{ color: "#2d3a8c", mb: 0.5 }}
                  >
                    {title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {desc}
                  </Typography>
                </Box>

                <ArrowForwardIcon
                  sx={{ color: "#2d3a8c", flexShrink: 0, ml: 1 }}
                />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
