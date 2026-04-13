import {
  Box,
  Typography,
  Grid,
  TextField,
  MenuItem,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useState } from "react";

const inputSx = {
  "& .MuiOutlinedInput-root": {
    bgcolor: "#eeeeee",
    borderRadius: "8px",
    fontSize: { xs: "13px", sm: "14px" },
    "& fieldset": { border: "1px solid transparent" },
    "&:hover fieldset": { borderColor: "#00718A" },
    "&.Mui-focused fieldset": { borderColor: "#00718A" },
    "&.Mui-focused": { bgcolor: "white" },
  },
  "& .MuiInputLabel-root": {
    fontSize: { xs: "11px", sm: "12px" },
    color: "grey.500",
    fontWeight: 500,
  },
};

export default function ContactConsultation() {
  const [agreed, setAgreed] = useState(false);

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        bgcolor: "white",
        py: { xs: 6, md: 8, lg: 12 },
        pb: { lg: 2 },
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          maxWidth: "1600px",
          mx: "auto",
          px: { xs: 2, sm: 3 },
          mt: { lg: "-36px" },
        }}
      >
        <Box sx={{ position: "relative", minHeight: { lg: "600px" } }}>
          {/* ── Left Image ── */}
          <Box
            sx={{
              width: "100%",
              height: { xs: "280px", sm: "360px", lg: "520px" },
              borderRadius: { xs: "16px", lg: 0 },
              overflow: "hidden",
            }}
          >
            <Box
              component="img"
              src="/pic5.png"
              alt="Global Travel"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                lg: {
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                },
              }}
            />
          </Box>

          {/* ── Right Form Card ── */}
          <Box
            sx={{
              position: { xs: "relative", lg: "absolute" },
              top: { lg: "40px" },
              left: { lg: "48%", xl: "53%" },
              bgcolor: "white",
              borderRadius: "16px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
              width: "100%",
              maxWidth: "580px",
              mx: { xs: "auto", lg: 0 },
              p: { xs: 3, sm: 4, md: 5, lg: 6 },
              mt: { xs: 3, lg: 0 },
              zIndex: 10,
            }}
          >
            <Typography
              component="h2"
              sx={{
                fontSize: { xs: "22px", sm: "24px", md: "26px", lg: "28px" },
                fontWeight: 600,
                color: "grey.900",
                lineHeight: 1.35,
              }}
            >
              Let's Transform Your <br />
              Global Travel & Mobility Program.
            </Typography>
            <Typography
              sx={{
                mt: 1.5,
                fontSize: { xs: "13px", sm: "14px" },
                color: "grey.600",
              }}
            >
              Share a few details and our specialists will respond within 24
              hours
            </Typography>

            <Box
              component="form"
              sx={{
                mt: { xs: 3, sm: 4 },
                display: "flex",
                flexDirection: "column",
                gap: { xs: 2, sm: 2.5 },
              }}
            >
              {/* Names */}
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="First Name *"
                    placeholder="Enter First Name"
                    sx={inputSx}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Last Name *"
                    placeholder="Enter Last Name"
                    sx={inputSx}
                  />
                </Grid>
              </Grid>

              {/* Email / Company */}
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Business Email *"
                    placeholder="Enter Work Email"
                    sx={inputSx}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Company / Organization *"
                    placeholder="Enter Company Name"
                    sx={inputSx}
                  />
                </Grid>
              </Grid>

              {/* Phone / Country */}
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Phone (Intl friendly)"
                    placeholder="Enter Phone Number"
                    sx={inputSx}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    select
                    label="Country / Region *"
                    defaultValue=""
                    sx={inputSx}
                  >
                    <MenuItem value="" disabled>
                      Select Option
                    </MenuItem>
                    {[
                      "USA",
                      "India",
                      "Europe",
                      "Canada",
                      "France",
                      "Other",
                    ].map((opt) => (
                      <MenuItem key={opt} value={opt}>
                        {opt}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>

              {/* Inquiry Type */}
              <TextField
                fullWidth
                select
                label="Inquiry Type *"
                defaultValue=""
                sx={inputSx}
              >
                <MenuItem value="" disabled>
                  Select Option
                </MenuItem>
                {[
                  "Corporate Travel",
                  "Remote Workforce",
                  "Bulk Deployment",
                  "Security Review",
                  "Integration",
                  "Other",
                ].map((opt) => (
                  <MenuItem key={opt} value={opt}>
                    {opt}
                  </MenuItem>
                ))}
              </TextField>

              {/* Message */}
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Message"
                placeholder="Enter your message..."
                sx={inputSx}
              />

              {/* Checkbox */}
              <FormControlLabel
                control={
                  <Checkbox
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    size="small"
                    sx={{
                      color: "#00718A",
                      "&.Mui-checked": { color: "#00718A" },
                      mt: "-2px",
                    }}
                  />
                }
                label={
                  <Typography
                    sx={{
                      fontSize: { xs: "12px", sm: "13px" },
                      color: "grey.600",
                    }}
                  >
                    I agree to be contacted by Zoiko Orbit regarding partner
                    opportunities.
                  </Typography>
                }
                sx={{ alignItems: "flex-start" }}
              />

              {/* Submit */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 1,
                  bgcolor: "#00718A",
                  color: "white",
                  py: { xs: 1.5, sm: 1.75 },
                  borderRadius: "8px",
                  fontSize: { xs: "14px", sm: "15px" },
                  fontWeight: 600,
                  textTransform: "none",
                  "&:hover": { bgcolor: "#43b9ce" },
                  "&:active": { transform: "scale(0.98)" },
                }}
              >
                Submit & Schedule a Consultation
              </Button>
            </Box>
          </Box>
        </Box>

        {/* ── World Map (desktop only) ── */}
        <Box
          sx={{
            mt: { xs: 0, lg: 8 },
            mb: 5,
            opacity: { xs: 0, lg: 0.6 },
            display: { xs: "none", lg: "block" },
          }}
        >
          <Box
            component="img"
            src="/pic6.png"
            alt="map"
            sx={{
              width: "100%",
              maxWidth: { sm: "350px", md: "400px", lg: "420px" },
              ml: { lg: 4, xl: 8 },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
