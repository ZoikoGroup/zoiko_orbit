import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

const apiPoints = [
  "REST API with real-time activation and reporting.",
  "SSO & secure admin portals.",
  "Multi-currency billing and cost center mapping.",
];

export default function SeamlessIntegration() {
  return (
    <Box component="section" sx={{ bgcolor: "#EEF6FB", py: 10 }}>
      <Container maxWidth={false} sx={{ maxWidth: "1600px", px: { xs: 3, lg: 8 } }}>
        <Grid container spacing={8} alignItems="center">
          {/* Left image */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <Box sx={{ borderRadius: 4, overflow: "hidden", boxShadow: 1 }}>
              <Box
                component="img"
                src="/se1.png"
                alt="Seamless integration with existing systems"
                sx={{ width: "100%", height: 420, objectFit: "cover", display: "block" }}
              />
            </Box>
          </Grid>

          {/* Right content */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <Box sx={{ maxWidth: 620 }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "1.875rem", md: "2.25rem" },
                  fontWeight: 600,
                  color: "grey.900",
                  lineHeight: 1.3,
                }}
              >
                Seamless Integration <br />
                with Your Existing Systems
              </Typography>

              <Typography sx={{ mt: 2, fontSize: "1rem", color: "grey.600", lineHeight: 1.7 }}>
                Zoiko Orbit APIs and connectors easily integrate with ERP, travel management,
                and reporting tools.
              </Typography>

              <Typography variant="h6" sx={{ mt: 3, fontWeight: 600, color: "grey.900" }}>
                API: Plug &amp; Play
              </Typography>

              <List disablePadding sx={{ mt: 2 }}>
                {apiPoints.map((point) => (
                  <ListItem
                    key={point}
                    disablePadding
                    sx={{ display: "list-item", listStyleType: "disc", ml: 2.5, py: 0.5 }}
                  >
                    <ListItemText
                      primary={point}
                      slotProps={{
                        primary: { sx: { fontSize: "0.9375rem", color: "grey.700" } },
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}