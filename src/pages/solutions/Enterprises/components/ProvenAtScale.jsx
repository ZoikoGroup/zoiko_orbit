import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function ProvenAtScale() {
  return (
    <Box component="section" sx={{ bgcolor: "common.white", py: 12 }}>
      <Container maxWidth={false} sx={{ maxWidth: "1600px", px: { xs: 3, lg: 8 } }}>
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 10 }}>
          <Typography
            variant="h2"
            sx={{ fontSize: { xs: "1.875rem", md: "2.25rem" }, fontWeight: 600, color: "grey.900" }}
          >
            Proven at Global Scale.
          </Typography>
          <Typography sx={{ mt: 1.5, fontSize: "0.9375rem", color: "grey.600" }}>
            Enterprises reduce roaming spend and improve traveler experience with Zoiko Orbit™
          </Typography>
        </Box>

        {/* Case Study 1 */}
        <Grid container spacing={5} alignItems="center" sx={{ mb: 12 }}>
          {/* Image */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <Box sx={{ position: "relative", width: 420, height: 380 }}>
              <Box
                component="img"
                src="/prove1.png"
                alt="Law firm case study"
                sx={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 460,
                  height: 440,
                  objectFit: "cover",
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
            </Box>
          </Grid>

          {/* Content */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <Box sx={{ maxWidth: 620 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, color: "grey.900", lineHeight: 1.4 }}>
                Empowering Global Legal Excellence: How a Multinational Law Firm Reduced Roaming
                Costs by 62% While Enhancing Executive Mobility
              </Typography>

              <Box sx={{ mt: 2.5, fontSize: "0.875rem", color: "grey.600", lineHeight: 1.7 }}>
                <Typography sx={{ fontWeight: 700, fontSize: "inherit", mb: 0.5 }}>
                  Client Overview:
                </Typography>
                <Typography sx={{ fontSize: "inherit", mb: 1.5 }}>
                  One of the world's leading cross-border law firms, with over 3,400 partners and
                  senior counsel operating in 20+ countries across North America, Europe, the Middle
                  East, and Asia.
                </Typography>
                <Typography sx={{ fontSize: "inherit" }}>
                  <strong>Industry:</strong> Legal Services, International Arbitration, Corporate Law
                  <br />
                  <strong>Use Case Focus:</strong> Executive Airport Mobility & Real-Time Connectivity
                </Typography>
              </Box>

              <Button
                variant="text"
                sx={{
                  mt: 2.5,
                  color: "#00718A",
                  fontWeight: 500,
                  fontSize: "0.875rem",
                  p: 0,
                  textTransform: "none",
                  "&:hover": { textDecoration: "underline", bgcolor: "transparent" },
                }}
              >
                Read More →
              </Button>
            </Box>
          </Grid>
        </Grid>

        {/* Case Study 2 */}
        <Grid container spacing={8} alignItems="center">
          {/* Content (left on desktop) */}
          <Grid size={{ xs: 12, lg: 6 }} order={{ xs: 2, lg: 1 }}>
            <Box sx={{ maxWidth: 620 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, color: "grey.900", lineHeight: 1.4 }}>
                Luxury Reimagined: How a Global Hospitality Group Delivered Always-On VIP
                Connectivity Across 17 Countries
              </Typography>

              <Box sx={{ mt: 2.5, fontSize: "0.875rem", color: "grey.600", lineHeight: 1.7 }}>
                <Typography sx={{ fontWeight: 700, fontSize: "inherit", mb: 0.5 }}>
                  Client Overview:
                </Typography>
                <Typography sx={{ fontSize: "inherit", mb: 1.5 }}>
                  A premier hospitality chain operating over 200 properties across the Caribbean,
                  LATAM, Europe, and Southeast Asia, catering to elite travelers and high-net-worth
                  clientele.
                </Typography>
                <Typography sx={{ fontSize: "inherit" }}>
                  <strong>Industry:</strong> Travel, Leisure & Hospitality
                  <br />
                  <strong>Use Case Focus:</strong> Guest eSIM Integration & Staff Mobility
                </Typography>
              </Box>

              <Button
                variant="text"
                sx={{
                  mt: 2.5,
                  color: "#00718A",
                  fontWeight: 500,
                  fontSize: "0.875rem",
                  p: 0,
                  textTransform: "none",
                  "&:hover": { textDecoration: "underline", bgcolor: "transparent" },
                }}
              >
                Read More →
              </Button>
            </Box>
          </Grid>

          {/* Image */}
          <Grid size={{ xs: 12, lg: 6 }} order={{ xs: 1, lg: 2 }}>
            <Box sx={{ position: "relative", width: 420, height: 380, mx: { xs: "auto", lg: 0 } }}>
              <Box
                component="img"
                src="/prove2.png"
                alt="Hospitality case"
                sx={{
                  position: "absolute",
                  bottom: 0,
                  width: 460,
                  height: 440,
                  objectFit: "cover",
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}