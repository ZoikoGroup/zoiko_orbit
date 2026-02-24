import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  Divider,
  Menu,
  MenuItem,
  Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { Link } from "react-router-dom";

const TEAL = "#0e7c86";

const navLinks = [
  { label: "Home", path: "/", dropdown: null },
  { label: "About Us", path: "/about-us", dropdown: null },
  {
    label: "Solutions",
    path: "/solutions",
    dropdown: [
      { label: "For Personal Travelers", path: "/solutions/personal" },
      { label: "For Enterprises", path: "/solutions/enterprises" },
      { label: "For Ecosystem Partners", path: "/solutions/partners" },
    ],
  },
  { label: "Plans", path: "/plans", dropdown: null },
  {
    label: "Ecosystem Partners",
    path: "/ecosystem",
    dropdown: [
      { label: "Travelers", path: "/ecosystem/travelers" },
      { label: "Businesses & Enterprises", path: "/solutions/enterprises" },
      { label: "Travel Partners & Agencies", path: "/ecosystem/agencies" },
      { label: "Our Impact", path: "/ecosystem/impact" },
    ],
  },
  { label: "Support", path: "/support", dropdown: null },
];

const navBtnSx = {
  fontWeight: 400,
  fontSize: "0.95rem",
  px: 1.5,
  "&:hover": { backgroundColor: "rgba(255,255,255,0.15)" },
};

const mobileItemSx = {
  px: 3,
  py: 1.2,
  "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
};

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEls, setAnchorEls] = useState({});
  const [mobileOpen, setMobileOpen] = useState({});

  const openMenu = (e, label) =>
    setAnchorEls((p) => ({ ...p, [label]: e.currentTarget }));

  const closeMenu = (label) => setAnchorEls((p) => ({ ...p, [label]: null }));

  const toggleSub = (label) =>
    setMobileOpen((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));

  return (
    <>
      <AppBar
        position="sticky"
        elevation={2}
        sx={{ bgcolor: TEAL, zIndex: theme.zIndex.drawer + 1 }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            px: { xs: 2, md: 4 },
            minHeight: 70,
          }}
        >
          {/* Logo */}
          <Box
            component={Link}
            to="/"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <img
              src="/mainlogo.webp"
              alt="Zoiko Orbit"
              style={{ height: 44 }}
            />
          </Box>

          {/* Desktop Navigation */}
          {!isMobile && (
            <>
              <Box sx={{ display: "flex", gap: 0.5, alignItems: "center" }}>
                {navLinks.map(({ label, path, dropdown }) =>
                  dropdown ? (
                    <Box key={label}>
                      <Button
                        color="inherit"
                        endIcon={<KeyboardArrowDownIcon />}
                        onClick={(e) => openMenu(e, label)}
                        sx={navBtnSx}
                      >
                        {label}
                      </Button>

                      <Menu
                        anchorEl={anchorEls[label]}
                        open={Boolean(anchorEls[label])}
                        onClose={() => closeMenu(label)}
                        MenuListProps={{
                          onMouseLeave: () => closeMenu(label),
                        }}
                        PaperProps={{
                          sx: {
                            mt: 0.5,
                            minWidth: 220,
                          },
                        }}
                      >
                        {dropdown.map((item) => (
                          <MenuItem
                            key={item.label}
                            component={Link}
                            to={item.path}
                            onClick={() => closeMenu(label)}
                          >
                            {item.label}
                          </MenuItem>
                        ))}
                      </Menu>
                    </Box>
                  ) : (
                    <Button
                      key={label}
                      component={Link}
                      to={path}
                      color="inherit"
                      sx={navBtnSx}
                    >
                      {label}
                    </Button>
                  ),
                )}
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Button
                  variant="outlined"
                  startIcon={<PersonOutlineIcon />}
                  sx={{
                    color: "white",
                    borderColor: "white",
                    px: 2,
                    "&:hover": {
                      borderColor: "white",
                      bgcolor: "rgba(255,255,255,0.15)",
                    },
                  }}
                >
                  My Orbit
                </Button>

                <Box
                  sx={{
                    cursor: "pointer",
                    color: "white",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                  }}
                >
                  🇺🇸 EN ▲
                </Box>
              </Box>
            </>
          )}

          {/* Mobile Menu Icon */}
          {isMobile && (
            <IconButton color="inherit" onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 270,
            bgcolor: TEAL,
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
          <img src="/mainlogo.webp" alt="Zoiko Orbit" style={{ height: 36 }} />
          <IconButton onClick={() => setDrawerOpen(false)}>
            <CloseIcon sx={{ color: "white" }} />
          </IconButton>
        </Box>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.2)" }} />

        <List>
          {navLinks.map(({ label, path, dropdown }) => (
            <Box key={label}>
              <ListItem disablePadding>
                <ListItemButton
                  component={!dropdown ? Link : "div"}
                  to={!dropdown ? path : undefined}
                  onClick={() =>
                    dropdown ? toggleSub(label) : setDrawerOpen(false)
                  }
                  sx={mobileItemSx}
                >
                  <ListItemText
                    primary={label}
                    primaryTypographyProps={{
                      color: "white",
                      textTransform: "uppercase",
                    }}
                  />
                  {dropdown &&
                    (mobileOpen[label] ? (
                      <ExpandLess sx={{ color: "white" }} />
                    ) : (
                      <ExpandMore sx={{ color: "white" }} />
                    ))}
                </ListItemButton>
              </ListItem>

              {dropdown && (
                <Collapse in={mobileOpen[label]} timeout="auto" unmountOnExit>
                  <List disablePadding>
                    {dropdown.map((item) => (
                      <ListItem key={item.label} disablePadding>
                        <ListItemButton
                          component={Link}
                          to={item.path}
                          onClick={() => setDrawerOpen(false)}
                          sx={{ pl: 5 }}
                        >
                          <ListItemText
                            primary={item.label}
                            primaryTypographyProps={{
                              color: "rgba(255,255,255,0.85)",
                            }}
                          />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              )}
            </Box>
          ))}
        </List>
      </Drawer>
    </>
  );
}
