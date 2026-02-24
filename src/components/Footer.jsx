import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  Divider,
  IconButton,
} from "@mui/material";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

// ── colour tokens ──────────────────────────────────────────────
const TEAL = "#0e7c86";
const TEXT_MAIN = "rgba(255,255,255,0.92)";
const TEXT_MUTED = "rgba(255,255,255,0.65)";
const TEXT_DIM = "rgba(255,255,255,0.4)";
const DIVIDER = "rgba(255,255,255,0.15)";

// ── nav data ──────────────────────────────────────────────────
const topLinks = {
  Explore: ["Coverage", "Plans", "Ecosystem", "About Us"],
  "Support & Help": ["Support Center", "FAQs", "Accessibility Options"],
  "Legal & Privacy": [
    "Privacy Policy",
    "Terms Of Service",
    "Cookie Preferences",
  ],
  "For Business": [
    "Partner With Us",
    "Travel Agencies & OTAs",
    "Corporate Travel Solutions",
    "API Integrations",
  ],
};

const bottomLinks = {
  "Corporate & Responsibility": [
    "Corporate Responsibility",
    "Investor Relations",
    "Press & Media",
  ],
};

const socialIcons = [
  { Icon: XIcon, label: "X / Twitter" },
  { Icon: LinkedInIcon, label: "LinkedIn" },
  { Icon: InstagramIcon, label: "Instagram" },
  { Icon: FacebookIcon, label: "Facebook" },
];

// ── shared link style ─────────────────────────────────────────
const linkSx = {
  color: TEXT_MUTED,
  typography: "body2",
  display: "block",
  mb: 0.75,
  transition: "color 0.2s",
  "&:hover": { color: "common.white" },
};

// ── column heading ─────────────────────────────────────────────
function ColHeading({ children }) {
  return (
    <Typography
      variant="subtitle1"
      fontWeight="bold"
      sx={{ color: TEXT_MAIN, mb: 2 }}
    >
      {children}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box sx={{ bgcolor: TEAL }}>
      {/* ── TOP ROW: logo + four link columns ─────────────────── */}
      <Container sx={{ pt: 7, pb: 5 }}>
        <Grid container spacing={4}>
          {/* Brand / description */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Box
              component="img"
              src="/mainlogo.webp"
              alt="Zoiko Orbit"
              sx={{
                height: 72,
                mb: 2.5,
                p: 1.5,
                bgcolor: "common.white",
                borderRadius: 2,
              }}
            />
            <Typography
              variant="body2"
              sx={{ color: TEXT_MUTED, lineHeight: 1.8 }}
            >
              Zoiko Orbit™ delivers seamless global eSIM connectivity for
              travelers and businesses, empowering them to stay connected
              anywhere — while supporting animal welfare with every plan
            </Typography>
          </Grid>

          {/* Four link columns */}
          {Object.entries(topLinks).map(([section, links]) => (
            <Grid
              key={section}
              size={{ xs: 6, sm: 3, md: "auto" }}
              sx={{ flex: { md: 1 } }}
            >
              <ColHeading>{section}</ColHeading>
              {links.map((link) => (
                <Link key={link} href="#" underline="none" sx={linkSx}>
                  {link}
                </Link>
              ))}
            </Grid>
          ))}
        </Grid>
      </Container>

      <Divider sx={{ borderColor: DIVIDER }} />

      {/* ── BOTTOM ROW: corp links | contact | social + world map ─ */}
      <Container sx={{ py: 5 }}>
        <Grid container spacing={4} alignItems="flex-start">
          {/* Corporate & Responsibility */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <ColHeading>Corporate &amp; Responsibility</ColHeading>
            {bottomLinks["Corporate & Responsibility"].map((link) => (
              <Link key={link} href="#" underline="none" sx={linkSx}>
                {link}
              </Link>
            ))}
          </Grid>

          {/* Contact Us */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <ColHeading>Contact Us</ColHeading>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              <Box sx={{ display: "flex", gap: 1, alignItems: "flex-start" }}>
                <LocationOnIcon
                  sx={{
                    color: TEXT_MUTED,
                    fontSize: 18,
                    mt: 0.2,
                    flexShrink: 0,
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{ color: TEXT_MUTED, lineHeight: 1.6 }}
                >
                  1401 21st Street, Suite R, Sacramento, CA 95811
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <PhoneIcon
                  sx={{ color: TEXT_MUTED, fontSize: 18, flexShrink: 0 }}
                />
                <Link href="tel:+18004845574" underline="none" sx={linkSx}>
                  +1 800-484-5574
                </Link>
              </Box>
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <EmailIcon
                  sx={{ color: TEXT_MUTED, fontSize: 18, flexShrink: 0 }}
                />
                <Link
                  href="mailto:info@zoikoorbit.com"
                  underline="none"
                  sx={linkSx}
                >
                  info@zoikoorbit.com
                </Link>
              </Box>
            </Box>
          </Grid>

          {/* Connect with us */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <ColHeading>Connect with us</ColHeading>
            <Box sx={{ display: "flex", gap: 1.5 }}>
              {socialIcons.map(({ Icon, label }) => (
                <IconButton
                  key={label}
                  aria-label={label}
                  size="small"
                  sx={{
                    color: TEXT_MAIN,
                    border: "1px solid",
                    borderColor: DIVIDER,
                    borderRadius: "50%",
                    p: 1,
                    transition: "all 0.2s",
                    "&:hover": {
                      bgcolor: "rgba(255,255,255,0.15)",
                      borderColor: TEXT_MAIN,
                    },
                  }}
                >
                  <Icon fontSize="small" />
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* World map decoration */}
          <Grid
            size={{ xs: 12, sm: 6, md: 3 }}
            sx={{
              display: "flex",
              justifyContent: { xs: "flex-start", md: "flex-end" },
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: { xs: 160, md: 200 },
                height: { xs: 100, md: 130 },
                opacity: 0.35,
                backgroundImage:
                  "url('https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/1200px-World_map_-_low_resolution.svg.png')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                filter: "invert(1)",
              }}
            />
          </Grid>
        </Grid>
      </Container>

      <Divider sx={{ borderColor: DIVIDER }} />

      {/* ── Copyright bar ─────────────────────────────────────── */}
      <Container>
        <Box sx={{ py: 2.5, textAlign: "center" }}>
          <Typography
            variant="caption"
            sx={{ color: TEXT_DIM, lineHeight: 1.6 }}
          >
            © {new Date().getFullYear()} Zoiko Orbit | Zoiko Orbit is a
            subsidiary of Zoiko Communications Group Inc | Headquartered at 1401
            21st Street, Suite R, Sacramento, CA 95811 | All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
