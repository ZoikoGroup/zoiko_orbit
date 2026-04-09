"use client";

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
  FormGroup,
  FormControlLabel,
  Checkbox as MuiCheckbox,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

export default function Plans() {
  return (
    <Box component="main" sx={{ bgcolor: "#f6f9fc", minHeight: "100vh" }}>
      <PlanFinder />

      {/* ================= MAIN CONTENT ================= */}
      <Box
        sx={{
          maxWidth: 1400,
          mx: "auto",
          px: 3,
          py: 5,
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "260px 1fr" },
          gap: 4,
        }}
      >
        {/* ========== FILTERS ========== */}
        <Box
          component="aside"
          sx={{
            bgcolor: "#E7F2FB",
            borderRadius: 3,
            p: 3,
            boxShadow: 1,
          }}
        >
          <Typography
            variant="subtitle1"
            fontWeight={600}
            color="text.primary"
            mb={2}
          >
            Filter Plans
          </Typography>

          <Filter title="Region">
            <Checkbox label="Europe (30 countries)" checked />
            <Checkbox label="Asia Pacific (15 countries)" />
            <Checkbox label="Americas (25 countries)" />
            <Checkbox label="Africa & Middle East" />
            <Checkbox label="Global (200+ countries)" />
          </Filter>

          <Filter title="Data Allowance">
            <Checkbox label="1–5 GB" />
            <Checkbox label="6–10 GB" />
            <Checkbox label="11–20 GB" />
            <Checkbox label="Unlimited" />
          </Filter>

          <Filter title="Type">
            <Checkbox label="Both pSIM & eSIM" checked />
            <Checkbox label="eSIM Only" />
            <Checkbox label="Physical SIM" />
          </Filter>

          <Filter title="Duration">
            <Checkbox label="1–8 days" checked />
            <Checkbox label="8–15 days" />
            <Checkbox label="15–30 days" />
          </Filter>
        </Box>

        {/* ========== PLANS ========== */}
        <Box>
          {/* HEADER */}
          <Paper
            elevation={1}
            sx={{
              borderRadius: 3,
              p: 2.5,
              mb: 3,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                variant="subtitle1"
                fontWeight={600}
                color="text.primary"
              >
                4 plans found
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Perfect for your travel needs
              </Typography>
            </Box>
            <Select
              defaultValue="popular"
              size="small"
              sx={{ fontSize: 14, color: "text.secondary" }}
            >
              <MenuItem value="popular">Most Popular</MenuItem>
            </Select>
          </Paper>

          {/* CARDS */}
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Plan
                title="Orbit Explore"
                price="$06"
                badge="MOST POPULAR"
                sold="150 SOLD TODAY"
                features={[
                  "30 Europe & UK countries",
                  "2GB high-speed data",
                  "Instant activation",
                  "No calls & SMS",
                ]}
                accent="blue"
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Plan
                title="Orbit Explore"
                price="$13"
                sold="89 SOLD TODAY"
                features={[
                  "30 Europe & UK countries",
                  "7GB high-speed data",
                  "5G network ready",
                  "24/7 support",
                ]}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Plan
                title="Orbit Wild"
                price="$20"
                badge="PREMIUM"
                sold="43 SOLD TODAY"
                features={[
                  "30 Europe & UK countries",
                  "15GB high-speed data",
                  "Premium network priority",
                  "Concierge support",
                ]}
                accent="orange"
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Plan
                title="Orbit Roam"
                price="$30"
                sold="67 SOLD TODAY"
                features={[
                  "30 Europe & UK countries",
                  "30GB high-speed data",
                  "Instant QR activation",
                  "Hotspot enabled",
                ]}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

/* ================= COMPONENTS ================= */

function Plan({ title, price, badge, sold, features, accent = "gray" }) {
  const isBlue = accent === "blue";
  const isOrange = accent === "orange";
  const accentColor = isOrange ? "#fb923c" : "#00718A";

  return (
    <Card
      variant="outlined"
      sx={{
        borderRadius: 3,
        borderWidth: 2,
        borderColor: isBlue ? "#00718A" : isOrange ? "#fb923c" : "divider",
        boxShadow: 1,
        height: "100%",
      }}
    >
      <CardContent sx={{ p: 3 }}>
        {/* Badges */}
        <Box display="flex" gap={1} mb={1.5}>
          {badge && (
            <Chip
              label={badge}
              size="small"
              sx={{
                bgcolor: isOrange ? "#fb923c" : "#00718A",
                color: "white",
                fontWeight: 700,
                fontSize: 11,
              }}
            />
          )}
          <Chip
            label={sold}
            size="small"
            sx={{
              bgcolor: "#fee2e2",
              color: "#dc2626",
              fontWeight: 700,
              fontSize: 11,
            }}
          />
        </Box>

        {/* Title & Price */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
          mb={2}
        >
          <Typography variant="subtitle1" fontWeight={600} color="text.primary">
            {title}
          </Typography>
          <Box textAlign="right">
            <Typography
              variant="h5"
              fontWeight={700}
              sx={{ color: accentColor, lineHeight: 1 }}
            >
              {price}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              /8 days
            </Typography>
          </Box>
        </Box>

        {/* Features */}
        <List dense disablePadding>
          {features.map((f) => (
            <ListItem key={f} disableGutters sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 28 }}>
                <CheckIcon sx={{ fontSize: 16, color: accentColor }} />
              </ListItemIcon>
              <ListItemText
                primary={f}
                primaryTypographyProps={{
                  variant: "body2",
                  color: "text.secondary",
                }}
              />
            </ListItem>
          ))}
        </List>

        {/* CTA */}
        <Button
          fullWidth
          variant="contained"
          sx={{
            mt: 2.5,
            py: 1.5,
            borderRadius: 2,
            fontWeight: 600,
            bgcolor: accentColor,
            "&:hover": {
              bgcolor: isOrange ? "#ea7c1a" : "#005e72",
            },
            textTransform: "none",
          }}
        >
          Buy Now →
        </Button>
      </CardContent>
    </Card>
  );
}

function Filter({ title, children }) {
  return (
    <Box mb={3}>
      <Typography variant="body2" fontWeight={600} mb={1}>
        {title}
      </Typography>
      <FormGroup>{children}</FormGroup>
    </Box>
  );
}

function Checkbox({ label, checked }) {
  return (
    <FormControlLabel
      control={
        <MuiCheckbox
          defaultChecked={checked}
          size="small"
          sx={{
            color: "#00718A",
            "&.Mui-checked": { color: "#00718A" },
            py: 0.5,
          }}
        />
      }
      label={
        <Typography variant="body2" color="text.secondary">
          {label}
        </Typography>
      }
    />
  );
}
