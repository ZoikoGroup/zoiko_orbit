import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Alert,
  Divider,
  CircularProgress,
} from "@mui/material";

const API_URL = "https://api.zoikoorbit.com/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      return setError("Email and password are required.");
    }

    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/accounts/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        // ✅ Save token & user
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        navigate("/myaccount"); // dashboard
      } else {
        setError(data.message || data.detail || "Login failed");
      }
    } catch (err) {
      setError("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundImage:
          "url('https://zoikoorbit.com/wp-content/uploads/2025/07/Rectangle-4-scaled.webp')",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background: "rgba(10,40,80,0.55)",
        },
      }}
    >
      <Container maxWidth="xs" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          component="form"
          onSubmit={handleLogin}
          sx={{
            backgroundColor: "#fff",
            borderRadius: "12px",
            p: 4,
          }}
        >
          <Typography variant="h5" fontWeight={700}>
            Login
          </Typography>

          {error && <Alert severity="error">{error}</Alert>}

          <TextField
            label="Email"
            fullWidth
            sx={{ mt: 2 }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            sx={{ mt: 2 }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3 }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={20} /> : "Login"}
          </Button>

          <Divider sx={{ my: 2 }}>or</Divider>

          <Button
            fullWidth
            variant="outlined"
            onClick={() => navigate("/register")}
          >
            Create Account
          </Button>
        </Box>
      </Container>
    </Box>
  );
}