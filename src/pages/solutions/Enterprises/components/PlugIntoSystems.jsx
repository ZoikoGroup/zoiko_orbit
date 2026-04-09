import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

const capabilities = [
  "REST + Webhook Events (activation, usage, thresholds)",
  "SSO (SAML / OAuth) for admin portal",
  "Multi-currency billing + cost center mapping",
  "Usage exports (CSV / API) to ERP & expense tools",
  "Policy-based auto provisioning via booking data",
];

export default function PlugIntoSystems() {
  return (
    <Box component="section" sx={{ bgcolor: "#ebf0f3", py: 10 }}>
      <Container
        maxWidth={false}
        sx={{ maxWidth: "1600px", px: { xs: 3, lg: 8 } }}
      >
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 7 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.75rem", md: "2.125rem" },
              fontWeight: 600,
              color: "grey.900",
            }}
          >
            Plug Zoiko Orbit into the Systems You Already Use
          </Typography>
          <Typography
            sx={{ mt: 1.5, fontSize: "0.9375rem", color: "grey.600" }}
          >
            APIs, SSO, reporting feeds, and travel platform connectors
            accelerate rollout
          </Typography>
        </Box>

        {/* Content Grid */}
        <Grid container spacing={8} alignItems="center">
          {/* Left image */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <Box sx={{ borderRadius: 3, overflow: "hidden", boxShadow: 1 }}>
              <Box
                component="img"
                src="/plug.png"
                alt="Plug into existing systems"
                sx={{
                  width: "100%",
                  height: 380,
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Box>
          </Grid>

          {/* Right content */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <Box sx={{ maxWidth: 620 }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, color: "grey.900", mb: 2 }}
              >
                Key Capability
              </Typography>
              <List disablePadding>
                {capabilities.map((cap) => (
                  <ListItem
                    key={cap}
                    disablePadding
                    sx={{
                      display: "list-item",
                      listStyleType: "disc",
                      ml: 2.5,
                      py: 0.5,
                    }}
                  >
                    <ListItemText
                      primary={cap}
                      slotProps={{
                        primary: {
                          sx: { fontSize: "0.9975rem", lineHeight: 1.7 },
                        },
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
