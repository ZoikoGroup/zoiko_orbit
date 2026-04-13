import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function StepCard({ title, desc, image }) {
  return (
    <Box sx={{ textAlign: "center" }}>
      {/* Image Card */}
      <Box
        sx={{
          bgcolor: "#ECECEC",
          borderRadius: "16px",
          height: "260px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 4,
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{ width: "340px", objectFit: "contain" }}
        />
      </Box>

      {/* Text */}
      <Typography sx={{ fontSize: "20px", fontWeight: 600, color: "grey.900" }}>
        {title}
      </Typography>
      <Typography
        sx={{ mt: 1.5, fontSize: "16px", color: "grey.600", lineHeight: 1.7 }}
      >
        {desc}
      </Typography>
    </Box>
  );
}

export default function HowItWorks() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        bgcolor: "white",
        py: 12,
        overflow: "hidden",
      }}
    >
      {/* Subtle grid background */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(to right, #e5eef6 1px, transparent 1px), linear-gradient(to bottom, #e5eef6 1px, transparent 1px)",
          backgroundSize: "120px 120px",
          opacity: 0.4,
          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          position: "relative",
          maxWidth: "1200px",
          mx: "auto",
          px: { xs: 2, lg: 6 },
        }}
      >
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: "34px", md: "42px" },
              fontWeight: 600,
              color: "grey.900",
            }}
          >
            How It Works
          </Typography>
          <Typography sx={{ mt: 2, fontSize: "18px", color: "grey.600" }}>
            Stay connected wherever you go with ready-to-activate global data.
          </Typography>
        </Box>

        {/* Steps */}
        <Grid container spacing={7}>
          <Grid size={{ xs: 12, md: 4 }}>
            <StepCard
              step="1"
              title="Pick Your Destination & Plan"
              desc="Select a sub-region and then your specific country to view coverage and pricing."
              bgColor="#006F87"
              image="/how1.png"
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <StepCard
              step="2"
              title="Activate Instantly"
              desc="After purchase, receive a QR code and simple instructions. Scan and connect in minutes."
              bgColor="#415FA3"
              image="/how2.png"
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <StepCard
              step="3"
              title="Roam Worldwide"
              desc="Enjoy fast, reliable data across all countries in your chosen sub-region with automatic Tier-1 carrier switching."
              bgColor="#006F87"
              image="/how3.png"
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}