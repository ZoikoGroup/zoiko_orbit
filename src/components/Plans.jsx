import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  TextField,
  InputAdornment,
  Tab,
  Tabs,
  Paper,
  MenuItem,
  Select,
  FormControl,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import StorageIcon from "@mui/icons-material/Storage";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import BoltIcon from "@mui/icons-material/Bolt";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import StarIcon from "@mui/icons-material/Star";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EmojiNatureIcon from "@mui/icons-material/EmojiNature";
import { useState } from "react";

// ── constants ────────────────────────────────────────────────
const TEAL = "#0e7c86";

// const regionTabs = [
//   "All",
//   "Europe",
//   "Asia Pacific",
//   "Americas",
//   "Middle East & CIS",
//   "Global",
// ];

const durations = ["8 Days", "15 Days", "30 Days"];

// per-region plan data keyed by duration label
const regionPlans = {
  "Europe & UK": {
    "8 Days": [
      { name: "Orbit Explore", data: "2 GB", price: 6, saving: 83 },
      { name: "Orbit Group", data: "7 GB", price: 13, saving: 82 },
      { name: "Orbit Wild", data: "15 GB", price: 20, saving: 32 },
    ],
    "15 Days": [
      { name: "Orbit Explore", data: "3 GB", price: 9, saving: 80 },
      { name: "Orbit Group", data: "10 GB", price: 18, saving: 78 },
      { name: "Orbit Wild", data: "20 GB", price: 28, saving: 30 },
    ],
    "30 Days": [
      { name: "Orbit Explore", data: "5 GB", price: 13, saving: 75 },
      { name: "Orbit Group", data: "15 GB", price: 24, saving: 72 },
      { name: "Orbit Wild", data: "30 GB", price: 38, saving: 28 },
    ],
  },
  "North America": {
    "8 Days": [
      { name: "Orbit Explore", data: "3 GB", price: 8, saving: 80 },
      { name: "Orbit Group", data: "8 GB", price: 15, saving: 79 },
      { name: "Orbit Wild", data: "18 GB", price: 22, saving: 35 },
    ],
    "15 Days": [
      { name: "Orbit Explore", data: "5 GB", price: 12, saving: 78 },
      { name: "Orbit Group", data: "12 GB", price: 20, saving: 76 },
      { name: "Orbit Wild", data: "25 GB", price: 30, saving: 32 },
    ],
    "30 Days": [
      { name: "Orbit Explore", data: "10 GB", price: 20, saving: 74 },
      { name: "Orbit Group", data: "20 GB", price: 30, saving: 70 },
      { name: "Orbit Wild", data: "40 GB", price: 45, saving: 25 },
    ],
  },
  "Asia Pacific": {
    "8 Days": [
      { name: "Orbit Explore", data: "2 GB", price: 7, saving: 81 },
      { name: "Orbit Group", data: "6 GB", price: 14, saving: 80 },
      { name: "Orbit Wild", data: "12 GB", price: 19, saving: 33 },
    ],
    "15 Days": [
      { name: "Orbit Explore", data: "4 GB", price: 10, saving: 79 },
      { name: "Orbit Group", data: "10 GB", price: 17, saving: 77 },
      { name: "Orbit Wild", data: "20 GB", price: 26, saving: 31 },
    ],
    "30 Days": [
      { name: "Orbit Explore", data: "8 GB", price: 16, saving: 73 },
      { name: "Orbit Group", data: "18 GB", price: 26, saving: 70 },
      { name: "Orbit Wild", data: "35 GB", price: 40, saving: 27 },
    ],
  },
  Americas: {
    "8 Days": [
      { name: "Orbit Explore", data: "2 GB", price: 7, saving: 79 },
      { name: "Orbit Group", data: "6 GB", price: 14, saving: 78 },
      { name: "Orbit Wild", data: "12 GB", price: 21, saving: 31 },
    ],
    "15 Days": [
      { name: "Orbit Explore", data: "4 GB", price: 11, saving: 77 },
      { name: "Orbit Group", data: "10 GB", price: 19, saving: 75 },
      { name: "Orbit Wild", data: "22 GB", price: 29, saving: 29 },
    ],
    "30 Days": [
      { name: "Orbit Explore", data: "8 GB", price: 18, saving: 73 },
      { name: "Orbit Group", data: "18 GB", price: 28, saving: 69 },
      { name: "Orbit Wild", data: "35 GB", price: 42, saving: 26 },
    ],
  },
  "Middle East & CIS": {
    "8 Days": [
      { name: "Orbit Explore", data: "2 GB", price: 8, saving: 78 },
      { name: "Orbit Group", data: "5 GB", price: 15, saving: 77 },
      { name: "Orbit Wild", data: "10 GB", price: 22, saving: 30 },
    ],
    "15 Days": [
      { name: "Orbit Explore", data: "3 GB", price: 12, saving: 76 },
      { name: "Orbit Group", data: "8 GB", price: 20, saving: 74 },
      { name: "Orbit Wild", data: "18 GB", price: 30, saving: 28 },
    ],
    "30 Days": [
      { name: "Orbit Explore", data: "6 GB", price: 18, saving: 72 },
      { name: "Orbit Group", data: "15 GB", price: 28, saving: 68 },
      { name: "Orbit Wild", data: "30 GB", price: 42, saving: 24 },
    ],
  },
  Global: {
    "8 Days": [
      { name: "Orbit Explore", data: "1 GB", price: 12, saving: 75 },
      { name: "Orbit Group", data: "3 GB", price: 22, saving: 74 },
      { name: "Orbit Wild", data: "8 GB", price: 35, saving: 28 },
    ],
    "15 Days": [
      { name: "Orbit Explore", data: "2 GB", price: 18, saving: 73 },
      { name: "Orbit Group", data: "5 GB", price: 30, saving: 71 },
      { name: "Orbit Wild", data: "12 GB", price: 45, saving: 26 },
    ],
    "30 Days": [
      { name: "Orbit Explore", data: "3 GB", price: 25, saving: 70 },
      { name: "Orbit Group", data: "8 GB", price: 40, saving: 68 },
      { name: "Orbit Wild", data: "20 GB", price: 60, saving: 22 },
    ],
  },
};

