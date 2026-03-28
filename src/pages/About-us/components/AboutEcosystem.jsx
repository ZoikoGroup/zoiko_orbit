import { Box, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const checkItems = [
  {
    title: "Retailers & Duty-Free Networks:",
    text: "Premium travel essentials that drive foot traffic and loyalty.",
  },
  {
    title: "Travel Agencies & OTAs:",
    text: "Embedded eSIM solutions alongside flights, hotels, and excursions.",
  },
  {
    title: "Travel Insurance Providers:",
    text: "Bundled policies with instant global mobile service.",
  },
  {
    title: "Airlines & Loyalty Programs:",
    text: "Connectivity at booking or check-in.",
  },
];

const cards = [
  {
    src: "/what1.png",
    alt: "Engineered for Global Trust",
    title: "Engineered for Global Trust",
    text: "Our eSIM platform runs on Tier-1 carrier partnerships across 220+ countries, safeguarded by PCI DSS and GDPR standards.",
  },
  {
    src: "/what2.png",
    alt: "Built to Give Back",
    title: "Built to Give Back",
    text: "Every Zoiko Orbit purchase supports animal rescue centers, wildlife rehabilitation, and conservation programs worldwide.",
  },
  {
    src: "/what3.png",
    alt: "Part of the Zoiko Promise",
    title: "Part of the Zoiko Promise",
    text: "As part of Zoiko Group, we uphold excellence, innovation, and meaningful impact for a better world.",
  },
];

export default function AboutEcosystem() {
  return (
    <Box component="section" sx={{ bgcolor: "white", py: { xs: 10, md: 12 } }}>
      <Box sx={{ maxWidth: "1600px", mx: "auto", px: { xs: 3, lg: 8 } }}>

        {/* POWERING ECOSYSTEM */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
            gap: 10,
            alignItems: "center",
            mb: 16,
          }}
        >
          {/* Image */}
          <Box>
            <Box
              component="img"
              src="/power.png"
              alt="Global travel ecosystem"
              sx={{
                width: "100%",
                maxWidth: "520px",
                height: "460px",
                objectFit: "cover",
                borderRadius: 4,
              }}
            />
          </Box>

          {/* Content */}
          <Box sx={{ maxWidth: "720px" }}>
            <Typography
              variant="h2"
              sx={{ fontSize: { xs: "30px", md: "36px" }, fontWeight: 600, color: "grey.900", lineHeight: 1.3 }}
            >
              Powering a Global
              <br />
              Travel Ecosystem
            </Typography>

            <Typography sx={{ mt: 2, fontSize: "16px", color: "grey.700", lineHeight: 1.8 }}>
              Zoiko Orbit is more than just a travel SIM. We're a critical
              partner to the entire travel industry, seamlessly integrating
              global connectivity into:
            </Typography>

            <Box sx={{ mt: 3, display: "flex", flexDirection: "column", gap: 2 }}>
              {checkItems.map((item, i) => (
                <Box key={i} sx={{ display: "flex", gap: 1.5 }}>
                  <CheckCircleIcon sx={{ color: "success.main", width: 20, height: 20, mt: "2px", flexShrink: 0 }} />
                  <Typography sx={{ fontSize: "16px", color: "grey.700" }}>
                    <strong>{item.title}</strong> {item.text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        {/* WHAT SETS US APART */}
        <Box>
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h2"
              sx={{ fontSize: { xs: "32px", md: "38px" }, fontWeight: 600, color: "grey.900" }}
            >
              What Sets Us Apart
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
              gap: 7,
              textAlign: "center",
            }}
          >
            {cards.map((card, i) => (
              <Box key={i} sx={{ maxWidth: "360px", mx: "auto" }}>
                <Box
                  component="img"
                  src={card.src}
                  alt={card.alt}
                  sx={{ width: 72, height: 72, objectFit: "contain", mb: 3, mx: "auto", display: "block" }}
                />
                <Typography sx={{ fontSize: "18px", fontWeight: 600, color: "grey.900", mb: 1.5 }}>
                  {card.title}
                </Typography>
                <Typography sx={{ fontSize: "15px", color: "grey.600", lineHeight: 1.7 }}>
                  {card.text}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

      </Box>
    </Box>
  );
}