import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const inquiryOptions = [
  "Corporate Travel",
  "Remote Workforce",
  "Bulk Deployment",
  "Security Review",
  "Integration",
  "Other",
];

const inputSx = {
  "& .MuiOutlinedInput-root": {
    bgcolor: "#eeeeee",
    borderRadius: 2,
    fontSize: "0.875rem",
    "& fieldset": { borderColor: "transparent" },
    "&:hover fieldset": { borderColor: "transparent" },
    "&.Mui-focused fieldset": { borderColor: "#00718A" },
    "&.Mui-focused": { bgcolor: "common.white" },
  },
  "& .MuiInputLabel-root": { fontSize: "0.75rem", color: "grey.500" },
  "& .MuiInputLabel-root.Mui-focused": { color: "#00718A" },
};

export default function ContactSpeak() {
  const [inquiry, setInquiry] = useState("");
  const [agreed, setAgreed] = useState(false);

  return (
    <Box
      component="section"
      sx={{ position: "relative", bgcolor: "common.white", py: 12, pb: 0, overflow: "hidden" }}
    >
      <Container maxWidth={false} sx={{ maxWidth: "1600px", mt: -4.5, mb: 5, px: 0 }}>
        <Box
          sx={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
            gap: 5,
            alignItems: "start",
          }}
        >
          {/* Left Image */}
          <Box sx={{ width: "100%", overflow: "hidden", height: { xs: 260, sm: 360, lg: 520 } }}>
            <Box
              component="img"
              src="/sp1.png"
              alt="Global Travel"
              sx={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>

          {/* Right Form Card */}
          <Box
            sx={{
              position: { xs: "relative", lg: "absolute" },
              mx: { xs: "auto", lg: 0 },
              mt: { xs: 5, lg: 5 },
              right: { lg: 0 },
              bgcolor: "common.white",
              borderRadius: 4,
              boxShadow: 8,
              width: "100%",
              maxWidth: { xs: "100%", lg: 580 },
              p: { xs: 4, md: 5, lg: 6 },
              overflow: "hidden",
              zIndex: 10,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                color: "grey.900",
                fontSize: { xs: "1.5rem", md: "1.625rem" },
                lineHeight: 1.3,
              }}
            >
              Speak to Our Enterprise Team
            </Typography>
            <Typography sx={{ mt: 1.5, fontSize: "0.875rem", color: "grey.600", mb: -0.5 }}>
              Our specialists will respond within 24 hours to discuss tailored solutions for your
              business.
            </Typography>

            <Box
              component="form"
              sx={{ mt: 4, display: "flex", flexDirection: "column", gap: 2.5 }}
            >
              {/* Row 1 */}
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="First Name *"
                    placeholder="Enter First Name"
                    size="small"
                    sx={inputSx}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Company / Organization *"
                    placeholder="Enter Company/Organization Name"
                    size="small"
                    sx={inputSx}
                  />
                </Grid>
              </Grid>

              {/* Row 2 */}
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Business Email *"
                    placeholder="Enter Work Email"
                    size="small"
                    sx={inputSx}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Role *"
                    placeholder="e.g., IT, HR, Admin"
                    size="small"
                    sx={inputSx}
                  />
                </Grid>
              </Grid>

              {/* Row 3 */}
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Website (if any)"
                    placeholder="Enter Website URL"
                    size="small"
                    sx={inputSx}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Phone (Intl friendly)"
                    placeholder="Enter Phone Number"
                    size="small"
                    sx={inputSx}
                  />
                </Grid>
              </Grid>

              {/* Inquiry Select */}
              <FormControl fullWidth size="small" sx={inputSx}>
                <InputLabel>Inquiry Type *</InputLabel>
                <Select
                  value={inquiry}
                  label="Inquiry Type *"
                  onChange={(e) => setInquiry(e.target.value)}
                >
                  {inquiryOptions.map((opt) => (
                    <MenuItem key={opt} value={opt}>
                      {opt}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

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
                    sx={{
                      color: "#00718A",
                      "&.Mui-checked": { color: "#00718A" },
                      mt: "-2px",
                    }}
                    size="small"
                  />
                }
                label={
                  <Typography sx={{ fontSize: "0.8125rem", color: "grey.600" }}>
                    I agree to be contacted by Zoiko Orbit regarding partner opportunities.
                  </Typography>
                }
                sx={{ alignItems: "flex-start" }}
              />

              {/* Submit */}
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  mt: 1.5,
                  bgcolor: "#00718A",
                  "&:hover": { bgcolor: "#43b9ce" },
                  "&:active": { transform: "scale(0.98)" },
                  py: 1.5,
                  borderRadius: 2,
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  textTransform: "none",
                }}
              >
                Submit & Schedule a Consultation
              </Button>
            </Box>
          </Box>
        </Box>

        {/* World Map */}
        <Box sx={{ mt: 8, opacity: 0.6, display: { xs: "none", lg: "block" } }}>
          <Box
            component="img"
            src="/pic6.png"
            alt="map"
            sx={{ width: 420, mx: "auto", ml: { lg: "140px" } }}
          />
        </Box>
      </Container>
    </Box>
  );
}