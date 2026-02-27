import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Drawer,
  Box,
  Typography,
  Button,
  Divider,
  List,
  ListItem,
  Link,
  IconButton,
} from "@mui/material";
// Note: Link is used for the phone number href only
import CloseIcon from "@mui/icons-material/Close";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { COLORS } from "../theme";

const GetInTouch = () => {
  const [open, setOpen] = useState(false);

  const helpLinks = [
    {
      label: "Coverage Checker",
      desc: "Check coverage in 200+ destinations.",
      path: "/coverage",
    },
    {
      label: "Returns & Cancellations",
      desc: "30-day return window.",
      path: "/refund-returns",
    },
    {
      label: "Help Center",
      desc: "Setup guides, roaming tips, troubleshooting.",
      path: "/support",
    },
  ];

  return (
    <>
      {/* ── Sticky vertical tab ── */}
      <Box
        onClick={() => setOpen(true)}
        sx={{
          position: "fixed",
          right: 0,
          top: "40%",
          backgroundColor: COLORS.teal,
          color: "#fff",
          fontWeight: 600,
          cursor: "pointer",
          writingMode: "vertical-rl",
          transform: open
            ? "translateX(50px) rotate(180deg)"
            : "rotate(180deg)",
          borderRadius: "0 8px 8px 0",
          zIndex: 99999,
          display: "flex",
          alignItems: "center",
          gap: "6px",
          px: "12px",
          py: "15px",
          opacity: open ? 0 : 1,
          pointerEvents: open ? "none" : "auto",
          transition: "opacity 0.3s ease, transform 0.3s ease",
          userSelect: "none",
          fontSize: "16px",
          letterSpacing: "0.5px",
          "&:hover": {
            backgroundColor: COLORS.tealDark,
          },
        }}
      >
        Get in touch
      </Box>

      {/* ── Drawer ── */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ zIndex: 99999 }}
        ModalProps={{
          keepMounted: true,
          BackdropProps: {
            sx: { backgroundColor: "rgba(0,0,0,0.25)" },
          },
        }}
        PaperProps={{
          sx: {
            width: { xs: "85vw", sm: "400px" },
            borderRadius: "0 !important",
            boxShadow: "-6px 0 24px rgba(14,124,134,0.18)",
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        {/* ── Drawer Header ── */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 3,
            py: 2,
            flexShrink: 0,
          }}
        >
          <Typography variant="h6" sx={{ color: "text.primary" }}>
            Get in Touch
          </Typography>
          <IconButton
            onClick={() => setOpen(false)}
            size="small"
            sx={{
              color: "text.secondary",
              "&:hover": { color: "text.primary" },
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>

        <Divider />

        {/* ── Drawer Body ── */}
        <Box sx={{ px: 3, py: 3, overflowY: "auto", flex: 1 }}>
          {/* Live Chat */}
          <Typography variant="subtitle1" gutterBottom>
            Live Chat (Fastest)
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Speak instantly with a Zoiko Orbit travel specialist.
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            <strong>Hours:</strong> Mon–Sat 8:30am–8:30pm, Sun 10am–6pm.
          </Typography>
          <Typography variant="body2" sx={{ mt: 1, mb: 2.5 }}>
            After hours, <strong>Oriko is available 24/7.</strong>
          </Typography>

          <Button
            variant="contained"
            color="primary"
            component="a"
            href="https://tawk.to/chat/68773b9c3090ca19169f8011/1j08s1ns8"
            sx={{ px: 3, py: 1 }}
          >
            Chat with Oriko
          </Button>

          <Divider sx={{ my: 3 }} />

          {/* Call Us */}
          <Typography variant="subtitle1" gutterBottom>
            Call Us
          </Typography>
          <Link
            href="tel:+18003990087"
            sx={{
              color: COLORS.teal,
              fontWeight: 600,
              fontSize: "15px",
              "&:hover": {
                color: COLORS.tealDark,
                textDecoration: "underline",
              },
            }}
          >
            +1 800-399-0087
          </Link>

          <Divider sx={{ my: 3 }} />

          {/* More Help */}
          <Typography variant="subtitle1" gutterBottom>
            More Help
          </Typography>

          <List disablePadding>
            {helpLinks.map((item, i) => (
              <ListItem
                key={i}
                disablePadding
                sx={{ mb: 1.5, alignItems: "flex-start" }}
              >
                <Box
                  sx={{ display: "flex", gap: 0.8, alignItems: "flex-start" }}
                >
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", flexShrink: 0 }}
                  >
                    •
                  </Typography>
                  <Typography variant="body2" color="black">
                    <RouterLink
                      to={item.path}
                      onClick={() => setOpen(false)}
                      style={{
                        color: COLORS.teal,
                        fontWeight: 600,
                        textDecoration: "none",
                      }}
                      onMouseOver={(e) =>
                        (e.target.style.textDecoration = "underline")
                      }
                      onMouseOut={(e) =>
                        (e.target.style.textDecoration = "none")
                      }
                    >
                      {item.label}
                    </RouterLink>
                    {` – ${item.desc}`}
                  </Typography>
                </Box>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default GetInTouch;
