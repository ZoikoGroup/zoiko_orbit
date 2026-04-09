import { Box, Typography, Paper } from "@mui/material";

const items = [
  {
    img: "/choose1.png",
    title: "Tier-1 Global Coverage",
    desc: "Stay connected in 220+ countries.",
  },
  {
    img: "/choose2.png",
    title: "Transparent Rates",
    desc: "No hidden fees, no surprises.",
  },
  {
    img: "/choose3.png",
    title: "Supports Animal Welfare",
    desc: "A share of every plan goes to global causes.",
  },
  {
    img: "/choose4.png",
    title: "24/7 Support",
    desc: "Multilingual assistance whenever you need it.",
  },
];

export default function WhyChooseZoikoOrbit() {
  return (
    <Box component="section" sx={{ bgcolor: "#EAF4FB", py: 10 }}>
      <Box sx={{ maxWidth: "1600px", mx: "auto", px: { xs: 3, lg: 8 } }}>
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 7 }}>
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: "32px", md: "40px" },
              fontWeight: 600,
              color: "grey.900",
            }}
          >
            Why Choose Zoiko Orbit
          </Typography>
          <Typography sx={{ mt: 1.5, fontSize: "16px", color: "grey.600" }}>
            Why thousands of travelers trust us every day
          </Typography>
        </Box>

        {/* White Card */}
        <Paper elevation={1} sx={{ borderRadius: "16px", px: 4, py: 7 }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                md: "repeat(4, 1fr)",
              },
            }}
          >
            {items.map((item, index) => (
              <Box
                key={index}
                sx={{
                  textAlign: "center",
                  px: 3,
                  borderRight: {
                    xs: "none",
                    sm: index % 2 === 0 ? "1px solid #e0e0e0" : "none",
                    md: index < items.length - 1 ? "1px solid #e0e0e0" : "none",
                  },
                  borderBottom: {
                    xs: index < items.length - 1 ? "1px solid #e0e0e0" : "none",
                    sm: index < 2 ? "1px solid #e0e0e0" : "none",
                    md: "none",
                  },
                  pb: { xs: index < items.length - 1 ? 4 : 0, md: 0 },
                  pt: { xs: index > 0 ? 4 : 0, md: 0 },
                }}
              >
                <Box
                  component="img"
                  src={item.img}
                  alt={item.title}
                  sx={{ width: 72, height: 72, mx: "auto", mb: 3 }}
                />
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "grey.900",
                    mb: 1,
                  }}
                >
                  {item.title}
                </Typography>
                <Typography sx={{ fontSize: "15px", color: "grey.600" }}>
                  {item.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
