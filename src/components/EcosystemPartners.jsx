import { Box, Container, Typography, Grid, Button } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useState } from "react";
import { COLORS } from "../theme";

const partners = [
  {
    title: "Retailers & Dealers",
    link: "Become an Authorised Dealer",
    href: "/partners/airlines", //Todo: Need to add page
    bullets: [
      "High-margin products, Custom POS kits",
      "Staff training & marketing toolkits",
      "Become an Authorised Dealer",
    ],
    image:
      "https://zoikoorbit.com/wp-content/uploads/2025/07/Rectangle-862.webp",
  },
  {
    title: "Travel Agencies & OTAs",
    link: "Integrate Zoiko Orbit ",
    href: "/partners/airlines", //Todo: Need to add page
    bullets: ["API & white-label integrations", "Add eSIM to every booking"],
    image:
      "https://zoikoorbit.com/wp-content/uploads/2025/07/Rectangle-876.webp",
  },
  {
    title: "Travel Insurance Providers",
    link: "Offer Seamless Coverage",
    href: "/partners/airlines", //Todo: Need to add page
    bullets: [
      "Bundle eSIM into travel insurance",
      "Global activation dashboard",
    ],
    image:
      "https://zoikoorbit.com/wp-content/uploads/2025/07/Rectangle-883.webp",
  },
  {
    title: "Airlines & Loyalty Programs",
    link: "Explore Airline Partnerships",
    href: "/partners/airlines", //Todo: Need to add page
    bullets: ["Upsell eSIM at booking & check-in", "Reward tie-ins"],
    image:
      "https://zoikoorbit.com/wp-content/uploads/2025/07/Rectangle-882.webp",
  },
];

const CARDS_PER_PAGE = 3;

// Shared nav button style — border/color only, theme handles textTransform+fontWeight
const navBtnSx = {
  borderColor: "divider",
  color: "text.primary",
  "&:hover": { borderColor: "primary.main", color: "primary.main" },
  "&.Mui-disabled": { opacity: 0.35 },
};

export default function EcosystemPartners() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(partners.length / CARDS_PER_PAGE);
  const visible = partners.slice(
    page * CARDS_PER_PAGE,
    page * CARDS_PER_PAGE + CARDS_PER_PAGE,
  );

  return (
    <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: "background.paper" }}>
      <Container>
        {/* Header row */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: 4,
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          {/* theme handles h4 fontWeight */}
          <Typography variant="h4">Ecosystem Partners</Typography>
          <Box sx={{ display: "flex", gap: 1, alignSelf: "center" }}>
            <Button
              variant="outlined"
              size="small"
              startIcon={<NavigateBeforeIcon />}
              onClick={() => setPage((p) => Math.max(p - 1, 0))}
              disabled={page === 0}
              sx={navBtnSx}
            >
              Previous
            </Button>
            <Button
              variant="outlined"
              size="small"
              endIcon={<NavigateNextIcon />}
              onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
              disabled={page === totalPages - 1}
              sx={navBtnSx}
            >
              Next
            </Button>
          </Box>
        </Box>

        {/* Photo cards — transition handled by theme Card override */}
        <Grid container spacing={3}>
          {visible.map(({ title, bullets, image, href, link }) => (
            <Grid key={title} size={{ xs: 12, sm: 6, md: 4 }}>
              <Box
                sx={{
                  borderRadius: 4,
                  overflow: "hidden",
                  position: "relative",
                  height: { xs: 340, md: 470 },
                  cursor: "pointer",
                  transition: "transform 0.25s ease",
                  "&:hover": { transform: "translateY(-4px)" },
                  backgroundImage: `url('${image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to bottom, rgba(0,80,100,0.45) 0%, rgba(0,50,70,0.88) 100%)",
                  },
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                  }}
                >
                  {/* theme handles h6 fontWeight */}
                  <Typography
                    variant="h6"
                    color="common.white"
                    sx={{ mb: 1.5 }}
                  >
                    {title}
                  </Typography>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 0.75 }}
                  >
                    {bullets.map((b) => (
                      <Box
                        key={b}
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 1.5,
                        }}
                      >
                        <FiberManualRecordIcon
                          sx={{
                            fontSize: 8,
                            color: "common.white",
                            mt: 1,
                            flexShrink: 0,
                          }}
                        />
                        <Typography
                          variant="h6"
                          fontWeight={400}
                          sx={{ color: "rgba(255,255,255,0.9)" }}
                        >
                          {b}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                  <Typography
                    component="a"
                    href={href}
                    variant="body2"
                    sx={{
                      mt: 3,
                      color: "common.white",
                      fontWeight: 600,
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 0.5,
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    {link} →
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Dot indicators */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mt: 3 }}>
          {Array.from({ length: totalPages }).map((_, i) => (
            <Box
              key={i}
              onClick={() => setPage(i)}
              sx={{
                width: i === page ? 24 : 8,
                height: 8,
                borderRadius: 4,
                bgcolor: i === page ? "primary.main" : `${COLORS.teal}40`,
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </Box>

        {/* CTA — theme handles textTransform, fontWeight, borderRadius, hover */}
        {/* <Box textAlign="center" mt={4}>
          <Button variant="contained" size="large" sx={{ px: 5 }}>
            Become a Partner
          </Button>
        </Box> */}
      </Container>
    </Box>
  );
}
