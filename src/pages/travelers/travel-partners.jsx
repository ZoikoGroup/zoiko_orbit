"use client";

import {
  Box,
  Typography,
  Button,
  Grid,
  TextField,
  Checkbox,
  FormControlLabel,
  Divider,
  Link,
  Stack,
  Container,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import TwitterIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

/* ── Brand color ── */
const teal = "#00718A";
const darkTeal = "#005e72";
const lightTeal = "#e6f4f6";

/* ══════════════════════════════════════════════════
   MAIN PAGE
══════════════════════════════════════════════════ */
export default function TravelPartnersPage() {
  return (
    <Box sx={{ fontFamily: "inherit", bgcolor: "white" }}>
      <HeroSection />
      <WhyPartnerSection />
      <IntegrateSection />
      <HowToInstallSection />
      <PartnerFormSection />
  
    </Box>
  );
}

/* ══════════════════════════════════════════════════
   1. HERO
══════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: { xs: 320, md: 400 },
        bgcolor: "#1a2e35",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Background image overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center right",
          opacity: 0.35,
        }}
      />

      {/* Content */}
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, py: 8 }}>
        <Box sx={{ maxWidth: 520 }}>
          <Typography
            variant="h3"
            fontWeight={800}
            color="white"
            sx={{ lineHeight: 1.2, mb: 1.5, fontSize: { xs: "1.8rem", md: "2.5rem" } }}
          >
            Grow Your Business with Premier Global eSIM Solutions.
          </Typography>
          <Typography variant="body1" color="rgba(255,255,255,0.75)" mb={3}>
            Offer cutting-edge connectivity — and earn.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: teal,
              "&:hover": { bgcolor: darkTeal },
              textTransform: "none",
              fontWeight: 700,
              px: 4,
              py: 1.5,
              borderRadius: 2,
              fontSize: 15,
            }}
          >
            Become a Partner
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

/* ══════════════════════════════════════════════════
   2. WHY PARTNER
══════════════════════════════════════════════════ */
const WHY_ITEMS = [
  {
    emoji: "💰",
    title: "Attractive Commissions",
    desc: "Earn competitive commissions on every sale sold through your network.",
  },
  {
    emoji: "📶",
    title: "Tier-1 Coverage",
    desc: "Provide customers with high-speed, reliable data across 220+ countries.",
  },
  {
    emoji: "📱",
    title: "White-Label Options",
    desc: "Offer eSIMs under your brand with customisable storefronts.",
  },
  {
    emoji: "🎧",
    title: "Dedicated Support",
    desc: "Access to partner success managers and 24/7 technical support.",
  },
];

