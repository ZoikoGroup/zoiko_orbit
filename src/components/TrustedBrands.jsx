import { Box, Container, Typography, Grid, Paper } from "@mui/material";

const partners = [
  {
    name: "Global Travel Alliance",
    logo: (
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
        <Box
          sx={{
            width: 44,
            height: 44,
            borderRadius: "50%",
            border: "2px solid #2196f3",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box component="span" sx={{ fontSize: 22, lineHeight: 1 }}>
            🌐
          </Box>
        </Box>
        <Box>
          <Typography
            variant="subtitle2"
            fontWeight="bold"
            sx={{ color: "#1565c0", lineHeight: 1.2 }}
          >
            Global Travel
          </Typography>
          <Typography variant="caption" sx={{ color: "#555" }}>
            Alliance
          </Typography>
        </Box>
      </Box>
    ),
  },
  {
    name: "Orange",
    logo: (
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ color: "#ff6600", letterSpacing: -1 }}
      >
        orange
        <Typography
          component="sup"
          variant="caption"
          sx={{ color: "#ff6600", fontWeight: 700 }}
        >
          TM
        </Typography>
      </Typography>
    ),
  },
  {
    name: "WWF",
    logo: (
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
        <Box component="span" sx={{ fontSize: 36, lineHeight: 1 }}>
          🐼
        </Box>
        <Typography variant="h5" fontWeight="bold" sx={{ color: "#111" }}>
          WWF
        </Typography>
      </Box>
    ),
  },
  {
    name: "Alliance Airlines",
    logo: (
      <Box>
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ color: "#1a237e", fontStyle: "italic", letterSpacing: -0.5 }}
        >
          Alliance
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: "#1a237e",
            letterSpacing: 2,
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          Airlines
        </Typography>
      </Box>
    ),
  },
];

export default function TrustedBrands() {
  return (
    <Box sx={{ bgcolor: "background.paper", py: { xs: 5, md: 7 } }}>
      <Container>
        <Typography
          variant="h5"
          fontWeight="bold"
          textAlign="center"
          sx={{ mb: 5 }}
        >
          Trusted by Global Leaders in Travel &amp; Telecoms
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {partners.map(({ name, logo }) => (
            <Grid key={name} size={{ xs: 12, sm: 6, md: 3 }}>
              <Paper
                elevation={0}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: "grey.100",
                  borderRadius: 3,
                  py: 3.5,
                  px: 3,
                  minHeight: 90,
                  transition: "all 0.2s ease",
                  "&:hover": {
                    bgcolor: "grey.200",
                    transform: "translateY(-2px)",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                  },
                }}
              >
                {logo}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
