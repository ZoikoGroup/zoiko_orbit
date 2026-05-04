import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Divider,
  Avatar,
  Rating,
  IconButton,
} from "@mui/material";

const plans = [
  { title: "Orbit Explore", data: "2 GB", price: "$19", days: "30 Days", badge: null },
  { title: "Orbit Group", data: "5 GB", price: "$35", days: "30 Days", badge: "Best Seller" },
  { title: "Orbit Wild", data: "10 GB", price: "$52", days: "30 Days", badge: null },
  { title: "Orbit Roam", data: "20 GB", price: "$84", days: "30 Days", badge: null },
];

const steps = [
  {
    text: "Choose the eSIM plan that suits you best",
    desc: "Choose your destination region and select the plan that best fits your needs",
  },
  {
    text: "Add the eSIM card to your phone",
    desc: "Install the eSIM on your device by following the provided instructions.",
  },
  {
    text: "Enjoy your plan",
    desc: "Use your eSIM right away and top it up whenever you want.",
  },
];

const faqs = [
  "Can I keep my current number?",
  "Can I use my SIM card and eSIM at the same time?",
  "Can I renew or extend my eSIM plan?",
  "What is an eSIM card?",
];

const reviews = [
  {
    name: "Sarah Thompson",
    location: "New York, USA",
    rating: 5,
    text: "Seamless connectivity everywhere I've traveled – plus I'm helping save animals. Best travel choice I've made all year.",
    avatar: "",
  },
  {
    name: "James Fielding",
    location: "London, UK",
    rating: 5,
    text: "Zoiko Orbit integrated effortlessly into our agency's portfolio. Clients love that it combines tech with a mission.",
    avatar: "",
  },
  {
    name: "Nkechi Okafor",
    location: "Lagos, Nigeria",
    rating: 4,
    text: "From Lagos to Dubai, my eSIM worked instantly. Proud to support a brand that helps animal shelters.",
    avatar: "",
  },
];

