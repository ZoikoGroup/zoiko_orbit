import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useState } from "react";
import { COLORS } from "../theme";

const testimonials = [
  {
    name: "Sarah Thompson",
    location: "New York, USA",
    rating: 5,
    text: "Seamless connectivity everywhere I've traveled — plus I'm helping save animals. Best travel choice I've made all year.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "James Fielding",
    location: "London, UK",
    rating: 5,
    text: "Zoiko Orbit integrated effortlessly into our agency's portfolio. Clients love that it combines tech with a mission.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Nkechi Okafor",
    location: "Nigeria",
    rating: 5,
    text: "From Lagos to Dubai, my eSIM worked instantly. Proud to support a brand that helps animal shelters.",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Priya Nair",
    location: "Mumbai, India",
    rating: 5,
    text: "Kept me connected across four continents. Knowing every MB helps wildlife makes it twice as rewarding.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "David Romero",
    location: "Madrid, Spain",
    rating: 5,
    text: "Retailers are thrilled to carry Zoiko Orbit — superior tech, global reach, and a wildlife cause that truly sells.",
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    name: "Aiko Tanaka",
    location: "Tokyo, Japan",
    rating: 5,
    text: "Fast setup, great coverage across Asia, and I love that my plan supports wildlife conservation. Highly recommend.",
    avatar: "https://randomuser.me/api/portraits/women/90.jpg",
  },
];

const CARDS_PER_PAGE = 3;

// Shared nav button style
const navBtnSx = {
  borderColor: "divider",
  color: "text.primary",
  "&:hover": { borderColor: "primary.main", color: "primary.main" },
  "&.Mui-disabled": { opacity: 0.35 },
};

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(testimonials.length / CARDS_PER_PAGE);
  const visible = testimonials.slice(
    page * CARDS_PER_PAGE,
    page * CARDS_PER_PAGE + CARDS_PER_PAGE,
  );

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        bgcolor: "#eef1f7",
        position: "relative",
        overflow: "hidden",
        // decorative arcs — visual only
        "&::before": {
          content: '""',
          position: "absolute",
          width: 600,
          height: 600,
          borderRadius: "50%",
          border: "1px solid rgba(14,124,134,0.1)",
          top: -200,
          left: -200,
          pointerEvents: "none",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          border: "1px solid rgba(14,124,134,0.08)",
          bottom: -150,
          right: -150,
          pointerEvents: "none",
        },
      }}
    >
      <Container sx={{ position: "relative", zIndex: 1 }}>
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
          <Box>
            {/* theme handles h5 fontWeight, body2 lineHeight */}
            <Typography variant="h5" gutterBottom>
              Our Customer Feedback
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Don't take our word for it. Trust our customers
            </Typography>
          </Box>
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

        {/* Cards — theme handles Card borderRadius, transition, hover shadow */}
        <Grid container spacing={3}>
          {visible.map(({ name, location, rating, text, avatar }) => (
            <Grid key={name} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  border: "1px solid",
                  borderColor: "divider",
                  "&:hover": { boxShadow: 4 },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      mb: 1.5,
                    }}
                  >
                    <Box
                      component="img"
                      src={avatar}
                      alt={name}
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        objectFit: "cover",
                        border: "2px solid",
                        borderColor: "divider",
                      }}
                    />
                    <Box sx={{ display: "flex", gap: 0.25 }}>
                      {[...Array(rating)].map((_, i) => (
                        <StarIcon
                          key={i}
                          sx={{ fontSize: 18, color: "secondary.main" }}
                        />
                      ))}
                    </Box>
                  </Box>
                  {/* theme handles subtitle2 fontWeight */}
                  <Typography variant="subtitle2" sx={{ mb: 1.5 }}>
                    {name} — {location}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    "{text}"
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Dot indicators */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mt: 4 }}>
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
      </Container>
    </Box>
  );
}
