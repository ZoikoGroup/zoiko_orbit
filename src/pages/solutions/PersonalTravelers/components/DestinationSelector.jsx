import { Box, Typography, Grid } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const destinationsLeft = [
  "Europe & UK",
  "North America",
  "South America",
  "Rest of Africa",
  "Rest of Asia",
  "Rest of Middle East",
  "Pacific Islands",
];

const destinationsRight = [
  "Rest of Europe",
  "Central America & Caribbean",
  "Africa",
  "Asia",
  "Middle East & CIS",
  "Australia & New Zealand",
  "Global Premium & Ultra",
];

function DestinationCard({ label }) {
  return (
    <Box
      component="button"
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        bgcolor: "white",
        px: 2,
        py: 1.5,
        borderRadius: "8px",
        boxShadow: 3,
        border: "1px solid #e0e0e0",
        cursor: "pointer",
        transition: "all 0.2s",
        "&:hover": {
          boxShadow: 2,
          borderColor: "#00718A",
        },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
        {/* Icon placeholder */}
        <Box
          sx={{
            width: 28,
            height: 28,
            bgcolor: "rgba(0,113,138,0.1)",
            borderRadius: "6px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "16px",
          }}
        >
          🌍
        </Box>
        <Typography
          sx={{ fontSize: "14px", fontWeight: 500, color: "grey.800" }}
        >
          {label}
        </Typography>
      </Box>
      <ChevronRightIcon sx={{ color: "grey.400", fontSize: "22px" }} />
    </Box>
  );
}

export default function DestinationSelector() {
  return (
    <Box component="section" sx={{ bgcolor: "#F7F7F7", py: 10 }}>
      <Box sx={{ maxWidth: "1200px", mx: "auto", px: 3 }}>
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: "26px", md: "30px" },
              fontWeight: 600,
              color: "grey.900",
            }}
          >
            Only pay for what you need. Stay in control.
          </Typography>
          <Typography sx={{ mt: 1, fontSize: "15px", color: "grey.500" }}>
            Stay connected in over 220+ destinations worldwide, wherever you
            travel, at affordable rates
          </Typography>
        </Box>

        {/* Section Title */}
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <Typography
            sx={{
              display: "inline-block",
              pb: 0.5,
              fontSize: "15px",
              fontWeight: 500,
              color: "grey.700",
              borderBottom: "2px solid #00718A",
            }}
          >
            Select your destination — Where you're traveling to
          </Typography>
        </Box>

        {/* Destination Grid */}
        <Grid container spacing={2} sx={{ maxWidth: "900px", mx: "auto" }}>
          {/* Left Column */}
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {destinationsLeft.map((item) => (
                <DestinationCard key={item} label={item} />
              ))}
            </Box>
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {destinationsRight.map((item) => (
                <DestinationCard key={item} label={item} />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