// Summary cards shown in "All" tab (matching Image 1)
const allRegions = [
  {
    region: "Europe & UK",
    countries: "35 Countries",
    data: "5 GB",
    days: "30 Days",
    price: "$12.99",
    label: "EU",
    useLabel: true,
    color: "#3b82f6",
    popular: false,
  },
  {
    region: "North America",
    countries: "USA, Canada, MX",
    data: "10 GB",
    days: "30 Days",
    price: "$19.99",
    label: "🌎",
    useLabel: false,
    color: TEAL,
    popular: true,
  },
  {
    region: "Asia Pacific",
    countries: "25+ Countries",
    data: "8 GB",
    days: "30 Days",
    price: "$15.99",
    label: "🌏",
    useLabel: false,
    color: "#8b5cf6",
    popular: false,
  },
  {
    region: "Middle East & CIS",
    countries: "20+ Countries",
    data: "5 GB",
    days: "15 Days",
    price: "$17.99",
    label: "🌍",
    useLabel: false,
    color: "#f59e0b",
    popular: false,
  },
  {
    region: "Africa",
    countries: "30+ Countries",
    data: "3 GB",
    days: "15 Days",
    price: "$13.99",
    label: "🌍",
    useLabel: false,
    color: "#10b981",
    popular: false,
  },
  {
    region: "Global",
    countries: "220+ Countries",
    data: "3 GB",
    days: "15 Days",
    price: "$24.99",
    label: "🌐",
    useLabel: false,
    color: "#ef4444",
    popular: false,
  },
];

