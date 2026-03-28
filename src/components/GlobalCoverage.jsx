import { Box, Container, Typography, Button, Grid, Paper } from "@mui/material";

export default function GlobalCoverage() {
  return (
    <Box sx={{ bgcolor: "background.paper", py: { xs: 6, md: 8 } }}>
      <Container>
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 5.5 }}>
            <Typography
              variant="h3"
              fontWeight={650}
              fontSize={40}
              color="text.tertiary"
              sx={{ mb: 2 }}
            >
              Global Coverage
            </Typography>
            <Typography
              variant="h5"
              fontWeight={400}
              sx={{ color: "primary.dark", mb: 2 }}
            >
              Seamless Connectivity in 220+ Countries
            </Typography>
            <Typography variant="h6" fontWeight={400} sx={{ mb: 4 }}>
              Stay connected wherever you go—no need to swap SIMs or face
              roaming shocks.
            </Typography>
            <Button variant="contained" size="large" sx={{ px: 4 }}>
              Get Your eSIM
            </Button>
          </Grid>

          <Grid size={{ xs: 12, md: 6.5 }}>
            <Box
              component="img"
              src="https://zoikoorbit.com/wp-content/uploads/2025/07/Group-1597883152.webp"
              alt="Global coverage map"
              loading="lazy"
              decoding="async"
              srcSet="https://zoikoorbit.com/wp-content/uploads/2025/07/Group-1597883152.webp 1510w, https://zoikoorbit.com/wp-content/uploads/2025/07/Group-1597883152-1024x681.webp 1024w, https://zoikoorbit.com/wp-content/uploads/2025/07/Group-1597883152-768x511.webp 768w, https://zoikoorbit.com/wp-content/uploads/2025/07/Group-1597883152-600x399.webp 600w"
              sizes="(max-width: 1510px) 100vw, 1510px"
              sx={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
