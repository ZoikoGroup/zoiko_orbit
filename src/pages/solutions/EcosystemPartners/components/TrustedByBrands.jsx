import { Box, Typography, Grid } from "@mui/material";

export default function TrustedByBrands() {
  return (
    <Box component="section" sx={{ bgcolor: "white", py: 14 }}>
      <Box sx={{ maxWidth: "1500px", mx: "auto", px: { xs: 3, lg: 8 } }}>
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 10 }}>
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: "32px", md: "38px" },
              fontWeight: 600,
              color: "grey.900",
            }}
          >
            Trusted by Leading Travel & Mobility Brands.
          </Typography>
          <Typography
            sx={{
              mt: 1.5,
              fontSize: "16px",
              color: "grey.600",
              maxWidth: "760px",
              mx: "auto",
            }}
          >
            See how agencies, OTAs, and loyalty programs increase ancillary
            revenue and traveler satisfaction with Zoiko Orbit™.
          </Typography>
        </Box>

        {/* Case 1 */}
        <Grid container spacing={7} alignItems="center" sx={{ mb: 5 }}>
          <Grid
            size={{ xs: 12, lg: 6 }}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", lg: "flex-start" },
            }}
          >
            <Box
              component="img"
              src="/trust1.png"
              alt="Airline passenger"
              sx={{
                width: "100%",
                maxWidth: "490px",
                borderRadius: "12px",
                boxShadow: 3,
              }}
            />
          </Grid>
          <Grid size={{ xs: 12, lg: 6 }}>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: 600,
                color: "grey.900",
                mb: 2,
              }}
            >
              Boosting Ancillary Revenue for a Major Airline
            </Typography>
            <Typography
              sx={{ fontSize: "15px", color: "grey.700", lineHeight: 1.8 }}
            >
              A prominent global airline was seeking innovative ways to enhance
              its passenger experience while simultaneously driving new
              ancillary revenue streams. By integrating Zoiko Orbit's eSIM
              solutions directly into their booking and check-in flows, they
              provided travelers with instant, seamless mobile connectivity from
              the moment they booked their flight.
            </Typography>
            <Typography
              sx={{
                mt: 2,
                fontSize: "15px",
                color: "grey.700",
                lineHeight: 1.8,
              }}
            >
              This not only improved customer satisfaction by eliminating the
              hassle of sourcing local SIMs but also created a significant new
              revenue channel for the airline, showcasing the power of
              integrated travel solutions.
            </Typography>
          </Grid>
        </Grid>

        {/* Case 2 */}
        <Grid container spacing={7} alignItems="center">
          <Grid size={{ xs: 12, lg: 6 }} sx={{ order: { xs: 2, lg: 1 } }}>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: 600,
                color: "grey.900",
                mb: 2,
              }}
            >
              Elevating Customer Loyalty for a Global Hotel Group
            </Typography>
            <Typography
              sx={{ fontSize: "15px", color: "grey.700", lineHeight: 1.8 }}
            >
              A leading international hotel group aimed to deepen its
              relationship with guests and boost loyalty program engagement. By
              partnering with Zoiko Orbit, they offered exclusive, discounted
              eSIM plans to their loyalty members.
            </Typography>
            <Typography
              sx={{
                mt: 2,
                fontSize: "15px",
                color: "grey.700",
                lineHeight: 1.8,
              }}
            >
              Providing unparalleled global connectivity as a premium perk
              differentiated their loyalty program, added tangible value for
              their most frequent travelers, and reinforced the hotel group's
              commitment to a truly connected and compassionate travel
              experience.
            </Typography>
          </Grid>
          <Grid
            size={{ xs: 12, lg: 6 }}
            sx={{
              order: { xs: 1, lg: 2 },
              display: "flex",
              justifyContent: { xs: "center", lg: "flex-end" },
            }}
          >
            <Box
              component="img"
              src="/trust2.png"
              alt="Hotel loyalty example"
              sx={{
                width: "100%",
                maxWidth: "490px",
                borderRadius: "12px",
                boxShadow: 3,
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}