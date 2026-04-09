import { Box, Typography, Grid } from "@mui/material";

export default function BuiltToFitWorkflow() {
  return (
    <Box component="section" sx={{ bgcolor: "#EEF5FA", py: 12 }}>
      <Box sx={{ maxWidth: "1500px", mx: "auto", px: { xs: 3, lg: 8 } }}>
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
            Built to Fit Your Workflow
          </Typography>
          <Typography sx={{ mt: 1.5, fontSize: "16px", color: "grey.600" }}>
            From lightweight referral links to deep API integrations—scale at
            your pace
          </Typography>
        </Box>

        {/* Content */}
        <Grid container spacing={10} alignItems="center">
          {/* Left Image */}
          <Grid
            item
            xs={12}
            lg={6}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", lg: "flex-start" },
            }}
          >
            <Box
              component="img"
              src="/man.png"
              alt="Workflow integration"
              sx={{ width: "100%", maxWidth: "520px", objectFit: "contain" }}
            />
          </Grid>

          {/* Right Content */}
          <Grid item xs={12} lg={6}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
              {/* API Section */}
              <Box>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "grey.900",
                    mb: 2,
                  }}
                >
                  API: Plug & Play
                </Typography>
                <Box
                  component="ul"
                  sx={{
                    m: 0,
                    pl: 0,
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: 1.5,
                  }}
                >
                  {[
                    "REST/GraphQL endpoints for offer retrieval, activation, balance, status.",
                    "Sandbox access in minutes.",
                    "Simple code in JS, PHP, Python.",
                    "Multi-currency & localization support.",
                  ].map((text, i) => (
                    <Box
                      component="li"
                      key={i}
                      sx={{
                        fontSize: "15px",
                        color: "grey.700",
                        lineHeight: 1.7,
                      }}
                    >
                      • {text}
                    </Box>
                  ))}
                </Box>
              </Box>

              {/* Co-Branded Section */}
              <Box>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "grey.900",
                    mb: 2,
                  }}
                >
                  Co-Branded Storefronts & Portals
                </Typography>
                <Box
                  component="ul"
                  sx={{
                    m: 0,
                    pl: 0,
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: 1.5,
                  }}
                >
                  {[
                    "Ready-to-launch hosted storefront branded with your logo/colors.",
                    "Bundle eSIM offers into booking confirmations & post-booking emails.",
                    "Analytics dashboard (attach rates, revenue per PNR).",
                  ].map((text, i) => (
                    <Box
                      component="li"
                      key={i}
                      sx={{
                        fontSize: "15px",
                        color: "grey.700",
                        lineHeight: 1.7,
                      }}
                    >
                      • {text}
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
