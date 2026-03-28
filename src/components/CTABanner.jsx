import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  TextField,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";

const inputSx = {
  "& .MuiFilledInput-root": {
    bgcolor: "rgba(255,255,255,0.15)",
    borderRadius: 2,
    color: "common.white",
    "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
    "&::before, &::after": { display: "none" },
  },
  "& input::placeholder, & textarea::placeholder": {
    color: "rgba(255,255,255,0.6)",
  },
};

export default function CTABanner() {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        background: "linear-gradient(135deg, #0e7c86 0%, #0a5c65 100%)",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          width: 400,
          height: 400,
          borderRadius: "50%",
          bgcolor: "rgba(255,255,255,0.05)",
          top: "-100px",
          right: "-100px",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          width: 300,
          height: 300,
          borderRadius: "50%",
          bgcolor: "rgba(255,255,255,0.04)",
          bottom: "-80px",
          left: "-80px",
        },
      }}
    >
      <Container sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="overline"
              sx={{
                color: "rgba(255,255,255,0.7)",
                fontWeight: 700,
                letterSpacing: 3,
              }}
            >
              Get In Touch
            </Typography>
            <Typography
              variant="h4"
              fontWeight="bold"
              color="common.white"
              sx={{ mt: 1, mb: 2, lineHeight: 1.3 }}
            >
              Ready to Stay Connected Everywhere?
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "rgba(255,255,255,0.8)", mb: 4, lineHeight: 1.8 }}
            >
              Speak instantly with a Zoiko Orbit travel specialist. Mon–Sat
              8:30am–8:30pm, Sun 10am–6pm. After hours, Oriko is available 24/7.
            </Typography>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<WhatsAppIcon />}
                sx={{
                  bgcolor: "#25d366",
                  textTransform: "none",
                  fontWeight: 600,
                  borderRadius: 2,
                  px: 3,
                  "&:hover": { bgcolor: "#1ebe58" },
                }}
              >
                Chat on WhatsApp
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<HeadsetMicIcon />}
                sx={{
                  color: "common.white",
                  borderColor: "rgba(255,255,255,0.6)",
                  textTransform: "none",
                  fontWeight: 600,
                  borderRadius: 2,
                  px: 3,
                  "&:hover": {
                    borderColor: "common.white",
                    bgcolor: "rgba(255,255,255,0.1)",
                  },
                }}
              >
                Talk to Oriko
              </Button>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                bgcolor: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: 4,
                p: { xs: 3, md: 4 },
              }}
            >
              <Typography
                variant="h6"
                fontWeight="bold"
                color="common.white"
                sx={{ mb: 3 }}
              >
                Send Us a Message
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <TextField
                  placeholder="Your Name"
                  variant="filled"
                  size="small"
                  sx={inputSx}
                />
                <TextField
                  placeholder="Email Address"
                  variant="filled"
                  size="small"
                  sx={inputSx}
                />
                <TextField
                  placeholder="How can we help?"
                  variant="filled"
                  multiline
                  rows={3}
                  sx={inputSx}
                />
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    bgcolor: "common.white",
                    color: "#0e7c86",
                    fontWeight: 700,
                    textTransform: "none",
                    borderRadius: 2,
                    py: 1.5,
                    "&:hover": { bgcolor: "grey.100" },
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
