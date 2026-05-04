import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Divider,
} from "@mui/material";

const plans = [
  { title: "Orbit Explore", data: "2 GB", price: "$19", days: "30 Days" },
  { title: "Orbit Group", data: "5 GB", price: "$35", days: "30 Days" },
  { title: "Orbit Wild", data: "10 GB", price: "$52", days: "30 Days" },
  { title: "Orbit Roam", data: "20 GB", price: "$84", days: "30 Days" },
];

export default function SouthAmericaEsim() {
  return (
    <Box sx={{ px: { xs: 2, md: 8 }, py: 6 }}>
      
      {/* TITLE */}
      <Typography variant="h4" fontWeight={700} mb={1}>
        eSIMs for South America
      </Typography>

      <Typography color="text.secondary" mb={3}>
        Explore South America with flexible eSIM data plans. Stay connected
        wherever your journey takes you.
      </Typography>

      <Divider sx={{ mb: 4 }} />

      {/* MAIN GRID */}
      <Grid container spacing={4}>
        
        {/* LEFT IMAGE */}
        <Grid item xs={12} md={5}>
          <img
            src="/images/south-america.jpg"
            alt="south america"
            style={{
              width: "100%",
              borderRadius: "12px",
              objectFit: "cover",
            }}
          />
        </Grid>

        {/* RIGHT SIDE */}
        <Grid item xs={12} md={7}>
          
          {/* COUNTRIES */}
          <Typography fontWeight={600} mb={1}>
            List of countries:
          </Typography>

          <Typography variant="body2" color="text.secondary" mb={3}>
            Argentina, Bolivia, Brazil, Chile, Colombia, Ecuador, Guyana,
            Paraguay, Peru, Suriname, Uruguay, Venezuela
          </Typography>

          {/* PLANS */}
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
                    p: 2,
                    boxShadow: 2,
                  }}
                >
                  <CardContent>
                    <Typography variant="body2">
                      {plan.title}
                    </Typography>

                    <Typography variant="h5" fontWeight={700} mt={1}>
                      {plan.data}
                    </Typography>

                    <Typography color="text.secondary" mb={2}>
                      {plan.price} / {plan.days}
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

                    <Typography
                      variant="caption"
                      display="block"
                      mt={1}
                      color="text.secondary"
                    >
                      Plan details
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* STEPS */}
      <Box mt={8}>
        <Typography variant="h5" fontWeight={600} mb={4}>
          How to Install and Activate / Start eSIM
        </Typography>

        <Grid container spacing={4}>
          {[
            {
              title: "Choose the eSIM plan that suits you best",
              desc: "Choose your destination region and select the plan that fits your needs",
            },
            {
              title: "Add the eSIM card to your phone",
              desc: "Install the eSIM on your device by following the instructions",
            },
            {
              title: "Enjoy your plan",
              desc: "Use your eSIM right away and top it up whenever needed",
            },
          ].map((step, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Box textAlign="center">
                <Box
                  sx={{
                    height: 140,
                    background: "#e5e7eb",
                    borderRadius: "10px",
                    mb: 2,
                  }}
                />
                <Typography fontWeight={600}>{step.title}</Typography>
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
        <Typography variant="h5" fontWeight={600} mb={3}>
          Frequently Asked Questions about eSIM for South America
        </Typography>

        {[
          "Can I keep my current number?",
          "Can I use my SIM card and eSIM at the same time?",
          "Can I renew or extend my eSIM plan?",
          "What is an eSIM card?",
        ].map((q, i) => (
          <Box
            key={i}
            sx={{
              py: 2,
              borderBottom: "1px solid #ddd",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography>{q}</Typography>
            <Typography>{">"}</Typography>
          </Box>
        ))}
      </Box>

      {/* BANNER */}
      <Box mt={8} position="relative">
        <img
          src="/images/esim-banner.jpg"
          alt="banner"
          style={{
            width: "100%",
            height: "300px",
            objectFit: "cover",
            borderRadius: "12px",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            right: 20,
            bottom: 20,
            background: "#0f766e",
            color: "white",
            p: 3,
            borderRadius: "10px",
            maxWidth: "350px",
          }}
        >
          <Typography fontWeight={600}>
            Join Us in Redefining Travel
          </Typography>
          <Typography variant="body2" mt={1}>
            Whether you're planning your next adventure or managing a travel
            business, Zoiko Orbit keeps you connected globally.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}