const getPlanFeatures = (data) => [
  {
    id: "data",
    icon: <StorageIcon sx={{ fontSize: 16, color: TEAL }} />,
    text: `${data} high-speed data`,
  },
  {
    id: "5g",
    icon: <SignalCellularAltIcon sx={{ fontSize: 16, color: TEAL }} />,
    text: "5G Ready",
  },
  {
    id: "activation",
    icon: <BoltIcon sx={{ fontSize: 16, color: TEAL }} />,
    text: "Instant activation (eSIM)",
  },
  {
    id: "support",
    icon: <SupportAgentIcon sx={{ fontSize: 16, color: TEAL }} />,
    text: "24/7 Support",
  },
  {
    id: "dataonly",
    icon: <StarIcon sx={{ fontSize: 16, color: TEAL }} />,
    text: "Data Only",
  },
  {
    id: "contract",
    icon: <StarIcon sx={{ fontSize: 16, color: TEAL }} />,
    text: "No Contract",
  },
  {
    id: "topup",
    icon: <StarIcon sx={{ fontSize: 16, color: TEAL }} />,
    text: "Top-up Anytime",
  },
];

const durationOptions = [
  "1–3 Days",
  "4–7 Days",
  "1–2 Weeks",
  "3–4 Weeks",
  "1 Month+",
];

// ── sub-components ───────────────────────────────────────────

function AllRegionsGrid({ onSelectRegion }) {
  return (
    <Grid container spacing={3}>
      {allRegions.map(
        ({
          region,
          countries,
          data,
          days,
          price,
          label,
          useLabel,
          color,
          popular,
        }) => (
          <Grid key={region} size={{ xs: 12, sm: 6, md: 4 }}>
            <Card
              elevation={0}
              sx={{
                height: "100%",
                borderRadius: 3,
                border: "2px solid",
                borderColor: popular ? color : "divider",
                position: "relative",
                cursor: "pointer",
                transition: "all 0.25s ease",
                "&:hover": {
                  transform: "translateY(-3px)",
                  boxShadow: `0 8px 28px ${color}28`,
                },
              }}
              onClick={() => onSelectRegion(region)}
            >
              {popular && (
                <Chip
                  label="Most Popular"
                  size="small"
                  sx={{
                    position: "absolute",
                    top: -13,
                    left: "50%",
                    transform: "translateX(-50%)",
                    bgcolor: color,
                    color: "common.white",
                    fontWeight: 700,
                    borderRadius: 1,
                  }}
                />
              )}
              <CardContent sx={{ p: 3 }}>
                {/* Header: icon/label + region name + countries */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    mb: 2.5,
                  }}
                >
                  {useLabel ? (
                    <Box
                      sx={{
                        width: 52,
                        height: 52,
                        borderRadius: 2,
                        bgcolor: `${color}15`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Typography variant="h6" fontWeight="bold" sx={{ color }}>
                        {label}
                      </Typography>
                    </Box>
                  ) : (
                    <Typography
                      variant="h3"
                      sx={{ lineHeight: 1, flexShrink: 0 }}
                    >
                      {label}
                    </Typography>
                  )}
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {region}
                    </Typography>
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                    >
                      <Typography variant="caption" color="text.secondary">
                        {countries}
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                {/* Data + Validity split boxes */}
                <Grid container spacing={1.5} sx={{ mb: 2.5 }}>
                  <Grid size={{ xs: 6 }}>
                    <Box
                      sx={{
                        bgcolor: `${color}12`,
                        borderRadius: 2,
                        p: 1.5,
                        textAlign: "center",
                      }}
                    >
                      <Typography variant="h6" fontWeight="bold" sx={{ color }}>
                        {data}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Data
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 6 }}>
                    <Box
                      sx={{
                        bgcolor: `${color}12`,
                        borderRadius: 2,
                        p: 1.5,
                        textAlign: "center",
                      }}
                    >
                      <Typography variant="h6" fontWeight="bold" sx={{ color }}>
                        {days}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Validity
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>

                {/* Price + CTA */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="h5" fontWeight="bold">
                    {price}
                  </Typography>
                  <Button
                    variant={popular ? "contained" : "outlined"}
                    size="small"
                    sx={{
                      borderRadius: 2,
                      textTransform: "none",
                      fontWeight: 600,
                      px: 2.5,
                      ...(popular
                        ? {
                            bgcolor: color,
                            "&:hover": {
                              bgcolor: color,
                              filter: "brightness(0.9)",
                            },
                          }
                        : {
                            borderColor: color,
                            color,
                            "&:hover": { bgcolor: `${color}10` },
                          }),
                    }}
                  >
                    Get Plan
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ),
      )}
    </Grid>
  );
}

