import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import {
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  Button,
  InputLabel,
  FormControl,
  InputAdornment,
} from "@mui/material";

export default function PlanFinder() {
  return (
    <>
      {/* ================= HEADER STRIP ================= */}
      <Box component="section" sx={{ width: "100%", bgcolor: "#EDF6FC" }}>
        <Box
          sx={{
            maxWidth: 1400,
            mx: "auto",
            px: 3,
            py: 8,
            textAlign: "center",
          }}
        >
          <Typography
            variant="h5"
            fontWeight={600}
            color="#2B2B2B"
            sx={{ fontSize: { xs: 26, md: 32 } }}
          >
            Choose Your Perfect Travel Plan
          </Typography>

          <Typography
            variant="body2"
            color="#6B7280"
            sx={{
              mt: 1.5,
              maxWidth: 620,
              mx: "auto",
              lineHeight: 1.7,
              fontSize: { xs: 14, md: 15 },
            }}
          >
            Compare all our SIM and eSIM packages. Find the best deal for your
            destination and stay connected worldwide.
          </Typography>
        </Box>
      </Box>

      {/* ================= AI PLAN FINDER CARD ================= */}
    </>
  );
}
