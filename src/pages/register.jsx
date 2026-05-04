import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Alert,
  CircularProgress,
} from "@mui/material";

const API_URL = "https://api.zoikoorbit.com/api";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // ✅ Basic validation
    if (!form.username || !form.email || !form.password) {
      setError("All fields are required");
      return;
    }

    if (form.password !== form.password2) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/accounts/register/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Frontend-Origin": window.location.origin, // ✅ same as Next.js
        },
        body: JSON.stringify({
          username: form.username.trim(),
          email: form.email.trim(),
          password: form.password,
          password2: form.password2,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        const msg =
          typeof data === "object"
            ? Object.values(data).flat().join(" | ")
            : data.message;

        throw new Error(msg || "Registration failed");
      }

      setSuccess(data.message || "Account created successfully!");

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (err) {
      setError(err.message || "Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f4f6f8",
      }}
    >
      <Container maxWidth="xs">
        <Box
          component="form"
          onSubmit={handleRegister}
          sx={{ p: 4, bgcolor: "#fff", borderRadius: 2 }}
        >
          <Typography variant="h5" fontWeight={700}>
            Create Account
          </Typography>

          {error && <Alert severity="error">{error}</Alert>}
          {success && <Alert severity="success">{success}</Alert>}

          <TextField
            name="username"
            label="Username"
            fullWidth
            sx={{ mt: 2 }}
            onChange={handleChange}
          />

          <TextField
            name="email"
            label="Email"
            fullWidth
            sx={{ mt: 2 }}
            onChange={handleChange}
          />

          <TextField
            name="password"
            label="Password"
            type="password"
            fullWidth
            sx={{ mt: 2 }}
            onChange={handleChange}
          />

          <TextField
            name="password2"
            label="Confirm Password"
            type="password"
            fullWidth
            sx={{ mt: 2 }}
            onChange={handleChange}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3 }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={20} /> : "Register"}
          </Button>

          <Typography sx={{ mt: 2 }}>
            Already have an account?{" "}
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}