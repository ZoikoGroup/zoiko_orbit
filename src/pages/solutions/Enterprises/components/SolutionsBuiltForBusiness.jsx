import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

const cards = [
  {
    src: "/so1.png",
    alt: "Corporate Travel Data",
    title: "Corporate Travel Data",
    body: "Pre‑trip provisioning tied to bookings; regional or global data pools; expense integration.",
  },
  {
    src: "/so2.png",
    alt: "Remote Worker Data",
    title: "Remote & Hybrid Team Data",
    body: "Always‑on data for distributed teams; monthly top‑ups; device‑agnostic eSIM delivery.",
  },
  {
    src: "/so3.png",
    alt: "Bespoke Global Programs",
    title: "Bespoke Global Programs",
    body: "Custom coverage bundles for project deployments, maritime/energy crews, events, or high‑security missions",
  },
];

export default function SolutionsBuiltForBusiness() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        bgcolor: "common.white",
        py: 10,
        overflow: "hidden",
      }}
    >
      {/* Grid background */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.4,
        }}
      >
        {/* <Box
          component="img"
          src="/grid.png"
          alt="Grid background"
          sx={{ width: "100%", height: "100%", objectFit: "cover" }}
        /> */}
      </Box>

      <Container
        maxWidth={false}
        sx={{ position: "relative", maxWidth: "1600px", px: { xs: 3, lg: 8 } }}
      >
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: 600,
              color: "grey.900",
            }}
          >
            Connectivity Built Around <br></br>
            How Your Organization Operates
          </Typography>
          <Typography
            sx={{
              mt: 1.5,
              fontSize: "1rem",
              color: "grey.600",
              maxWidth: 700,
              mx: "auto",
            }}
          >
            Scale from a few travelers to global workforce coverage—mix & match
            programs
          </Typography>
        </Box>

        {/* Cards */}
        <Grid container spacing={6}>
          {cards.map(({ src, alt, title, body }) => (
            <Grid key={title} size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  "& .card-img": { transition: "transform 0.3s ease" },
                  "&:hover .card-img": { transform: "scale(1.05)" },
                }}
              >
                <Box sx={{ borderRadius: 3, overflow: "hidden", boxShadow: 1 }}>
                  <Box
                    component="img"
                    src={src}
                    alt={alt}
                    className="card-img"
                    sx={{
                      width: "100%",
                      height: 220,
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </Box>
                <Typography
                  variant="h6"
                  sx={{ mt: 2.5, fontWeight: 600, color: "grey.900" }}
                >
                  {title}
                </Typography>
                <Typography
                  sx={{
                    mt: 1,
                    fontSize: "0.9375rem",
                    color: "grey.600",
                    lineHeight: 1.7,
                  }}
                >
                  {body}
                </Typography>
                <Link
                  href="#"
                  underline="hover"
                  sx={{
                    display: "inline-block",
                    mt: 1.5,
                    fontSize: "0.9375rem",
                    fontWeight: 500,
                    color: "#00718A",
                  }}
                >
                  Learn More →
                </Link>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