function WhyPartnerSection() {
  return (
    <Box sx={{ py: { xs: 6, md: 9 }, bgcolor: "white" }}>
      <Container maxWidth="lg">
        <Box textAlign="center" mb={6}>
          <Typography variant="h4" fontWeight={800} color="text.primary" mb={1}>
            Why Partner with Zoiko Orbit™
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Why travelers trust Zoiko Orbit for a hassle-free experience.
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {WHY_ITEMS.map((item) => (
            <Grid key={item.title} size={{ xs: 12, sm: 6, md: 3 }}>
              <Box textAlign="center" px={1}>
                <Box
                  sx={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    bgcolor: lightTeal,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    mb: 2,
                    fontSize: 28,
                  }}
                >
                  {item.emoji}
                </Box>
                <Typography variant="subtitle2" fontWeight={700} color="text.primary" mb={0.75}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" lineHeight={1.6}>
                  {item.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

/* ══════════════════════════════════════════════════
   3. INTEGRATE AND SELL EFFORTLESSLY
══════════════════════════════════════════════════ */
const INTEGRATE_FEATURES = [
  "Easy plan customisation.",
  "Commission dashboard.",
  "Marketing-ready assets.",
];

function IntegrateSection() {
  return (
    <Box sx={{ bgcolor: "#f6f9fc", py: { xs: 6, md: 9 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Image */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                borderRadius: 4,
                overflow: "hidden",
                boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
              }}
            >
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=700&q=80"
                alt="Person working on laptop"
                sx={{ width: "100%", display: "block", objectFit: "cover", height: 380 }}
              />
            </Box>
          </Grid>

          {/* Text */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h4"
              fontWeight={800}
              color="text.primary"
              mb={2}
              sx={{ lineHeight: 1.25 }}
            >
              Integrate and Sell Effortlessly.
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={3} lineHeight={1.7}>
              Set up a ready-to-use storefront with your logo and brand colors.
            </Typography>

            <Typography
              variant="subtitle2"
              fontWeight={700}
              color={teal}
              mb={1.5}
              sx={{ letterSpacing: 0.5 }}
            >
              API Plug &amp; Play
            </Typography>

            <Box component="ul" sx={{ m: 0, pl: 0, listStyle: "none" }}>
              {INTEGRATE_FEATURES.map((f) => (
                <Box
                  key={f}
                  component="li"
                  sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1 }}
                >
                  <CheckIcon sx={{ fontSize: 16, color: teal }} />
                  <Typography variant="body2" color="text.secondary">
                    {f}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

/* ══════════════════════════════════════════════════
   4. HOW TO INSTALL
══════════════════════════════════════════════════ */
const STEPS = [
  {
    num: "1",
    title: "Pick Destination & Data",
    desc: "Choose from Global, Regional, or Sub-Regional plans tailored for your travel zone.",
    img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=300&q=80",
  },
  {
    num: "2",
    title: "Activate in Minutes",
    desc: "Secure checkout — receive QR code scan or enter details to install.",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&q=80",
  },
  {
    num: "3",
    title: "Roam Globally",
    desc: "Connect to Tier-1 networks in 220+ countries instantly.",
    img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=300&q=80",
  },
];

function HowToInstallSection() {
  return (
    <Box sx={{ py: { xs: 6, md: 9 }, bgcolor: "white" }}>
      <Container maxWidth="lg">
        <Box textAlign="center" mb={7}>
          <Typography variant="h4" fontWeight={800} color="text.primary" mb={1}>
            How to Install and Activate / Start eSIM
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Unlock new revenue and delight travelers with ready-to-activate global data.
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {STEPS.map((step) => (
            <Grid key={step.num} size={{ xs: 12, sm: 4 }}>
              <Box textAlign="center">
                {/* Phone mockup */}
                <Box
                  sx={{
                    position: "relative",
                    width: 130,
                    mx: "auto",
                    mb: 2.5,
                  }}
                >
                  {/* Step number bubble */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: -10,
                      left: -10,
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      bgcolor: teal,
                      color: "white",
                      fontWeight: 800,
                      fontSize: 14,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 1,
                      boxShadow: "0 2px 8px rgba(0,113,138,0.4)",
                    }}
                  >
                    {step.num}
                  </Box>

                  {/* Phone frame */}
                  <Box
                    sx={{
                      borderRadius: 4,
                      overflow: "hidden",
                      border: "3px solid",
                      borderColor: teal,
                      boxShadow: "0 8px 24px rgba(0,113,138,0.2)",
                    }}
                  >
                    <Box
                      component="img"
                      src={step.img}
                      alt={step.title}
                      sx={{ width: "100%", height: 180, objectFit: "cover", display: "block" }}
                    />
                  </Box>
                </Box>

                <Typography variant="subtitle2" fontWeight={700} color="text.primary" mb={0.75}>
                  {step.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" lineHeight={1.6}>
                  {step.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

/* ══════════════════════════════════════════════════
   5. PARTNER FORM
══════════════════════════════════════════════════ */
function PartnerFormSection() {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: { xs: "auto", md: 520 },
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Background image */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      />
      <Box sx={{ position: "absolute", inset: 0, bgcolor: "rgba(0,0,0,0.45)", zIndex: 1 }} />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2, py: { xs: 6, md: 0 } }}>
        <Grid container justifyContent={{ xs: "center", md: "flex-end" }}>
          <Grid size={{ xs: 12, md: 7, lg: 6 }}>
            <Box
              sx={{
                bgcolor: "white",
                borderRadius: 4,
                p: { xs: 3, md: 4 },
                boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
              }}
            >
              <Typography variant="h5" fontWeight={800} color="text.primary" mb={0.5}>
                Start Your Partnership Journey.
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={3}>
                Fill in your details — our team will reach out within 48 hours.
              </Typography>

              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField fullWidth size="small" label="Company*" variant="outlined" />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField fullWidth size="small" label="Company Legal & Dba Name*" variant="outlined" />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField fullWidth size="small" label="Business Name*" variant="outlined" />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField fullWidth size="small" label="State*" variant="outlined" />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField fullWidth size="small" label="Address or City*" variant="outlined" />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField fullWidth size="small" label="Type of Partnership*" variant="outlined" />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    size="small"
                    label="Tell us more about your business..."
                    multiline
                    rows={3}
                    variant="outlined"
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        size="small"
                        sx={{ color: teal, "&.Mui-checked": { color: teal } }}
                      />
                    }
                    label={
                      <Typography variant="caption" color="text.secondary">
                        I agree to be contacted by Zoiko Orbit regarding partner opportunities.
                      </Typography>
                    }
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <Button
                    fullWidth
                    variant="contained"
                    size="large"
                    sx={{
                      bgcolor: teal,
                      "&:hover": { bgcolor: darkTeal },
                      textTransform: "none",
                      fontWeight: 700,
                      borderRadius: 2,
                      py: 1.5,
                    }}
                  >
                    Submit &amp; Schedule Consultation
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

/* ══════════════════════════════════════════════════
   6. FOOTER
══════════════════════════════════════════════════ */
const FOOTER_COLS = [
  {
    heading: "Explore",
    links: ["Coverage", "Plans", "Ecosystem", "About Us"],
  },
  {
    heading: "Support & Help",
    links: ["Support Center", "FAQs", "Accessibility Options"],
  },
  {
    heading: "Legal & Privacy",
    links: ["Privacy Policy", "Terms of Service", "Cookie Preferences"],
  },
  {
    heading: "For Business",
    links: ["Partner With Us", "Travel Agencies & OTAs", "Corporate Travel Solutions", "API Integrations"],
  },
];

function FooterSection() {
  return (
    <Box sx={{ bgcolor: teal, color: "white" }}>
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {/* Brand col */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Box
              sx={{
                bgcolor: "white",
                borderRadius: 2,
                px: 1.5,
                py: 1,
                display: "inline-flex",
                mb: 2,
              }}
            >
              <Typography fontWeight={900} color={teal} fontSize={18} letterSpacing={-0.5}>
                ZOiKO
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.7 }}>
              Zoiko Orbit™ delivers seamless global eSIM connectivity for travelers and businesses,
              empowering them to stay connected anywhere — while supporting animal welfare with every plan.
            </Typography>
          </Grid>

          {/* Link cols */}
          {FOOTER_COLS.map((col) => (
            <Grid key={col.heading} size={{ xs: 6, sm: 3, md: 2 }}>
              <Typography
                variant="subtitle2"
                fontWeight={700}
                color="white"
                mb={1.5}
                fontSize={13}
              >
                {col.heading}
              </Typography>
              {col.links.map((l) => (
                <Link
                  key={l}
                  href="#"
                  underline="hover"
                  sx={{
                    display: "block",
                    color: "rgba(255,255,255,0.75)",
                    fontSize: 13,
                    mb: 0.75,
                    "&:hover": { color: "white" },
                  }}
                >
                  {l}
                </Link>
              ))}
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.2)", my: 4 }} />

        {/* Bottom row */}
        <Grid container spacing={3} alignItems="flex-start">
          {/* Corporate */}
          <Grid size={{ xs: 12, sm: 4 }}>
            <Typography variant="subtitle2" fontWeight={700} color="white" mb={1} fontSize={13}>
              Corporate &amp; Responsibility
            </Typography>
            {["Corporate Responsibility", "Investor Relations", "Press & Media"].map((l) => (
              <Link
                key={l}
                href="#"
                underline="hover"
                sx={{ display: "block", color: "rgba(255,255,255,0.75)", fontSize: 13, mb: 0.75 }}
              >
                {l}
              </Link>
            ))}
          </Grid>

          {/* Contact */}
          <Grid size={{ xs: 12, sm: 4 }}>
            <Typography variant="subtitle2" fontWeight={700} color="white" mb={1} fontSize={13}>
              Contact us
            </Typography>
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.8, fontSize: 13 }}>
              24/7 global support via chat, WhatsApp, and email.
              <br />
              +1 800-486-5574
              <br />
              info@Zoikoorbit.com
            </Typography>
          </Grid>

          {/* Social */}
          <Grid size={{ xs: 12, sm: 4 }}>
            <Typography variant="subtitle2" fontWeight={700} color="white" mb={1.5} fontSize={13}>
              Connect with us
            </Typography>
            <Stack direction="row" spacing={1}>
              {[TwitterIcon, LinkedInIcon, InstagramIcon, FacebookIcon].map((Icon, i) => (
                <Box
                  key={i}
                  component="a"
                  href="#"
                  sx={{
                    width: 34,
                    height: 34,
                    borderRadius: "50%",
                    bgcolor: "rgba(255,255,255,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    transition: "bgcolor 0.2s",
                    "&:hover": { bgcolor: "rgba(255,255,255,0.3)" },
                  }}
                >
                  <Icon sx={{ fontSize: 16 }} />
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.2)", my: 3 }} />

        <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.6)", fontSize: 11 }}>
          © 2025 Zoiko Orbit™. Zoiko Orbit is a subsidiary of Zoiko Communications Group Inc., headquartered at 1401 21st Street, Ste R, Sacramento, CA 95811. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
}