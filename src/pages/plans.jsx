"use client";

import { useState, useMemo } from "react";
import PlanFinder from "../components/PlanFinder";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Select,
  MenuItem,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import StorageIcon from "@mui/icons-material/Storage";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import BoltIcon from "@mui/icons-material/Bolt";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import CancelIcon from "@mui/icons-material/Cancel";
import StarIcon from "@mui/icons-material/Star";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import CloseIcon from "@mui/icons-material/Close";

/* ─── Static Data ───────────────────────────────── */

const ALL_PLANS = [
  { title: "Orbit Explore", price: 6,  duration: "8 days",  durationDays: 8,  sim: ["eSIM", "pSIM"], data: "2 GB high-speed data",  dataGB: 2,  save: 22, highlight: false },
  { title: "Orbit Explore", price: 10, duration: "15 days", durationDays: 15, sim: ["eSIM", "pSIM"], data: "2 GB high-speed data",  dataGB: 2,  save: 23, highlight: false },
  { title: "Orbit Group",   price: 13, duration: "8 days",  durationDays: 8,  sim: ["eSIM", "pSIM"], data: "7 GB high-speed data",  dataGB: 7,  save: 81, highlight: true  },
  { title: "Orbit Explore", price: 15, duration: "30 days", durationDays: 30, sim: ["eSIM", "pSIM"], data: "2 GB high-speed data",  dataGB: 2,  save: 64, highlight: false },
  { title: "Orbit Group",   price: 19, duration: "15 days", durationDays: 15, sim: ["eSIM", "pSIM"], data: "7 GB high-speed data",  dataGB: 7,  save: 62, highlight: false },
  { title: "Orbit Wild",    price: 20, duration: "8 days",  durationDays: 8,  sim: ["eSIM", "pSIM"], data: "15 GB high-speed data", dataGB: 15, save: 40, highlight: false },
  { title: "Orbit Wild",    price: 28, duration: "15 days", durationDays: 15, sim: ["eSIM", "pSIM"], data: "15 GB high-speed data", dataGB: 15, save: 60, highlight: false },
  { title: "Orbit Group",   price: 29, duration: "30 days", durationDays: 30, sim: ["eSIM", "pSIM"], data: "7 GB high-speed data",  dataGB: 7,  save: 61, highlight: false },
  { title: "Orbit Roam",    price: 30, duration: "8 days",  durationDays: 8,  sim: ["eSIM", "pSIM"], data: "30 GB high-speed data", dataGB: 30, save: 85, highlight: false },
  { title: "Orbit Wild",    price: 39, duration: "30 days", durationDays: 30, sim: ["eSIM", "pSIM"], data: "15 GB high-speed data", dataGB: 15, save: 42, highlight: false },
  { title: "Orbit Roam",    price: 42, duration: "15 days", durationDays: 15, sim: ["eSIM", "pSIM"], data: "30 GB high-speed data", dataGB: 30, save: 79, highlight: false },
  { title: "Orbit Roam",    price: 59, duration: "30 days", durationDays: 30, sim: ["eSIM", "pSIM"], data: "30 GB high-speed data", dataGB: 30, save: 57, highlight: false },
];

const REGIONS = [
  { label: "Europe & UK",                 count: "31+ countries" },
  { label: "Rest of Europe",              count: "2 countries"   },
  { label: "North America",               count: "3 countries"   },
  { label: "Central America & Caribbean", count: "35+ countries" },
  { label: "South America",               count: "12 countries"  },
  { label: "Africa",                      count: "30+ countries" },
  { label: "Rest of Africa",              count: "7+ countries"  },
  { label: "Asia",                        count: "15+ countries" },
];

// Data allowance ranges: [minGB, maxGB]
const DATA_RANGES = [
  { label: "1-5 GB",   min: 1,  max: 5  },
  { label: "6-10 GB",  min: 6,  max: 10 },
  { label: "11-20 GB", min: 11, max: 20 },
  { label: "21-30 GB", min: 21, max: 30 },
];

const DURATIONS = [
  { label: "8 days",  days: 8  },
  { label: "15 days", days: 15 },
  { label: "30 days", days: 30 },
];

const SORT_OPTIONS = [
  { value: "low",     label: "Price: Low to High" },
  { value: "high",    label: "Price: High to Low" },
  { value: "popular", label: "Most Popular"        },
];

const teal = "#00718A";

/* ─── Page ──────────────────────────────────────── */