function RegionDetailView({ regionKey }) {
  const [duration, setDuration] = useState("8 Days");
  const plans = (regionPlans[regionKey] ?? regionPlans["Europe & UK"])[
    duration
  ];

  return (
    <Box>
      {/* Region title */}
      <Typography
        variant="h6"
        fontWeight="bold"
        textAlign="center"
        sx={{ color: TEAL, mb: 2 }}
      >
        {regionKey}
      </Typography>

      {/* Duration toggle */}
      <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
        <ToggleButtonGroup
          value={duration}
          exclusive
          onChange={(_, v) => v && setDuration(v)}
          sx={{
            bgcolor: "grey.100",
            borderRadius: 6,
            p: 0.5,
            "& .MuiToggleButton-root": {
              border: "none",
              borderRadius: "20px !important",
              px: 3,
              py: 0.75,
              textTransform: "none",
              fontWeight: 500,
              color: "text.secondary",
              transition: "all 0.2s",
              "&.Mui-selected": {
                bgcolor: TEAL,
                color: "common.white",
                fontWeight: 700,
                "&:hover": { bgcolor: TEAL },
              },
            },
          }}
        >
          {durations.map((d) => (
            <ToggleButton key={d} value={d}>
              {d}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Box>

      {/* Plan cards */}
      <Grid container spacing={3}>
        {plans.map(({ name, data, price, saving }) => (
          <Grid key={name} size={{ xs: 12, sm: 4 }}>
            <Card
              elevation={0}
              sx={{
                borderRadius: 3,
                border: "2px solid",
                borderColor: "#f59e0b",
                transition: "all 0.25s ease",
                "&:hover": {
                  boxShadow: "0 8px 28px rgba(14,124,134,0.15)",
                  transform: "translateY(-3px)",
                },
              }}
            >
              <CardContent sx={{ p: 3 }}>
                {/* Name + price */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    mb: 1.5,
                  }}
                >
                  <Typography variant="subtitle1" fontWeight="bold">
                    {name}
                  </Typography>
                  <Box
                    sx={{ display: "flex", alignItems: "baseline", gap: 0.25 }}
                  >
                    <Typography
                      variant="h5"
                      fontWeight="bold"
                      sx={{ color: TEAL }}
                    >
                      ${price}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      /{duration.toLowerCase()}
                    </Typography>
                  </Box>
                </Box>

                {/* eSIM / pSIM badges */}
                <Box sx={{ display: "flex", gap: 0.75, mb: 2 }}>
                  <Chip
                    label="eSIM"
                    size="small"
                    sx={{
                      bgcolor: "#e0f7fa",
                      color: TEAL,
                      fontWeight: 600,
                      fontSize: "0.7rem",
                    }}
                  />
                  <Chip
                    label="pSIM"
                    size="small"
                    sx={{
                      bgcolor: "#fff9c4",
                      color: "#f59e0b",
                      fontWeight: 600,
                      fontSize: "0.7rem",
                    }}
                  />
                </Box>

                {/* Feature list */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 0.9,
                    mb: 2,
                  }}
                >
                  {getPlanFeatures(data).map(({ id, icon, text }) => (
                    <Box
                      key={id}
                      sx={{ display: "flex", alignItems: "center", gap: 1 }}
                    >
                      {icon}
                      <Typography variant="body2" color="text.secondary">
                        {text}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                {/* Savings badge */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    bgcolor: "#e8f5f7",
                    borderRadius: 2,
                    px: 1.5,
                    py: 0.75,
                    mb: 2.5,
                  }}
                >
                  <EmojiNatureIcon sx={{ fontSize: 16, color: TEAL }} />
                  <Typography
                    variant="caption"
                    sx={{ color: TEAL, fontWeight: 600 }}
                  >
                    Save {saving}% vs roaming
                  </Typography>
                </Box>

                {/* Buy Now */}
                <Button
                  fullWidth
                  variant="contained"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    bgcolor: TEAL,
                    textTransform: "none",
                    fontWeight: 700,
                    borderRadius: 2,
                    py: 1.25,
                    "&:hover": { bgcolor: "#0a5c65" },
                  }}
                >
                  Buy Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

// ── main component ────────────────────────────────────────────
export default function Plans() {
  const [tab, setTab] = useState(1); // default to Europe & UK detail view
  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState("");

  // map tab index → exact key in regionPlans (index 0 = "All" shows AllRegionsGrid)
  const regionKeys = ["", "Europe & UK"];
  const showDetail = tab !== 0;

  return (
    <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: "grey.50" }}>
      <Container>
        {/* Heading */}
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          gutterBottom
        >
          Choose Your Perfect Travel Plan
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          color="text.secondary"
          sx={{ mb: 4, maxWidth: 520, mx: "auto" }}
        >
          Compare all our SIM and eSIM packages. Find the best deal for your
          destination and stay connected worldwide.
        </Typography>

        {/* AI Plan Finder */}
        <Paper
          elevation={0}
          sx={{
            background: `linear-gradient(135deg, ${TEAL} 0%, #0a6b74 100%)`,
            borderRadius: 3,
            p: { xs: 3, md: 4 },
            mb: 4,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
            <Box
              sx={{
                width: 52,
                height: 52,
                minWidth: 52,
                borderRadius: 2,
                bgcolor: "rgba(255,255,255,0.18)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <SmartToyIcon sx={{ color: "common.white" }} />
            </Box>
            <Box>
              <Typography
                variant="subtitle1"
                fontWeight="bold"
                color="common.white"
              >
                AI Plan Finder
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "rgba(255,255,255,0.8)" }}
              >
                Let our AI suggest the perfect plan for your trip
              </Typography>
            </Box>
          </Box>

          <Grid container spacing={2} alignItems="flex-end">
            <Grid size={{ xs: 12, sm: 5 }}>
              <Typography
                variant="body2"
                fontWeight={600}
                color="common.white"
                sx={{ mb: 1 }}
              >
                Where are you traveling?
              </Typography>
              <TextField
                fullWidth
                placeholder="Enter destination or country"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                variant="outlined"
                sx={{
                  bgcolor: "common.white",
                  borderRadius: 2,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                    "& fieldset": { border: "none" },
                  },
                }}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 4 }}>
              <Typography
                variant="body2"
                fontWeight={600}
                color="common.white"
                sx={{ mb: 1 }}
              >
                How long is your trip?
              </Typography>
              <FormControl fullWidth>
                <Select
                  displayEmpty
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  renderValue={(val) => val || "Select duration"}
                  endAdornment={
                    <InputAdornment position="end" sx={{ mr: 1 }}>
                      <CalendarMonthIcon sx={{ color: TEAL }} />
                    </InputAdornment>
                  }
                  sx={{
                    bgcolor: "common.white",
                    borderRadius: 2,
                    "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                  }}
                >
                  {durationOptions.map((opt) => (
                    <MenuItem key={opt} value={opt}>
                      {opt}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid size={{ xs: 12, sm: 3 }}>
              <Button
                fullWidth
                variant="contained"
                size="large"
                sx={{
                  bgcolor: "common.white",
                  color: TEAL,
                  fontWeight: 700,
                  textTransform: "none",
                  borderRadius: 2,
                  py: 1.75,
                  boxShadow: "none",
                  "&:hover": { bgcolor: "grey.100", boxShadow: "none" },
                }}
              >
                Find My Perfect Plan
              </Button>
            </Grid>
          </Grid>
        </Paper>

        {/* Content: All view or Region detail view */}
        {showDetail ? (
          <RegionDetailView regionKey={regionKeys[tab]} />
        ) : (
          <AllRegionsGrid
            onSelectRegion={(region) => {
              const idx = regionKeys.indexOf(region);
              if (idx !== -1) setTab(idx);
            }}
          />
        )}
      </Container>
    </Box>
  );
}
