import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
} from "@mui/material";

export default function MyAccount() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  if (!user) {
    return <Typography sx={{ p: 4 }}>Loading...</Typography>;
  }

  return (
    <Box sx={{ minHeight: "100vh", background: "#f5f7fb", py: 5 }}>
      <Container maxWidth="sm">
        <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h5" fontWeight={700} gutterBottom>
              My Account
            </Typography>

            <Typography><b>Username:</b> {user.username}</Typography>
            <Typography><b>Email:</b> {user.email}</Typography>
            <Typography><b>First Name:</b> {user.first_name}</Typography>
            <Typography><b>Last Name:</b> {user.last_name}</Typography>

            <Button
              variant="contained"
              color="error"
              fullWidth
              sx={{ mt: 3 }}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}