export default function Plans() {
  // Filter state — null means "no filter applied"
  const [selectedRegion,   setSelectedRegion]   = useState("Europe & UK");
  const [selectedData,     setSelectedData]     = useState(null); // label string or null
  const [selectedDuration, setSelectedDuration] = useState(null); // days number or null
  const [sortBy,           setSortBy]           = useState("low");

  /* ── Derived: filtered + sorted plans ── */
  const filteredPlans = useMemo(() => {
    let plans = [...ALL_PLANS];

    // Data allowance filter
    if (selectedData) {
      const range = DATA_RANGES.find((r) => r.label === selectedData);
      if (range) {
        plans = plans.filter((p) => p.dataGB >= range.min && p.dataGB <= range.max);
      }
    }

    // Duration filter
    if (selectedDuration !== null) {
      plans = plans.filter((p) => p.durationDays === selectedDuration);
    }

    // Sort
    if (sortBy === "low")  plans.sort((a, b) => a.price - b.price);
    if (sortBy === "high") plans.sort((a, b) => b.price - a.price);
    // "popular" keeps original order

    return plans;
  }, [selectedData, selectedDuration, sortBy]);

  /* ── Active filter chips ── */
  const activeFilters = [
    ...(selectedRegion   ? [{ key: "region",   label: selectedRegion }]           : []),
    ...(selectedData     ? [{ key: "data",     label: selectedData }]              : []),
    ...(selectedDuration ? [{ key: "duration", label: `${selectedDuration} days` }] : []),
  ];

  function clearAll() {
    setSelectedRegion(null);
    setSelectedData(null);
    setSelectedDuration(null);
  }

  function removeFilter(key) {
    if (key === "region")   setSelectedRegion(null);
    if (key === "data")     setSelectedData(null);
    if (key === "duration") setSelectedDuration(null);
  }

  return (
    <Box component="main" sx={{ bgcolor: "#f6f9fc", minHeight: "100vh" }}>
      <PlanFinder />

      {/* ── Active Filters Bar ── */}
      <Box
        sx={{
          borderBottom: "1px solid #e0e0e0",
          bgcolor: "white",
          px: 4,
          py: 1,
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          minHeight: 40,
        }}
      >
        {activeFilters.length > 0 && (
          <Typography variant="body2" color="text.secondary" fontWeight={500} sx={{ whiteSpace: "nowrap" }}>
            Active Filters:
          </Typography>
        )}

        {activeFilters.map((f) => (
          <Chip
            key={f.key}
            label={f.label}
            deleteIcon={<CloseIcon sx={{ fontSize: "13px !important" }} />}
            onDelete={() => removeFilter(f.key)}
            size="small"
            sx={{ bgcolor: "white", border: "1px solid #ccc", fontSize: 12, height: 22 }}
          />
        ))}

        <Box flex={1} />

        {activeFilters.length > 0 && (
          <Typography
            variant="body2"
            onClick={clearAll}
            sx={{ color: teal, cursor: "pointer", fontWeight: 600, whiteSpace: "nowrap" }}
          >
            Clear All
          </Typography>
        )}
      </Box>

      {/* ================= MAIN CONTENT ================= */}
      <Box
        sx={{
          maxWidth: 1400,
          mx: "auto",
          px: 3,
          py: 4,
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "260px 1fr" },
          gap: 4,
          alignItems: "start",
        }}
      >
        {/* ========== FILTERS SIDEBAR ========== */}
        <Box
          component="aside"
          sx={{ bgcolor: "white", borderRadius: 3, boxShadow: 1, overflow: "hidden" }}
        >
          {/* Header */}
          <Box
            sx={{
              px: 2.5, py: 1.75,
              display: "flex", justifyContent: "space-between", alignItems: "center",
              borderBottom: "1px solid #f0f0f0",
            }}
          >
            <Typography variant="subtitle2" fontWeight={700} color="text.primary">
              Filter Plans
            </Typography>
            <ExpandLessIcon sx={{ color: "text.secondary", fontSize: 20 }} />
          </Box>

          <Box sx={{ px: 2.5, py: 2 }}>

            {/* ── Regions ── */}
            <Box mb={2}>
              <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <Typography variant="body2" fontWeight={700} color="text.primary">Regions</Typography>
                {selectedRegion && (
                  <Typography
                    variant="caption"
                    onClick={() => setSelectedRegion(null)}
                    sx={{ color: teal, cursor: "pointer", fontWeight: 600 }}
                  >
                    Clear
                  </Typography>
                )}
              </Box>
              <Box
                sx={{
                  maxHeight: 215, overflowY: "auto", pr: 0.5,
                  "&::-webkit-scrollbar": { width: 4 },
                  "&::-webkit-scrollbar-thumb": { bgcolor: "#ccc", borderRadius: 2 },
                }}
              >
                {REGIONS.map((r) => {
                  const active = selectedRegion === r.label;
                  return (
                    <Box
                      key={r.label}
                      onClick={() => setSelectedRegion(active ? null : r.label)}
                      display="flex" alignItems="center" gap={1} py={0.6}
                      sx={{ cursor: "pointer", "&:hover": { opacity: 0.8 } }}
                    >
                      <Box
                        sx={{
                          width: 16, height: 16, borderRadius: "50%",
                          border: active ? `2px solid ${teal}` : "2px solid #bbb",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          flexShrink: 0, transition: "border-color 0.15s",
                        }}
                      >
                        {active && (
                          <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: teal }} />
                        )}
                      </Box>
                      <Typography
                        variant="body2"
                        color={active ? "text.primary" : "text.secondary"}
                        fontSize={12}
                        fontWeight={active ? 600 : 400}
                      >
                        {r.label}{" "}
                        <Box component="span" sx={{ color: "text.disabled", fontSize: 11 }}>
                          ({r.count})
                        </Box>
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
            </Box>

            <Divider sx={{ my: 1.5 }} />

            {/* ── Data Allowance ── */}
            <Box mb={2}>
              <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <Typography variant="body2" fontWeight={700} color="text.primary">Data Allowance</Typography>
                {selectedData && (
                  <Typography
                    variant="caption"
                    onClick={() => setSelectedData(null)}
                    sx={{ color: teal, cursor: "pointer", fontWeight: 600 }}
                  >
                    Clear
                  </Typography>
                )}
              </Box>
              {DATA_RANGES.map((d) => {
                const active = selectedData === d.label;
                return (
                  <Box
                    key={d.label}
                    onClick={() => setSelectedData(active ? null : d.label)}
                    display="flex" alignItems="center" gap={1} py={0.6}
                    sx={{ cursor: "pointer", "&:hover": { opacity: 0.8 } }}
                  >
                    <Box
                      sx={{
                        width: 16, height: 16, borderRadius: "50%",
                        border: active ? `2px solid ${teal}` : "2px solid #bbb",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0, transition: "border-color 0.15s",
                      }}
                    >
                      {active && (
                        <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: teal }} />
                      )}
                    </Box>
                    <Typography
                      variant="body2"
                      color={active ? "text.primary" : "text.secondary"}
                      fontSize={12}
                      fontWeight={active ? 600 : 400}
                    >
                      {d.label}
                    </Typography>
                  </Box>
                );
              })}
            </Box>

            <Divider sx={{ my: 1.5 }} />

            {/* ── Duration ── */}
            <Box>
              <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <Typography variant="body2" fontWeight={700} color="text.primary">Duration</Typography>
                {selectedDuration && (
                  <Typography
                    variant="caption"
                    onClick={() => setSelectedDuration(null)}
                    sx={{ color: teal, cursor: "pointer", fontWeight: 600 }}
                  >
                    Clear
                  </Typography>
                )}
              </Box>
              {DURATIONS.map((d) => {
                const active = selectedDuration === d.days;
                return (
                  <Box
                    key={d.label}
                    onClick={() => setSelectedDuration(active ? null : d.days)}
                    display="flex" alignItems="center" gap={1} py={0.6}
                    sx={{ cursor: "pointer", "&:hover": { opacity: 0.8 } }}
                  >
                    <Box
                      sx={{
                        width: 16, height: 16, borderRadius: "50%",
                        border: active ? `2px solid ${teal}` : "2px solid #bbb",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0, transition: "border-color 0.15s",
                      }}
                    >
                      {active && (
                        <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: teal }} />
                      )}
                    </Box>
                    <Typography
                      variant="body2"
                      color={active ? "text.primary" : "text.secondary"}
                      fontSize={12}
                      fontWeight={active ? 600 : 400}
                    >
                      {d.label}
                    </Typography>
                  </Box>
                );
              })}
            </Box>

          </Box>
        </Box>

        {/* ========== PLANS SECTION ========== */}
        <Box>
          {/* Header */}
          <Box
            sx={{
              mb: 2.5,
              display: "flex", justifyContent: "space-between", alignItems: "center",
            }}
          >
            <Box>
              <Typography variant="subtitle1" fontWeight={700} color="text.primary">
                {filteredPlans.length} plan{filteredPlans.length !== 1 ? "s" : ""} found
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Perfect for your travel needs
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <Typography variant="body2" color="text.secondary">Sort by:</Typography>
              <Select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                size="small"
                sx={{ fontSize: 13, color: "text.primary", minWidth: 155 }}
              >
                {SORT_OPTIONS.map((o) => (
                  <MenuItem key={o.value} value={o.value}>{o.label}</MenuItem>
                ))}
              </Select>
            </Box>
          </Box>

          {/* Cards grid */}
          {filteredPlans.length === 0 ? (
            <Box
              sx={{
                textAlign: "center", py: 10,
                bgcolor: "white", borderRadius: 3, boxShadow: 1,
              }}
            >
              <Typography variant="h6" color="text.secondary" fontWeight={600}>
                No plans match your filters
              </Typography>
              <Typography variant="body2" color="text.disabled" mt={1}>
                Try adjusting or clearing your filters
              </Typography>
              <Button
                variant="outlined"
                onClick={clearAll}
                sx={{ mt: 3, borderColor: teal, color: teal, textTransform: "none", fontWeight: 600 }}
              >
                Clear All Filters
              </Button>
            </Box>
          ) : (
            <Grid container spacing={2}>
              {filteredPlans.map((plan, i) => (
                <Grid key={i} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                  <PlanCard {...plan} />
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      </Box>
    </Box>
  );
}

/* ─── PlanCard ──────────────────────────────────── */

function PlanCard({ title, price, duration, sim, data, save, highlight }) {
  const features = [
    { icon: <StorageIcon sx={{ fontSize: 13, color: teal }} />,             text: data },
    { icon: <SignalCellularAltIcon sx={{ fontSize: 13, color: teal }} />,   text: "5G Ready" },
    { icon: <BoltIcon sx={{ fontSize: 13, color: teal }} />,                text: "Instant activation (eSIM)" },
    { icon: <SupportAgentIcon sx={{ fontSize: 13, color: teal }} />,        text: "24/7 Support" },
    { icon: <DescriptionOutlinedIcon sx={{ fontSize: 13, color: teal }} />, text: "Data Only" },
    { icon: <CancelIcon sx={{ fontSize: 13, color: "#aaa" }} />,            text: "No Contract" },
    { icon: <StarIcon sx={{ fontSize: 13, color: "#f59e0b" }} />,           text: "Top-up Anytime" },
  ];

  return (
    <Card
      variant="outlined"
      sx={{
        borderRadius: 3,
        borderWidth: highlight ? 2 : 1,
        borderColor: highlight ? teal : "#e0e0e0",
        boxShadow: highlight ? "0 2px 14px rgba(0,113,138,0.18)" : 1,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardContent sx={{ p: 2, flex: 1, display: "flex", flexDirection: "column" }}>

        {/* Title + Price */}
        <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={1}>
          <Typography variant="subtitle2" fontWeight={700} color="text.primary" lineHeight={1.3}>
            {title}
          </Typography>
          <Box textAlign="right" flexShrink={0} ml={1}>
            <Box display="flex" alignItems="baseline" gap={0.2} justifyContent="flex-end">
              <Typography sx={{ color: teal, fontWeight: 700, fontSize: 13, lineHeight: 1 }}>$</Typography>
              <Typography sx={{ color: teal, fontWeight: 800, fontSize: 20, lineHeight: 1 }}>{price}</Typography>
            </Box>
            <Typography variant="caption" color="text.secondary" fontSize={10}>/{duration}</Typography>
          </Box>
        </Box>

        {/* SIM badges */}
        <Box display="flex" gap={0.75} mb={1.5} flexWrap="wrap">
          {sim.map((s) => (
            <Chip
              key={s}
              label={s}
              size="small"
              sx={{
                height: 20, fontSize: 10, fontWeight: 600, px: 0.25,
                bgcolor: s === "eSIM" ? "#e6f4f6" : "#fff8e1",
                color:   s === "eSIM" ? teal       : "#92400e",
                border: `1px solid ${s === "eSIM" ? "#b2dce2" : "#fcd34d"}`,
                borderRadius: 1,
              }}
            />
          ))}
        </Box>

        {/* Features */}
        <List dense disablePadding sx={{ flex: 1 }}>
          {features.map((f, i) => (
            <ListItem key={i} disableGutters sx={{ py: 0.3 }}>
              <ListItemIcon sx={{ minWidth: 22 }}>{f.icon}</ListItemIcon>
              <ListItemText
                primary={f.text}
                primaryTypographyProps={{ fontSize: 11.5, color: "text.secondary" }}
              />
            </ListItem>
          ))}
        </List>

        {/* Savings strip */}
        <Box
          sx={{
            mt: 1.5, bgcolor: "#e6f4f6", borderRadius: 1.5,
            py: 0.75, px: 1, display: "flex", alignItems: "center", gap: 0.5,
          }}
        >
          <SavingsOutlinedIcon sx={{ fontSize: 13, color: teal }} />
          <Typography sx={{ color: teal, fontWeight: 600, fontSize: 11 }}>
            Save {save}% vs roaming
          </Typography>
        </Box>

        {/* CTA */}
        <Button
          fullWidth variant="contained"
          sx={{
            mt: 1.25, py: 1, borderRadius: 2,
            fontWeight: 700, fontSize: 13,
            bgcolor: teal, "&:hover": { bgcolor: "#005e72" },
            textTransform: "none", boxShadow: "none",
          }}
        >
          Buy Now →
        </Button>
      </CardContent>
    </Card>
  );
}