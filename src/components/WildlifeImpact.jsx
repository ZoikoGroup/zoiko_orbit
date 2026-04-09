import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import ForestIcon from "@mui/icons-material/Forest";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PublicIcon from "@mui/icons-material/Public";

const impactStats = [
   {
    icon: <PetsIcon sx={{ fontSize: 32, color: "success.main" }} />,
    value: "50+",
    label: "Sanctuaries Funded",
  },
  {
    icon: <ForestIcon sx={{ fontSize: 32, color: "success.main" }} />,
    value: "30+",
    label: "Countries Supported",
  },
  {
    icon: <FavoriteIcon sx={{ fontSize: 32, color: "error.light" }} />,
    value: "5%",
    label: "Revenue Donated",
  },
  {
    icon: <PublicIcon sx={{ fontSize: 32, color: "info.main" }} />,
    value: "1M+",
    label: "Animals Helped",
  },
];

export default function WildlifeImpact() {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        position: "relative",
        overflow: "hidden",
        // fox / wildlife background photo
        backgroundImage:
          "url('https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=1400&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        // dark green overlay matching Image 2
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(15,45,25,0.88) 0%, rgba(10,35,18,0.82) 100%)",
        },
      }}
    >
      <Container sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          {/* ── Left: text ── */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="overline"
              sx={{
                color: "success.light",
                fontWeight: 700,
                letterSpacing: 3,
                display: "block",
                mb: 1.5,
              }}
            >
              Our Mission
            </Typography>
            <Typography
              variant="h4"
              fontWeight="bold"
              color="common.white"
              sx={{ mb: 3, lineHeight: 1.3 }}
            >
              Every MB You Use Helps Save Wildlife
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "rgba(255,255,255,0.8)", mb: 2.5, lineHeight: 1.8 }}
            >
              Zoiko Orbit donates a portion of every eSIM purchase to trusted
              wildlife protection organizations. From feeding programs to
              medical care, we directly fund wildlife sanctuaries, anti-poaching
              patrols, and educational initiatives.
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.8 }}
            >
              Stay connected to the world while helping protect the animals that
              share it with us. Travel with purpose — every data plan makes a
              difference.
            </Typography>
          </Grid>

          {/* ── Right: 2×2 stat cards ── */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Grid container spacing={2}>
              {impactStats.map(({ icon, value, label }) => (
                <Grid key={label} size={{ xs: 6 }}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      textAlign: "center",
                      borderRadius: 3,
                      bgcolor: "rgba(255,255,255,0.08)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      transition: "background 0.2s",
                      "&:hover": { bgcolor: "rgba(255,255,255,0.13)" },
                    }}
                  >
                    {icon}
                    <Typography
                      variant="h5"
                      fontWeight="bold"
                      color="common.white"
                      sx={{ mt: 1.5, mb: 0.5 }}
                    >
                      {value}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "rgba(255,255,255,0.65)" }}
                    >
                      {label}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