export default function EsimPlansSection() {
  return (
    <Box>
      <Box sx={{ px: { xs: 2, md: 8 }, py: 6 }}>
        {/* TOP TITLE */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1 }}>
          <img
            src="/us-flag.png"
            alt="flag"
            style={{ width: 36, height: 24, objectFit: "cover", borderRadius: 2 }}
          />
          <Typography variant="h4" fontWeight={700}>
            eSIMs for Central America &amp; Caribbean
          </Typography>
        </Box>

        <Typography color="text.secondary" mb={3}>
          Explore Central America &amp; Caribbean with flexibility using our eSIM data plans.
          Whether you're visiting for a short stay or an extended trip, our plans keep you
          connected without the hassle
        </Typography>

        <Divider sx={{ mb: 4 }} />

        {/* MAIN GRID */}
        <Grid container spacing={4}>
          {/* LEFT IMAGE */}
          <Grid item xs={12} md={5}>
            <img
              src="/test.png"
              alt="Central America & Caribbean map"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "12px",
                objectFit: "cover",
              }}
            />
          </Grid>

          {/* RIGHT CONTENT */}
          <Grid item xs={12} md={7}>
            {/* COUNTRY LIST */}
            <Typography fontWeight={600} mb={1}>
              List of countries:
            </Typography>

            <Typography variant="body2" color="text.secondary" mb={3}>
              Belize, Costa Rica, El Salvador, Guatemala, Honduras, Nicaragua, Panama
              <br />
              Antigua &amp; Barbuda, Aruba, Bahamas, Barbados, Bermuda, Bonaire, Cayman Islands, Cuba,
              Curaçao, Dominica, Dominican Republic, Grenada, Guadeloupe, Haiti, Jamaica,
              Martinique, Montserrat, Puerto Rico, Saba, Saint Barthélemy, Saint Eustatius, Saint Kitts &amp;
              Nevis, Saint Lucia, Saint Martin (FR/NL), Saint Vincent &amp; Grenadines, Sint Maarten, Trinidad
              &amp; Tobago, Turks &amp; Caicos, US Virgin Islands
            </Typography>

            {/* PLANS GRID */}
            <Typography fontWeight={600} mb={2}>
              Shop Sustainable Plans
            </Typography>

            <Grid container spacing={2}>
              {plans.map((plan, i) => (
                <Grid item xs={12} sm={6} key={i}>
                  <Card
                    sx={{
                      borderRadius: "12px",
                      textAlign: "center",
                      boxShadow: 2,
                      position: "relative",
                      overflow: "visible",
                    }}
                  >
                    {plan.badge && (
                      <Box
                        sx={{
                          position: "absolute",
                          top: 12,
                          right: -6,
                          backgroundColor: "#0f766e",
                          color: "white",
                          fontSize: "11px",
                          fontWeight: 700,
                          px: 1.2,
                          py: 0.4,
                          borderRadius: "4px",
                          zIndex: 1,
                        }}
                      >
                        {plan.badge}
                      </Box>
                    )}
                    <CardContent sx={{ pb: 1.5 }}>
                      <Typography variant="body2" color="text.secondary">
                        {plan.title}
                      </Typography>

                      <Typography variant="h5" fontWeight={700} mt={1}>
                        {plan.data}
                      </Typography>

                      <Typography color="text.secondary" mb={2}>
                        {plan.price}/{plan.days}
                      </Typography>

                      <Button
                        variant="contained"
                        fullWidth
                        sx={{
                          backgroundColor: "#0f766e",
                          textTransform: "none",
                          borderRadius: "8px",
                          "&:hover": { backgroundColor: "#115e59" },
                        }}
                      >
                        Buy Plan
                      </Button>

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          mt: 1.5,
                        }}
                      >
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          sx={{ cursor: "pointer", textDecoration: "underline" }}
                        >
                          Plan details
                        </Typography>
                        <Box
                          sx={{
                            width: 18,
                            height: 18,
                            borderRadius: "50%",
                            backgroundColor: "#0f766e",
                            color: "white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "11px",
                            fontWeight: 700,
                            cursor: "pointer",
                          }}
                        >
                          i
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        {/* STEPS SECTION */}
        <Box mt={8}>
          <Typography variant="h5" fontWeight={600} mb={4}>
            How to Install and Activate / Start eSIM
          </Typography>

          <Grid container spacing={4}>
            {steps.map((step, i) => (
              <Grid item xs={12} md={4} key={i}>
                <Box textAlign="center">
                  <Box
                    sx={{
                      height: 160,
                      background: "#e5e7eb",
                      borderRadius: "10px",
                      mb: 2,
                    }}
                  />
                  <Typography fontWeight={600} mb={0.5}>
                    {step.text}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {step.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* FAQ */}
        <Box mt={8}>
          <Typography variant="h5" fontWeight={600} mb={1} textAlign="center">
            Frequently Asked Questions about eSIM for America &amp; Caribbean
          </Typography>

          <Box mt={3}>
            {faqs.map((q, i) => (
              <Box
                key={i}
                sx={{
                  py: 2,
                  borderBottom: "1px solid #ddd",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                  "&:hover": { backgroundColor: "#f9fafb" },
                  px: 1,
                }}
              >
                <Typography>{q}</Typography>
                <Typography color="text.secondary">{"›"}</Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* BANNER */}
        <Box mt={8} position="relative" borderRadius="12px" overflow="hidden">
          <img
            src="/Group 1597883194.png"
            alt="banner"
            style={{
              width: "100%",
              height: "300px",
              objectFit: "cover",
              display: "block",
            }}
          />

          <Box
            sx={{
              position: "absolute",
              right: 24,
              bottom: 24,
              background: "#0f766e",
              color: "white",
              p: 3,
              borderRadius: "10px",
              maxWidth: "370px",
            }}
          >
            <Typography variant="h6" fontWeight={700} mb={1}>
              Join Us in Redefining Travel
            </Typography>
            <Typography variant="body2" mb={1.5} sx={{ opacity: 0.9 }}>
              Whether you're planning your next international adventure, managing a retail chain
              seeking premium travel products, or operating a travel agency or insurance platform
              eager to integrate instant global connectivity – Zoiko Orbit is here to help you
              succeed.
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.85 }}>
              Together, we can build a world where you're always connected, and where every trip
              leaves a legacy of care, compassion, and a better tomorrow.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* CUSTOMER FEEDBACK */}
      <Box sx={{ px: { xs: 2, md: 8 }, py: 6, backgroundColor: "#f9fafb" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: 1,
          }}
        >
          <Box>
            <Typography variant="h5" fontWeight={700}>
              Our Customer Feedback
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Don't take our word for it. Trust our customers
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Button
              variant="outlined"
              size="small"
              sx={{ textTransform: "none", borderColor: "#ccc", color: "text.primary" }}
            >
              ‹ Previous
            </Button>
            <Button
              variant="outlined"
              size="small"
              sx={{ textTransform: "none", borderColor: "#ccc", color: "text.primary" }}
            >
              Next ›
            </Button>
          </Box>
        </Box>

        <Grid container spacing={3} mt={2}>
          {reviews.map((r, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Card sx={{ p: 2, borderRadius: "12px", boxShadow: 1, height: "100%" }}>
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
                    <Avatar sx={{ bgcolor: "#0f766e", width: 40, height: 40 }}>
                      {r.name[0]}
                    </Avatar>
                    <Box>
                      <Typography fontWeight={600} variant="body2">
                        {r.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        — {r.location}
                      </Typography>
                    </Box>
                    <Box sx={{ ml: "auto" }}>
                      <Rating value={r.rating} readOnly size="small" />
                    </Box>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {r.text}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Dots */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mt: 3 }}>
          {[0, 1, 2].map((d) => (
            <Box
              key={d}
              sx={{
                width: d === 1 ? 20 : 8,
                height: 8,
                borderRadius: "4px",
                backgroundColor: d === 1 ? "#0f766e" : "#ccc",
              }}
            />
          ))}
        </Box>
      </Box>

      {/* FOOTER */}
      <Box sx={{ backgroundColor: "#0f2027", color: "white", px: { xs: 2, md: 8 }, py: 6 }}>
        <Grid container spacing={4} mb={4}>
          {/* Brand */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" fontWeight={700} mb={1}>
              ZoiKO ORBIT
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.7, lineHeight: 1.7 }}>
              Zoiko Orbit™ delivers seamless global eSIM connectivity for travelers and businesses,
              empowering them to stay connected anywhere – while supporting animal welfare with
              every plan.
            </Typography>
          </Grid>

          {/* Explore */}
          <Grid item xs={6} md={2}>
            <Typography fontWeight={700} mb={1.5}>
              Explore
            </Typography>
            {["Coverage", "Plans", "Ecosystem", "About Us"].map((l) => (
              <Typography key={l} variant="body2" sx={{ opacity: 0.7, mb: 0.75, cursor: "pointer" }}>
                {l}
              </Typography>
            ))}
          </Grid>

          {/* Support */}
          <Grid item xs={6} md={2}>
            <Typography fontWeight={700} mb={1.5}>
              Support &amp; Help
            </Typography>
            {["Support Center", "FAQs", "Accessibility Options"].map((l) => (
              <Typography key={l} variant="body2" sx={{ opacity: 0.7, mb: 0.75, cursor: "pointer" }}>
                {l}
              </Typography>
            ))}
          </Grid>

          {/* Legal */}
          <Grid item xs={6} md={2}>
            <Typography fontWeight={700} mb={1.5}>
              Legal &amp; Privacy
            </Typography>
            {["Privacy Policy", "Terms of Service", "Cookie Preferences"].map((l) => (
              <Typography key={l} variant="body2" sx={{ opacity: 0.7, mb: 0.75, cursor: "pointer" }}>
                {l}
              </Typography>
            ))}
          </Grid>

          {/* For Business */}
          <Grid item xs={6} md={3}>
            <Typography fontWeight={700} mb={1.5}>
              For Business
            </Typography>
            {[
              "Partner With Us",
              "Travel Agencies & OTAs",
              "Corporate Travel Solutions",
              "API Integrations",
            ].map((l) => (
              <Typography key={l} variant="body2" sx={{ opacity: 0.7, mb: 0.75, cursor: "pointer" }}>
                {l}
              </Typography>
            ))}
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.15)", mb: 4 }} />

        <Grid container spacing={4}>
          {/* Corporate */}
          <Grid item xs={12} md={3}>
            <Typography fontWeight={700} mb={1.5}>
              Corporate &amp; Responsibility
            </Typography>
            {["Corporate Responsibility", "Investor Relations", "Press & Media"].map((l) => (
              <Typography key={l} variant="body2" sx={{ opacity: 0.7, mb: 0.75, cursor: "pointer" }}>
                {l}
              </Typography>
            ))}
          </Grid>

          {/* Contact */}
          <Grid item xs={12} md={3}>
            <Typography fontWeight={700} mb={1.5}>
              Contact us
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.7, mb: 0.5 }}>
              24/7 global support via chat, WhatsApp, and email.
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.7, mb: 0.5 }}>
              +1 800-484-5574
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              Info@Zoikaobit.com
            </Typography>
          </Grid>

          {/* Social */}
          <Grid item xs={12} md={3}>
            <Typography fontWeight={700} mb={1.5}>
              Connect with us
            </Typography>
            <Box sx={{ display: "flex", gap: 1.5 }}>
              {["𝕏", "in", "📷", "f"].map((icon, i) => (
                <Box
                  key={i}
                  sx={{
                    width: 34,
                    height: 34,
                    borderRadius: "50%",
                    border: "1px solid rgba(255,255,255,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "14px",
                    cursor: "pointer",
                    "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
                  }}
                >
                  {icon}
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}