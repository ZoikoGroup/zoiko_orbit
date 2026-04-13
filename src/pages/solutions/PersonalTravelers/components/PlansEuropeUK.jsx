import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Chip,
  Stack,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import StorageIcon from "@mui/icons-material/Storage";
import BoltIcon from "@mui/icons-material/Bolt";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import StarIcon from "@mui/icons-material/Star";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";

const plans = [
  { name: "Orbit Explore", price: 6, data: "2 GB", save: "Save 30% vs roaming" },
  { name: "Orbit Group", price: 13, data: "7 GB", save: "Save 80% vs roaming" },
  { name: "Orbit Wild", price: 20, data: "15 GB", save: "Save 78% vs roaming" },
];

const features = (data) => [
  { icon: <StorageIcon sx={{ color: "#00718A" }} />, label: `${data} high-speed data` },
  { icon: <SignalCellularAltIcon sx={{ color: "#00718A" }} />, label: "5G Ready" },
  { icon: <BoltIcon sx={{ color: "#00718A" }} />, label: "Instant activation (eSIM)" },
  { icon: <HeadsetMicIcon sx={{ color: "#00718A" }} />, label: "24/7 Support" },
  { icon: <StarIcon sx={{ color: "#00718A" }} />, label: "Data Only" },
  { icon: <StarIcon sx={{ color: "#00718A" }} />, label: "No Contract" },
  { icon: <StarIcon sx={{ color: "#00718A" }} />, label: "Top-up Anytime" },
];

export default function PlansEuropeUK() {
  const [days, setDays] = useState(8);

  return (
    <Box component="section" sx={{ bgcolor: "white", py: 10 }}>
      <Box sx={{ maxWidth: "1600px", mx: "auto", px: { xs: 3, lg: 8 } }}>

        {/* Title */}
        <Typography
          component="h2"
          sx={{
            textAlign: "center",
            fontSize: { xs: "28px", md: "34px" },
            fontWeight: 600,
            color: "#00718A",
            mb: 4,
          }}
        >
          Europe & UK
        </Typography>

        {/* Day Tabs */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 8 }}>
          <Box
            sx={{
              bgcolor: "white",
              boxShadow: 3,
              borderRadius: "999px",
              display: "flex",
              p: 0.5,
              gap: 1,
            }}
          >
            {[8, 15, 30].map((d) => (
              <Button
                key={d}
                onClick={() => setDays(d)}
                sx={{
                  px: 4,
                  py: 1.2,
                  borderRadius: "999px",
                  fontWeight: 600,
                  fontSize: "15px",
                  textTransform: "none",
                  transition: "all 0.2s",
                  bgcolor: days === d ? "#00718A" : "transparent",
                  color: days === d ? "white" : "#00718A",
                  "&:hover": {
                    bgcolor: days === d ? "#00718A" : "#e8f5f8",
                  },
                }}
              >
                {d} Days
              </Button>
            ))}
          </Box>
        </Box>

        {/* Cards */}
        <Grid container spacing={4}>
          {plans.map((plan) => (
            <Grid item xs={12} md={4} key={plan.name}>
              <Box
                sx={{
                  border: "2px solid #FF8A00",
                  borderRadius: "16px",
                  p: 3,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                {/* Header */}
                <Box>
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 2 }}>
                    <Typography sx={{ fontSize: "20px", fontWeight: 600, color: "grey.900" }}>
                      {plan.name}
                    </Typography>
                    <Box sx={{ textAlign: "right" }}>
                      <Typography sx={{ fontSize: "28px", fontWeight: 700, color: "#00718A" }}>
                        ${plan.price}
                      </Typography>
                      <Typography sx={{ fontSize: "14px", color: "grey.500" }}>
                        / {days} days
                      </Typography>
                    </Box>
                  </Box>

                  {/* Tags */}
                  <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                    <Chip
                      label="eSIM"
                      size="small"
                      sx={{ bgcolor: "#E6F7FB", color: "#00718A", fontWeight: 500 }}
                    />
                    <Chip
                      label="pSIM"
                      size="small"
                      sx={{ bgcolor: "#FFF3D6", color: "#FF8A00", fontWeight: 500 }}
                    />
                  </Stack>

                  {/* Features */}
                  <List dense disablePadding>
                    {features(plan.data).map((f, i) => (
                      <ListItem key={i} disableGutters sx={{ py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>{f.icon}</ListItemIcon>
                        <ListItemText
                          primary={f.label}
                          primaryTypographyProps={{ fontSize: "14px", color: "grey.700" }}
                        />
                      </ListItem>
                    ))}
                  </List>

                  {/* Save Badge */}
                  <Box
                    sx={{
                      mt: 3,
                      bgcolor: "#EEF7FD",
                      borderRadius: "12px",
                      px: 2,
                      py: 1,
                      color: "#00718A",
                      fontSize: "13px",
                      fontWeight: 500,
                    }}
                  >
                    🤖 {plan.save}
                  </Box>
                </Box>

                {/* CTA */}
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    mt: 4,
                    bgcolor: "#00718A",
                    color: "white",
                    py: 1.8,
                    borderRadius: "12px",
                    fontWeight: 600,
                    fontSize: "16px",
                    textTransform: "none",
                    "&:hover": { bgcolor: "#0b8fa8" },
                  }}
                >
                  Buy Now →
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>

      </Box>
    </Box>
  );
}