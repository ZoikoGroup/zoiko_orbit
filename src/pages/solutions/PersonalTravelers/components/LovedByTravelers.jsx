import { Box, Typography, Paper } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export default function LovedByTravelers() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        bgcolor: "#F7FBFE",
        py: { xs: 6, md: 8, lg: 11 },
        px: 2,
        overflow: "hidden",
      }}
    >
      <Box sx={{ maxWidth: "1400px", mx: "auto" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            gap: { xs: 6, lg: 8 },
            alignItems: "center",
            px: { lg: 20 },
          }}
        >
          {/* ===== RIGHT CARD (top on mobile) ===== */}
          <Box
            sx={{
              order: { xs: 1, lg: 2 },
              position: "relative",
              display: "flex",
              justifyContent: { xs: "center", lg: "flex-end" },
              width: "100%",
            }}
          >
            {/* Main Review Card */}
            <Paper
              elevation={6}
              sx={{
                borderRadius: "16px",
                width: { xs: 320, sm: 340 },
                overflow: "hidden",
                position: "relative",
                zIndex: 10,
              }}
            >
              <Box
                component="img"
                src="/lo1.jpg"
                alt="Traveler review"
                sx={{ width: "100%", height: "190px", objectFit: "cover" }}
              />
              <Box sx={{ p: 2.5 }}>
                <Typography
                  sx={{
                    fontWeight: 600,
                    color: "grey.900",
                    fontSize: "15px",
                    lineHeight: 1.4,
                  }}
                >
                  Loved how simple activation was. <br /> No SIM swaps!
                </Typography>
                <Typography sx={{ mt: 1, fontSize: "13px", color: "grey.500" }}>
                  20 July 2025 | Erick Peters
                </Typography>

                {/* Actions */}
                <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                  {[
                    <FavoriteIcon fontSize="small" />,
                    <ChatBubbleOutlineIcon fontSize="small" />,
                    <OpenInNewIcon fontSize="small" />,
                  ].map((icon, i) => (
                    <Box
                      key={i}
                      sx={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        bgcolor: "grey.100",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "grey.400",
                        cursor: "pointer",
                      }}
                    >
                      {icon}
                    </Box>
                  ))}
                </Box>

                <Typography sx={{ mt: 2, fontSize: "13px", color: "grey.500" }}>
                  122 people viewed
                </Typography>
              </Box>
            </Paper>

            {/* Floating Trustpilot Badge */}
            <Paper
              elevation={4}
              sx={{
                position: "absolute",
                zIndex: 10,
                bottom: 24,
                right: 0,
                transform: "translateX(60px) rotate(5deg)",
                borderRadius: "12px",
                px: 2,
                py: 1.5,
                border: "1px solid #e0e0e0",
                minWidth: "160px",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  color: "grey.800",
                  fontSize: "14px",
                  mb: 0.5,
                }}
              >
                Excellent
              </Typography>
              <Typography sx={{ color: "success.main", fontSize: "14px" }}>
                ★★★★★ Trustpilot
              </Typography>
              <Typography sx={{ color: "grey.400", fontSize: "11px" }}>
                Based on 4,556 reviews
              </Typography>
            </Paper>
          </Box>

          {/* ===== LEFT CONTENT ===== */}
          <Box sx={{ order: { xs: 2, lg: 1 }, maxWidth: "520px" }}>
            <Typography
              component="h2"
              sx={{
                fontSize: { xs: "32px", sm: "36px", md: "40px" },
                fontWeight: 600,
                color: "grey.900",
                lineHeight: 1.2,
              }}
            >
              Loved by <br /> Travelers Everywhere.
            </Typography>
            <Typography
              sx={{
                mt: 2.5,
                fontSize: "15px",
                color: "grey.600",
                lineHeight: 1.8,
              }}
            >
              Zoiko Orbit™ has earned the trust of global travelers who value
              simplicity, speed, and reliability. Real experiences, real
              journeys—here's a glimpse of what they love most.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
